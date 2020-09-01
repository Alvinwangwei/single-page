<template>
    <div>
        {{count}}
        <button @click="bindAdd">add</button>
        <my-toast></my-toast>
    </div>
</template>

<script>
// src/components/Toast/index
import myToast from '../../components/Toast/index.vue'

export default {
    data() {
        return {}
    },
    created() {
    },
    methods: {
        bindAdd() {
            // this.$store.commit('increment', {amount: 2})
            this.$store.dispatch('a/actionA', {amount: 2}).then(res => {
                console.log(2222)
            })
        }
    },
    computed: {
        count() {
            return this.$store.state.a.count
        }
    },
    components: {
        myToast
    }
}
</script>

<style lang='scss' scoped>

</style>