
<template>
   <div>
    <h6>Movie Todo</h6>
    <MovieData></MovieData>

   </div>
   <!-- :속성 =""  v-for="이름 in 기준" :key="이름" 이벤트 =  v-on:click v-on == @ -->
</template>

<script>
import MovieData from "./components/MovieData.vue"
export default {
  name: 'App',
  data() {
    return {
      number : 0,
      price : 60,
      color : "color : red",
      product : ["1","2","3"],

    }
  },
  components:{
      MovieData
  },
  methods: {
   counter(){
      this.number++;
    },
    
  },

}

</script>

<style>
@import "./assets/reset.css";
</style>
<style scoped>
h6{
  font-size: 42px;
  text-align: center;
  padding: 30px 0;
}
</style>