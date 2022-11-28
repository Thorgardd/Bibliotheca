<template>
  <Header></Header>
  <div class="wrapper">
    <SearchBar></SearchBar>
    <div v-for="book in this.websiteBookList" class="bookWrapper">
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
import Header from "@/components/layouts/Header";
import bookStore from "@/store/bookStore";
import SearchBar from "@/components/SearchBar";
export default {
  name: "ReaderSpace",
  components: {
    Header,
    SearchBar
  },
  data(){
    return{
      websiteBookList: JSON.parse(JSON.stringify(bookStore.getters.getWebsiteBookList))
    }
  },
  methods: {
    AddBook: (book) => {
      bookStore.commit("AddBookToUserBookList", book);
    },
    DeleteBook: (book) => {
      bookStore.commit("RemoveBookFromUserBookList", book);
    }
  }
}
</script>

<style lang="scss" src="../assets/styles/ReaderSpace.scss" scoped>
</style>