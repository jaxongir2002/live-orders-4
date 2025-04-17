<template>
  <div class="border rounded-xl p-4 flex items-center justify-between bg-gray-100">
    <div>
      <div class="text-xl font-bold text-gray-800">#{{ order.temporary_code }}</div>
      <div class="text-sm text-gray-500">{{ formattedTime }}</div>
    </div>
    <button
        @click="openModal=true"
        class="text-sm px-3 py-1 rounded font-semibold bg-green-500 text-white hover:bg-green-600 transition"
    >
      ✅ Готово
    </button>
    <modal @change-status="updateFn" v-model="openModal"/>
  </div>

</template>

<script setup>
import {computed, ref} from 'vue';
import Modal from "./Modal.vue";

const props = defineProps({order: Object});

const openModal = ref(false);

const formattedTime = computed(() => {
  const date = new Date(props.order.created_at);
  return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
});

async function updateFn() {
  try {
    const res = await fetch(`https://pos.minutda.uz/v1/orders/kitchen/${props.order.id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'ready',
      })
    });

    const data = await res.json();
    openModal.value = false
  } catch (e) {
    console.error('Update failed:', e);
  }
}

</script>