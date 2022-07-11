<template>
  <div class="page" id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>

import Footer from "./components/Footer";
import Header from "./components/Header"
export default {
  name: 'App',
  beforeCreate() {
    if (!sessionStorage.getItem('locale')) {
      sessionStorage.setItem('locale', this.$i18n.locale);
    } else {
      this.$i18n.locale =sessionStorage.getItem('locale');
    }
  },
  components: {
    Header,
    Footer,
  }
}

</script>


