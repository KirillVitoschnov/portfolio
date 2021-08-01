<template>
  <div class="header-wrapper" >
    <div @click="changeLang" class="header-language">{{ currentLang }}</div>
    <div class="header-content">
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/' }" @click="changeRoute('/')"
           class="header-buttons">Главная
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/about_me' }" @click="changeRoute('about_me')"
           class="header-buttons">Обо мне
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/works' }" @click="changeRoute('works')"
           class="header-buttons">Работы
      </div>
      <div v-bind:class="{ 'header-buttons-active': currentRouteName=='/contacts' }" @click="changeRoute('contacts')"
           class="header-buttons">Контакты
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      currentLang: 'Ru',
      currentRouteName: ''
    }
  },
  mounted() {
    this.currentRouteName = this.$router.currentRoute.path
  },
  methods: {
    changeRoute(name) {
      this.$router.push(name)
      this.currentRouteName = this.$router.currentRoute.path
    },
    changeLang() {
      if (this.currentLang == 'Ru') {
        this.currentLang = 'Kz'
      } else {
        this.currentLang = 'Ru'
      }

    }
  }
}

</script>
