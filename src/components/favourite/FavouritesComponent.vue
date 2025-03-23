<template>
    <component :is="currentComponent"></component>
</template>

<script>  
import AddFavouriteComponent from '../favourite/AddFavouriteComponent.vue';
import FavouriteListComponent from '../favourite/FavouriteListComponent.vue';

export default {
    data() {
        return {
            currentComponent: 'FavouriteListComponent'
        }
    }, 
    components: {
        AddFavouriteComponent,
        FavouriteListComponent
    }, 
}
</script>

<style scoped>
    .container { display: flex; justify-content: center; align-items: center; height: 80vh; text-align: center; }
</style>