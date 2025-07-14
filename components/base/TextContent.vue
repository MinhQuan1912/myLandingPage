<template>
    <div class="text-heading">
        <i class="icon-park-outline--dot"></i>
        <h3 class="text-heading-title" :class="titleClass"><slot name="title"></slot></h3>
    </div>
    <h1 class="text-heading-h1" :class="h1Class"><span :class="spanClass" class="text-heading-span"><slot name="heading1"></slot></span> <slot name="heading2"></slot>
    </h1>
    <p :class="contentClass" class="text-heading-content"><slot name="content"></slot></p>
    <slot></slot>
</template>

<script setup>
defineProps({
    h1Class: {
        type: String,
        default: '',
    },
    contentClass: {
        type: String,
        default: '',
    },
    spanClass: {
        type: String,
        default: '',
    },
    titleClass: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.icon-park-outline--dot {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23d1a132' stroke='%23d1a132' stroke-width='4' d='M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z'/%3E%3C/svg%3E");
}

.text-heading {
    display: flex;
    align-items: center;
}

.text-heading-title {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.3em;
    padding-left: 5px;
    font-style: italic;

}

.text-heading-span {
    font-size: 46px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
}

.text-heading-content {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
}

.text-heading-h1 {
    font-family: "Lora";
    font-style: italic;
    font-weight: 400;
    font-size: 46px;
    color: var(--primary-color-text)
}
</style>