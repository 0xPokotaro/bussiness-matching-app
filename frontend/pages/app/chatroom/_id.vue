<template>
  <div>
    <div>
      <div
        v-for="(v, k) in messages"
        :key="k"
      >
        <!-- 自分のメッセージ -->
        <v-row
          v-if="userId  === v.userId"
          class="mb-2"
        >
          <v-col
            cols="10"
            md="11"
            class="pr-0"
          >
            <v-card
              outlined
              color="green accent-3"
            >
              <v-card-text class="pa-2 black--text">
                <p class="mb-0 chat-message" v-text="v.message" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="2"
            md="1"
            class="text-center"
          >
            <v-avatar size="36" color="primary">
              <template v-if="v.avater === null">
                <v-icon dark v-text="'mdi-account-circle'" />
              </template>
              <template v-else>
                <v-img :src="v.avater" />
              </template>
            </v-avatar>
          </v-col>
        </v-row>
        <!-- /自分のメッセージ -->

        <!-- 自分以外のメッセージ -->
        <v-row
          v-else
          class="mb-2"
        >
          <v-col
            cols="2"
            md="1"
            class="text-center"
          >
            <v-avatar size="36" color="primary">
              <template v-if="v.avater === null">
                <v-icon dark v-text="'mdi-account-circle'" />
              </template>
              <template v-else>
                <v-img :src="v.avater" />
              </template>
            </v-avatar>
          </v-col>
          <v-col
            cols="10"
            md="11"
            class="pl-0"
          >
            <p class="mb-0 caption" v-text="v.name" />
            <v-card outlined>
              <v-card-text class="pa-2">
                <p class="mb-0 chat-message" v-text="v.message" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- /自分以外のメッセージ -->
      </div>
    </div>
    <v-footer app>
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="6"
          sm="12"
        >
          <v-textarea
            v-model="message"
            rows="4"
            class="mt-3"
            outlined
          />
          <v-btn
            block
            outlined
            @click="sendMessage"
          >
            送信
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  layout: 'chatroom',
  data: () => ({
    value: 'recent',
    userId: 1,
    message: '',
    messages: [
      {
        id: 1,
        userId: 1,
        name: '自分',
        message: '初めまして、こんにちわ！',
        avater: null
      },
      {
        id: 1,
        userId: 2,
        name: '水谷 謹二',
        message: 'こちらこそ！\nよろしくお願いします！',
        avater: 'https://cdn.vuetifyjs.com/images/john.jpg'
      },
      {
        id: 1,
        userId: 2,
        name: '神田 裕香',
        message: 'よろしくお願いします！',
        avater: 'https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_1280.jpg'
      },
      {
        id: 1,
        userId: 3,
        name: '石塚 正保',
        message: 'よろしくお願いします！',
        avater: 'https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg'
      },
      {
        id: 1,
        userId: 1,
        name: '自分',
        message: '明日のスケジュールは、いかがでしょうか？',
        avater: null
      },
      {
        id: 1,
        userId: 2,
        name: '水谷 謹二',
        message: '明日は以下の日時が空いています。\n・10:00 - 11:00\n・18:00以降',
        avater: 'https://cdn.vuetifyjs.com/images/john.jpg'
      },
      {
        id: 1,
        userId: 1,
        name: '自分',
        message: '承知しました！',
        avater: null
      },
      {
        id: 1,
        userId: 1,
        name: '自分',
        message: '明日は19:00から開始でお願いいたします！\nZoomのURLは後ほど共有いたします！',
        avater: null
      },
      {
        id: 1,
        userId: 2,
        name: '水谷 謹二',
        message: '承知しました！',
        avater: 'https://cdn.vuetifyjs.com/images/john.jpg'
      },
      {
        id: 1,
        userId: 2,
        name: '神田 裕香',
        message: 'よろしくお願いします！',
        avater: 'https://cdn.pixabay.com/photo/2017/03/30/18/17/girl-2189247_1280.jpg'
      },
      {
        id: 1,
        userId: 3,
        name: '石塚 正保',
        message: 'よろしくお願いします！',
        avater: 'https://cdn.pixabay.com/photo/2016/11/29/03/52/man-1867175_1280.jpg'
      },
    ]
  }),
  mounted() {
    this.$vuetify.goTo(9999)
  },
  methods: {
    sendMessage() {
      this.messages.push({
        id: 1,
        userId: 1,
        name: '自分',
        message: this.message,
        avater: null
      })
      this.message = ''

      this.$vuetify.goTo(9999)
    } 
  }
}
</script>

<style scoped>
.caht-message-area {
  height: 500px;
  overflow: auto;
}

.chat-message {
  white-space: pre ;
}
</style>
