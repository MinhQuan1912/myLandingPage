<template>
  <div class="container">
    <UButton label="Hiện toast" @click="toast.add({ title: 'Test' })" />
    <h1 class="text-customRed-900">title</h1>
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
function showToast() {
  toast.add({
    title: "Thông báo thành công",
  });
}
</script>
<style></style>
