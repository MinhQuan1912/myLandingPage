<template>
    <div class="premium-dropper">
        <div class="xl:container mx-auto">
            <div class="py-12.5 lg:py-25 flex flex-col lg:flex-row items-center">
                <div class="w-full lg:w-62/100 flex flex-col gap-2.5 sm:gap-3.75 p-2.5 lg:pr-12.5">
                    <base-text-content title="Premium Dropper" heading1="Premium quality precsion design"
                        heading2=" pure performance">
                    </base-text-content>
                    <div
                        class="flex flex-col sm:flex-row sm:mt-2.5 mb-5 lg:mb-8.75 gap-7.5 sm:gap-0 items-start sm:items-center pb-7.5 lg:pb-12.5 border-b-[0.8px] border-[#0A2C0F1A]">
                        <div class="flex flex-col gap-5 sm:gap-7.5">
                            <p class="font-plus-jakarta-sans text-secondary-text">Our oil dropper bottles designed
                                precision, ensuring controlled application.</p>
                            <div class="max-w-52.5">
                                <base-button-link fillColor="#000000" arrow="bg-[#0A2C0F1A] hover:bg-[0A2C0F1A]"
                                    text="Expoire More" addition-class="group-hover:text-white hover:text-white"
                                    addition-span="!bg-black" />
                            </div>

                        </div>
                        <div class="flex flex-col justify-between gap-2.5 lg:gap-3.75 w-full sm:max-w-1/2">
                            <base-icon-text text="Easy And Mess-Free Oil Dispensing" />
                            <base-icon-text text="Prevents Spills And Waste." />
                            <base-icon-text text="Durable And Safe For Essential Oils." />
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between gap-7.5 flex-wrap">
                        <div class="flex-1 w-full relative overflow-hidden before:rounded-b-[20px] before:pointer-events-none before:w-full before:z-10 before:content-[''] before:bg-[linear-gradient(180deg,rgba(10,44,15,0)_61.32%,rgba(10,44,15,0.9)_100%)] before:absolute before:h-full before:bottom-0 before:left-0"
                            v-for="(item, index) in imageItems" :key="index">
                            <div class="w-full h-full rounded-[20px] overflow-hidden">
                                <img :src="item.src" :alt="item.text"
                                    class="w-full aspect-10/8 sm:aspect-auto object-cover hover:scale-[1.1] transition-all duration-400" />
                            </div>
                            <h3
                                class="absolute bottom-5 left-5 right-5 text-white text-xl font-bold text-center z-20 font-plus-jakarta-sans">
                                {{ item.text }}</h3>
                        </div>
                    </div>
                </div>
                <div class="p-2.5 w-full lg:w-38/100 flex flex-col relative">
                    <div class="w-full h-81.75 md:h-129 lg:h-175 flex">
                        <img class="w-full h-full object-cover rounded-[20px] brightness-80"
                            src="/images/products-intro-image.jpg">
                    </div>
                    <div class="absolute top-1/2 left-1/2 -translate-1/2">
                        <u-button @click="handleOpenVideo"
                            class="rounded-[50%] bg-black flex justify-center items-center w-17.5 h-17.5 hover:bg-primary-orange cursor-pointer transition-all duration-700 ease-in-out">
                            <icons-svg-close1 />
                        </u-button>
                    </div>
                    <div v-if="showVideo">
                        <div class="fixed inset-0 bg-[#0b0b0bc5] z-50 ">
                        </div>
                        <div class="fixed inset-0 z-50 flex items-center justify-center ">
                            <iframe class="w-[90%] max-w-225 aspect-video"
                                src="https://www.youtube.com/embed/Y-x0efG1seA?autoplay=1&mute=0&loop=1&playlist=Y-x0efG1seA"
                                frameborder="0" allowfullscreen allow="encrypted-media"></iframe>
                            <div @click="handleCloseVideo"
                                class="absolute top-5 right-5 w-11 h-11 flex justify-center items-center hover:bg-black border border-transparent rounded-full">
                                <icons-svg-arrow3 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const imageItems = [
    {
        src: "/images/premium-products-image-1.jpg",
        text: "Leak-Proof Seal",
    },
    {
        src: "/images/premium-products-image-2.jpg",
        text: "Leak-Proof Seal",
    },
    {
        src: "/images/premium-products-image-3.jpg",
        text: "Durable Glass",
    },
];
const showVideo = ref(false)
const handleOpenVideo = () => {
    showVideo.value = true
}
const handleCloseVideo = () => {
    showVideo.value = false
}
</script>
<style lang="scss" scoped>
.premium-dropper {
    background-image: url(/images/section-bg-shape-1.png);
    background-position: -40px 100%;
    background-repeat: no-repeat;
    background-size: auto;
    padding-inline: 10px;

    @media (max-width: 1024px) {
        background-position: -10px 100%;
        background-size: 100px auto
    }
}
</style>