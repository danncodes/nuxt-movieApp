export const state = () => ({
    apiKey: "8c597add8b9be9ae62f75538cb4183a4",
    searchScreen: false,

  })
  
  export const mutations = {
    toggleSearchScreen(state){
      state.searchScreen = !state.searchScreen
    },
    closeSearchScreen(state){
      state.searchScreen = false
    }
  }