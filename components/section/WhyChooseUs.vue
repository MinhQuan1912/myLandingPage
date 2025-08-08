<template>
    <div class="why-choose-us">
        <div
            class="flex-1 flex flex-col gap-2.5 text-base py-12.5 xl:py-25 pr-5 m:pr-20 xl:pr-50 pl-5 xl:pl-[calc((100vw-1300px)/2)] lg:gap-3.75">
            <base-text-content contentClass="text-primary-text" title="Why Choose Us"
                heading1="Precision drops, premium" heading2=" quality, care you trust" content="Our oil dropper bottles are designed for precision, ensuring controlled application
                    with minimal waste. Made from high-quality, durable materials.">
                <div class="flex my-5 lg:my-6.25 gap-7.5 justify-between flex-col sm:flex-row">
                    <div class="flex flex-col gap-5 lg:gap-7.5">
                        <base-icon-content type="w-15 h-15" title="Premium Quality"
                            desc="Carefully sourced, 100%, rigorously tested for excellence.">
                            <template #icon>
                                <icons-svg-bottle1 addition-class="w-8.75 h-8.75" />
                            </template>
                        </base-icon-content>
                    </div>
                    <div class="flex flex-col gap-5 lg:gap-7.5">
                        <base-icon-content type="w-15 h-15" title="Fast & Reliable Shipping"
                            desc="Carefully sourced, 100%, rigorously tested for excellence.">
                            <template #icon>
                                <icons-svg-bottle3 addition-class="w-8.75 h-8.75" />
                            </template>
                        </base-icon-content>
                    </div>
                </div>
                <div
                    class="flex flex-1 p-7.5 items-start sm:items-center gap-5 lg:gap-7.5 rounded-[20px] bg-primary-background flex-col sm:flex-row">
                    <base-logo-wheel fill="#000000" addition="sm:w-25 lg:w-30 sm:h-25 lg:h-30"
                        imageLink="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/icon-about-body-item.svg">
                    </base-logo-wheel>
                    <p class="font-plus-jakarta-sans text-base font-normal text-secondary-text leading-[170%]">
                        With a commitment to sustainability and customer satisfaction, we provide reliable, stylish, and
                        -friendly solutions you can trust. Experience the balance of function and care—one drop at a
                        time.
                    </p>
                </div>
            </base-text-content>
        </div>
        <div class="flex relative w-full lg:max-w-46/100 h-auto">
            <div class="w-full flex-1 flex md:h-full">
                <div class="flex-1 w-full">
                    <img class="w-full lg:w-auto lg:h-full aspect-[1/0.9] md:aspect-[1/0.6] lg:aspect-[1/1.12] object-cover"
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/why-choose-image.jpg">
                </div>
                <div class="absolute bottom-0 z-10 max-w-20 md:max-w-25 xl:max-w-full left-3 lg:-left-12 xl:-left-27">
                    <img class="w-full h-full object-cover"
                        src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/why-choose-product-image.png">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.why-choose-us {
    display: flex;
    position: relative;
    background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/section-bg-shape-1.png);
    background-repeat: no-repeat;
    background-position: -10px 100%;
    flex-wrap: wrap;
    flex-direction: column;
    padding-left:0px;
    background-size: 100px;

    @media (min-width: 1024px) {
        flex-direction: row;
        background-position: left bottom;
        background-size: auto;
        background-position: -40px 100%;
        padding-left: 10px;
    }
}
</style>