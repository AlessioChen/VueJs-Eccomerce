<template>
  <Nav />
  <div class="w-full h-full bg-gray-100">

    <!--  section 1  -->
    <header class="header-section flex flex-row px-8 py-3">
      <button class="flex-none">
        <span class="fa fa-chevron-left font-bold text-2xl" />
      </button>
      <div class="flex-grow text-center">
        <h2 class="font-bold text-2xl">My Cart</h2>
      </div>
    </header>

    <!-- main content   -->
    <main class="mb-12">
      <ul v-for="item in cart" :key="item.id" class="p-8">
        <li class="flex bg-white p-5 rounded-lg shadow-lg mb-5">
          <img :src="item.image" class="w-32" />
          <div class="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p class="title font-semibold text-sm md:text-lg mb-5 md:mb-0 md:pl-5">{{item.name}}</p>
            <div class="flex">
              <!-- Dec Button -->
              <button class="bg-blue-200 fa fa-minus rounded-lg bg flex justify-center items-center p-3 z-10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <input type="number" :value="item.quantity" class="text-center text-md font-semibold p-2 rounded w-20 focus:outline-none" />
              <!-- Inc Button -->
              <button class="bg-blue-200 fa fa-plus rounded-lg bg flex justify-center items-center p-3 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <!-- Remove Button -->
              <button @click="handleRemoveButton(item) " class="bg-red-200  ml-5 fa fa-plus rounded-lg bg flex justify-center items-center p-3 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <p class=" text-4xl value font-bold mt-5 md:mt-0">€ {{item.price}}</p>
          </div>
        </li>

      </ul>
    </main>

    <!--  footer    -->
    <footer class="header-section flex flex-row px-8 py-1 fixed bottom-0 w-screen w-full z-50">
      <div class="mr-12">
        <p class="title font-semibold text-sm">Total</p>
        <p class="value font-semibold text-lg font-bold">$40.40</p>
      </div>
      <div class="flex-grow text-center">
        <button class="bg-white px-10 py-3 rounded-lg w-full">
          <span class="font-bold">Checkout</span>
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </footer>

  </div>

</template>

<script setup >
import { ref } from "@vue/reactivity";
import Nav from "../components/Nav.vue";

const props = defineProps(["data"]);
const emit = defineEmits(["openProduct"]);

let cart = ref(JSON.parse(localStorage.getItem("cart")));

const handleRemoveButton = (item) => {
  for (let i = 0; i < cart.value.length; i++) {
    if (cart.value[i].id == item.id) {
      cart.value.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  }
};
</script>

<style>
.header-section {
  background-color: #ffc400;
}

input {
  background: #f5f5f5;
  margin: 0 -10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>