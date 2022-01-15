<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="bg-white py-8">
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>
