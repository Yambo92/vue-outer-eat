<template>
    <div id='app'>
        <router-view />
        <FooterGuide/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FootGuide.vue'
    export default {
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus" scoped>
    #app
        width 100%
        height 100%
        background #f5f5f5
        position relative
</style>