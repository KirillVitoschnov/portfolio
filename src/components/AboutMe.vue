<template>
  <div class="content">
    <section id="about_me">
      <h3 class="section-title">Обо мне</h3>
      <span class="about_me_text">
        <p>Меня зовут Кирилл, я Web программист.</p>
       <p>Я имею <b> Среднее образование</b> по специальности <b>техник программист</b>, и в данный момент получаю высшее образование по специальности Информационные системы.</p>
        <p>Во время обучения в колледже я часто принимал участие в чемионатах по программированию. (Принимал участие в чемпионатах по робототехнике, занимался программированием микроконтроллеров) </p>
        <p>Люблю Современные технологии, крутые проекты с интересными Интерфейсами.</p>



        </span>
    </section>
    <section id="skills">
      <h3 class="section-title">Навыки</h3>
      <div class="card">
        <div class="card-content">
          <h4 class="card-title">Front-end</h4>
          <div class="card-icons-wrapper">
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/html5.png" class="card-icon-image">
              HTML5
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/css3.png" class="card-icon-image">
              CSS3
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/javascript.png" class="card-icon-image">
              JavaScript
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/sass.png" class="card-icon-image">
              SASS
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/vue-js.png" class="card-icon-image">
              VUE
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/nuxt.png" class="card-icon-image">
              Nuxt.js
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/react.png" class="card-icon-image">
              React
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/bootstrap.png" class="card-icon-image">
              Bootstrap
            </div>

          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="card-title">Back-end</h4>
          <div class="card-icons-wrapper">
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/laravel.png" class="card-icon-image">
              Laravel
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/php.png" class="card-icon-image">
              Php
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/Mysql.png" class="card-icon-image">
              MySql
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <h4 class="card-title">Прочее</h4>
          <div class="card-icons-wrapper">
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/git.png" class="card-icon-image">
              Git
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/linux.png" class="card-icon-image">
              Linux
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/ssh.png" class="card-icon-image">
              SSH
            </div>
            <div class="card-icon">
              <img alt="" src="../assets/images/logos/figma.png" class="card-icon-image">
              Figma
            </div>

          </div>
        </div>
      </div>
    </section>
    <section id="experience">
      <h3 class="section-title">Опыт работы</h3>
      <div class="time-line-wrapper">
        <div class="timeline-movement-top">
          <div class="timeline-round">
            <img style="margin: auto" src="../assets/images/clock.png" height="35" width="35"/></div>
        </div>
        <div>
          <div class="timeline-movement" v-for="work in experience" :key="work.year">
            <div class="time-line-card-wrapper-helper">
              <div class="timeline-badge">
                <span class="timeline-balloon-date-month">{{ work.mounth }}</span>
                <span class="timeline-balloon-date-year">{{ work.year }}</span>
              </div>
              <div class="time-line-card-wrapper">
                <div class="time-line-card-title">{{ work.title }}</div>
                <div v-html="work.text" class="time-line-card-text"></div>
                <div class="time-line-card-date">{{ work.data }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="awards">
      <h3 class="section-title">Достижения</h3>
      <div class="awards-wrapper">
        <div class="awards-card">
          <a href="http://techcup.kz/" target="_blank" class="awards-title">Almaty TechCup 2018</a>
          <span
              class="awards-text">2 место на чемпионате научных проектов среди школьников и студентов в старшей лиге.  </span>
          <button class="awards-button" type="button" @click="show(techCup)">Сертификат</button>
        </div>
        <div class="awards-card">
          <a target="_blank" href="https://worldskills.kz/" class="awards-title">World Skills Almaty 2019</a>
          <span
              class="awards-text">1 место на чемионате рабочих профессий в компетенции мобильная робототехника. </span>
          <button class="awards-button" type="button" @click="show(wsAlmaty)">Сертификат</button>
        </div>
        <div class="awards-card">
          <a target="_blank" href="https://worldskills.kz/" class="awards-title">World Skills Kazakhstan 2019</a>
          <span class="awards-text">Участвие в национальном чемпионате  рабочих профессий в компетенции мобильная робототехника.</span>
          <button class="awards-button" type="button" @click="show(wsNur)">Cертификат</button>
        </div>
      </div>
    </section>
    <section id="education">
      <h3 class="section-title">Образование</h3>
      <div class="education-wrapper">

        <div class="education-card">
          <a target="_blank" href="https://catec.kz/" class="education-card-title">Центральноазиатский
            технико-экономический колледж (ЦАТЭК)</a>
          <a target="_blank" href="https://catec.kz/speciality/programmnoe-obespechenie"
             class="education-card-text">Факультет: Вычислительная техника и программное обеспечение</a>
          <div class="time-line-card-date"> 2016-2020</div>

        </div>
        <div class="education-card">
          <a target="_blank" href="https://www.turan-edu.kz/" class="education-card-title">Университет "Туран"</a>
          <a target="_blank" href="https://turan.edu.kz/ru/obrprogramms/informaczionnye-sistemy/"
             class="education-card-text">Факультет: Автономные информационные и управляющие системы</a>
          <div class="time-line-card-date"> 2020-2023</div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'

Vue.use(VueViewer)
export default {
  name: 'AboutMe',
  data() {
    return {
      "techCup": ['./projects/almaty-techcup.png'],
      "wsAlmaty": ['./projects/ws-almaty.png'],
      "wsNur": ['./diplomas/ws-nur.png'],
      "experience": [
        {
          "year": 2021,
          "mounth": 'ИЮЛ',
          "title": '«TROUBLESHOOTING TECHNOLOGY»',
          "text": 'Разработал single page aplication для тестирования способностей школьников, занимался подключением js, верстал страницы, занимался доработкой и улучшением интерфейса. Тесно взаимодействовал с бэкэндером.\n' +
              '\n' +
              'Занимался поддержкой уже созданных ранее проектов, исправление багов, и доработки функционала.\n' +
              '\n' +
              'Создал с нуля фронт dashboardов для Академии Елбасы. \n' +
              'Объединил порядка 5 проектов в один сайт, занимался выводом статистики в Сhart блоки, в таблицы и списки.\n' +
              'Каждому блоку  добавлял фильтрацию и при необходимости пагинацию.  Оптимизировал фронт для более быстрой загрузки , и добавил лодеры на каждый раздел.\n' +
              'Тесно взаимодействовал  с бэкэндерами, project менеджером, и заказчиками.\n' +
              '\n' +
              'Занимался созданием лэндингов на vue js  и wordpress.',
          "data": 'Июль 2021',
        },
        {
          "year": 2020,
          "mounth": 'СЕН',
          "title": '«ТОО Incraft»',
          "text": 'Проходил стажировку в данной компании, занимался исправлением ошибок на сайтах, доработка адаптив функционала сайта, занимался версткой страниц и подключал их backend части. .\n' +
              'Разрабатывал новые компоненты для сайтов , и написание им backend части',
          "data": 'Сентябрь 2020 - Май 2021',
        },


      ]
    }
  },
  methods: {
    show(image) {
      this.$viewerApi({
        "images": image,
      })
    },
  }
}
</script>