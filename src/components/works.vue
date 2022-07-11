<template>
  <div class="content">
    <div class="work-filter">
      <div class="work-sub-filter">
        <div class="work-filter-item" v-for="tech in technologysArray" :key="tech">
          <input type="checkbox" :id="tech" name="subscribe" :value="tech" v-model="checkedTech">
          <label style="margin-left: 0.5rem" :for="tech">{{ tech }}</label>
        </div>
      </div>
      <div class="work-filter-message">{{ $t('МоиПроекты.рекомендация') }}
      </div>
    </div>
    <div class="works-wrapper">
      <div v-show="item.showEl" class="work-card" v-for="item in works" :key="item.title">
        <div class="work-image-wrapper">
          <img
              class="work-image"
              width="318px"
              height="320px"
              :src="item.image"
              alt="">
        </div>
        <div class="work-description">
          <div class="work-description-title">
            <span class="work-description-title-text">{{ item.title }}</span>
            <div @click="item.showMore=!item.showMore" class="work-description-end"></div>
          </div>
          <span class="work-description-text">{{ item.descriptionMin }}</span>
          <div class="work-description-more" v-if="item.showMore">
            <div class="work-description-more-title">{{ item.title }}</div>
            <div @click="item.showMore=!item.showMore" class="close"/>
            <div style="padding: 10px">{{ item.description }}</div>
            <ul style="margin-top: 20px">
              <li v-for="tech in item.technologys" :key="tech">{{ tech }}</li>
            </ul>
            <div class="url-wrapper">
              <a target="_blank" :href="item.projectUrl" class="works-show"></a>
              <a target="_blank" :href="item.sourceUrl" class="works-github"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'works',
  data() {
    return {
      checkedTech: [],
      technologysArray: [],
      works: [
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleValorant'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinValorant'),
          description:  this.$t('МоиПроекты.descriptionValorant'),
          technologys: ['html', 'scss', 'javascript', 'react'],
          image: './projects/valorant-landing.png',
          projectUrl: 'https://kirillvitoschnov.github.io/valorant-landing-concept/',
          sourceUrl: 'https://github.com/KirillVitoschnov/valorant-landing-concept',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleSnake'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinSnake'),
          description:  this.$t('МоиПроекты.descriptionSnake'),
          technologys: ['html', 'css', 'canvas', 'javascript'],
          image: './projects/snake.png',
          projectUrl: 'https://kirillvitoschnov.github.io/snakeGame/',
          sourceUrl: 'https://github.com/KirillVitoschnov/snakeGame',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titlePortfolio'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinPortfolio'),
          description: this.$t('МоиПроекты.descriptionPortfolio'),
          technologys: ['html', 'scss', 'javascript', 'vue', 'i18n'],
          image: './projects/portfolio.png',
          projectUrl: 'https://kirillvitoschnov.github.io/portfolio/#/',
          sourceUrl: 'https://github.com/KirillVitoschnov/portfolio',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleToDoList'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinToDoList'),
          description:  this.$t('МоиПроекты.descriptionToDoList'),
          technologys: ['html', 'css', 'javascript', 'vue', 'localStorage', 'vuelidate'],
          image: './projects/vueTodoList.png',
          projectUrl: 'https://kirillvitoschnov.github.io/VueTodoList/',
          sourceUrl: 'https://github.com/KirillVitoschnov/VueTodoList',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleTextEditor'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinTextEditor'),
          description: this.$t('МоиПроекты.descriptionTextEditor'),
          technologys: ['html', 'css', 'javascript', 'vue'],
          image: './projects/textEdit.png',
          projectUrl: 'https://kirillvitoschnov.github.io/text-editor/',
          sourceUrl: 'https://github.com/KirillVitoschnov/text-editor',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleAutoTranslate'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinAutoTranslate'),
          description: this.$t('МоиПроекты.descriptionAutoTranslate'),
          technologys: ['html', 'javascript'],
          image: './projects/translate.jpg',
          projectUrl: 'https://kirillvitoschnov.github.io/i18nAutoTranslate/',
          sourceUrl: 'https://github.com/KirillVitoschnov/i18nAutoTranslate',
        },


      ]


    }

  },
  mounted() {
    for (var i = 0; i < this.works.length; i++) {
      this.technologysArray = this.technologysArray.concat(this.works[i].technologys)
    }
    this.technologysArray = this.technologysArray.filter((item, index) => {
      return this.technologysArray.indexOf(item) === index
    })


  },
  watch: {
    '$i18n.locale' () {
    this.works= [
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleValorant'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinValorant'),
          description:  this.$t('МоиПроекты.descriptionValorant'),
          technologys: ['html', 'scss', 'javascript', 'react'],
          image: './projects/valorant-landing.png',
          projectUrl: 'https://kirillvitoschnov.github.io/valorant-landing-concept/',
          sourceUrl: 'https://github.com/KirillVitoschnov/valorant-landing-concept',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleSnake'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinSnake'),
          description:  this.$t('МоиПроекты.descriptionSnake'),
          technologys: ['html', 'css', 'canvas', 'javascript'],
          image: './projects/snake.png',
          projectUrl: 'https://kirillvitoschnov.github.io/snakeGame/',
          sourceUrl: 'https://github.com/KirillVitoschnov/snakeGame',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titlePortfolio'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinPortfolio'),
          description: this.$t('МоиПроекты.descriptionPortfolio'),
          technologys: ['html', 'scss', 'javascript', 'vue', 'i18n'],
          image: './projects/portfolio.png',
          projectUrl: 'https://kirillvitoschnov.github.io/portfolio/#/',
          sourceUrl: 'https://github.com/KirillVitoschnov/portfolio',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleToDoList'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinToDoList'),
          description:  this.$t('МоиПроекты.descriptionToDoList'),
          technologys: ['html', 'css', 'javascript', 'vue', 'localStorage', 'vuelidate'],
          image: './projects/vueTodoList.png',
          projectUrl: 'https://kirillvitoschnov.github.io/VueTodoList/',
          sourceUrl: 'https://github.com/KirillVitoschnov/VueTodoList',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleTextEditor'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinTextEditor'),
          description: this.$t('МоиПроекты.descriptionTextEditor'),
          technologys: ['html', 'css', 'javascript', 'vue'],
          image: './projects/textEdit.png',
          projectUrl: 'https://kirillvitoschnov.github.io/text-editor/',
          sourceUrl: 'https://github.com/KirillVitoschnov/text-editor',
        },
        {
          showEl: true,
          showMore: false,
          title: this.$t('МоиПроекты.titleAutoTranslate'),
          descriptionMin: this.$t('МоиПроекты.descriptionMinAutoTranslate'),
          description: this.$t('МоиПроекты.descriptionAutoTranslate'),
          technologys: ['html', 'javascript'],
          image: './projects/translate.jpg',
          projectUrl: 'https://kirillvitoschnov.github.io/i18nAutoTranslate/',
          sourceUrl: 'https://github.com/KirillVitoschnov/i18nAutoTranslate',
        },


      ]
      for (var i = 0; i < this.works.length; i++) {
        this.works[i].showEl = this.checkedTech.every(item => this.works[i].technologys.includes(item));
        this.works[i].showMore = false
      }

    },
    checkedTech: function () {
      for (var i = 0; i < this.works.length; i++) {
        this.works[i].showEl = this.checkedTech.every(item => this.works[i].technologys.includes(item));
        this.works[i].showMore = false
      }
    },

  },


}

</script>
