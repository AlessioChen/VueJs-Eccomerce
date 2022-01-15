<template>
  <div class="h-screen m-auto w-100 flex justify-center items-center">
    <div class="w-full p-4">
      <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div class="prod-title">
          <p class="text-2xl uppercase text-gray-900 font-bold">{{product.name}}</p>
        </div>
        <div class="prod-img mt-2">
          <img :src="product.image" class="w-full object-cover object-center" />
        </div>

        <p class="text-xl text-gray-900">{{product.description}}</p>
        <div class="prod-info grid gap-10">
          <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p class="font-bold text-xl">€ {{product.price}}</p>
            <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps(["product"]);
</script>

<style>
</style>