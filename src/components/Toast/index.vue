<template>
    <div class="my-toast">
        <div class="content">
            my toast
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang='scss' scoped>
.my-toast {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .7);
}
</style>