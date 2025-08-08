<template>
    <div class="flex items-center">
        <i><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 15 15">
                <path fill="#d1a132" d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0" stroke-width="1.4"
                    stroke="#d1a132" />
            </svg></i>
        <h3 class="font-lora font-normal pl-1.25 lg:text-lg text-primary-text" :class="props.titleClass">
            {{ props.title }}
        </h3>
    </div>
    <h1 class="font-lora font-normal text-primary-text -tracking-[.02em] text-[26px] sm:text-4xl lg:text-[46px]"
        :class="props.h1Class"><span :class="props.spanClass"
            class="-tracking-[.02em] font-plus-jakarta-sans font-semibold text-[26px] sm:text-4xl lg:text-[46px]">
            {{ props.heading1 }}
        </span>
        {{ props.heading2 }}
    </h1>
    <p :class="props.contentClass" class="font-plus-jakarta-sans font-normal text-base text-secondary-text">
        {{ props.content }}
    </p>
    <slot></slot>
</template>

<script setup lang="ts">
const props = defineProps < {
    h1Class?: string,
    contentClass?: string,
    spanClass?: string,
    titleClass?: string,
    title?: string,
    heading1?: string,
    heading2?: string,
    content?:string,
}>()

</script>

