export const state = () => ({
  screen: {
    innerWidth: 0,
    innerHeight: 0
  }
})

export const getters = {
  isMobile: (state) => {
    return state.screen.innerWidth < 768
  },
  isTablet: (state) => {
    return state.screen.innerWidth >= 768 && state.screen.innerWidth < 1200
  },
  isDesktop: (state) => {
    return state.screen.innerWidth >= 1200
  },
  hasScreenDone: (state) => {
    return state.screen.innerWidth > 0
  }
}

export const mutations = {
  SET_SCREEN: (state, payload) => {
    state.screen = payload
  }
}

export const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
