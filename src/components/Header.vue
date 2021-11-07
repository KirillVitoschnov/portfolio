<template>
  <div>
    <div @click="burgerMenu=!burgerMenu" v-bind:class="{ 'change':  burgerMenu }" class="burger-container">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>

  <div v-if="burgerMenu" class="header-wrapper" >

    <div @click="changeLang" class="header-language">{{ $i18n.locale }}</div>
    <nav class="header-content">
      <div v-bind:class="{ 'header-buttons-active': $route.path=='/' }" @click="changeRoute('/')"
           class="header-buttons">{{$t('Главная')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': $route.path=='/about_me' }" @click="changeRoute('/about_me')"
           class="header-buttons">{{$t('Обо_мне')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': $route.path=='/works' }" @click="changeRoute('/works')"
           class="header-buttons">{{$t('Работы')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': $route.path=='/contacts' }" @click="changeRoute('/contacts')"
           class="header-buttons">{{$t('Контакты')}}
      </div>
    </nav>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      burgerMenu:false
    }
  },
  created() {
    window.addEventListener("resize", this.sizeChange);
  },
  destroyed() {
    window.removeEventListener("resize", this.sizeChange);
  },
  mounted() {
    this.sizeChange()
    this.$i18n.locale=sessionStorage.getItem('locale')==false ?  sessionStorage.getItem('locale') : 'ru'
  },
  watch: {
    '$route' () {
      this.burgerMenu=false
      this.sizeChange()
      window.scrollTo(0,0);

    },

  },

  methods: {
    sizeChange(){
      this.burgerMenu = window.innerWidth > 649;
    },
    changeRoute(name) {
      this.$router.push(name)
    },
    changeLang() {
      if (this.$i18n.locale == 'ru') {
        this.$i18n.locale='kz'
        sessionStorage.setItem('locale', 'kz');
      } else if (this.$i18n.locale == 'kz')
        {
          this.$i18n.locale='en'
          sessionStorage.setItem('locale', 'en');
      }
      else if (this.$i18n.locale == 'en')
      {
        this.$i18n.locale = 'ru'
        this.$i18n.locale='ru'
        sessionStorage.setItem('locale', 'ru');
      }

    }
  }
}

</script>

