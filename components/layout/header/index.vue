<template>
  <div class="bg-header">
    <div class="absolute inset-0 z-10 bg-[rgba(37,63,34,0.7)] pointer-events-none"></div>
    <div class="xl:container mx-auto">
      <div class="py-2.5 flex items-center relative z-20 lg:py-5">
        <div class="p-2.5 flex items-center min-w-16/100 h-17.75 w-4/5 lg:w-52 cursor-pointer">
          <img class="w-45 lg:w-full h-full object-contain" src="/images/logo.svg">
        </div>
        <div class="hidden lg:flex flex-1 xl:p-2.5 justify-center lg:justify-start items-center h-full flex-wrap ">
          <div class="flex justify-center items-center font-plus-jakarta-sans font-semibold h-full">
            <li v-for="(item, idx) in menuItems" :key="idx" class="group relative list-none ">
              <div v-if="item.subMenu" class="flex items-center gap-1.25 text-base text-white py-3.75 px-1 xl:px-3.75 whitespace-nowrap cursor-pointer hover:text-primary-orange
              transition-all duration-300 ">
                {{ item.label }}
                <icons-svg-arrow1 />
              </div>
              <nuxt-link v-else class="text-base text-white py-3.75 px-1 xl:px-3.75 whitespace-nowrap cursor-pointer hover:text-primary-orange
              transition-all duration-300 ">
                {{ item.label }}
              </nuxt-link>
              <!-- Cấp 2 -->
              <ul v-if="item.subMenu"
                class="flex flex-col absolute top-[calc(100%-16px)] left-0 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 bg-primary-orange rounded-[20px] min-w-58.75 z-40 py-1.25 group-hover:translate-y-4  transition-all duration-300 ease-in">
                <li v-for="(drop, dropIdx) in item.subMenu" :key="dropIdx"
                  class="relative  text-white whitespace-nowrap transition-all duration-300 cursor-pointer hover:text-black group/item">
                  <!-- Nếu có submenu cấp 3 -->
                  <div v-if="drop.subMenu" class="flex items-center justify-between cursor-pointer px-5 py-2">              
                      {{ drop.label }}
                      <div class="-rotate-90">
                        <icons-svg-arrow1 />
                      </div>                  
                    <!-- Cấp 3 -->
                    <div
                      class="flex flex-col absolute left-full -top-2 pointer-events-none group-hover/item:pointer-events-auto opacity-0 group-hover/item:opacity-100 bg-primary-orange rounded-[20px] min-w-58.75 z-50 py-1.25 group-hover/item:translate-y-2 transition-all duration-300 ease-in">
                      <nuxt-link :to="sub.to" v-for="(sub, subIdx) in drop.subMenu" :key="subIdx"
                        class="py-2 px-5 text-white whitespace-nowrap hover:text-black transition-all duration-300">
                        {{ sub.label }}
                      </nuxt-link>
                    </div>
                  </div>
                  <nuxt-link :to="drop.to" v-else class="px-5 py-2 block">
                    {{ drop.label }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </div>
        </div>
        <div class="w-1/5 p-2.5 flex justify-end lg:hidden" @click="isOpen = true">
          <button
            class="py-2 px-1.5 bg-primary-orange w-9.5 h-9.5 rounded-lg cursor-pointer flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 16 16">
              <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M2 4h12M2 8h12M2 12h12" />
            </svg>
          </button>
        </div>
        <section-drawer v-if="isOpen" @close="isOpen = false" :menu="menuItems" />
        <div class="hidden justify-between items-center xl:pr-3.75 xl:gap-8.75 lg:flex">
          <nav class="flex justify-end xl:p-2.5">
            <li class="list-none pr-2 xl:pr-3.75">
              <icons-social-media-x />
            </li>
            <li class="list-none pr-2 xl:pr-3.75">
              <icons-social-media-facebook />
            </li>
            <li class="list-none pr-2 xl:pr-3.75">
              <icons-social-media-instagram />
            </li>
          </nav>
          <base-button-link arrow="bg-white/10" text="Shop Now" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)
const menuItems = ref([
  {
    label: "Home",
    subMenu: [
      {
        label: "Home-Main",
        to: '/'
      },
      {
        label: "Home-Video",
        to: '/'
      },
      {
        label: "Home-Slider",
        to: '/'
      },
    ]
  },
  {
    label: "About Us",
    to: '/'
  },
  {
    label: "Blog",
    to: '/'
  },
  {
    label: "Store",
    subMenu: [
      {
        label: "Products",
        to: '/'
      },
      {
        label: "Product Single",
        to: '/'
      },
      {
        label: "Cart",
        to: '/'
      },
      {
        label: "My account",
        to: '/'
      },
    ]
  },
  {
    label: "Pages",
    subMenu: [
      {
        label: "Blog Details",
        to: '/'
      },
      {
        label: "Features",
        to: '/'
      },
      {
        label: "Testimonials",
        to: '/'
      },
      {
        label: "FAQs",
        to: '/'
      },
      {
        label: "404",
        to: '/'
      },
      {
        label: "Header-Layout",
        subMenu: [
          {
            label: "Header Layout-1",
            to: '/'
          },
          {
            label: "Header Layout-2",
            to: '/'
          },
          {
            label: "Header Layout-3",
            to: '/'
          },
          {
            label: "Header Layout-4",
            to: '/'
          }
        ]
      },
      {
        label: "Footer-Layout",
        subMenu: [
          {
            label: "Footer Layout-1",
            to: '/'
          },
          {
            label: "Footer Layout-2",
            to: '/'
          },
          {
            label: "Footer Layout-3",
            to: '/'
          },
          {
            label: "Footer Layout-4",
            to: '/'
          }
        ]
      },
    ],
  },
  { label: "Contact Us" },
]
)
</script>
<style lang="scss" scoped>
.bg-header {
  position: absolute;
  width: 100%;
  background-image: url(/images/hero-bg.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: transparent;
  z-index: 20;
  padding-inline: 10px;
}
</style>
