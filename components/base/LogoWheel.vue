<template>
    <div style="display:inline-block" :class="addition">
        <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r="70" :fill="background" />
            <defs>
                <path id="circlePath" d="M70,70 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
            </defs>

            <text font-size="14" font-family="Plus Jakarta Sans" font-weight="600" letter-spacing="0.07em" :fill="fill">
                <textPath href="#circlePath">
                    PREMIUM QUALITY * PREMIUM QUALITY *
                </textPath>
            </text>
            <image :href="imageLink" x="40" y="40" width="60" height="60" />
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    fill: {
        type: String,
        default: 'white'
    },
    background: {
        type: String,
        default: 'transparent'
    },
    imageLink: {
        type: String,
        default: 'https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/premium-quality-circle.svg'
    },
    addition: {
        type: String,
        default:''
    }
})
</script>

<style scoped></style>
