<template>
  <input type="text" class="searchBook" v-model="this.research" placeholder="Livre à rechercher..."/>
</template>

<script>
export default {
  name: "SearchBar",
  data(){
    return {
      research: ""
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
</style>