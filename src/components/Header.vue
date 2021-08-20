<template>
  <div class="header-wrapper" >
    <div @click="changeLang" class="header-language">{{ $i18n.locale }}</div>
    <div class="header-content">
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/portfolio/' }" @click="changeRoute('/portfolio/')"
           class="header-buttons">{{$t('Главная')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/portfolio/about_me' }" @click="changeRoute('/portfolio/about_me')"
           class="header-buttons">{{$t('Обо_мне')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/portfolio/works' }" @click="changeRoute('/portfolio/works')"
           class="header-buttons">{{$t('Работы')}}
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/portfolio/contacts' }" @click="changeRoute('/portfolio/contacts')"
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
      currentRouteName: ''
    }
  },
  mounted() {
    this.currentRouteName = this.$router.currentRoute.path
    this.$i18n.locale=localStorage.getItem('locale')==false ?  localStorage.getItem('locale') : 'ru'
  },
  methods: {
    changeRoute(name) {
      this.$router.push(name)
      this.currentRouteName = this.$router.currentRoute.path
    },
    changeLang() {
      if (this.$i18n.locale == 'ru') {
        this.$i18n.locale='kz'
        localStorage.setItem('locale', 'kz');
      } else if (this.$i18n.locale == 'kz')
        {
          this.$i18n.locale='en'
          localStorage.setItem('locale', 'en');
      }
      else if (this.$i18n.locale == 'en')
      {
        this.$i18n.locale = 'ru'
        this.$i18n.locale='ru'
        localStorage.setItem('locale', 'ru');
      }

    }
  }
}

</script>
