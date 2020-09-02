<template>
    <div>
        <button @click="bindAdd">add</button>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    created() {
        // this.$toast('asdasd', 1000)
    },
    methods: {
        bindAdd() {
            // this.$store.commit('increment', {amount: 2})
            // this.$store.dispatch('a/actionA', {amount: 2}).then(res => {
            //     console.log(2222)
            // })
            this.$toast('asdasd', 1000)
        }
    },
    computed: {
        count() {
            return this.$store.state.a.count
        }
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>

</style>