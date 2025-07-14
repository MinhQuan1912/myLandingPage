<template>
    <div class="premium-dropper">
        <div class="premium-dropper__content container">
            <div class="premium-dropper__main">
                <base-text-content titleClass="premium-dropper__title-class" h1Class="premium-dropper__h1-class"
                    spanClass="premium-dropper__span-class">
                    <template #title>Premium Dropper</template>
                    <template #heading1>Premium quality precsion design</template>
                    <template #heading2>pure performance</template>
                </base-text-content>
                <div class="premium-dropper__desc">
                    <div class="premium-dropper__desc-main">
                        <p>Our oil dropper bottles designed precision, ensuring controlled application.</p>
                        <base-button-link fillColor="#000000" arrow="arrow-premium-dropper">
                            Expoire More
                        </base-button-link>
                    </div>
                    <div class="premium-dropper__desc-list">
                        <base-icon-text>Easy And Mess-Free Oil Dispensing</base-icon-text>
                        <base-icon-text>Prevents Spills And Waste.</base-icon-text>
                        <base-icon-text>Durable And Safe For Essential Oils.</base-icon-text>
                    </div>
                </div>
                <div class="premium-dropper__image-list">
                    <div class="premium-dropper__image-item">
                        <img
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/premium-products-image-1.jpg">
                        <h3 class="premium-dropper__image-item-text">Leak-Proof Seal</h3>
                    </div>
                    <div class="premium-dropper__image-item">
                        <img
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/premium-products-image-2.jpg">
                        <h3 class="premium-dropper__image-item-text">Leak-Proof Seal</h3>
                    </div>
                    <div class="premium-dropper__image-item">
                        <img
                            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/premium-products-image-3.jpg">
                        <h3 class="premium-dropper__image-item-text">Durable Glass</h3>
                    </div>
                </div>
            </div>
            <div class="premium-dropper__side">
                <div class="premium-dropper__side-image">
                    <img
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/products-intro-image.jpg">
                </div>
                <div class="premium-dropper__side-play">
                    <u-button class="premium-dropper__side-play-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512">
                            <path fill="#fff"
                                d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" />
                        </svg>
                    </u-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.premium-dropper {
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/section-bg-shape-1.png);
    background-repeat: no-repeat;
    background-position: left bottom;
}

.premium-dropper__content {
    padding: 100px 0;
    display: flex;
    align-items: center;
}

.premium-dropper__main {
    padding: 10px 50px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 62%;
}

.premium-dropper__desc {
    display: flex;
    margin-top: 10px;
    margin-bottom: 35px;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    border-bottom: 0.8px solid #0A2C0F1A;
    flex-wrap: wrap;

    .premium-dropper__desc-main {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 30px;

        p {
            font-family: "Plus Jakarta Sans";
            font-size: 16px;
            font-weight: 400;
            color: var(--global-color-text)
        }
    }

    .premium-dropper__desc-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 15px;
        flex: 1;
    }
}

.premium-dropper__image-list {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    .premium-dropper__image-item {
        flex: 1;
        position: relative;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            background: linear-gradient(180deg, rgba(10, 44, 15, 0) 61.32%, rgba(10, 44, 15, 0.9) 100%);
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: linear-gradient(180deg, rgba(10, 44, 15, 0) 0%, rgba(10, 44, 15, 0.9) 100%);
            border-radius: 0 0 20px 20px;
            pointer-events: none;
        }

        .premium-dropper__image-item-text {
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
            color: #ffffff;
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            z-index: 2;
        }
    }
}

.premium-dropper__side {
    padding: 10px;
    width: 38%;
    display: flex;
    flex-direction: column;
    position: relative;

    .premium-dropper__side-image {
        width: 100%;
        height: 100%;
        display: flex;

        img {
            width: 100%;
            height: 700px;
            object-fit: cover;
            border-radius: 20px;
            filter: brightness(80%)
        }
    }

    .premium-dropper__side-play {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .premium-dropper__side-play-btn {
            border-radius: 50%;
            background-color: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
        }
    }
}

:deep(.arrow-premium-dropper) {
    background-color: #0A2C0F1A;
}

@media (max-width: 1024px) {
    .premium-dropper {
        background-position: -10px 100%;
        background-size: 100px auto;
    }

    .premium-dropper__content {
        padding: 50px 0;
        flex-direction: column;
    }

    .premium-dropper__main {
        padding: 10px;
        gap: 10px;
    }

    .premium-dropper__desc {
        margin: 0 0 20px 0;
        padding-bottom: 30px;
        &-main {
            gap: 20px !important;
        }
    }

    .premium-dropper__side {
        img {
            width: auto;
            max-height: 516px;
        }
    }
}

@media (max-width: 1024px) and (min-width: 768px) {
    .premium-dropper__main {
        width: 100%;

        :deep(.premium-dropper__title-class) {
            font-size: 16px;
        }

        :deep(.premium-dropper__h1-class) {
            font-size: 36px;
        }

        :deep(.premium-dropper__span-class) {
            font-size: 36px;
        }
    }

    .premium-dropper__side {
        width: 100%;
    }
}

@media (max-width: 426px) {
    .premium-dropper__main {
        width: 100%;
    }

    :deep(.premium-dropper__h1-class) {
        font-size: 26px;
    }

    :deep(.premium-dropper__span-class) {
        font-size: 26px;
    }
    .premium-dropper__desc {
        flex-direction: column;
        align-items: flex-start
    }
    .premium-dropper__image-item {
        width: 100% !important;
        flex: unset !important;
        
    }
    .premium-dropper__side {
        width: 100%;
    }
}
</style>