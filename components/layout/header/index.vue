<template>
  <div class="bg-header">
    <div class="absolute inset-0 z-10 bg-[rgba(37,63,34,0.7)] pointer-events-none"></div>
    <div class="xl:container mx-auto">
      <div class="py-2.5 flex items-center relative z-20 lg:py-5">
        <div class="p-2.5 flex items-center min-w-16/100 h-17.75 w-4/5 lg:w-52">
          <img class="w-45 lg:w-full h-full object-contain"
            src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/logo.svg">
        </div>
        <div class="hidden lg:flex flex-1 xl:p-2.5 items-center h-full flex-wrap ">
          <ul class="flex justify-center items-center font-plus-jakarta-sans font-semibold h-full">
            <li v-for="(item, idx) in menuItems" :key="idx"
              class="group relative list-none text-base text-white py-3.75 px-1 xl:px-3.75 whitespace-nowrap cursor-pointer hover:text-primary-orange">
              <div v-if="item.subMenu" class="flex items-center gap-1.25">
                {{ item.label }}
                <icons-svg-arrow1 />
              </div>
              <div v-else>
                {{ item.label }}
              </div>
              <!-- Cấp 2 -->
              <ul v-if="item.subMenu"
                class="absolute top-full left-0 hidden group-hover:block bg-primary-orange rounded-[20px] min-w-58.75 z-40 py-1.25">
                <li v-for="(drop, dropIdx) in item.subMenu" :key="dropIdx"
                  class="relative px-5 py-2 text-white whitespace-nowrap hover:text-black group/item">
                  <!-- Nếu có submenu cấp 3 -->
                  <div v-if="drop.subMenu">
                    <div class="flex items-center justify-between cursor-pointer ">
                      {{ drop.label }}
                      <div class="-rotate-90">
                        <icons-svg-arrow1 />
                      </div>
                    </div>
                    <!-- Cấp 3 -->
                    <ul
                      class="absolute left-full top-0 hidden group-hover/item:block bg-primary-orange rounded-[20px] min-w-58.75 z-50 py-1.25">
                      <li v-for="(sub, subIdx) in drop.subMenu" :key="subIdx"
                        class="py-2 px-5 text-white whitespace-nowrap hover:text-black">
                        {{ sub.label }}
                      </li>
                    </ul>
                  </div>
                  <div v-else>
                    {{ drop.label }}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="w-1/5 p-2.5 flex justify-end lg:hidden" @click="isOpen = true">
          <button
            class="py-2 px-1.5 bg-primary-orange w-9.5 h-9.5 rounded-lg cursor-pointer flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 16 16">
              <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M2 4h12M2 8h12M2 12h12" />
            </svg>
          </button>
        </div>
        <section-drawer v-if="isOpen" @close="isOpen = false" :menu="menuItems"/>
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
        label: "Home-Main"
      },
      {
        label: "Home-Video"
      },
      {
        label: "Home-Slider"
      },
    ]
  },
  { label: "About Us" },
  { label: "Blog" },
  {
    label: "Store",
    
    subMenu: [
      {
        label: "Products"
      },
      {
        label: "Product Single"
      },
      {
        label: "Cart"
      },
      {
        label: "My account"
      },
    ]
  },
  {
    label: "Pages",
    
    subMenu: [
      {
        label: "Blog Details"
      },
      {
        label: "Features"
      },
      {
        label: "Testimonials"
      },
      {
        label: "FAQs"
      },
      {
        label: "404"
      },
      {
        label: "Header-Layout",
        subMenu: [
          {
            label: "Header Layout-1"
          },
          {
            label: "Header Layout-2"
          },
          {
            label: "Header Layout-3"
          },
          {
            label: "Header Layout-4"
          }
        ]
      },
      {
        label: "Footer-Layout",
        subMenu: [
          {
            label: "Footer Layout-1"
          },
          {
            label: "Footer Layout-2"
          },
          {
            label: "Footer Layout-3"
          },
          {
            label: "Footer Layout-4"
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
.bg-header{
  position: absolute;
  width: 100%;
  background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-bg.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: transparent;
  z-index: 20;  
  padding-inline: 10px;
}
</style>
