<template>
  <div class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <Nav/>
      <Products />
      <!-- <Modal/> -->
    </div>
  </div>


</template>

<script setup>
import Products from "../components/Products.vue";
import Nav from "../components/Nav.vue";
import Modal from "../components/Modal.vue";
</script>


