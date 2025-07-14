<template>
  <div class="header">
    <div class="header__wrapper container">
      <div class="header__logo">
        <img src="https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/logo.svg">
      </div>
      <div class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item header__nav-item--has-dropdown">
            <div class="header__nav-label">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
              </svg>
            </div>
            <ul class="header__dropdown">
              <li class="header__dropdown-item">Home-Main</li>
              <li class="header__dropdown-item">Home-Video</li>
              <li class="header__dropdown-item">Home-Slider</li>
            </ul>
          </li>
          <li class="header__nav-item">About Us</li>
          <li class="header__nav-item">Blog</li>
          <li class="header__nav-item header__nav-item--has-dropdown">
            <div class="header__nav-label">
              Store
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
              </svg>
            </div>
            <ul class="header__dropdown">
              <li class="header__dropdown-item">Products</li>
              <li class="header__dropdown-item">Product Single</li>
              <li class="header__dropdown-item">Cart</li>
              <li class="header__dropdown-item">My account</li>
            </ul>
          </li>
          <li class="header__nav-item header__nav-item--has-dropdown">
            <div class="header__nav-label">
              Pages
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
              </svg>
            </div>
            <ul class="header__dropdown">
              <li class="header__dropdown-item">Blog Details</li>
              <li class="header__dropdown-item">Features</li>
              <li class="header__dropdown-item">Testimonials</li>
              <li class="header__dropdown-item">FAQs</li>
              <li class="header__dropdown-item">404</li>
              <li class="header__dropdown-item">Header-Layout</li>
              <li class="header__dropdown-item">Footer-Layout</li>
            </ul>
          </li>
          <li class="header__nav-item">Contact Us</li>
        </ul>
      </div>
      <div class="header__nav-menu" @click="isOpen = true">
        <button class="header__nav-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 16 16">
            <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M2 4h12M2 8h12M2 12h12" />
          </svg>
        </button>
      </div>
      <section-drawer v-if="isOpen" @close="isOpen=false"></section-drawer>

      <div class="header__nav-right">
        <nav class="header__social-list">
          <li class="header__social-item">
            <div class="header__social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                <path fill="white"
                  d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
              </svg>
            </div>
          </li>
          <li class="header__social-item">
            <div class="header__social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 486.037 1000">
                <path fill="white"
                  d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000z" />
              </svg>
            </div>
          </li>
          <li class="header__social-item">
            <div class="header__social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256">
                <path fill="white"
                  d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36" />
              </svg>
            </div>
          </li>
        </nav>
        <base-button-link arrow="arrow-header">
          Shop Now
        </base-button-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(false)
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  width: 100%;
  background-image: url(https://demo.awaikenthemes.com/sellsmart/cbd-oil/wp-content/uploads/2025/05/hero-bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: transparent;
  z-index: 3;
  border-bottom: 1px solid #ffffff1A;
}

.header__wrapper {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.header__logo {
  padding: 10px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
}

.header__nav {
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 100%;

  &-list {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 600;
    height: 100%;
  }

  &-label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &-item {
    list-style: none;
    font-size: 16px;
    color: #fff;
    padding: 15px;
    white-space: nowrap;
    position: relative;
    padding: 15px;
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }

    &--has-dropdown {
      position: relative;

      &:hover>.header__dropdown {
        display: block;
      }
    }
  }
}

.header__dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--primary-color);
  border-radius: 20px;
  min-width: 235px;
  z-index: 4;
  padding: 5px 0;

  &-item {
    padding: 8px 20px;
    color: #ffffff;
    white-space: nowrap;

    &:hover {
      color: #000000
    }
  }
}

.header__nav-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 0;
  gap: 35px;

  li {
    list-style: none;
  }
}



.header__social-list {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.header__social-item {
  padding: 0 15px 0 0;
}

.header__social-icon {
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.arrow-header) {
  background-color: #ffffff1A;
}



.header__dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--primary-color);
  border-radius: 20px;
  min-width: 235px;
  z-index: 4;
  padding: 5px 0;

  &-item {
    padding: 8px 20px;
    color: #ffffff;
    white-space: nowrap;

    &:hover {
      color: #000000
    }
  }

  &:hover {
    display: block;

  }

}

.header__nav-menu {
  display: none;
  width: 20%;
  padding: 10px 20px 10px 10px;

}

.header__nav-icon {
  padding: 8px 6px;
  background-color: var(--primary-color);
  width: 38px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}






@media (min-width:768px) {
  .header__logo {
    width: 16%;
  }

}

@media(max-width: 1024px) {
  .header__wrapper {
    padding: 10px 0 !important;
  }

  .header__nav,
  .header__nav-right {
    display: none;
  }

  .header__logo {
    width: 80%;

    img {
      height: auto;
      width: auto;
    }
  }

  .header__nav-menu {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
