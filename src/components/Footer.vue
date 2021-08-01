<template>
  <div class="footer-wrapper">
    <div class="footer-wrapper-first"></div>
    <div class="footer-wrapper-second">
      <div class="footer-wrapper-second-text">© {{ this.currentYear }} Витошнов Кирилл</div>
      <a href="mailto:kirill.vitoschnov@yandex.ru" class="footer-wrapper-second-text">kirill.vitoschnov@yandex.ru</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: ''
    }
  },
  mounted() {
    this.currentYear = new Date()
    this.currentYear = this.currentYear.getFullYear()
  }
}
</script>
