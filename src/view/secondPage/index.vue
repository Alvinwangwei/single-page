<template>
    <div>
        {{count}}
        <button @click="bindAdd">add</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {}
    },
    methods: {
        ...mapMutations(['b/increment']),
        ...mapActions({
            actionA: 'b/actionA'
        }),
        bindAdd() {
            this.actionA({amount: 3})
        }
    },
    computed: {
        ...mapState({
            count: state => state.b.count
        }),
        ...mapGetters({
            doneTodos: state => state.b.doneTodos
        }),
    }
}
</script>

<style scoped>

</style>