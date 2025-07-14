<template>
    <div class="icon-text">
        <li>
            <span class="mdi--tick-circle"></span>
            <span class="text" :class="textClass"><slot></slot></span>
        </li>
    </div>
</template>

<script setup>
defineProps({
    
    textClass: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.icon-text {
    li {
        list-style: none;
        display: flex;
        align-items: center;

        .text {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.5em;
            font-family: "Plus Jakarta Sans";
            color: var(--global-color-text)
        }
    }
}

.mdi--tick-circle {
    display: inline-block;
    margin-right: 10px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23D1A132' d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z'/%3E%3C/svg%3E");
}
</style>