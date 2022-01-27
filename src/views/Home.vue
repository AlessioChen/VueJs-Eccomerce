<template>

  <Nav :cart="cart" />
  <Products v-if="showProducts" />
  <SingleProduct v-else :product="product" v-on:closeProduct="closeProduct" v-on:addProductToCart="addToCart" />

</template>

<script setup>
import Products from "../components/product/ProductsList.vue";
import Nav from "../components/Nav.vue";
import SingleProduct from "../components/product/SingleProduct.vue";
import { ref } from "@vue/reactivity";

let showProducts = ref(true);

const openProduct = (value) => {
  showProducts.value = false;
  product.value = value;
};

const closeProduct = () => {
  showProducts.value = true;
};
</script>


