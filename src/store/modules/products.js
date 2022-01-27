import axios from 'axios'
import shop from '../../api/shop'
// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('SET_PRODUCTS', products); 
        })
    }
}

// mutations
const mutations = {
    SET_PRODUCTS(state, products) {
        state.all = products
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}