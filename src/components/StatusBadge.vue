// components/StatusBadge.vue
<template>
  <span :class="badgeClass" class="text-xs font-semibold px-2 py-1 rounded-full">
    {{ status }}
  </span>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({status: String});

const badgeClass = computed(() => {
  switch (props.status) {
    case 'Yangi':
      return 'bg-green-500 text-white';
    case 'Tayyorlanmoqda':
      return 'bg-yellow-500 text-black';
    case 'Tayyor':
      return 'bg-blue-500 text-white';
    case 'Topshirildi':
      return 'bg-gray-500 text-white';
    default:
      return 'bg-white text-black';
  }
});
</script>
