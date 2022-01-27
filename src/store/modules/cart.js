// initial state
const state = {
    items: [],
    discount: false
}

// getters
const getters = {
    cartProducts: (state, getters) => {
        return state.items;
    },

    cartTotalPrice: (state, getters) => {
        let sum = 0;
        for (let i = 0; i < state.items.length; i++) {
            sum += state.items[i].product.price * state.items[i].quantity;
        }
        if (state.items.length > 2) {
            state.discount = true;
            let disc = sum / 10;
            sum -= disc;
        }

        return parseFloat(sum).toFixed(2);
    },

    cartItemCount: (state) => {
        return state.items.length;
    },
    checkProductInCart: (state) => (product) => {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].product.name === product.name)
                return true;
        }

        return false;

    },
    getDiscount: () => {
        console.log(state.discount);
        return state.discount;
    }
}

// actions
const actions = {

    addProductToCart({ commit }, { product, quantity = 0 }) {
        commit('ADD_TO_CART', { product, quantity })
    },

    removeProduct({ state, commit }, product) {
        commit('REMOVE_FROM_CART', product)

    },

    decProductQuantity({ state, commit }, product) {
        commit('DEC_PRODUCT_QUANTITY', product)

    },

    checkInCart({ commit }, product) {
        return false;
    }
}

// mutations
const mutations = {
    ADD_TO_CART(state, { product, quantity }) {

        let productInCart = state.items.find(item => {
            return item.product.name === product.name;
        })

        if (productInCart) {
            productInCart.quantity++;
            return;
        }

        state.items.push({
            product,
            quantity,
            inCart: true
        });

    },

    REMOVE_FROM_CART(state, product) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].name == product.name) {
                state.items.splice(i, 1);
            }
        }
    },

    DEC_PRODUCT_QUANTITY(state, product) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].name == product.name) {
                if (state.items[i].quantity > 1) {
                    state.items[i].quantity--;
                    return
                }
                state.items.splice(i, 1);
            }
        }
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
