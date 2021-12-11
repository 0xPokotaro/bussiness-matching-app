<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-form>
        <v-card-title v-text="'ログイン'" />
          <v-card-text>
            <v-text-field
              v-model="username"
              label="メールアドレス"
            />
            <v-text-field
              v-model="password"
              label="パスワード"
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
export default {
  auth: false,
  layout: 'login',
  data: () => ({
    username: 'heller.ellen@example.net',
    password: 'password'
  }),
  methods: {
    async login() {
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
