<template>
    <div class="discover-power">
        <div class="discover-power__content">
            <div class="discover-power__header container">
                <div class="discover-power__header-main">
                    <base-text-content h1Class="discover-power__h1-class" spanClass="discover-power__span-class"
                        titleClass="discover-power__title-class">
                        <template #title>Discover The Power Of Premium</template>
                        <template #heading1>Pure drops perfect precision</template>
                        <template #heading2> care you can trust.</template>
                        <template #content>Experience the perfect balance of purity and precision with our premium oil
                            droppers Designed for effortless application, our high-quality droppers ensure accurate
                            dispensing, minimal waste, and maximum potency.</template>
                        <div class="discover-power__header-actions">
                            <base-button-link arrow="arrow-header">
                                Purchase Now
                            </base-button-link>
                            <div class="discover-power__header-contact">
                                <div class="discover-power__header-contact-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <g fill="none" fill-rule="evenodd">
                                            <path
                                                d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                            <path fill="#fff"
                                                d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899s2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 - 123 468 963</p>
                                </div>
                            </div>
                        </div>
                    </base-text-content>
                </div>
                <div class="discover-power__header-image-wrap">
                    <div class="discover-power__header-image">
                        <img
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-image.png">
                        <base-logo-wheel class="logo-wheel" addition="discover-power__icon-scale"></base-logo-wheel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.discover-power {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
}

.discover-power::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(37, 63, 34, 0.7);
}


.discover-power__content {
    position: relative;
    z-index: 2;
}


.discover-power__header {
    padding: 200px 0 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-wrap: wrap;
}


.discover-power__header-main {
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    :deep(.discover-power__h1-class) {
        font-size: 60px;
        color: white;
    }

    :deep(.discover-power__span-class) {
        font-size: 60px;
    }
}


.discover-power__header-actions {
    display: flex;
    gap: 20px 40px;
    align-items: center;
    margin-top: 25px;
    flex-wrap: wrap;
}

.discover-power__header-contact {
    display: flex;
    align-items: center;

    h3 {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 20px;
        margin-bottom: 2px;
        font-weight: 700;
    }

    p {
        font-family: "Plus Jakarta Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7em;
    }
}

.discover-power__header-contact-icon {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 15px
}


.discover-power__header-image-wrap {
    padding: 10px 55px 10px 75px;
}

.discover-power__header-image {
    position: relative;
    width: 100%;

    img {
        width: 100%;
    }
}

.logo-wheel {
    position: absolute;
    top: 0;
    left: 0;
}

:deep(.arrow-header) {
    background-color: #ffffff1A;
}


@media (max-width: 1024px) {
    .discover-power__header {
        padding: 150px 0 60px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .discover-power__header-main {
        gap: 10px;

        :deep(.discover-power__title-class) {
            font-size: 16px;
        }

        :deep(.discover-power__h1-class) {
            font-size: 44px;
        }

        :deep(.discover-power__span-class) {
            font-size: 44px;
        }
    }

    .discover-power__header-image-wrap {
        padding: 10px;
        width: 62%;

        img {
            max-width: 100%;
            aspect-ratio: 1/1.357;
        }
    }
}

@media (max-width: 426px) {
    :deep(.discover-power__h1-class) {
        font-size: 30px !important;
    }

    :deep(.discover-power__span-class) {
        font-size: 30px !important;
    }

    .discover-power__header-actions {
        gap: 15px;

    }

    .discover-power__header-contact {
        h3 {
            font-size: 18px !important;
        }
    }

    .discover-power__header-image-wrap {
        width: 100%;
    }
}

@media (max-width: 357px) {
    :deep(.discover-power__icon-scale) {
        transform: scale(0.8) !important
    }
    .logo-wheel {
        top: -20px !important;
    }
}   
</style>