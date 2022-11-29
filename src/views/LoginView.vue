<template>
  <div class="wrapper">
    <h1 id="title">Connexion à votre bibliothèque personnelle</h1>
    <div class="form">
      <input type="text" id="formInputEmail" placeholder="Email" v-model="userEmail"/>
      <input type="password" id="formInputPassword" placeholder="Votre mot de passe" v-model="userPassword">
      <button type="submit" @click="AuthLogin">Valider</button>
    </div>
  </div>
</template>

<script>
// BUG
import userStore from "../store/userStore.js";
import Header from "@/components/layouts/Header";
export default {
  name: 'HomeView',
  components: {
    Header
  },
  data() {
    return {
      userEmail: userStore.getters.getUserEmail,
      userPassword: userStore.getters.getUserPassword
    }
  },
  methods: {
    AuthLogin(e){
      e.preventDefault();
      userStore.commit("setUserCredentials",
          { "userEmail": this.userEmail, "userPassword": this.userPassword });
      userStore.commit("setIsUserAuth", true)
    }
  }
}
</script>

<style lang="scss" src="../assets/styles/LoginView.scss">
</style>
