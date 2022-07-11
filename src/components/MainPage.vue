<template>
  <div class="content">

    <div class="main-banner-title "> {{ $t('ГлавнаяСтраница.главнаяПодпись') }}</div>
    <div class="main-banner-text about_me_text">
      <div class="main-banner-menu-title">{{ $t('ГлавнаяСтраница.навигация') }}</div>
      <div class="main-banner-menu-wrapper">
        <el-button @click="changePage('about' ,'about_me')" type="info">{{$t('ГлавнаяСтраница.КотороткоОбоМне')}}</el-button>
        <el-button @click="changePage('about' ,'skills')" type="info">{{$t('ГлавнаяСтраница.Навыки')}}</el-button>
        <el-button @click="changePage('about' ,'experience')" type="info">{{$t('ГлавнаяСтраница.Опыт')}}</el-button>
        <el-button @click="changePage('about' ,'awards')" type="info"> {{$t('ГлавнаяСтраница.Достижения')}}</el-button>
        <el-button @click="changePage('about' ,'education')" type="info">{{$t('ГлавнаяСтраница.Образование')}}</el-button>
        <el-button @click="changePage('/works' )" type="info">{{$t('ГлавнаяСтраница.ЛичныеПроекты')}}</el-button>
        <el-button @click="changePage('/contacts' )" type="info">{{$t('ГлавнаяСтраница.Контакты')}}</el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'mainPage',
  data() {
    return {}
  },
  methods: {
    changePage(page, id) {
      if (id) {
        this.$router.push({name: page, query: {'id': id}})
      } else {
        this.$router.push(page)
      }

    }
  }
}
</script>

