<template>
  <div class="text-center">
    <div :class="{
    'text-white': order.status === 'ready',
    'text-green-800': order.status === 'pending',
    'text-gray-400': order.status !== 'ready' && order.status !== 'pending'
    }"
         class="text-5xl font-bold tracking-wide ">{{ order.temporary_code }}
    </div>
  </div>
</template>

<script setup>
defineProps({order: Object});
</script>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
