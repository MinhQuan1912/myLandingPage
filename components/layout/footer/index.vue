<template>
  <div
    class="px-2.5 bg-[url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/section-bg-shape-3.png)]
        bg-top-right bg-no-repeat bg-[size:235px auto] bg-primary-text text-white font-plus-jakarta-sans relative z-10 flex flex-col items-center">
    <div class="xl:container mx-auto">
      <div class="pt-12.5 lg:pt-25 pb-10 flex flex-wrap gap-y-2.5">
        <div class="p-2.5 lg:pr-12.5 flex gap-7.5 w-full lg:w-1/3">
          <div class="flex flex-col gap-5 lg:gap-7.5 flex-1" v-for="(group, index) in links" :key="index">
            <h3 class="text-xl font-bold">{{ group.title }}</h3>
            <div class="flex flex-col gap-3 ">
              <p v-for="(link, i) in group.items" :key="i" class="hover:text-primary-orange cursor-pointer">{{ link }}
              </p>
            </div>
          </div>
        </div>
        <div class="p-2.5 w-full xs:w-1/2 lg:w-1/3 flex flex-col items-start lg:items-center gap-5 lg:gap-7.5">
          <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/logo.svg">
          <p>123 High Street, London, W1A 1AA, United Kingdom</p>
          <div class="flex justify-center gap-5 flex-col xl:flex-row">
            <div
              class="py-2 px-3.75 lg:px-5 border border-white rounded-[100px] flex-1 font-bold text-sm lg:text-base hover:text-primary-orange hover:border-primary-orange cursor-pointer">
              <p>+91 - 123 468 963</p>
            </div>
            <div
              class="py-2 px-3.75 lg:px-5 border border-white rounded-[100px] flex-1 font-bold text-sm lg:text-base hover:text-primary-orange hover:border-primary-orange cursor-pointer">
              <p>info@domain.com</p>
            </div>
          </div>
        </div>
        <div class="w-full xs:w-1/2 lg:w-1/3 p-2.5 xs:pl-5 lg:pl-17.5 flex flex-col gap-5 lg:gap-7.5">
          <p class="font-bold text-xl">Newsletter</p>
          <div class="flex">
            <input class="py-3 xs:py-3.75 px-5 bg-[#ffffff1a] rounded-[100px] w-full h-15 placeholder:text-white"
              placeholder="Enter Your Email" />
            <div
              class="flex rounded-full justify-center items-center bg-primary-orange min-w-15 h-15 hover:bg-black cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24">
                <path fill="#fff"
                  d="M20.04 2.323c1.016-.355 1.992.621 1.637 1.637l-5.925 16.93c-.385 1.098-1.915 1.16-2.387.097l-2.859-6.432l4.024-4.025a.75.75 0 0 0-1.06-1.06l-4.025 4.024l-6.432-2.859c-1.063-.473-1-2.002.097-2.387z" />
              </svg>
            </div>
          </div>
          <div class="flex gap-3.75">
            <icons-social-media-pinterest></icons-social-media-pinterest>
            <icons-social-media-x></icons-social-media-x>
            <icons-social-media-facebook></icons-social-media-facebook>
            <icons-social-media-instagram></icons-social-media-instagram>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center py-3.75 xs:py-7.5 lg:py-10 w-full border-t border-t-[#ffffff1A]">
      <p>Copyright © 2025 All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    title: "Quick Link",
    items: ["Home", "About Us", "Features", "Latest Blog"]
  },
  {
    title: "Help",
    items: ["Help", "Privacy Policy", "Terms&Condition", "Contact us"]
  }
]
</script>
<style lang="scss" scoped>
.footer {
  padding-inline: 10px;
  background-image:url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/section-bg-shape-3.png);
  background-color: var(--color-primary-text);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: auto;
  @media (max-width: 1024px) {
    background-size: 150px auto;
  }
}
</style>
