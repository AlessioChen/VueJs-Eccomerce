<template>
  <div v-for="(product,index) in products" :key="index" class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
    <div>
      <img @click="handleImageClick(product)" class="hover:grow hover:shadow-lg" :src="product.image">
      <div class="pt-3 flex items-center justify-between">
        <p class="text-xl font-bold">{{product.name}}</p>
        <button v-if="!product.inCart" :disabled="product.inCart" @click="handleAddToCartButton(product)" class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </button>
        <button v-if="product.inCart" :disabled="!product.inCart" class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        </button>
      </div>
      <p class="pt-1 font-extrabold  text-left text-xl text-gray-900">€{{product.price}}</p>
    </div>
  </div>
</template>

<script setup>
let props = defineProps(["products"]);
let emit = defineEmits(["openProduct", "addToCart"]);

const handleImageClick = (product) => {
  emit("openProduct", product);
};

const handleAddToCartButton = (product) => {
  emit("addToCart", product);
};
</script> 

<style>
</style>