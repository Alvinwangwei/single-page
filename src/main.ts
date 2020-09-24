import Vue from 'vue'

import router from './router/index'

import store from './store/index'

import App from './app.vue'

import myToast from './components/Toast/index.ts'
Vue.use(myToast)

Vue.filter('globalFilter', function (val: any) {
    return val + 'global'
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')