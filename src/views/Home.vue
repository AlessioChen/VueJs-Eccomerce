<template>
  <Products :products = products />
    


</template>

<script setup>
import Products from "../components/product/ProductsList.vue";

import Modal from "../components/Modal.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";


let products = ref([]); 

onMounted(() => {
  axios
    .get(
      "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json"
    )
    .then((response) => {
      products.value = response.data;
    });
});
</script>


