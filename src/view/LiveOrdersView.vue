<template>
  <div class="h-screen grid grid-cols-1 md:grid-cols-2">
    <div class="bg-white p-6 overflow-y-auto">
      <h2 class="text-5xl font-semibold mb-4 text-green-800 text-center"> Подготовка</h2>
      <div class="grid gap-4 grid-cols-12">
        <OrderCard
            v-for="order in doingOrders"
            :key="order.id"
            class="col-span-12 md:col-span-4 xl:col-span-4"
            :order="order"
        />
        <p v-if="doingOrders.length === 0" class="text-gray-400 italic col-span-12 text-center">Еще нет.</p>
      </div>
    </div>

    <div class="bg-green-800 p-6 overflow-y-auto">
      <h2 class="text-5xl font-semibold mb-4 text-white text-center"> Готово</h2>
      <div class="grid gap-4 grid-cols-12">
        <OrderCard
            v-for="order in readyOrders"
            :key="order.id"
            class="col-span-12 md:col-span-4 xl:col-span-4"
            :order="order"
        />
        <p v-if="readyOrders.length === 0" class="text-gray-600 italic col-span-12 text-center">Еще нет.</p>
      </div>
    </div>
  </div>
</template>



<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue';
import OrderCard from '../components/OrderCard.vue';

let socket
const orders_info = ref({orders: []})

onMounted(() => {
  socket = new WebSocket('wss://pos.minutda.uz/ws/orders/?branch=312')

  socket.onopen = () => {
  }

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)

      if (data.orders && Array.isArray(data.orders)) {
        orders_info.value = data
      }
    } catch (error) {
      console.warn('JSON emas, faqat matn:', event.data)
    }
  }

  socket.onclose = () => {
    console.log('Ulanish yopildi.')
  }

  socket.onerror = (error) => {
    console.error('Xatolik:', error)
  }
})

onUnmounted(() => {
  if (socket) socket.close()
});

const doingOrders = computed(() =>
    orders_info.value.orders.filter(order => order.status === 'pending')
);

const readyOrders = computed(() =>
    orders_info.value.orders.filter(order => order.status === 'ready')
);
</script>

<style scoped>
h1 {
  letter-spacing: 1px;
}
</style>