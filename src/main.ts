import Vue from 'vue'

import router from './router/index'

import store from './store/index'

import App from './app.vue'

import myToast from './components/Toast/index.ts'
Vue.use(myToast)


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')