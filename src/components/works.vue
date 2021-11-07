<template>
  <div class="content">
    <div class="work-filter">
      <div class="work-sub-filter">
      <div class="work-filter-item" v-for="tech in technologysArray" :key="tech">
        <input   type="checkbox" :id="tech" name="subscribe" :value="tech" v-model="checkedTech">
        <label style="margin-left: 0.5rem" :for="tech">{{tech}}</label>
      </div>
      </div>
      <div class="work-filter-message">В данном блоке находятся мои  проекты которые создавались в целях изучения или эксперимента
        <br>*Для более удобного просмотра советую воспользоваться фильтром
      </div>
    </div>
    <div class="works-wrapper">
      <div v-show="item.showEl"  class="work-card" v-for="item in works"  :key="item.title">
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
            <span class="work-description-title-text">{{item.title}}</span>
            <div @click="item.showMore=!item.showMore" class="work-description-end"></div>
          </div>
          <span class="work-description-text">{{item.descriptionMin}}</span>
          <div class="work-description-more" v-if="item.showMore">
            <div class="work-description-more-title">{{item.title}}</div>
            <div @click="item.showMore=!item.showMore" class="close"/>
            <div style="padding: 10px">{{item.description}}</div>
            <ul style="margin-top: 20px">
              <li v-for="tech in item.technologys" :key="tech" >{{tech}}</li>
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
      checkedTech:[],
      technologysArray:[],
      works:[
        {
          showEl:true,
          showMore:false,
          title:'Игра змейка',
          descriptionMin:'Это игра в  змейку)',
          description:'компьютерная игра, впервые появившаяся в кнопочном телефоне Nokia 6110. Разработана финским разработчиком Танели Арманто и выпущена компанией Nokia.',
          technologys:['html','css','canvas','javascript'],
          image:'https://rembound.com/files/creating-a-snake-game-tutorial-with-html5/snake.png',
          projectUrl:'https://kirillvitoschnov.github.io/snakeGame/',
          sourceUrl:'https://www.google.com/',
        },
        {
          showEl:true,
          showMore:false,
          title:'Сайт портфолио',
          descriptionMin:'Сайт портфолио (вы уже находитесь здесь)',
          description:'Сайт визитка, на котором находится основная информация обо мне, проекты и контакты.',
          technologys:['html','scss','javascript','vue','i18n'],
          image:'https://static6.depositphotos.com/1064545/666/i/950/depositphotos_6664635-stock-photo-businessman-still-pointing-with-both.jpg',
          projectUrl:'https://kirillvitoschnov.github.io/snakeGame/',
          sourceUrl:'https://www.google.com/',
        },
        {
          showEl:true,
          showMore:false,
          title:'Cписок задач',
          descriptionMin:'Простой список задач написанные на Vue js',
          description:'Простой список задач написанные на Vue js с регистрацией  с использованием Local Storage',
          technologys:['html','css','javascript','vue','localStorage','vuelidate'],
          image:'https://static6.depositphotos.com/1064545/666/i/950/depositphotos_6664635-stock-photo-businessman-still-pointing-with-both.jpg',
          projectUrl:'https://kirillvitoschnov.github.io/snakeGame/',
          sourceUrl:'https://www.google.com/',
        },

      ]


    }

  },
  mounted() {
    for (var i=0; i<this.works.length;i++){
      this.technologysArray=this.technologysArray.concat(this.works[i].technologys)
    }
    this.technologysArray= this.technologysArray.filter((item, index) => {
      return this.technologysArray.indexOf(item) === index
    })


  },
  watch: {
    checkedTech: function () {
      for (var i=0; i<this.works.length;i++){
        this.works[i].showEl = this.checkedTech.every(item => this.works[i].technologys.includes(item));
        this.works[i].showMore = false

      }
    },

  },


}

</script>