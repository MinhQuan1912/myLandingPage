<template>
    <li class="flex items-center list-none">
        <span class="inline-block mr-2 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                <path fill="#D1A132"
                    d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
            </svg>
        </span>
        <span class="text-base font-normal font-plus-jakarta-sans text-secondary-text" :class="props.textClass">
            {{ props.text }}
        </span>
    </li>
</template>

<script setup lang="ts">
const props = defineProps<{
    textClass?: string,
    text?: string,
}>()

</script>