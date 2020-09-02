<template>
    <div class="home">
        <!-- <router-link to="/first">Go to first</router-link>
        <router-link to="/second">Go to second</router-link> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'home'
        }
    }
}
</script>