<template>
    <div class="bg-primary-background px-2.5">
        <div class="xl:container mx-auto">
            <div class="py-12.5 lg:py-25 flex flex-col gap-2.5 xs:gap-5 lg:gap-11.25">
                <div class="p-2.5 flex flex-col lg:flex-row lg:items-center">
                    <div class="lg:pr-7.5 flex gap-2.5 lg:gap-3.75 flex-1 flex-col">
                        <base-text-content title="Latest Blog" heading1="Latest insights, trends, and"
                            heading2=" expert tips">
                        </base-text-content>
                    </div>
                    <div class="flex-1 flex lg:justify-end">
                        <base-button-link fillColor="#000000" arrow="bg-[#0A2C0F1A] hover:bg-[#0A2C0F1A]"
                            text="View All Blog" addition-class="group-hover:text-white hover:text-white"
                            addition-span="!bg-black" />
                    </div>
                </div>
                <div class="p-2.5 flex flex-wrap gap-y-7.5">
                    <div v-for="(blog, index) in blogs" :key="index" class="xs:px-3.75 sm:w-1/2 lg:w-1/3 ">
                        <div class="rounded-[20px] bg-white font-plus-jakarta-sans mb-7.5 lg:mb-0 flex flex-col h-full group">
                            <div class="w-full aspect-[1/0.673] overflow-hidden rounded-t-[20px] cursor-pointer ">
                                <img :src="blog.image" alt="Blog image"
                                    class="object-cover h-full w-full group-hover:scale-[1.1] transition-all duration-500 ease-in-out" />
                            </div>
                            <div class="p-5 lg:p-6.25 flex flex-col flex-grow justify-between ">
                                <nuxt-link class="text-lg xs:text-xl font-bold lg:pb-7.5 text-primary-text cursor-pointer group-hover:text-primary-orange">
                                    {{ blog.title }}
                                </nuxt-link>
                                <div class="flex justify-between pt-5 lg:pt-7.5 border-t border-t-[#0A2C0F1A]">
                                    <div class="flex items-center gap-1.25">
                                        <icons-svg-calendar />
                                        <p>May 5, 2025</p>
                                    </div>
                                    <div
                                        class="flex gap-1.25 items-center group/icon cursor-pointer">
                                        <p
                                            class="font-bold text-primary-orange group-hover/icon:text-black transition-all duration-300">
                                            Read more</p>
                                        <div
                                            class="bg-primary-orange rounded-full w-6 h-6 flex justify-center items-center transition-all duration-300 group-hover/icon:rotate-45">
                                            <icons-svg-arrow2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const blogs = [
    {
        image: '/images/post-1.jpg',
        title: 'Glass vs. Plastic Droppers Which One is Right for You?',
        to: '/'
    },
    {
        image: '/images/post-2.jpg',
        title: 'Sustainable Beauty Why Reusable dropper are the future',
        to: '/'
    },
    {
        image: '/images/post-3.jpg',
        title: 'Science Behind Precision Droppers and Their Benefits',
        to: '/'
    }
]
</script>