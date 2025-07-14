<template>
    <div class="what-we-do">
        <div class="what-we-do__content container">
            <div class="what-we-do__media">
                <div class="what-we-do__media-image1">
                    <img
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/what-we-image-1.jpg">
                </div>
                <div class="what-we-do__media-image2">
                    <img
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/what-we-image-2.jpg">
                </div>
                <base-logo-wheel addition="what-we-do__media-logo--scale" class="what-we-do__media-logo"
                    background="var(--primary-color)"
                    imageLink="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/about-section-heading-icon-cbd.svg">
                </base-logo-wheel>
            </div>
            <div class="what-we-do__info">
                <base-text-content h1Class="what-we-do__h1-class" titleClass="what-we-do__title-class"
                    spanClass="what-we-do__span-class">
                    <template #title>What We Do ?</template>
                    <template #heading1>Delivering precision, purity,</template>
                    <template #heading2>and care daily</template>
                </base-text-content>
                <div class="what-we-do__info--head">
                    <base-icon-text textClass="base-icon-text">Crafting Precision for Every
                        Drop</base-icon-text>
                    <p>We believe that precision matters. Our expertly designed oil dropper bottles ensure controlled
                        dispensing allowing you to use just the right amount.</p>
                </div>
                <div class="what-we-do__info--foot">
                    <base-icon-text textClass="base-icon-text">Designed for Essential Oils</base-icon-text>
                    <p>We believe that precision matters. Our expertly designed oil dropper bottles ensure controlled
                        dispensing allowing you to use just the right amount.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.what-we-do {
    background-color: #0a2c0f;
}


.what-we-do__content {
    display: flex;
    align-items: center;
    padding: 100px 0;
    position: relative;
}


.what-we-do__media {
    flex: 1;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;

    img {
        border-radius: 20px;
    }

    .what-we-do__media-image1 {
        display: block;
        top: 0;
        left: 0;
        margin-right: 50px;

        img {
            width: 100% !important;
            height: auto;
        }
    }

    .what-we-do__media-image2 {
        align-self: flex-end;
        margin-top: -90px;
    }

    .what-we-do__media-logo {
        left: 100px;
        position: absolute;
        bottom: 70px;
        padding: 10px;
        background-color: #0a2c0f;
        border-radius: 50%;
        z-index: 2;
    }
}


.what-we-do__info {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 10px 10px 40px;
    gap: 15px;
}


.what-we-do__info--head {
    border-bottom: 1px solid rgb(55, 55, 55);
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 40px;

    p {
        color: #ffffff;
        font-size: 16px;
        font-family: "Plus Jakarta Sans";
    }
}


.what-we-do__info--foot {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 40px;

    p {
        color: #ffffff;
        font-size: 16px;
        font-family: "Plus Jakarta Sans";
    }
}

:deep(.base-icon-text) {
    color: #ffffff !important;
    font-size: 20px !important;
    font-weight: 700 !important;
}

:deep(.what-we-do__h1-class) {
    color: #ffffff;
}

:deep(.what-we-do__title-class) {
    color: #ffffff;
}

@media (max-width: 1024px) {
    .what-we-do__media {
        width: 77%;

        &-logo {
            padding: 5px !important;
        }
    }
}

@media (max-width: 1024px) {
    .what-we-do__content {
        padding: 50px 0;
        flex-direction: column;
        gap: 10px;
    }

    :deep(.what-we-do__h1-class) {
        font-size: 36px;
    }

    :deep(.what-we-do__title-class) {
        font-size: 16px;
    }

    :deep(.what-we-do__span-class) {
        font-size: 36px;
    }

    .what-we-do__info--head {
        padding-bottom: 30px;
    }

    .what-we-do__info--foot {
        padding-bottom: 0;
        margin-top: 20px;
    }

    .what-we-do__info {
        padding: 10px
    }
}

@media (max-width: 426px) {
    .what-we-do__media-image2 {
        width: 250px;
        margin-top: -50px;
    }

    .what-we-do__media {
        width: 100%;

        &-logo--scale {
            transform: scale(0.7);
        }

        &-logo {
            left: 25px !important;
            bottom: 0 !important;
        }
    }

    :deep(.what-we-do__h1-class) {
        font-size: 26px;
    }

    :deep(.what-we-do__span-class) {
        font-size: 26px;
    }
}
</style>