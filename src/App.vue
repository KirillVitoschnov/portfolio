<template>
  <div id="app">
    <Header></Header>
    <mainPage/>
    <Footer></Footer>
  </div>
</template>

<script>
import mainPage from './components/MainPage.vue'
import Footer from "./components/Footer";
import Header from "./components/Header"
export default {
  name: 'App',
  components: {
    Header,
    mainPage,
    Footer,
  }
}
</script>

<style>
.header-wrapper{
  position:fixed;
  justify-content: flex-end;
  display: flex;
  width: 100%;
  background-color: blueviolet;
  height: 3rem;



}
.header-button{
  user-select: none;
  color:white;
  font-size: 16px;
  line-height: 3rem;
  background-color: blueviolet;
  cursor: pointer;
  height: 3rem;
  width: max-content;
  margin-left: 1rem;
  margin-right: 1rem;
  font-family: "",Helvetica,Arial,sans-serif;
  font-weight: 400;
  font-style: normal;
}
.footer-wrapper{
  position: absolute;
  bottom: 0;
  height:283px;
  width:100%;
  background-color:blueviolet;
}

</style>
