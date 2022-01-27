import axios from 'axios'

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllProducts({ commit }) {
        axios.get('https://ott-fogliata.github.io/vuejs-s2i-repository/cultured-meat.json')
            .then(response => {
                commit('SET_PRODUCTS', response.data);
            });
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