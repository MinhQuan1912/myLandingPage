<template>
    <div class="icon" :class="type">
        <slot name="icon"></slot>
    </div>
    <slot></slot>
    <div class="text">
        <h3><slot name="title"></slot></h3>
        <p><slot name="desc"></slot></p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    flex-shrink: 0;
    background-color: var(--primary-color);
}

.text {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        font-size: 20px;
        font-family: "Plus Jakarta Sans";
        color: #0A2C0F;
        font-weight: 700;
    }

    p {
        color: var(--global-color-text);
        font-family: "Plus Jakarta Sans";
        font-size: 16px;
        font-weight: 400;
    }
}

</style>