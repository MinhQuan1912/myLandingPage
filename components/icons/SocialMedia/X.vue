<template>
    <div
        class="border-white border rounded-full p-1.25 w-9 h-9 flex justify-center text-white cursor-pointer items-center transition-all duration-300 hover:border-primary-orange hover:text-primary-orange">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" :class="additionClass" viewBox="0 0 512 512">
            <path fill="currentColor"
                d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
        </svg>
    </div>
</template>

<script setup>
defineProps({
    additionClass: {
        type: String,
        default: ''
    }
})
</script>
