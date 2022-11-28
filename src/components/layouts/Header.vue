<template>
  <div class="nav">
    <h1>Bibliotheca</h1>
    <h3>Votre gestionnaire de lecture</h3>
    <nav id="nav">
      <a><router-link to="/books/user">Vos livres</router-link></a>
      <a><router-link to="/books">Livres</router-link></a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" src="../../assets/styles/Header.scss" scoped>
</style>