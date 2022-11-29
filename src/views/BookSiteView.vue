<template>
  <SearchBar v-model="this.research"></SearchBar>
  <div class="wrapper">
    <h2>Livres a disposition sur le site</h2>
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
import SearchBar from "@/components/SearchBar";
import {books} from "@/data/books";
import bookStore from "@/store/bookStore";
import {JsonParser} from "@/Utils";
export default {
  name: "BookSiteView",
  components: {
    SearchBar
  },
  data: () => {
    return{
      booksFromSite: bookStore.state.websiteBookList,
      userBookList: bookStore.state.userBookList,
      research: ""
    }
  },
  methods: {
    AddBook: function (book){
      JsonParser(this.userBookList.push(JsonParser(book)));
      console.log(JsonParser(this.userBookList));
    },
    DeleteBook: function (book) {
      let bookSelected = this.userBookList.find(y => y.id === book.id);
      if (bookSelected === undefined) return;
      this.userBookList.splice(this.userBookList.indexOf(bookSelected), 1);
    },
    SearchBook: function () {
      // TODO - IMPLEMENT FUNCTION SEARCHBOOK
    }
  }
}
</script>

<style lang="scss" src="../assets/styles/BookSiteView.scss" scoped/>
