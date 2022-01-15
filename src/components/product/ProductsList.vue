<template>
  <div v-for="(product,index) in products" :key="index" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <a href="#">
      <img class="hover:grow hover:shadow-lg" :src="product.image">
      <div class="pt-3 flex items-center justify-between">
        <p class="text-xl font-bold">{{product.name}}</p>
        <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
      </div>
      <p class="pt-1 font-extrabold  text-left text-xl text-gray-900">€{{product.price}}</p>
    </a>
  </div>
</template>

<script setup>

let props = defineProps(['products']); 

</script>

<style>
</style>