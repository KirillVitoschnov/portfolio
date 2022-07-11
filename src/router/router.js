import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/MainPage.vue'
import works from '@/components/works'
import AboutMe from '@/components/AboutMe'
import  contact from '@/components/contact'

Vue.use(Router);

let router= new Router ({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: mainPage
        },
        {
            path: '/works',
            component: works
        },
        {
            path: '/contacts',
            component:  contact
        },
        {
            name:'about',
            path: '/about_me',
            component: AboutMe
        },
        { path: '*', redirect: '/' },
    ]
})

export default router;
