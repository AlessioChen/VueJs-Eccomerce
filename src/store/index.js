import { createStore } from "vuex";
import products from './modules/products';
import cart from './modules/cart';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    modules: {
        products, 
        cart
    }, 
    plugins: [createPersistedState()]
})