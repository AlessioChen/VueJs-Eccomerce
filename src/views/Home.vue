<template>

  <Nav :cart="cart" />
  <Products v-if="showProducts" v-on:openProduct="openProduct" v-on:addToCart="addToCart" :products=products />
  <single-product v-else :product="product" v-on:closeProduct="closeProduct" />

</template>

<script setup>
import Products from "../components/product/ProductsList.vue";
import SingleProduct from "../components/product/SingleProduct.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import ProductsListVue from "../components/product/ProductsList.vue";
import Nav from "../components/Nav.vue";

let products = ref([]);
let product = ref();
let showProducts = ref(true);

//on create

onMounted(() => {
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

      let cart = JSON.parse(localStorage.getItem("cart"));

      if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
          for (let j = 0; j < products.value.length; j++) {
            if (products.value[j].id == cart[i].id) {
              products.value[j].inCart = true;
            }
          }
        }
      }
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
  product.inCart = true;
  let cart = localStorage.getItem("cart");
  cart = cart ? JSON.parse(cart) : [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};
</script>


