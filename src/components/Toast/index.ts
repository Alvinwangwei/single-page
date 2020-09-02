import Vue from 'vue'
import toastPage from './index.vue'

const toast: any = {}

toast.install = (Vue: any) => {
    const ToastCon: any = Vue.extend(toastPage)
    const ins: any = new ToastCon()
    let element = ins.$mount(document.createElement('div')).$el

    document.body.appendChild(element)

    Vue.prototype.$toast = (msg: string, duration: number) => {
        ins.msg = msg
        ins.visible = true
        setTimeout(() => {
            ins.visible = false
        }, duration)
    }
}

export default toast