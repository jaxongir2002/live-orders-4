<script setup>
defineProps({
  modelValue: Boolean,
});
const emit = defineEmits(['update:modelValue', 'changeStatus']);
</script>

<template>
  <div v-if="modelValue"
       class="overflow-y-auto overflow-x-hidden transition-all fixed top-[-10px] bg-gray-300 right-0 left-0 z-[999] justify-center items-center
       w-full md:inset-0 h-[100%] max-h-full">
    <div class="relative p-4 top-[250px] transition-all w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow-sm">
        <button type="button"
                @click="emit('update:modelValue')"
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Вы уверены, что хотите закончить??</h3>
          <button @click="emit('changeStatus')" data-modal-hide="popup-modal" type="button"
                  class="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
            Да, я уверен.
          </button>
          <button @click="emit('update:modelValue')" data-modal-hide="popup-modal" type="button"
                  class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Нет, отменить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>