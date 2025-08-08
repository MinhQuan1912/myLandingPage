<template>
    <div class="flex justify-center items-center w-12.5 h-12.5 rounded-full bg-primary-orange border-none flex-shrink-0"
        :class="props.type">
        <slot name="icon"></slot>
    </div>
    <slot></slot>
    <div class="flex flex-col gap-2.5" :class="props.textGroup">
        <h3 class="text-xl font-plus-jakarta-sans text-primary-text font-bold">
            {{ props.title }}
        </h3>
        <p class="text-secondary-text font-plus-jakarta-sans text-base font-normal">
            {{ props.desc }}
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    type?: string,
    textGroup?: string,
    title?: string,
    desc?:string,
}>()


</script>
