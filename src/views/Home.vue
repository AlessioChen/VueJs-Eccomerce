<template>

  <Nav :cart="cart" />
  <Products v-if="showProducts" v-on:openProduct="openProduct" v-on:addToCart="addToCart" :products=products />
  <single-product v-else :product="product" v-on:closeProduct="closeProduct" v-on:addProductToCart="addToCart" />

</template>

<script setup>
import Products from "../components/product/ProductsList.vue";
import SingleProduct from "../components/product/SingleProduct.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import ProductsListVue from "../components/product/ProductsList.vue";
import Nav from "../components/Nav.vue";

// DATA
let products = ref([]);
let product = ref();
let showProducts = ref(true);

// ON CREATE
let data = localStorage.getItem("products");
let cart = localStorage.getItem("cart");
data = data ? JSON.parse(data) : [];
cart = cart ? JSON.parse(cart) : [];

if (data.length == 0) {
  axios
    .get(
      "https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json"
    )
    .then((response) => {
      products.value = response.data;
      for (let i = 0; i < products.value.length; i++) {
        products.value[i] = {
          ...products.value[i],
          id: i,
          inCart: false,
          quantity: 1,
        };
      }
      localStorage.setItem("products", JSON.stringify(products.value));
    });
} else {
  products.value = data;
}

if (cart != null) {
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < products.value.length; j++) {
      if (products.value[j].id == cart[i].id) {
        products.value[j].inCart = true;
      }
    }
  }
}

//METHODS

const openProduct = (value) => {
  showProducts.value = false;
  product.value = value;
};

const closeProduct = () => {
  showProducts.value = true;
};

const addToCart = (product) => {
  product.inCart = true;
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};
</script>


