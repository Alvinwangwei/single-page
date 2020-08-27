import Vue from 'vue'
import Vuex, { Commit } from 'vuex'

Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
    },
    mutations: {
        increment(state: any, n: object) {
            state.count += (n as any).amount
        }
    },
    actions: {
        actionA(context: {commit: Commit}, payload: object = {}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('increment', payload)
                    resolve()
                }, 1000)
            })
        }
    }
}

const moduleB = {
    namespaced: true,
    state: {
        count: 10
    },
    getters: {
    },
    mutations: {
        increment(state: any, n: object) {
            state.count += (n as any).amount
        }
    },
    actions: {
        actionA(context: {commit: Commit}, payload: any) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('increment', payload)
                    resolve()
                }, 1000)
            })
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

export default store