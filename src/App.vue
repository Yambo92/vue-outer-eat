<template>
    <div id='app'>
        <router-view />
        <FooterGuide v-show="$route.meta.showFooter" />
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FootGuide.vue'
import { reqFoodTypes } from './api'
    export default {

        async mounted () {
            const result = await reqFoodTypes();
            console.log(result);
            
        },
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