<template>
  <div class="wrapper">
    <h2>Votre choix de livres</h2>
    <div v-for="book in this.userBookList" class="bookWrapper">
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
import {JsonParser} from "@/Utils";

export default {
  name: "UserBooks",
  data() {
    return{
      userBookList: bookStore.state.userBookList
    }
  },
  methods: {
    AddBook: function (book) {
      JsonParser(this.userBookList.push(JsonParser(book)));
      console.log(JsonParser(this.userBookList));
    },
    DeleteBook: function (book) {
      let bookSelected = this.userBookList.find(y => y.id === book.id);
      if (bookSelected === undefined) return;
      this.userBookList.splice(this.userBookList.indexOf(bookSelected), 1);
    }
  }
}
</script>

<style lang="scss" src="../assets/styles/BookSiteView.scss" scoped>

</style>
