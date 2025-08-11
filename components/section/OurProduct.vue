<template>
    <div class="bg-primary-background px-2.5">
        <div class="xl:container mx-auto">
            <div class="py-12.5 flex flex-col gap-2.5 sm:gap-5 lg:py-25">
                <div class="p-2.5 flex flex-wrap flex-col lg:flex-row lg:mb-5">
                    <div class="flex w-full lg:w-52/100 flex-wrap gap-2.5 flex-col">
                        <base-text-content title="Our Product" heading1="Premium droppers for pure,"
                            heading2=" precise application">
                        </base-text-content>
                    </div>
                    <div class="flex-1 flex items-center lg:justify-end">
                        <base-button-link fillColor="#000000" arrow="bg-[#0A2C0F1A] hover:bg-[#0A2C0F1A]" text="View All Products"
                            addition-class="group-hover:text-white hover:text-white" 
                            addition-span="!bg-black"/>
                    </div>
                </div>
                <div class="p-2.5 grid gap-7.5 grid-cols-1 xs:grid-cols-2 m:grid-cols-4 ">
                    <div class="flex flex-col justify-between gap-2.5 items-center" v-for="(product, index) in products"
                        :key="index">
                        <div class="unded-[20px] w-full h-full ">
                            <img class="w-full h-full object-cover rounded-[20px]" :src="product.img"
                                alt="Product Thumb">
                        </div>
                        <h2 class="text-primary-text font-plus-jakarta-sans text-lg font-bold">{{ product.name }}</h2>
                        <p class="text-primary-orange font-bold font-plus-jakarta-sans">{{ product.price }}</p>
                    </div>
                </div>
                <div class="p-2.5 flex justify-center items-start gap-1.25 flex-col xs:flex-row sm:items-center">
                    <div
                        class="bg-primary-orange border-none rounded-[100px] flex justify-center items-center text-white font-plus-jakarta-sans px-2.5 text-sm font-semibold">
                        Free</div>
                    <div>
                        <p class="text-secondary-text font-plus-jakarta-sans">Let’s make something great work
                            together.<strong><a class="text-primary-orange font-lora">Get Free Quote</a></strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const products = ref([
    {
        img: "/images/product-img-1.jpg",
        name: "Eco GLow Dropper",
        price: "$16.00"
    },
    {
        img: "/images/product-img-2.jpg",
        name: "Eco GLow Dropper",
        price: "$35.00"
    },
    {
        img: "/images/product-img-3.jpg",
        name: "Eco GLow Dropper",
        price: "$45.00"
    },
    {
        img: "/images/product-img-4.jpg",
        name: "Eco GLow Dropper",
        price: "$62.00"
    }
])

</script>

