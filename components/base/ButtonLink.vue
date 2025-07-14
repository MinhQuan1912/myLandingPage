<template>
    <u-button-group class="link-with-arrow">
        <u-button class="link-with-arrow-button-1">
            <slot></slot>
        </u-button>
        <u-button class="link-with-arrow-button-2" :class="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :fill="fillColor"
                    d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z" />
            </svg>
        </u-button>
    </u-button-group>
</template>

<script setup lang="ts">
defineProps({
    fillColor: {
        type: String,
        default: '#ffffff'
    },
    arrow: {
        type: String,
        default: '#ffffff1a'
    }
})
</script>

<style scoped>
.link-with-arrow {
    display: flex;
}

.link-with-arrow-button-1 {
    background-color: #d1a132;
    border: none;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    padding: 14px 29px 16px 29px;
    font-size: 16px;
    white-space: nowrap;
}

.link-with-arrow-button-2 {
    border-radius: 50%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
}
</style>