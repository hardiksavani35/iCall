<template>
    <div class="bottom-nav">
        <div class="nav-icons">
            <div>
                <i class="fas fa-star"></i>
                <span>Favorites</span>
            </div>
            <div>
                <i class="fas fa-clock"></i>
                <span>Recents</span>
            </div>
            <div class="active">
                <router-link :to="{ name: 'contact' }">
                    <i class="fas fa-user"></i><span>Contacts</span>
                </router-link>
            </div>
            <div>
                <i class="fas fa-keyboard"></i>
                <span>Keypad</span>
            </div>
            <div>
                <i class="fas fa-voicemail"></i>
                <span>Voicemail</span>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
    .bottom-nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        max-width: 400px;
        background: #fff;
        padding: 10px 0;
        border-top: 1px solid #ddd;
    }
    .nav-icons {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .nav-icons div {
        text-align: center;
        color: gray;
        font-size: 12px;
    }
    .nav-icons i {
        font-size: 22px;
        display: block;
        margin-bottom: 5px;
    }
    .nav-icons .active {
        color: dodgerblue;
    }
</style>