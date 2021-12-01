export const state = () => ({
    apiKey: "8c597add8b9be9ae62f75538cb4183a4",
    searchScreen: false,
    favourites: []

  })
  
export const mutations = {
  toggleSearchScreen(state){
    state.searchScreen = !state.searchScreen
  },
  closeSearchScreen(state){
    state.searchScreen = false
  },
  addToFavourites(state, movie){
    state.favourites.push(movie)
    console.log("favourites: ", state.favourites)
  },
  setFavourites(state, favourites){
    state.favourites = favourites
  }

}

export const getters = {
}