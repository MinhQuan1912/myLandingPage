<template>
    <div class="premium-oil">
        <div class="premium-oil__content container">
            <div class="premium-oil__info">
                <h2>Get 50% off <span>Premium oil</span></h2>
                <p>Porches Premium Oil is crafted for those who value purity and excellence. Sourced from the finest
                    natural ingredients, our premium oil is carefully extracted to preserve its full potency</p>
                <base-button-link arrow="arrow-header">Purchase now</base-button-link>
            </div>
            <div class="premium-oil__media">
                <div class="premium-oil__media-image">
                    <img
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/cta-image.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.premium-oil {
    background-color: var(--primary-color-text);
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/section-bg-shape-2.png);
    background-position: calc(100% + 40px) 100%;
    background-size: auto;
    background-repeat: no-repeat;
    padding: 100px 0;
}
.premium-oil__content {
    display: flex;
    align-items: center;
}

.premium-oil__info {
    max-width: 50%;
    padding: 10px 20px 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: flex-start;
    align-items: center;
    h2 {
        font-family: "Lora";
        color: #fff;
        font-style: italic;
        font-weight: 400;
        font-size: 60px;
        text-align: center;
    }
    span {
        font-family: "Plus Jakarta Sans";
        color: #fff;
        font-size: 100px;
        font-weight: 600;
        font-style: normal;
    }
    p {
        font-family: "Plus Jakarta Sans";
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        text-align: center;
    }
}
:deep(.arrow-header) {
    background-color: #ffffff1A;
}

.premium-oil__media {
    padding: 10px 10px 0 10px;
    margin-bottom: -100px;
}

@media (max-width: 1024px) {
    .premium-oil {
        padding: 50px 0;
    }
    .premium-oil__content {
        flex-direction: column;
        gap: 10px;
    }
    .premium-oil__info {
        max-width: 100%;
        padding: 10px;
        gap: 10px;
        span {
            font-size: 70px;
        }
        p {
            margin-bottom: 20px;
        }
    }
    .premium-oil__media {
        margin-bottom: -50px;
    }
}
@media (max-width: 1024px) and (min-width: 768px) {
    .premium-oil__media {
        width: 53%;
    }
}
@media (max-width: 991px) {
    .premium-oil__info {
        h2 {
            font-size: 36px;
        }
    }
}
</style>