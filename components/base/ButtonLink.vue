<template>
    <div class="flex group ">
        <u-button
            class="relative bg-primary-orange border-none rounded-full flex justify-center items-center
             text-white font-plus-jakarta-sans px-5 lg:px-7.5 py-3.25 font-bold whitespace-nowrap text-base
              hover:bg-transparent group-hover:bg-transparent hover:text-black group-hover:text-black cursor-pointer transition-all duration-500 ease-in-out"
              :class="props.additionClass">
            <span class="relative z-10">{{ props.text }}</span>
            <span class="absolute z-0 left-1/2 top-0 w-0 group-hover:w-full -translate-x-1/2
             transition-all duration-500 bg-white rounded-full h-full" :class="additionSpan">
            </span>
        </u-button>
        <u-button
            class="rounded-full border-none flex justify-center items-center w-12.5 h-12.5 flex-shrink-0 hover:bg-white/10 cursor-pointer group-hover:rotate-45 transition-all duration-500 ease-in-out"
            :class="props.arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :fill="props.fillColor"
                    d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z" />
            </svg>
        </u-button>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    fillColor?: string,
    arrow?: string,
    text?: string,
    additionClass?: string,
    additionSpan?:string,
}>(), {
    fillColor: 'white',
    arrow: 'bg-white/10',
    text: '',
    additionClass: '',
    additionSpan:''
})
</script>
