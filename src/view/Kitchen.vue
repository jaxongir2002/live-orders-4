<template>
  <div class="min-h-screen text-white p-4 pt-10">
    <div class="space-y-6">
      <div v-if="orders_info.orders.length">
        <h2 class="text-lg font-semibold mb-2 text-yellow-400">
          ⏳ Подготовка
        </h2>

        <div class="space-y-2">
          <ChefOrderCard
              v-for="(order,index) in orders_info.orders"
              :key="index"
              :order="order"
              @change-status="changeStatus"
          />
        </div>
      </div>
      <div v-else class="text-center text-gray-400">Buyurtmalar yo‘q</div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import ChefOrderCard from '../components/ChefOrderCard.vue'

let socket
const orders_info = ref({orders: []}) // 🟢 Boshlanishda object

onMounted(() => {
  socket = new WebSocket('wss://pos.minutda.uz/ws/orders/kitchen/?branch=312')

  socket.onopen = () => {
    console.log('WebSocket ulanildi!')
    // socket.send('Salom server!') // ❌ agar kerak bo'lmasa yubormang
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
})

function changeStatus(id, newStatus) {
  const order = orders_info.value.orders.find(o => o.temporary_code === id)
  if (order) order.status = newStatus
}
</script>

<style scoped lang="scss">
.menu_fixed {
  background: rgba(0, 0, 0, 0.2);
  width: 90%;
  border-radius: 16px;
  backdrop-filter: blur(8px);
}
</style>
