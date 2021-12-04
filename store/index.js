export const state = () => ({
    apiKey: "8c597add8b9be9ae62f75538cb4183a4",
    searchScreen: false,
    favourites: [],
    notifications: []

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
    localStorage.setItem( "favourites", JSON.stringify(state.favourites) )
  },
  removeFromFavourites(state, index){
    state.favourites.splice(index, 1)
    localStorage.setItem( "favourites", JSON.stringify(state.favourites) )
  },
  clearFavourites(state){
    state.favourites = []
    localStorage.clear('favourites')
  },
  setFavourites(state, favourites){
    state.favourites = favourites
  },
  updateNotification(state, notification){
    state.notifications.push(notification)
  },
  removeNotification(state, notification){
    const index = state.notifications.indexOf(notification)
    state.notifications.splice(index, 1)
  }
}

export const actions = {
  notificationEvent(context, notification){
    if(context.state.notifications.includes(notification)) return

    context.commit("updateNotification", notification)
    setTimeout( () => {
      context.commit("removeNotification", notification)
    },3000)
  }
}

export const getters = {
}