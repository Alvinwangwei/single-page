import Vue from 'vue'

import router from './router/index'

import store from './store/index'

import App from './app.vue'

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')