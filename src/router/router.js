import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/components/MainPage.vue'
import works from '@/components/works'
import AboutMe from '@/components/AboutMe'

Vue.use(Router);

let router= new Router ({
    mode: 'history',
    routes: [
        {
            path: 'portfolio/',
            component: mainPage
        },
        {
            path: '/works',
            component: works
        },
        {
            path: '/contacts',
            component: works
        },
        {
            path: '/about_me',
            component: AboutMe
        },

    ]
})

export default router;