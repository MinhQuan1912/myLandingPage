<template>
    <div class="fixed inset-0 bg-primary-orange text-white z-50">
        <div class="flex justify-end p-5 border-b border-b-[#FFFFFF1A]">
            <div class="p-2 rounded-[8px] w-9.5 h-9.5 text-black bg-white flex justify-center items-center cursor-pointer hover:text-white hover:bg-black"
                @click="$emit('close')">
                <icons-svg-close2 />
            </div>
        </div>
        <ul class="py-2.5">
            <li v-for="(item, index) in props.menu" :key="index" class="cursor-pointer group list-none">
                <div v-if="item.subMenu" class="flex items-center py-2 px-5 hover:text-black">
                    {{ item.label }}
                    <icons-svg-arrow1 />
                </div>
                <div v-else class="py-2 px-5 hover:text-black">
                    {{ item.label }}
                </div>
                <ul v-if="item.subMenu" class="pl-8 list-none hidden group-hover:block ">
                    <li v-for="(drop, dropIdx  ) in item.subMenu" :key="dropIdx" class="py-1 group/item">
                        <div v-if="drop.subMenu">
                            <div class="cursor-pointer flex items-center hover:text-black">
                                {{ drop.label }}
                                <icons-svg-arrow1 />
                            </div>
                            <ul class="hidden group-hover/item:block ml-3.75 mt-1.5">
                                <li v-for="(sub, subIdx) in drop.subMenu" :key="subIdx" class="hover:text-black">
                                    {{ sub.label }}
                                </li>
                            </ul>
                        </div>
                        <div v-else class="hover:text-black">
                            {{ drop.label }}
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

interface Menu {
    label: string
    subMenu?: Menu[]
}

const props = defineProps<{
    menu: Menu[]
}>()


</script>

