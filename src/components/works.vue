<template>
  <div class="content">
    <div class="works-wrapper">
      <div  class="work-card" v-for="item in works"  :key="item.title">
        <div class="work-image-wrapper">
          <img
              class="work-image"
              width="310px"
              height="320px"
              :src="item.image"
              alt="">
        </div>
        <div class="work-description">
          <div class="work-description-title">
            <span class="work-description-title-text">{{item.title}}</span>
            <div @click="item.showMore=!item.showMore" class="work-description-end"></div>
          </div>
          <span class="work-description-text">{{item.description}}</span>
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
      works:[
        {
          showMore:false,
          title:'Игра змейка',
          description:'компьютерная игра, впервые появившаяся в кнопочном телефоне Nokia 6110. Разработана финским разработчиком Танели Арманто и выпущена компанией Nokia.',
          technologys:['html5','css','canvas','javascript'],
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU',
          projectUrl:'https://www.google.com/',
          sourceUrl:'https://www.google.com/',
        },


      ]


    }
  },

}

</script>