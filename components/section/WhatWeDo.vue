<template>
    <div class="bg-primary-text px-2.5">
        <div class="xl:container mx-auto">
            <div class="flex flex-col lg:flex-row items-center py-12.5 lg:py-25 relative">
                <div class="flex-1 relative p-2.5 flex flex-col">
                    <div class="block top-0 left-0 mr-12.5">
                        <img class="rounded-[20px] w-full object-cover"
                            src="/images/what-we-image-1.jpg">
                    </div>
                    <div class="self-end w-62.5 xs:w-auto -mt-12.5 lg:-mt-22.5">
                        <img class="rounded-[20px] w-full object-cover"
                            src="/images/what-we-image-2.jpg">
                    </div>
                    <base-logo-wheel addition-class="w-27.5 xs:w-37.5 xs:w-45 h-27.5 xs:h-37.5 xs:h-45"
                        class="absolute left-7.5 xs:left-15 bottom-8.75 xs:bottom-13.5 p-1.5 md:p-2.5 bg-primary-text rounded-full z-20"
                        background="var(--color-primary-orange)"
                        imageLink="/images/about-section-heading-icon-cbd.svg">
                    </base-logo-wheel>
                </div>
                <div class="flex-1 relative flex flex-col justify-between p-2.5 lg:pl-10 gap-3.75">
                    <base-text-content h1Class="text-white" titleClass="text-white" title="What We Do ?"
                        heading1="Delivering precision, purity," heading2=" and care daily">
                    </base-text-content>
                    <div class="border-b border-[rgb(55,55,55)] flex flex-col gap-3.75 pb-7.5 lg:pb-10 ">
                        <base-icon-text textClass="text-white lg:text-xl !font-bold" text="Crafting Precision for Every Drop" />
                        <p class="text-white font-plus-jakarta-sans">We believe that precision matters. Our expertly
                            designed oil dropper bottles ensure controlled
                            dispensing allowing you to use just the right amount.</p>
                    </div>
                    <div class="lg:mt-7.5 flex flex-col gap-3.75 md:pb-10">
                        <base-icon-text textClass="text-white lg:text-xl !font-bold" text="Designed for Essential
                            Oils" />
                        <p class="text-white font-plus-jakarta-sans">We believe that precision matters. Our expertly
                            designed oil dropper bottles ensure controlled
                            dispensing allowing you to use just the right amount.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

