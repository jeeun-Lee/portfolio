
<template>
    <div>
        <div v-if="loading" class="loading">로딩 중...</div>
        <ul class="d-flex flex-wrap Movies">
            <li  v-for="Movie in Movies" :key="Movie" :id="Movie.id">
                <a :href="Movie.url" target="_blank">
                    <h6>
                    {{ Movie.title }}
                </h6>
                <img :src="Movie.medium_cover_image" :alt="Movie.title">
                <ul class="genres">
                    <li v-for="genre in Movie.genres" :key="genre">
                    {{ genre }}
                    </li>
                </ul>
                </a>
            </li>
        </ul>
    </div>
 </template>
 
 <script>
    import axios from 'axios';
   
 export default {
    name: 'MovieData',
    data(){
        return{
            loading:false,
            Movies : null,
            
           
        }
    },
    created() {
        this.fetchData()
    },
    mounted() {
    },
    methods:{
        fetchData(){
            this.loading = true;
            axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
            .then(response =>{
                this.loading = false
                this.Movies = response.data.data.movies;
                console.log(response.data.data.movies)
            })
            .catch(error =>{
                console.log(error)
            })
        }
    }
 }
 
 </script>
 
 <style>
    @import "./MovieData.css";
 </style>
 