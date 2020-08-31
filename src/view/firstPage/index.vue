<template>
    <div>
        {{count}}
        <button @click="bindAdd">add</button>
    </div>
</template>

<script>

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
    }
}
</script>

<style scoped>

</style>