<template>
    <div class="our-product">
        <div class="our-product__content container">
            <div class="our-product__header">
                <div class="our-product__header-title">
                    <base-text-content titleClass="our-product__title-class" h1Class="our-product__h1-class" spanClass="our-product__span-class">
                        <template #title>Our Product</template>
                        <template #heading1>Premium droppers for pure,</template>
                        <template #heading2>precise application</template>
                    </base-text-content>
                </div>
                <div class="our-product__header-action">
                    <base-button-link fillColor="#000000" arrow="arrow-product">
                        View All Products
                    </base-button-link>
                </div>
            </div>
            <div class="our-product__list">
                <div class="our-product__item">
                    <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/product-img-1.jpg"
                        alt="Product Thumb">
                    <h2>Eco GLow Dropper</h2>
                    <p>$16.00</p>
                </div>
                <div class="our-product__item">
                    <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/product-img-2.jpg"
                        alt="Product Thumb">
                    <h2>Eco GLow Dropper</h2>
                    <p>$35.00</p>
                </div>
                <div class="our-product__item">
                    <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/product-img-3.jpg"
                        alt="Product Thumb">
                    <h2>Eco GLow Dropper</h2>
                    <p>$45.00</p>
                </div>
                <div class="our-product__item">
                    <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/product-img-4.jpg"
                        alt="Product Thumb">
                    <h2>Eco GLow Dropper</h2>
                    <p>$62.00</p>
                </div>
            </div>
            <div class="our-product__footer">
                <div class="our-product__footer-action">
                    <div class="our-product__footer-icon">Free</div>
                </div>
                <div class="our-product__footer-desc">
                    <p>Let’s make something great work together.<strong><a>Get Free Quote</a></strong></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.our-product {
    background-color: var(--global-bg-color);
}


.our-product__content {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
}


.our-product__header {
    padding: 10px;
    display: flex;

    .our-product__header-title {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: space-between;
        flex: 1;
    }

    .our-product__header-action {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}


.our-product__list {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;

    .our-product__item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
        align-items: center;

        img {
            border-radius: 20px;
        }

        h2 {
            color: var(--primary-color-text);
            font-family: "Lora";
            font-size: 20px;
            font-weight: 700;
        }

        p {
            color: var(--primary-color);
            font-size: 16px;
            font-weight: 700;
            font-family: "Plus Jakarta Sans";
        }
    }
}


.our-product__footer {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .our-product__footer-icon {
        background-color: var(--primary-color);
        border: none;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: "Plus Jakarta Sans", sans-serif;
        padding: 0 10px;
        font-size: 16px;
    }

    .our-product__footer-desc {
        p {
            font-size: 16px;
            color: var(--global-color-text);
            font-family: "Plus Jakarta Sans";

            a {
                color: var(--primary-color);
                font-weight: 400;
                font-family: "Lora"
            }
        }
    }
}

:deep(.arrow-product) {
    background-color: #0A2C0F1A;
}

@media (max-width: 1024px) {
    .our-product__content {
        padding: 50px 0;
        gap: 20px;
    }
    .our-product__header {
        flex-direction: column;
        
        &-title {
            gap: 10px !important;
        }
        &-action {
            justify-content: flex-start !important;
        }
        
    }
    :deep(.our-product__title-class) {
        font-size: 16px;
    }
    :deep(.our-product__h1-class) {
        font-size: 36px;
    }
    :deep(.our-product__span-class) {
        font-size: 36px;
    }
}
@media (max-width: 768px) {
    .our-product__list {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    
}
@media (max-width: 426px) {
    :deep(.our-product__h1-class) {
        font-size: 26px;
    }
    :deep(.our-product__span-class) {
        font-size: 26px;
    }
    .our-product__list {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
    .our-product__footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>