import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import FirstPage from '../view/firstPage/index.vue'
import secondPage from '../view/secondPage/index.vue'

let router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/first'
        },
        {
            path: '/first',
            component: FirstPage
        },
        {
            path: '/second',
            component: secondPage
        }
    ]
})

export default router;