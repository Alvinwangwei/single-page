import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './app.vue'

import router from './router/index'

import store from './store/index'

Vue.use(ElementUI)

Vue.filter('globalFilter', function (val: any) {
    return val + 'global'
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')