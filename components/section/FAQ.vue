<template>
    <div class="bg-primary-background px-2.5">
        <div class="xl:container mx-auto">
            <div class="py-12.5 lg:py-25 flex flex-col lg:flex-row items-center gap-2.5 lg:gap-0">
                <div class="w-full lg:max-w-1/2 p-2.5 lg:pr-12.5 relative">
                    <div class="w-full h-full">
                        <img class="w-full aspect-100/98 md:aspect-100/65 m:aspect-100/104 rounded-[20px] object-cover"
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/faq-image.jpg">
                    </div>
                    <div
                        class="py-2.5 lg:py-3.75 px-3.75 lg:px-5 rounded-[10px] flex w-43.75 sm:w-50 justify-between items-center gap-2.5 bg-white absolute right-7.5 sm:right-10 lg:right-22.5 bottom-7.5 sm:bottom-10 lg:bottom-12.5">
                        <div>
                            <icons-svg-question />
                        </div>
                        <h3 class="text-primary-text text-sm xs:text-base leading-5 font-plus-jakarta-sans font-bold">Answers You
                            Need !</h3>
                    </div>
                </div>
                <div class="flex flex-col p-2.5 gap-2.5 lg:gap-3.75 w-full lg:w-auto">
                    <base-text-content title="FAQ's" heading1="Your questions," heading2=" our expert answers">
                    </base-text-content>
                    <div class="flex flex-col gap-7.5">
                        <u-collapsible v-for="(faq, index) in faqs" :key="index" :open="activeIndex === index"
                            @click="handleClick(index)">
                            <u-button class="w-full bg-white p-3.75 lg:py-4.5 lg:px-5 text-primary-text text-lg font-bold font-plus-jakarta-sans flex justify-between rounded-2xl
                                        data-[state=open]:bg-primary-orange 
                                          data-[state=open]:rounded-b-none
                                        data-[state=open]:border-b-[#ffffff1a]
                                        data-[state=open]:text-white
                                          cursor-pointer hover:bg-white
                                          transition-all duration-300 ease-in-out group
                                        " trailing-icon="dashicons:arrow-down-alt2"
                                :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-all duration-200' }">
                                <span class="text-start">{{ faq.question }}</span>
                            </u-button>
                            <template #content>
                                <div
                                    class="font-plus-jakarta-sans text-white pt-3.75 pr-12.5 pb-5 pl-5 bg-primary-orange rounded-b-2xl">
                                    <p>{{ faq.answer }}</p>
                                </div>
                            </template>
                        </u-collapsible>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
const faqs = ref([
    {
        question: "What is an oil dropper used for?",
        answer:
            "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
    },
    {
        question: "Are your dropper bottles leak-proof?",
        answer:
            "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
    },
    {
        question: "How do I clean my oil dropper bottle?",
        answer:
            "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
    },
    {
        question: "Do you offer bulk or wholesale options?",
        answer:
            "Yes, our dropper bottles are designed with secure, leak-proof seals to prevent spills and maintain product integrity.",
    },
])
const activeIndex = ref(null)
const handleClick = (index) => {
    if (activeIndex.value === index) {
        activeIndex.value = null
    }
    else {
        activeIndex.value = index
    }
}
</script>
