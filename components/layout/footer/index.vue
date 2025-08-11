<template>
  <div class="footer">
    <div class="xl:container mx-auto">
      <div class="pt-12.5 lg:pt-25 pb-10 flex flex-wrap gap-y-2.5">
        <div class="p-2.5 lg:pr-12.5 flex gap-7.5 w-full lg:w-1/3">
          <div class="flex flex-col gap-5 lg:gap-7.5 flex-1" v-for="(group, index) in links" :key="index">
            <h3 class="text-xl font-bold">{{ group.title }}</h3>
            <div class="flex flex-col gap-3 ">
              <nuxt-link :to="link.to" v-for="(link, i) in group.items" :key="i" class="hover:text-primary-orange cursor-pointer">{{
                link.label }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="p-2.5 w-full xs:w-1/2 lg:w-1/3 flex flex-col items-start lg:items-center gap-5 lg:gap-7.5">
          <div class="w-45">
            <img class="w-full h-full object-cover" src="/images/logo.svg">
          </div>
          <p>123 High Street, London, W1A 1AA, United Kingdom</p>
          <div class="flex justify-center gap-5 flex-col xl:flex-row">
            <a class="py-2 px-3.75 lg:px-5 border border-white rounded-[100px] flex-1 font-bold text-sm lg:text-base hover:text-primary-orange hover:border-primary-orange cursor-pointer"
              href="tel:+123468963">+91 - 123 468 963</a>
            <a class="py-2 px-3.75 lg:px-5 border border-white rounded-[100px] flex-1 font-bold text-sm lg:text-base hover:text-primary-orange hover:border-primary-orange cursor-pointer"
              href="mailto:info@domain.com">info@domain.com</a>
          </div>
        </div>
        <div class="w-full xs:w-1/2 lg:w-1/3 p-2.5 xs:pl-5 lg:pl-17.5 flex flex-col gap-5 lg:gap-7.5">
          <p class="font-bold text-xl">Newsletter</p>
          <div class="flex">
            <input
              class="py-3 xs:py-3.75 px-5 bg-[#ffffff1a] rounded-full w-full h-15 placeholder:text-white outline-none"
              placeholder="Enter Your Email" />
            <div
              class="flex rounded-full justify-center items-center bg-primary-orange min-w-15 h-15 hover:bg-black cursor-pointer">
              <icons-svg-send-paper/>
            </div>
          </div>
          <div class="flex gap-3.75">
            <a href="#"><icons-social-media-pinterest/></a>
            <a href="#"><icons-social-media-x/></a>
            <a href="#"><icons-social-media-facebook/></a>
            <a href="#"><icons-social-media-instagram/></a>
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
const links = ref([
  {
    title: "Quick Link",
    items: [
      {
        label: "Home",
        to:"/"
      },
      {
        label: "About Us",
        to:"/"
      },
      {
        label: "Features",
        to:"/"
      },
      {
        label: "Latest Blog",
        to:"/"
      }
    ]
  },
  {
    title: "Help",
    items: [
      {
        label: "Help",
        to: "/"
      }, {
        label: "Privacy Policy",
        to: "/"
      }, {
        label: "Terms&Condition",
        to: "/"
      }, {
        label: "Contact us",
        to: "/"
      },
    ]
  }
])
</script>
<style lang="scss" scoped>
.footer {
  padding-inline: 10px;
  background-image: url(/images/section-bg-shape-3.png);
  background-color: var(--color-primary-text);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: auto;
  color: white;
  font-family: "Plus Jakarta Sans";
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    background-size: 150px auto;
  }
}
</style>
