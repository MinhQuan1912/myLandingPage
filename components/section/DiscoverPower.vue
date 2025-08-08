<template>
    <div class="discover-power">
        <div class="absolute inset-0 z-10 bg-[rgba(37,63,34,0.7)] pointer-events-none"></div>
        <div class="relative z-20">
            <div class="xl:container mx-auto">
                <div
                    class="pt-37.5 lg:pt-50 pb-15 flex justify-center items-center text-white flex-wrap gap-2.5 lg:gap-0">
                    <div class="p-2.5 flex flex-col gap-2.5 w-full lg:gap-3.75 lg:flex-1">
                        <base-text-content h1Class="!text-3xl text-white sm:!text-[45px] lg:!text-6xl"
                            spanClass="text-3xl sm:!text-[45px] lg:!text-6xl" 
                            titleClass="text-white"
                            contentClass="text-white" 
                            title="Discover The Power Of Premium"
                            heading1="Pure drops perfect precision"
                            heading2=" care you can trust." 
                            content="Experience the perfect balance of purity and precision with our premium oil
                                droppers Designed for effortless application, our high-quality droppers ensure accurate
                                dispensing, minimal waste, and maximum potency.">
                            <div class="flex gap-5 items-center mt-5 xl:mt-6.25 flex-wrap">
                                <base-button-link text="Purchase Now"/>
                                <div class="flex items-center">
                                    <div
                                        class="bg-primary-orange flex justify-center items-center border-none rounded-full w-12.5 h-12.5 mr-3.75">
                                        <icons-svg-phone/>
                                    </div>
                                    <div class="font-plus-jakarta-sans">
                                        <h3 class="text-lg mb-0.5 font-bold xs:text-xl">Call Us</h3>
                                        <p class="text-base font-normal">+91 - 123 468 963</p>
                                    </div>
                                </div>
                            </div>
                        </base-text-content>
                    </div>
                    <div class="p-2.5 sm:w-3/5 lg:w-1/2 lg:pr-13.75 lg:pl-18.75">
                        <div class="relative w-full">
                            <img class="w-full h-full object-cover"
                                src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-image.png">
                            <base-logo-wheel class="absolute top-0 left-0"
                                additionClass="w-25 xs:w-30 lg:!w-35 h-25 xs:h-30 lg:!h-35">
                            </base-logo-wheel>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="css" scoped>
.discover-power {
    position:relative;
    width: 100%;
    overflow: hidden;
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 10;
    padding-inline: 10px;
}
</style>
