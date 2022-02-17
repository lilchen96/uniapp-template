const state = {
  token: uni.getStorageSync('Admin-Token') || '',
}

const mutations = {
  SET_TOKEN(state, data) {
    state.token = data
    uni.setStorageSync('Admin-Token', data)
  }
}

const actions = {
  setToken({
    commit
  }, data) {
    commit('SET_TOKEN', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}