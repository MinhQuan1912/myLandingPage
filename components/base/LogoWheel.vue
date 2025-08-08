<template>
    <div class="inline-block">
        <svg class="w-22.5 h-22.5" :class="props.additionClass" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="70" :fill="props.background" />
            <defs>
                <path id="circlePath" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
            </defs>

            <text font-size="14" font-family="Plus Jakarta Sans" font-weight="600" letter-spacing="0.07em" :fill="props.fill">
                <textPath href="#circlePath">
                    PREMIUM QUALITY * PREMIUM QUALITY *
                </textPath>
            </text>
            <image :href="props.imageLink" x="40" y="40" width="60" height="60" />
        </svg>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps < {
    fill?: string,
    background?: string,
    imageLink?: string,
    additionClass?:string,
} > (), {
    fill: 'white',
    background: 'transparent',
    imageLink: 'https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/premium-quality-circle.svg',
    additionClass:''
})
</script>

<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

svg {
    animation: spin 15s linear infinite;
    transform-origin: center;
}
</style>
