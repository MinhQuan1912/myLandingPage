<template>
    <div class="bg-primary-background px-2.5 py-12.5 lg:py-25 h-full ">
        <div class="xl:container mx-auto">
            <div class="flex gap-5 xs:gap-7.5 lg:gap-17.5 flex-col">
                <div class="p-2.5 flex flex-col lg:flex-row gap-7.5 lg:gap-11.25 items-center relative sm:static">
                    <div class="w-69 xs:w-61/100 lg:min-w-39/100 sm:relative">
                        <img class="w-full object-cover"
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/benefit-img.png">
                        <base-logo-wheel addition-class="xs:w-30 xs:h-30"
                            class="absolute top-2.5 xs:top-0 right-2.5 xs:right-0"
                            background="var(--color-primary-orange)"
                            imageLink="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/about-section-heading-icon-cbd.svg">
                        </base-logo-wheel>
                    </div>
                    <div class="flex flex-col gap-2.5 lg:gap-3.75 h-full">
                        <base-text-content 
                            title="Benefits of Oil" 
                            heading1="Unlock nature's power amazing"
                            heading2=" benefits of essential oils">
                        </base-text-content>
                        <div class="grid grid-cols-1 xs:grid-cols-2 gap-7.5 h-full mt-2.5">
                            <div
                                class="p-5 lg:p-7.5 flex flex-col justify-between gap-2.5 xs:gap-5 bg-white rounded-[20px] order-1">
                                <base-icon-content type="w-15 h-15" 
                                    title="Natural Healing & Wellness" 
                                    desc="Supports overall health, immunity, and promotes
                                        well-being.">
                                    <template #icon>
                                        <icons-svg-bottle1 addition-class="w-8.75 h-8.75"/>
                                    </template>
                                </base-icon-content>
                            </div>
                            <div class="p-5 lg:p-7.5 flex flex-col justify-between gap-2.5 xs:gap-5 order-2">
                                <base-icon-content type="w-15 h-15"
                                    title="Skin & Beauty Care" 
                                    desc="Supports overall health, immunity, and promotes well-being.">
                                    <template #icon>
                                        <icons-svg-bottle2 addition-class="w-8.75 h-8.75"/>
                                    </template>
                                </base-icon-content>
                            </div>
                            <div
                                class="p-5 lg:p-7.5 flex flex-col justify-between gap-2.5 xs:gap-5 order-4 xs:order-3">
                                <base-icon-content type="w-15 h-15" 
                                    title="Home Purification" 
                                    desc="Supports overall health, immunity, and promotes well-being.">
                                    <template #icon>
                                        <icons-svg-bottle3 addition-class="w-8.75 h-8.75"/>
                                    </template>
                                </base-icon-content>
                            </div>
                            <div
                                class="p-5 lg:p-7.5 flex flex-col justify-between gap-2.5 xs:gap-5 bg-white rounded-[20px] order-3 xs:order-4">
                                <base-icon-content type="w-15 h-15" 
                                    title="Non-Toxic & Eco-Friendly" 
                                    desc="Supports overall health, immunity, and promotes well-being.">
                                    <template #icon>
                                        <icons-svg-bottle4 addition-class="w-8.75 h-8.75"/>
                                    </template>
                                </base-icon-content>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="w-full border-t border-[#0A2C0F1A] p-2.5 pt-7.5 xs:pt-10 lg:pt-20 flex flex-wrap lg:flex-nowrap gap-y-3.75 xs:gap-y-7.5">
                    <div
                        class="w-full xs:w-1/2 lg:w-32/100 flex gap-2.5 lg:gap-5 items-center xs:border-r border-[#0A2C0F1A] xs:pr-12.5 pb-3.75 xs:pb-0 border-b xs:border-b-0">
                        <base-icon-content type="bg-transparent" text-group="!gap-1.25" 
                            title="Active Member"
                            desc="Dedicated to sharing oil benefits.">
                            <template #icon>
                                <icons-svg-active-member/>
                            </template>
                        </base-icon-content>
                    </div>
                    <div
                        class="w-full xs:w-1/2 lg:w-36/100 flex gap-2.5 lg:gap-5 items-center lg:border-r border-[#0A2C0F1A] xs:pl-12.5 lg:px-12.5 pb-3.75 xs:pb-0 border-b xs:border-b-0">
                        <base-icon-content type="bg-transparent" text-group="!gap-1.25" 
                            title="Project Complete"
                            desc="Successfully delivered quality oil.">
                            <template #icon>
                                <icons-svg-project-complete/>
                            </template>
                        </base-icon-content>
                    </div>
                    <div
                        class="w-full xs:w-1/2 lg:w-32/100 flex gap-2.5 lg:gap-5 items-center lg:pl-12.5 lg:border-r border-[#0A2C0F1A]">
                        <base-icon-content type="bg-transparent" text-group="!gap-1.25" 
                            title="Product Reward"
                            desc="Earn rewards for oil purchases.">
                            <template #icon>
                                <icons-svg-product-reward/>
                            </template>
                        </base-icon-content>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>

</script>
