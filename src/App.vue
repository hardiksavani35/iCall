<template>
    <StatusbarComponent />
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
</template>

<script>
import StatusbarComponent from './components/layouts/StatusbarComponent.vue';
import FooterComponent from './components/layouts/FooterComponent.vue';
import HeaderComponent from './components/layouts/HeaderComponent.vue';
export default {
    date() {
        return {

        }
    },
    components: {
        StatusbarComponent,
        FooterComponent,
        HeaderComponent
    }
}
</script>

<style>
</style>
