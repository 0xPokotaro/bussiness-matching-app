<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-form>
          <v-card-title v-text="$t('page.login.title')" />
            <v-card-text>
              <v-text-field
                v-model="username"
                :error-messages="usernameErrors"
                :label="$t('form.label.username')"
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
              />
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :label="$t('form.label.password')"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                outlined
                @click="login"
              >
                {{ $t('button.login') }}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      timeout="2500"
      absolute
      outlined
    >
      {{ $t('error.001-01') }}
      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  // auth: false,
  mixins: [validationMixin],
  layout: 'login',
  middleware: false,
  data: () => ({
    snackbar: false,
    username: 'heller.ellen@example.net',
    password: 'password',
  }),
  validations: {
    username: { required, email },
    password: { required },
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.email && errors.push(this.$t('validation.username.email'))
      !this.$v.username.required && errors.push(this.$t('validation.username.required'))
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push(this.$t('validation.password.required'))
      return errors
    },
  },
  mounted() {
    if (this.$store.state.accessToken !== null) {
      this.$router.push('/app')
    }
  },
  methods: {
    async login() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }

        const params = new URLSearchParams()
        params.append('grant_type', 'password')
        params.append('client_id', this.$config.CLIENT_ID)
        params.append('client_secret', this.$config.CLIENT_SECRET)
        params.append('username', this.username)
        params.append('password', this.password)

        const uri = `${this.$config.API_URL}/oauth/token`
        const res = await this.$axios.post(uri, params)
          .catch((error) => { return error.response })

        if (res.status === 200) {
          this.$store.dispatch('setAccessToken', res.data.access_token)
          this.$store.dispatch('setRefleshToken', res.data.refresh_token)
          this.$router.push('/app')
        } else {
          throw new Error('ログイン失敗')
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
        this.snackbar = true
      }
    }
  }
}
</script>
