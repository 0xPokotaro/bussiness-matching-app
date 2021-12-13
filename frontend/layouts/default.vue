<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon
        v-if="!$device.isMobile"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-bottom-navigation
      v-if="$device.isMobile"
      v-model="bottomNav"
      color="pink"
    >
      <v-btn value="search">
        <span>{{ $t('page.search.title') }}</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn value="like">
        <span>{{ $t('page.like.title') }}</span>
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>

      <v-btn value="chat">
        <span>{{ $t('page.chat.title') }}</span>
        <v-icon>mdi-chat-outline</v-icon>
      </v-btn>

      <v-btn value="mypage">
        <span>{{ $t('page.mypage.title') }}</span>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-footer
      v-if="!$device.isMobile"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'search',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
