<template>
  <div class="content">
    <section id="about_me">
      <h3 class="section-title">{{ $t('ОбоМне.ОбоМне') }}</h3>
      <span class="about_me_text" v-html="$t('ОбоМне.ОбоМнеИнформация')">

        </span>
    </section>
    <section id="skills">
      <h3 class="section-title"> {{ $t('ОбоМне.Навыки') }}</h3>
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
          <h4 class="card-title"> {{ $t('ОбоМне.Прочее') }}</h4>
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
      <h3 class="section-title">{{ $t('ОбоМне.Опыт') }}</h3>
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
                <div class="time-line-card-date"><span>{{ work.data }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="awards">
      <h3 class="section-title">{{ $t('ОбоМне.Достижения') }}</h3>
      <div class="awards-wrapper">
        <div class="awards-card">
          <a href="http://techcup.kz/" target="_blank" class="awards-title">Almaty TechCup 2018</a>
          <span
              class="awards-text">{{ $t('ОбоМне.ДостиженияПодробно.tech-cup') }}  </span>
          <el-button style="margin-top: auto" type="info" @click="show(techCup)">{{ $t('ОбоМне.Сертификат') }}
          </el-button>
        </div>
        <div class="awards-card">
          <a target="_blank" href="https://worldskills.kz/" class="awards-title">World Skills Almaty 2019</a>
          <span
              class="awards-text">{{ $t('ОбоМне.ДостиженияПодробно.ws-alm') }} </span>
          <el-button style="margin-top: auto" type="info" @click="show(wsAlmaty)">{{ $t('ОбоМне.Сертификат') }}
          </el-button>
        </div>
        <div class="awards-card">
          <a target="_blank" href="https://worldskills.kz/" class="awards-title">World Skills Kazakhstan 2019</a>
          <span class="awards-text">{{ $t('ОбоМне.ДостиженияПодробно.ws-nur') }}</span>
          <el-button style="margin-top: auto" type="info" @click="show(wsNur)">{{ $t('ОбоМне.Сертификат') }}</el-button>
        </div>
      </div>
    </section>
    <section id="education">
      <h3 class="section-title">{{ $t('ОбоМне.Образование') }}</h3>
      <div class="education-wrapper">

        <div class="education-card">
          <a target="_blank" href="https://catec.kz/" class="education-card-title"> {{ $t('ОбоМне.Цатэк') }}</a>
          <a target="_blank" href="https://catec.kz/speciality/programmnoe-obespechenie"
             class="education-card-text">{{ $t('ОбоМне.Факультет') }}:{{ $t('ОбоМне.ФакультетЦатэк') }}</a>
          <div class="time-line-card-date"> 2016-2020</div>

        </div>
        <div class="education-card">
          <a target="_blank" href="https://www.turan-edu.kz/" class="education-card-title">{{ $t('ОбоМне.Туран') }}</a>
          <a target="_blank" href="https://turan.edu.kz/ru/obrprogramms/informaczionnye-sistemy/"
             class="education-card-text">{{ $t('ОбоМне.Факультет') }}:{{ $t('ОбоМне.ФакультетТуран') }}</a>
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
      "techCup": ['/portfolio/dist/diplomas/almaty-techcup.png'],
      "wsAlmaty": ['/portfolio/dist/diplomas/ws-almaty.png'],
      "wsNur": ['/portfolio/dist/diplomas/ws-nur.png'],
      "experience": [
        {
          "year": 2021,
          "mounth": this.$t('Июнь').substr(0, 3),
          "title": '«TROUBLESHOOTING TECHNOLOGY»',
          "text": this.$t('ОбоМне.МестоРаботы.TROUBLESHOOTING'),
          "data": `${this.$t('Июнь')} 2021`,
        },
        {
          "year": 2020,
          "mounth": this.$t('Сентябрь').substr(0, 3),
          "title": '«ТОО Incraft»',
          "text": this.$t('ОбоМне.МестоРаботы.Incraft'),
          "data": `${this.$t('Сентябрь')} 2020 - ${this.$t('Май')} 2021`,
        },


      ]
    }
  },
  mounted() {
    const scrollTo = this.scrollTo.bind(this)
    setTimeout(function () {
      scrollTo()
    })
  },
  watch: {
    '$i18n.locale' () {
      this.experience=[
        {
          "year": 2021,
          "mounth": this.$t('Июнь').substr(0, 3),
          "title": '«TROUBLESHOOTING TECHNOLOGY»',
          "text": this.$t('ОбоМне.МестоРаботы.TROUBLESHOOTING'),
          "data": `${this.$t('Июнь')} 2021`,
        },
        {
          "year": 2020,
          "mounth": this.$t('Сентябрь').substr(0, 3),
          "title": '«ТОО Incraft»',
          "text": this.$t('ОбоМне.МестоРаботы.Incraft'),
          "data": `${this.$t('Сентябрь')} 2020 - ${this.$t('Май')} 2021`,
        },


      ]
    },
  },
  methods: {
    scrollTo() {
      if (this.$route.query.id) {
        try {
          const id = this.$route.query.id;
          const yOffset = -100;
          const element = document.getElementById(id);
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        } catch (e) {
          console.log('block not found')
        }
      }
    },
    show(image) {
      this.$viewerApi({
        "images": image,
      })
    },
  }
}
</script>
