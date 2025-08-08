<template>
    <div class="bg-primary-background px-2.5">
        <div class="xl:container mx-auto">
            <div class="py-12.5 flex gap-2.5 flex-wrap items-center sm:flex-col lg:flex-row lg:gap-0 xl:py-25">
                <div class="p-2.5 w-full relative sm:w-3/5 lg:w-1/2 lg:pr-20">
                    <img class="w-full h-full object-cover"
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/about-image.png">
                    <base-logo-wheel class="absolute top-2 right-2 lg:right-20 lg:top-4" background="#d1a132"
                        addition="sm:w-27.5 lg:w-32.5 sm:h-27.5 lg:h-32.5"
                        imageLink="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/about-section-heading-icon-cbd.svg">
                    </base-logo-wheel>
                </div>
                <div class="p-2.5 flex-1 flex flex-col gap-2.5 lg:gap-3.75">
                    <base-text-content contentClass="text-base font-plus-jakarta-sans text-secondary-text mb-5"
                        title="About Us" heading1="Pure essence precise drops" heading2=" ultimate care always" content="We believe that every drop matters. Our premium oil dropper bottles are designed
                            to deliver purity, precision, and care with every use.">
                        <ul class="flex flex-col gap-2.5 mb-5">
                            <base-icon-text text="Precision in every drop designed for perfect application"/>                           
                            <base-icon-text text="Leak-Proof & durable protecting your precious Oils with care"/>
                        </ul>
                        <div class="flex flex-wrap gap-7.5 w-full sm:flex-nowrap items-center">
                            <div class="flex flex-col gap-7.5 lg:gap-10 w-full sm:w-[calc(68%-15px)] ">
                                <div class="flex gap-3.75">
                                    <base-icon-content title="100% Organic & Pure" desc="Helping to restore balance and promote overall
                                            wellness.">
                                        <template #icon>
                                            <icons-svg-bottle1/>
                                        </template>
                                    </base-icon-content>
                                </div>
                                <base-button-link fillColor="#000000" arrow="bg-primary-text/10" text="About Us"
                                addition-class="group-hover:bg-black group-hover:text-white hover:bg-black hover:text-white"/>
                            </div>
                            <div class="p-5 bg-white rounded-[20px] w-full sm:w-[calc(32%-15px)]">
                                    <icons-svg-logo/>
                                <h3
                                    class="text-primary-text text-lg sm:text-xl font-bold font-plus-jakarta-sans mt-3.75 lg:text-xl">
                                    Nature's Best
                                    in Every Drop</h3>
                            </div>
                        </div>
                    </base-text-content>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>
