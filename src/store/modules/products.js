import axios from 'axios'
import shop from '../../api/shop'
// initial state
const state = {
    all: [],
    product: null,
    showProduct: false
}

// getters
const getters = {
    getShowProduct(state) {
        return state.showProduct;
    }, 
    getProduct(state){
        return state.product
    }
}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('SET_PRODUCTS', products);
        })
    },
    setShowProduct({ commit }, { product, value }) {
        commit('SET_SHOW_PRODUCT', { product, value });
    }
}

// mutations
const mutations = {
    SET_PRODUCTS(state, products) {
        state.all = products
    },
    SET_SHOW_PRODUCT(state, { product, value }) {
        state.product = product;
        state.showProduct = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}