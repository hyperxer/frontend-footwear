// store/products.js
export const state = () => ({
    products: []
  });
  
  export const mutations = {
    setProducts(state, products) {
      state.products = products;
    }
  };
  
  export const actions = {
    async fetchProducts({ commit }) {
      try {
        const response = await this.$axios.get('/products');
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  };
  
  export const getters = {
    products: (state) => state.products
  };
  