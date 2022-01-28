<template>
  <nav id="store" class="w-full z-30 top-0 px-6 py-1">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
      <router-link :to="{ name: 'Home' }" class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
        Store
      </router-link>

      <div class="flex items-center">
        <p class="font-bold">{{cartItemCount}}</p>
        <router-link :to="{ name: 'Cart' }" class="pl-3 inline-block no-underline hover:text-black">
          <svg class="h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </router-link>

        <router-link  :to="{ name: 'Home' }" class="pl-3 inline-block no-underline hover:text-black">
          <svg class="h-8 w-10 fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
          </svg>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore(); 
const cartItemCount = computed(() => store.getters['cart/cartItemCount']); 

</script>

<style>
</style>