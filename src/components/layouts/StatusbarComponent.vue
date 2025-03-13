<template>
    <div class="status-bar">
        <div>9:41</div>
        <div class="status-icons">
            <i class="fas fa-signal"></i> 
            <i class="fas fa-wifi"></i>
            <span>80%</span>
            <i class="fas fa-battery-three-quarters"></i>
        </div>
    </div>
</template>

<style scoped>
    .status-bar {
        display: flex;
        justify-content: space-between;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: bold;
    }
    .status-icons {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .status-icons i {
        color: black;
    }
</style>