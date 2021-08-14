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
  components: {
    Header,

    Footer,
  }
}

</script>

<style>
.page{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100Vh;
}
.content{
padding-top: 57px;
  flex: 1 0 auto;
}
.header-wrapper{
  position: fixed;
  background: black;
  display: flex;
  color: white;
  width: 100%;
}
.header-language{
  width: 4rem;
  user-select: none;
  cursor: pointer;
  font-family: ALSArtemiusSans,Helvetica,sans-serif;
  padding: .4em .6em;
  color: white;
  font-size: 25px;
}
div.header-language:hover {
  color: white;
  background-color: gray;
}
.header-content{
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
}
.header-buttons{
  user-select: none;
  cursor: pointer;
  padding: .4em .6em;
  font-family: ALSArtemiusSans,Helvetica,sans-serif;
  font-size: 25px;
}
div.header-buttons:hover {
  color: white;
  background-color: gray;
}
.header-buttons-active{
  user-select: none;

  padding: .4em .6em;
  font-family: ALSArtemiusSans,Helvetica,sans-serif;
  font-size: 25px;
  color: gray;

}

.footer-wrapper{
  flex: 0 0 auto;
  color: white;
  width:100%;

}
.footer-wrapper-first{
  background-color: rgba(0,0,0,0.87);
  height:90px;
 }
.footer-wrapper-second{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #161616;
  height:65px;
}
.footer-wrapper-second-text{
  font-size: 1rem;
  text-align: center;
  line-height: 21px;
  font-family: ALSArtemiusSans,Helvetica,sans-serif;
  color: hsla(0,0%,100%,0.3);
}
a.footer-wrapper-second-text{
  color: hsla(0,0%,100%,0.3);
  text-decoration: none;
}

</style>
