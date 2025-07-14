<template>
    <div class="latest-blog">
        <div class="latest-blog__content container">
            <div class="latest-blog__header">
                <div class="latest-blog__header-text">
                    <base-text-content titleClass="latest-blog__title-class" h1Class="latest-blog__h1-class"
                        spanClass="latest-blog__span-class">
                        <template #title>Latest Blog</template>
                        <template #heading1>Latest insights, trends, and</template>
                        <template #heading2>expert tips</template>
                    </base-text-content>
                </div>
                <div class="latest-blog__header-action">
                    <base-button-link fillColor="#000000" arrow="arrow-latest-blog">View All Blog</base-button-link>
                </div>
            </div>
            <div class="latest-blog__list">
                <div class="latest-blog__list-items">
                    <div class="latest-blog__item">
                        <div class="latest-blog__item-image">
                            <img
                                src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/post-1.jpg">
                        </div>
                        <div class="latest-blog__item-content">
                            <div class="latest-blog__item-title">
                                <p>Glass vs. Plastic Droppers Which One is Right for You?</p>
                            </div>
                            <div class="latest-blog__item-footer">
                                <div class="latest-blog__item-date">
                                    <div class="latest-blog__item-date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                            viewBox="0 0 24 24">
                                            <path fill="#d1a132"
                                                d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                            <path fill="#d1a132" fill-rule="evenodd"
                                                d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p class="latest-blog__item-date-text">May 5, 2025</p>
                                </div>
                                <div class="latest-blog__item-action">
                                    <p class="latest-blog__item-action-text">Read more</p>
                                    <div class="latest-blog__item-action-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="#fff" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="3.8"
                                                d="M7 7h10m0 0v10m0-10L7 17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="latest-blog__list-items">
                    <div class="latest-blog__item">
                        <div class="latest-blog__item-image">
                            <img
                                src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/post-2.jpg">
                        </div>
                        <div class="latest-blog__item-content">
                            <div class="latest-blog__item-title">
                                <p>Sustainable Beauty Why Reusable dropper are the future</p>
                            </div>
                            <div class="latest-blog__item-footer">
                                <div class="latest-blog__item-date">
                                    <div class="latest-blog__item-date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                            viewBox="0 0 24 24">
                                            <path fill="#d1a132"
                                                d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                            <path fill="#d1a132" fill-rule="evenodd"
                                                d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p class="latest-blog__item-date-text">May 5, 2025</p>
                                </div>
                                <div class="latest-blog__item-action">
                                    <p class="latest-blog__item-action-text">Read more</p>
                                    <div class="latest-blog__item-action-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="#fff" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="3.8"
                                                d="M7 7h10m0 0v10m0-10L7 17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="latest-blog__list-items">
                    <div class="latest-blog__item">
                        <div class="latest-blog__item-image">
                            <img
                                src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/post-3.jpg">
                        </div>
                        <div class="latest-blog__item-content">
                            <div class="latest-blog__item-title">
                                <p>Science Behind Precision Droppers and Their Benefits</p>
                            </div>
                            <div class="latest-blog__item-footer">
                                <div class="latest-blog__item-date">
                                    <div class="latest-blog__item-date-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px"
                                            viewBox="0 0 24 24">
                                            <path fill="#d1a132"
                                                d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.58c-1.44.115-2.384.397-3.078 1.092c-.695.694-.977 1.639-1.093 3.078h19.842c-.116-1.44-.398-2.384-1.093-3.078c-.694-.695-1.639-.977-3.078-1.093V2.5a.75.75 0 0 0-1.5 0v1.513C15.585 4 14.839 4 14 4h-4c-.839 0-1.585 0-2.25.013z" />
                                            <path fill="#d1a132" fill-rule="evenodd"
                                                d="M2 12c0-.839 0-1.585.013-2.25h19.974C22 10.415 22 11.161 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14zm15 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-4-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p class="latest-blog__item-date-text">May 5, 2025</p>
                                </div>
                                <div class="latest-blog__item-action">
                                    <p class="latest-blog__item-action-text">Read more</p>
                                    <div class="latest-blog__item-action-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="#fff" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="3.8"
                                                d="M7 7h10m0 0v10m0-10L7 17" />
                                        </svg>
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

</script>

<style lang="scss" scoped>
:deep(.arrow-latest-blog) {
    background-color: #0A2C0F1A;
}

.latest-blog {
    background-color: var(--global-bg-color);
}

.latest-blog__content {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    gap: 45px;
}

.latest-blog__header {
    padding: 10px;
    display: flex;
    align-items: center;

    .latest-blog__header-text {
        padding-right: 30px;
        display: flex;
        gap: 15px;
        flex-direction: column;
        flex: 1;
    }

    .latest-blog__header-action {
        flex: 1;
        display: flex;
        justify-content: flex-end;
    }
}

.latest-blog__list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}

.latest-blog__list-items {
    padding: 0 15px;
    width: 33.33%;

}

.latest-blog__item {
    border-radius: 20px;
    background-color: #fff;
    font-family: "Plus Jakarta Sans";


    .latest-blog__item-image {
        img {
            object-fit: cover;
            border-radius: 20px 20px 0 0;
        }
    }

    .latest-blog__item-content {
        padding: 25px;
    }

    .latest-blog__item-title {
        font-size: 20px;
        font-weight: 700;
        border-bottom: 1px solid #0A2C0F1A;
        padding-bottom: 30px;
        color: var(--primary-color-text);
        margin-bottom: 30px;
    }

    .latest-blog__item-footer {
        display: flex;
        justify-content: space-between;

        .latest-blog__item-date {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .latest-blog__item-action {
            display: flex;
            gap: 5px;
            align-items: center;

            .latest-blog__item-action-text {
                font-weight: 700;
                font-size: 16px;
                color: var(--primary-color)
            }

            .latest-blog__item-action-icon {
                background-color: var(--primary-color);
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}

@media (max-width: 1024px) {
    .latest-blog__content {
        padding: 50px 0;
        gap: 20px;
    }

    .latest-blog__header {
        flex-direction: column;
        align-items: flex-start;

        &-text {
            gap: 10px !important;
            padding: 0 !important;
        }

        :deep(.latest-blog__title-class) {
            font-size: 16px;
        }

        :deep(.latest-blog__h1-class) {
            font-size: 36px;
        }

        :deep(.latest-blog__span-class) {
            font-size: 36px;
        }
    }

    .latest-blog__item {
        &-content {
            padding: 20px !important;
        }

        &-title {
            margin-bottom: 20px !important;
        }
    }
}

@media (max-width: 768px) {
    .latest-blog__list-items {
        width: 50%;
    }

    .latest-blog__item {
        &-title {
            padding-bottom: 20px !important;
        }
    }
}

@media (max-width: 426px) {
    :deep(.latest-blog__h1-class) {
        font-size: 26px !important;
    }

    :deep(.latest-blog__span-class) {
        font-size: 26px !important;
    }
    .latest-blog__list-items {
        width: 100%;
        padding: 0 !important;
        margin-bottom: 30px;
    }
    
}
</style>