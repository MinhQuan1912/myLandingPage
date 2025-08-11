<template>
    <div class="premium-oil">
        <div class="xl:container mx-auto">
            <div class="flex flex-col lg:flex-row gap-y-2.5 items-center ">
                <div class="max-w-full lg:max-w-1/2 p-2.5 lg:pr-5 flex flex-col gap-2.5 lg:gap-7.5 items-center">
                    <h2 class="font-lora text-white italic text-4xl md:text-6xl text-center">Get 50% off <span
                            class="font-plus-jakarta-sans text-white text-[70px] lg:text-[100px] font-semibold not-italic">
                            Premium oil</span></h2>
                    <p class="opacity-80 font-plus-jakarta-sans text-white text-center mb-5 lg:mb-0">Porches Premium Oil
                        is crafted for those who value purity and excellence. Sourced from the finest
                        natural ingredients, our premium oil is carefully extracted to preserve its full potency</p>
                    <base-button-link arrow="bg-[#ffffff1A]" text="Purchase Now" />
                </div>
                <div class="p-2.5 pb-0 -mb-12.5 lg:-mb-25 sm:w-53/100 lg:w-auto">
                    <div class="w-full h-full">
                        <img class="w-full object-cover"
                            src="/images/cta-image.png">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.premium-oil {
    background-color: var(--color-primary-text);
    background-image: url(/images/section-bg-shape-2.png);
    background-position: calc(100% + 40px) 100%;
    background-size: auto;
    background-repeat: no-repeat;
    padding-inline: 10px;
    padding-block: 50px;

    @media(min-width: 1024px) {
        padding-block: 100px;
    }
}
</style>