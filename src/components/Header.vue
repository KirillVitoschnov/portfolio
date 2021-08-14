<template>
  <div class="header-wrapper" >
    <div @click="changeLang" class="header-language">{{ currentLang }}</div>
    <div class="header-content">
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/' }" @click="changeRoute('/')"
           class="header-buttons">{{$t('Главная')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/about_me' }" @click="changeRoute('about_me')"
           class="header-buttons">{{$t('Обо_мне')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/works' }" @click="changeRoute('works')"
           class="header-buttons">{{$t('Работы')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/contacts' }" @click="changeRoute('contacts')"
           class="header-buttons">{{$t('Контакты')}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      currentLang:this.$i18n.locale,
      currentRouteName: ''
    }
  },
  mounted() {
    this.currentRouteName = this.$router.currentRoute.path
    this.currentLang=localStorage.getItem('locale')==false ? 'ru' : localStorage.getItem('locale')
    this.$i18n.locale=this.currentLang
  },
  methods: {
    changeRoute(name) {
      this.$router.push(name)
      this.currentRouteName = this.$router.currentRoute.path
    },
    changeLang() {
      if (this.currentLang == 'ru') {
        this.currentLang = 'kz'
        this.$i18n.locale='kz'
        localStorage.setItem('locale', 'kz');
      } else if (this.currentLang == 'kz')
        {
        this.currentLang = 'en'
          this.$i18n.locale='en'
          localStorage.setItem('locale', 'en');
      }
      else if (this.currentLang == 'en')
      {
        this.currentLang = 'ru'
        this.$i18n.locale='ru'
        localStorage.setItem('locale', 'ru');
      }

    }
  }
}

</script>
