<template>
   <div class="h-4 mr-1 p-2 flex justify-center items-center text-xs text-[#0FEFFD] bg-theme-primary bg-opacity-50 rounded-xs hover:underline duration-300 cursor-pointer" v-if="genre">
      <h2 class="text-xs font-normal">{{ genre }}</h2>
    </div>
</template>

<script>
export default {
    props: ["genreID"],
    data(){
        return {
            genre: undefined
        }
    },
    mounted(){
        this.translateID()
    },
    methods: {
        translateID(){
            switch(this.genreID){
                case 28:
                    this.genre = "Action"
                    break
                case 12:
                    this.genre = "Adventure"
                    break
                case 16:
                    this.genre = "Animation"
                    break
                case 35:
                    this.genre = "Comedy"
                    break
                case 80:
                    this.genre = "Crime"
                    break
                case 99:
                    this.genre = "Documentary"
                    break
                case 18:
                    this.genre = "Drama"
                    break
                case 16:
                    this.genre = "Animation"
                    break
                case 10751:
                    this.genre = "Family"
                    break
                case 14:
                    this.genre = "Fantasy"
                    break
                case 36:
                    this.genre = "History"
                    break
                case 27:
                    this.genre = "Horror"
                    break
                case 10402:
                    this.genre = "Music"
                    break
                case 9648:
                    this.genre = "Mystery"
                    break
                case 10749:
                    this.genre = "Romance"
                    break
                case 878:
                    this.genre = "Science Fiction"
                    break

                case 10770:
                    this.genre = "TV Movie"
                    break
                case 53:
                    this.genre = "Thriller"
                    break
                case 10752:
                    this.genre = "War"
                    break
                case 37:
                    this.genre = "Western"
                    break
            }
        }
    }
}
</script>

<style>

</style>