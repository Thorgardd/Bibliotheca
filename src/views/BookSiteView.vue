<template>
  <SearchBar v-model="this.research"></SearchBar>
  <div class="wrapper">
    <div v-for="book in this.booksFromSite" class="bookWrapper">
      <div class="book">
        <h3>{{ book.name }}</h3>
        <div class="buttons">
          <button id="add" type="submit" @click="AddBook(book)">Ajouter</button>
          <button id="remove" type="submit" @click="DeleteBook(book)">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookStore from "@/store/bookStore";
import SearchBar from "@/components/SearchBar";
export default {
  name: "BookSiteView",
  components: {
    SearchBar
  },
  data: () => {
    return{
      booksFromSite: bookStore.getters.getWebsiteBookList,
      research: ""
    }
  },
  methods: {
    AddBook: () => {

    },
    DeleteBook: () => {

    },
    SearchBook: () => {

    }
  },
  mounted() {
    console.log(JSON.parse(JSON.stringify(this.booksFromSite)))
  }
}
</script>

<style lang="scss" src="../assets/styles/ReaderSpace.scss" scoped>
</style>