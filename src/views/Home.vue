<template>

  <Products v-if="showProducts" v-on:openProduct="openProduct" v-on:addToCart="addToCart" :products=products />
  <single-product v-else :product="product" v-on:closeProduct="closeProduct" />

</template>

<script setup>
import Products from "../components/product/ProductsList.vue";
import SingleProduct from "../components/product/SingleProduct.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";

let products = ref([]);
let product = ref();
let showProducts = ref(true);
let cart = ref({}); 

onMounted(() => {
  axios
    .get(
      "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json"
    )
    .then((response) => {
      products.value = response.data;
    });
});

const openProduct = (value) => {
  showProducts.value = false;
  product.value = value;
};

const closeProduct = () => {
  showProducts.value = true;
};

const addToCart = (product) => {
  
}
</script>


