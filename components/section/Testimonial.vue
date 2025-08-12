<template>
    <div class="testimonial">
        <div class="xl:container mx-auto">
            <div class="py-12.5 lg:py-25 flex flex-col text-white gap-2.5 3xs:gap-5 lg:gap-15">
                <div class="p-2.5 flex flex-col lg:flex-row lg:items-center gap-1.25 lg:gap-0">
                    <div class="flex-1 lg:pr-7.5 flex flex-col gap-2.5 lg:gap-3.75">
                        <base-text-content h1Class="text-white" spanClass="text-white" title="Testimonials"
                            heading1="Real reviews trusted quality" heading2=" happy customers" titleClass="text-white">
                        </base-text-content>
                    </div>
                    <div class="flex-1 flex lg:justify-end items-center gap-12.5 lg:gap-20">
                        <icons-svg-google addition-class="w-10 lg:w-12.5 h-10 lg:h-12.5" />
                        <div class="flex flex-col gap-2.5">
                            <icons-five-star></icons-five-star>
                            <div class="font-plus-jakarta-sans opacity-80">
                                <p>1000+ Our Happy Customer Review</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2.5 flex flex-col lg:flex-row items-center gap-7.5 lg:gap-0">
                    <div class="w-full">
                        <img class="rounded-[20px] w-full object-cover aspect-[1/1.05] sm:aspect-[1/0.6] md:aspect-[1/1.114]"
                            src="/images/testimonial-image.jpg">
                    </div>
                    <div class="lg:pl-12.5 w-full lg:w-70/100">
                        <!-- <swiper :modules="[Navigation, Autoplay]"
                            :navigation="{ nextEl: '.testimonial__nav-next', prevEl: '.testimonial__nav-prev' }"
                            :slides-per-view="2" :loop="true" :autoplay="{ delay: 3000 }" :breakpoints="{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 }
                            }" space-between="30">
                            <swiper-slide class=" lg:max-w-102"
                                v-for="(testimonial, index) in testimonials" :key="index">
                                <icons-five-star />
                                <p
                                    class="pb-7.5 mt-3.75 lg:mt-5 mb-5 lg:mb-7.5 lg:text-lg font-plus-jakarta-sans font-medium border-b border-b-[#ffffff1A]">
                                    {{
                                    testimonial.content }}</p>
                                <div class="flex justify-between items-center">
                                    <div class="flex gap-3.75">
                                        <div>
                                            <img class="rounded-md" :src="testimonial.image" alt="Author image" />
                                        </div>
                                        <div class="flex flex-col gap-0.75 font-plus-jakarta-sans">
                                            <h3 class="text-xl font-bold">{{ testimonial.name }}</h3>
                                            <p>{{ testimonial.job }}</p>
                                        </div>
                                    </div>
                                    <icons-svg-double-quote/>
                                </div>
                            </swiper-slide>
                        </swiper> -->
                        <client-only>
                            <div class="overflow-hidden">
                                <div class="flex" :style="{ 'transform': `translateX(-${translateX}%)` }"
                                    :class="{ 'transition-transform duration-600 ease-in-out': isAnimating }"
                                    @transitionend="onTransitionEnd">
                                    <div v-for="(slide, index) in slideShowed" :key="index"
                                        :style="{ flex: `0 0 ${100 / slidesPerView}%` }">
                                        <icons-five-star />
                                        <p
                                            class="pr-7.5 pb-7.5 mt-3.75 lg:mt-5 mb-5 lg:mb-7.5 lg:text-lg font-plus-jakarta-sans font-medium border-b border-b-[#ffffff1A]">
                                            {{ slide?.content }}
                                        </p>
                                        <div class="flex justify-between items-center pl-0.25 pr-7.5">
                                            <div class="flex gap-3.75">
                                                <div class="w-12.5 h-12.5">
                                                    <img class="rounded-md w-full h-full object-cover"
                                                        :src="slide?.image" alt="Author image" />
                                                </div>
                                                <div class="flex flex-col gap-0.75 font-plus-jakarta-sans">
                                                    <h3 class="text-xl font-bold">{{ slide?.name }}</h3>
                                                    <p>{{ slide?.job }}</p>
                                                </div>
                                            </div>
                                            <icons-svg-double-quote />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="mt-8 lg:mt-12.5 flex justify-center items-center gap-20 xs:gap-5 md:gap-65 lg:gap-5">
                                <u-button @click="handlePrevSlide"
                                    class="testimonial__nav-prev p-0 w-10 h-10 rounded-full bg-[#ffffff1A] flex justify-center items-center cursor-pointer hover:bg-primary-orange">
                                    <div class="-rotate-135">
                                        <icons-svg-arrow2 addition-class="w-4 h-4" />
                                    </div>
                                </u-button>
                                <u-button @click="handleNextSlide"
                                    class="testimonial__nav-next p-0 w-10 h-10 rounded-full bg-[#ffffff1A] flex justify-center items-center cursor-pointer hover:bg-primary-orange">
                                    <div class="rotate-45">
                                        <icons-svg-arrow2 addition-class="w-4 h-4" />
                                    </div>
                                </u-button>
                            </div>
                        </client-only>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules';
const testimonials = ref([
    {
        name: "Jenny Wilson",
        job: "Aromatherapist",
        image: "/images/author-1.jpg",
        content: '"These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!"'
    },
    {
        name: "Michael Carter",
        job: "Aromatherapist",
        image: "/images/author-3.jpg",
        content: '"These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!"'
    },
    {
        name: "Sophia Reynolds",
        job: "Herbalist",
        image: "/images/author-2.jpg",
        content: '"These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!"'
    }
])
const current = ref(0)
const isMobile = ref(false)
const translateX = ref(50)
const isAnimating = ref(false)
const slidesPerView = computed(() => {
    if (isMobile.value) {
        return 1
    }
    return 2
})
let direction = 0
const slideShowed = computed(() => {
    const result = []
    for (let i = -1; i < testimonials.value.length; i++) {
        let slideIndex = (current.value + i + testimonials.value.length) % testimonials.value.length
        result.push(testimonials.value[slideIndex])
    }
    return result
})

function checkMobile() {
    isMobile.value = window.innerWidth < 768
}

function handlePrevSlide() {
    direction = -1
    isAnimating.value = true
    translateX.value = isMobile.value ? 100 : 0
}
function handleNextSlide() {
    direction = 1
    isAnimating.value = true
    translateX.value = 100
}
function onTransitionEnd() {
    isAnimating.value = false
    current.value = (current.value + direction + testimonials.value.length) % testimonials.value.length
    translateX.value = isMobile.value ? 0 : 50
    console.log(translateX.value)
}
onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})

</script>
<style lang="scss" scoped>
.testimonial {
    padding-inline: 10px;
    background-color: var(--color-primary-text);
    background-image: url(/images/testimonial-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
