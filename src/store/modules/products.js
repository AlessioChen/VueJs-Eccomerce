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
                let products = response.data;
                for (let i = 0; i < products.length; i++) {
                    products[i] = {
                        ...products[i],
                        id: i,
                        inCart: false,
                        quantity: 1,
                    };
                }
                commit('setProducts', products);
            });
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
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