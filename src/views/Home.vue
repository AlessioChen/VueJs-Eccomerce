<template>
  <div class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <Nav/>
      <Products />
    </div>
  </div>
</template>

<script setup>
import Products from "../components/Products.vue";
import Nav from "../components/Nav.vue";
</script>
