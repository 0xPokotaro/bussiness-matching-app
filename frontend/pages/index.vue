<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-form>
        <v-card-title v-text="'ログイン'" />
          <v-card-text>
            <v-text-field
              v-model="username"
              :error-messages="usernameErrors"
              label="メールアドレス"
              @input="$v.username.$touch()"
              @blur="$v.username.$touch()"
            />
            <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="パスワード"
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
              ログイン
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  auth: false,
  mixins: [validationMixin],
  layout: 'login',
  data: () => ({
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
      !this.$v.username.email && errors.push('Must be valid e-mail')
      !this.$v.username.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('E-mail is required')
      return errors
    },
  },
  methods: {
    async login() {
      if (!this.$v.$touch()) {
        return
      }

      const params = new URLSearchParams()
      params.append('grant_type', 'password')
      params.append('client_id', this.$config.CLIENT_ID)
      params.append('client_secret', this.$config.CLIENT_SECRET)
      params.append('username', this.username)
      params.append('password', this.password)

      const uri = `${this.$config.API_URL}/oauth/token`
      const data = await this.$axios.post(uri, params)
        .catch((error) => { return error.response })

      console.log(data)
    }
  }
}
</script>
