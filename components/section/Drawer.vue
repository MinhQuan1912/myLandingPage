<template>
    <div class="drawer">
        <div class="drawer__header">
            <button class="drawer__close" @click="$emit('close')">X</button>
        </div>
        <nav class="drawer__nav">
            <ul>
                <li class="drawer__nav-item" @click="toggleDropdown('home')">
                    <div class="drawer__nav-label">
                        Home
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
                            </svg>
                        </span>
                    </div>
                    <ul v-show="dropdowns.home" class="drawer__dropdown">
                        <li>Home-Main</li>
                        <li>Home-Video</li>
                        <li>Home-Slider</li>
                    </ul>
                </li>
                <li class="drawer__nav-item">About Us</li>
                <li class="drawer__nav-item">Blog</li>
                <li class="drawer__nav-item" @click="toggleDropdown('store')">
                    <div class="drawer__nav-label">
                        Store
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
                            </svg>
                        </span>
                    </div>
                    <ul v-show="dropdowns.store" class="drawer__dropdown">
                        <li>Products</li>
                        <li>Product Single</li>
                        <li>Cart</li>
                        <li>My account</li>
                    </ul>
                </li>
                <li class="drawer__nav-item" @click="toggleDropdown('pages')">
                    <div class="drawer__nav-label">
                        Pages
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#ffffff" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z" />
                            </svg>
                        </span>
                    </div>
                    <ul v-show="dropdowns.pages" class="drawer__dropdown">
                        <li>Blog Details</li>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>FAQs</li>
                        <li>404</li>
                        <li>Header-Layout</li>
                        <li>Footer-Layout</li>
                    </ul>
                </li>
                <li class="drawer__nav-item">Contact Us</li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['close'])
interface Dropdowns {
    home: boolean
    store: boolean
    pages: boolean
}

const dropdowns = ref < Dropdowns > ({
    home: false,
    store: false,
    pages: false
})

const toggleDropdown = (key: keyof Dropdowns) => {
    dropdowns.value[key] = !dropdowns.value[key]
}

</script>

<style lang="scss" scoped>
.drawer {
    position: fixed;
    inset: 0;
    background-color: var(--primary-color);
    color: #fff;
    z-index: 5;
    padding: 20px;
    overflow-y: auto;
    
}

.drawer__header {
    display: flex;
    justify-content: flex-end;
}

.drawer__close {
    background: transparent;
    border: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
}

.drawer__nav ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.drawer__nav-item {
    margin-bottom: 15px;
    font-size: 18px;
    cursor: pointer;
}

.drawer__nav-label {
    display: flex;
    align-items: center;
}

.drawer__dropdown {
    margin-left: 15px;
    margin-top: 6px;
    list-style: none;
    padding-left: 10px;
}

.drawer__dropdown li {
    margin-bottom: 6px;
    font-size: 15px;
}

.rotate {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
}
.drawer__header {
    padding-bottom: 20px;
    border-bottom: 1px solid #ffffff1A;
    width: 100%;

    .drawer__close {
        font-size: 22px;
        padding: 8px;
        width: 38px;
        border-radius: 8px;
        height: 38px;
        background-color: #ffffff;
        color: var(--primary-color-text);
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>