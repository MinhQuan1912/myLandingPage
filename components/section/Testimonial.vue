<template>
    <div class="testimonial">
        <div class="testimonial__content container">
            <div class="testimonial__header">
                <div class="testimonial__header-text">
                    <base-text-content h1Class="testimonial__h1-class" titleClass="testimonial__title-class"
                        spanClass="testimonial__span-class">
                        <template #title>Testimonials</template>
                        <template #heading1>Real reviews trusted quality</template>
                        <template #heading2>happy customers</template>
                    </base-text-content>
                </div>
                <div class="testimonial__header-review">
                    <div class="testimonial__header-review-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <g clip-path="url(#clip0_461_39675)">
                                <path
                                    d="M11.3467 30.7129L9.60625 37.2102L3.24502 37.3447C1.34395 33.8187 0.265625 29.7844 0.265625 25.4973C0.265625 21.3517 1.27383 17.4423 3.06094 14H3.0623L8.72559 15.0383L11.2064 20.6676C10.6872 22.1813 10.4042 23.8063 10.4042 25.4973C10.4044 27.3324 10.7368 29.0907 11.3467 30.7129Z"
                                    fill="#FBBB00"></path>
                                <path
                                    d="M49.829 20.8242C50.1161 22.3365 50.2658 23.8983 50.2658 25.4945C50.2658 27.2844 50.0776 29.0303 49.7191 30.7144C48.5022 36.4451 45.3222 41.4492 40.917 44.9904L40.9156 44.9891L33.7824 44.6251L32.7729 38.3229C35.6959 36.6086 37.9803 33.9259 39.1836 30.7144H25.8154V20.8242H39.3786H49.829Z"
                                    fill="#518EF8"></path>
                                <path
                                    d="M40.9154 44.9897L40.9168 44.9911C36.6325 48.4348 31.1901 50.4952 25.2657 50.4952C15.7451 50.4952 7.46768 45.1738 3.24512 37.3428L11.3468 30.7109C13.458 36.3455 18.8935 40.3565 25.2657 40.3565C28.0047 40.3565 30.5707 39.6161 32.7726 38.3235L40.9154 44.9897Z"
                                    fill="#28B446"></path>
                                <path
                                    d="M41.2227 6.25156L33.1237 12.882C30.8449 11.4576 28.1512 10.6348 25.2652 10.6348C18.7487 10.6348 13.2116 14.8298 11.2062 20.6664L3.06191 13.9988H3.06055C7.22129 5.97686 15.6031 0.496094 25.2652 0.496094C31.3312 0.496094 36.893 2.65684 41.2227 6.25156Z"
                                    fill="#F14336"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_461_39675">
                                    <rect width="50" height="50" fill="white" transform="translate(0.265625 0.496094)">
                                    </rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="testimonial__header-review-content">
                        <icons-five-star></icons-five-star>
                        <div class="testimonial__header-review-content-text">
                            <p>1000+ Our Happy Customer Review</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonial__body">
                <div class="testimonial__body-image">
                    <img
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/testimonial-image.jpg">
                </div>
                <div class="testimonial__body-reviews">
                    <swiper :modules="[Navigation, Autoplay]"
                        :navigation="{ nextEl: '.testimonial__nav-next', prevEl: '.testimonial__nav-prev' }"
                        :slides-per-view="2" :loop="true" :autoplay="{ delay: 3000 }" :breakpoints="{
                            0: { slidesPerView: 1 },
                            426: { slidesPerView: 2 }
                        }">
                        <swiper-slide class="testimonial__slide">
                            <icons-five-star></icons-five-star>
                            <p class="testimonial__slide-content">"These oil droppers are perfect for my essential oil
                                blends! The precision and
                                outstanding of Highly recommend many dropper bottles, but these are by far the best.
                                No leaks, no waste—just pure convenience!"</p>
                            <div class="testimonial__slide-bio">
                                <div class="testimonial__author">
                                    <div class="testimonial__author-avatar">
                                        <img
                                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/author-1.jpg">
                                    </div>
                                    <div class="testimonial__author-detail">
                                        <h3 class="testimonial__author-name">Jenny Wilson</h3>
                                        <p class="testimonial__author-job">Aromatherapist</p>
                                    </div>
                                </div>
                                <div class="testimonial__slide-bio-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path
                                            d="M6.18748 18.0357C5.56875 19.5919 4.59377 21.1294 3.29063 22.6107C2.87813 23.0795 2.82188 23.7544 3.15937 24.2794C3.4219 24.6919 3.85312 24.9169 4.32187 24.9169C4.45312 24.9169 4.58439 24.9076 4.71565 24.8607C7.47185 24.0544 13.9125 21.1951 14.0907 12.0263C14.1562 8.49196 11.5688 5.45447 8.20312 5.10759C6.33751 4.92008 4.48128 5.52942 3.10312 6.76693C1.72503 8.01382 0.9375 9.79509 0.9375 11.6513C0.9375 14.7451 3.13128 17.4545 6.18748 18.0357Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M23.1665 5.10759C21.3102 4.92008 19.4539 5.52942 18.0758 6.76693C16.6977 8.01382 15.9102 9.79509 15.9102 11.6513C15.9102 14.7451 18.1039 17.4544 21.1602 18.0357C20.5414 19.5919 19.5664 21.1294 18.2633 22.6107C17.8508 23.0794 17.7945 23.7544 18.1321 24.2794C18.3946 24.6919 18.8258 24.9169 19.2946 24.9169C19.4258 24.9169 19.557 24.9076 19.6883 24.8607C22.4446 24.0544 28.8852 21.1951 29.0633 12.0263V11.8951C29.0633 8.41694 26.504 5.45447 23.1665 5.10759Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="testimonial__slide">
                            <icons-five-star></icons-five-star>
                            <p class="testimonial__slide-content">"These oil droppers are perfect for my essential oil
                                blends! The precision and
                                outstanding of Highly recommend many dropper bottles, but these are by far the best.
                                No leaks, no waste—just pure convenience!"</p>
                            <div class="testimonial__slide-bio">
                                <div class="testimonial__author">
                                    <div class="testimonial__author-avatar">
                                        <img
                                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/author-3.jpg">
                                    </div>
                                    <div class="testimonial__author-detail">
                                        <h3 class="testimonial__author-name">Michael Carter</h3>
                                        <p class="testimonial__author-job">Aromatherapist</p>
                                    </div>
                                </div>
                                <div class="testimonial__slide-bio-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path
                                            d="M6.18748 18.0357C5.56875 19.5919 4.59377 21.1294 3.29063 22.6107C2.87813 23.0795 2.82188 23.7544 3.15937 24.2794C3.4219 24.6919 3.85312 24.9169 4.32187 24.9169C4.45312 24.9169 4.58439 24.9076 4.71565 24.8607C7.47185 24.0544 13.9125 21.1951 14.0907 12.0263C14.1562 8.49196 11.5688 5.45447 8.20312 5.10759C6.33751 4.92008 4.48128 5.52942 3.10312 6.76693C1.72503 8.01382 0.9375 9.79509 0.9375 11.6513C0.9375 14.7451 3.13128 17.4545 6.18748 18.0357Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M23.1665 5.10759C21.3102 4.92008 19.4539 5.52942 18.0758 6.76693C16.6977 8.01382 15.9102 9.79509 15.9102 11.6513C15.9102 14.7451 18.1039 17.4544 21.1602 18.0357C20.5414 19.5919 19.5664 21.1294 18.2633 22.6107C17.8508 23.0794 17.7945 23.7544 18.1321 24.2794C18.3946 24.6919 18.8258 24.9169 19.2946 24.9169C19.4258 24.9169 19.557 24.9076 19.6883 24.8607C22.4446 24.0544 28.8852 21.1951 29.0633 12.0263V11.8951C29.0633 8.41694 26.504 5.45447 23.1665 5.10759Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="testimonial__slide">
                            <icons-five-star></icons-five-star>
                            <p class="testimonial__slide-content">"These oil droppers are perfect for my essential oil
                                blends! The precision and
                                outstanding of Highly recommend many dropper bottles, but these are by far the best.
                                No leaks, no waste—just pure convenience!"</p>
                            <div class="testimonial__slide-bio">
                                <div class="testimonial__author">
                                    <div class="testimonial__author-avatar">
                                        <img
                                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/author-2.jpg">
                                    </div>
                                    <div class="testimonial__author-detail">
                                        <h3 class="testimonial__author-name">Sophia Reynolds</h3>
                                        <p class="testimonial__author-job">Herbalist</p>
                                    </div>
                                </div>
                                <div class="testimonial__slide-bio-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        fill="none">
                                        <path
                                            d="M6.18748 18.0357C5.56875 19.5919 4.59377 21.1294 3.29063 22.6107C2.87813 23.0795 2.82188 23.7544 3.15937 24.2794C3.4219 24.6919 3.85312 24.9169 4.32187 24.9169C4.45312 24.9169 4.58439 24.9076 4.71565 24.8607C7.47185 24.0544 13.9125 21.1951 14.0907 12.0263C14.1562 8.49196 11.5688 5.45447 8.20312 5.10759C6.33751 4.92008 4.48128 5.52942 3.10312 6.76693C1.72503 8.01382 0.9375 9.79509 0.9375 11.6513C0.9375 14.7451 3.13128 17.4545 6.18748 18.0357Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M23.1665 5.10759C21.3102 4.92008 19.4539 5.52942 18.0758 6.76693C16.6977 8.01382 15.9102 9.79509 15.9102 11.6513C15.9102 14.7451 18.1039 17.4544 21.1602 18.0357C20.5414 19.5919 19.5664 21.1294 18.2633 22.6107C17.8508 23.0794 17.7945 23.7544 18.1321 24.2794C18.3946 24.6919 18.8258 24.9169 19.2946 24.9169C19.4258 24.9169 19.557 24.9076 19.6883 24.8607C22.4446 24.0544 28.8852 21.1951 29.0633 12.0263V11.8951C29.0633 8.41694 26.504 5.45447 23.1665 5.10759Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="testimonial__nav">
                        <u-button class="testimonial__nav-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.45px" height="16px" viewBox="0 0 16 9">
                                <path fill="#fff"
                                    d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" />
                                <path fill="#fff"
                                    d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" />
                            </svg>
                        </u-button>
                        <u-button class="testimonial__nav-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.45px" height="16px" viewBox="0 0 16 9">
                                <path fill="#fff"
                                    d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5" />
                                <path fill="#fff"
                                    d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" />
                            </svg>
                        </u-button>
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
</script>

<style lang="scss" scoped>
.testimonial {
    background-color: #0a2c0f;
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/testimonial-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.testimonial__content {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    color: #fff;
}


.testimonial__header {
    padding: 10px;
    display: flex;
    align-items: center;

    .testimonial__header-text {
        flex: 1;
        padding-right: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .testimonial__header-review {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 80px;

        .testimonial__header-review-content {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .testimonial__header-review-content-text {
                font-size: 16px;
                font-weight: 400;
                font-family: "Plus Jakarta Sans";
            }
        }
    }
}


.testimonial__body {
    padding: 10px;
    display: flex;
    align-items: center;

    .testimonial__body-image {
        img {
            border-radius: 20px;
        }
    }

    .testimonial__body-reviews {
        padding-left: 50px;
        width: 70%;
    }
}

.testimonial__slide {
    max-width: 400px;
    margin-right: 30px;

    .testimonial__slide-content {
        padding-bottom: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7em;
        border-bottom: 1px solid #ffffff1a;
    }

    .testimonial__slide-bio {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.testimonial__author {
    display: flex;
    gap: 15px;

    .testimonial__author-avatar {
        img {
            border-radius: 6px;
        }
    }
}

.testimonial__author-detail {
    display: flex;
    flex-direction: column;
    gap: 3px;
    font-family: "Plus Jakarta Sans";

    .testimonial__author-name {
        font-size: 20px;
        font-weight: 700;
    }

    .testimonial__author-job {
        font-size: 16px;
        font-weight: 400;
    }
}


.testimonial__nav {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    .testimonial__nav-next,
    .testimonial__nav-prev {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ffffff1a;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {
            background-color: var(--primary-color);
        }
    }
}

:deep(.testimonial__h1-class) {
    color: #fff;
}


@media (max-width: 1024px) {
    .testimonial__content {
        padding: 50px 0;
        gap: 20px;
    }

    .testimonial__header {
        flex-direction: column;
        align-items: flex-start;

        &-text {
            gap: 10px;
            padding: 0 !important;

            :deep(.testimonial__h1-class) {
                font-size: 36px;
            }

            :deep(.testimonial__title-class) {
                font-size: 16px
            }

            :deep(.testimonial__span-class) {
                font-size: 36px;
            }
        }

        &-review {
            margin-top: -10px;
            gap: 60px !important;
        }
    }

    .testimonial__body {
        flex-direction: column;
        gap: 30px;

        &-image {
            width: 100%;

            img {
                width: 100%;
            }
        }

        &-reviews {
            width: 100% !important;
            padding: 0 !important;
        }
    }

    .testimonial__slide {
        max-width: 477px;

        &-content {
            margin-top: 10px !important;
            margin-bottom: 20px !important;
        }
    }

    .testimonial__nav {
        margin-top: 20px;
        gap: 250px;
    }
}

@media (max-width: 768px) {
    .testimonial__slide {
        max-width: 349px;
    }

    .testimonial__nav {
        gap: 30px !important;
    }
}

@media (max-width: 426px) {
    :deep(.testimonial__span-class) {
        font-size: 26px !important;
    }

    :deep(.testimonial__h1-class) {
        font-size: 26px !important;
    }
    .testimonial__header-review-content-text {
        font-size: 14px !important;
    }
    .testimonial__slide {
        max-width: 100%;
        margin-right: 0 !important;
    }
}
</style>