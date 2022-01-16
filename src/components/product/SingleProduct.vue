<template>
  <div @click="handleClose" class="h-screen m-auto w-100 flex justify-center items-center">
    <div class="w-full p-4">
      <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div class="flex justify-between ">
          <p class="text-2xl uppercase text-gray-900 font-bold">{{product.name}}</p>
          <button @click="handleClose">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
        <div class="prod-img mt-2">
          <img :src="product.image" class="w-full object-cover object-center" />
        </div>

        <p class="text-xl text-gray-900">{{product.description}}</p>
        <div class="prod-info grid gap-10">
          <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p class="font-bold text-xl">€ {{product.price}}</p>
            <button @click="handleAddToCartButton(product)" class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps(["product"]);
const emit = defineEmits(["closeProduct", "addProductToCart"]);

const handleClose = () => {
  emit("closeProduct");
};

const handleAddToCartButton = (product) => {
  emit("addProductToCart", product);
};
</script>

<style>
</style>