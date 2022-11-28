<template>
  <div class="search">
    <input type="text" class="searchBook" v-model="this.research" placeholder="Livre à rechercher..."/><button type="submit" @click="Search(this.research)">Rechercher</button>
  </div>
</template>

<script>
import bookStore from "@/store/bookStore";

export default {
  name: "SearchBar",
  data(){
    return {
      research: ""
    }
  },
  methods: {
    Search: (value) => {
      if (value !== null && value !== undefined){
        let bookSearch = bookStore.getters.getBookByName
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  display: flex;
  width: 20%;
  height: 30px;
  margin-top: 50px;
  margin-bottom: 40px;
}
.search{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
button{
  display: flex;
  width: 5%;
  justify-content: center;
  align-items: center;
}
</style>