<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script>
import Header from "@/components/layouts/Header";

export default {
    components: {
        Header
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-shadow: none;
  font-family: "Roboto Light", sans-serif;
}
</style>
