export const state = () => ({
  accessToken: null,
  refleshToken: null
});

export const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setRefleshToken(state, refleshToken) {
    state.refleshToken = refleshToken
  }
}

export const actions = {
  setAccessToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
  },
  setRefleshToken({ commit }, refleshToken) {
    commit('setRefleshToken', refleshToken)
  }
}
