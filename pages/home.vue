<template>
    <div>
      <h1>Products</h1>
      <div v-if="products.length">
        <div v-for="product in products" :key="product.id" class="product">
          <img :src="getProductImage(product.prod_img)" alt="Product Image" v-if="product.prod_img">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>ราคา: {{ product.price }} ฿</p>
          <div>
            <h3>Colors:</h3>
            <ul>
              <li v-for="color in product.colors" :key="color.id">{{ color.name }}</li>
            </ul>
          </div>
          <div>
            <h3>Sizes:</h3>
            <ul>
              <li v-for="size in product.sizes" :key="size.id">{{ size.value }} (Quantity: {{ size.productSize.quantity }})</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No products available.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async fetch({ store }) {
      await store.dispatch('products/fetchProducts');
    },
    computed: {
      products() {
        return this.$store.getters['products/products'];
      }
    },
    methods: {
      getProductImage(image) {
        return `http://localhost:3001/imgproducts/${image}`;
      }
    }
  };
  </script>
  
  <style>
  .products {
    display: flex;
    flex-wrap: wrap;
  }
  
  .product {
    width: 200px;
    margin: 10px;
  }
  </style>
  