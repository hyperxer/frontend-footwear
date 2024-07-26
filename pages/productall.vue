<template>
    <div>
        <FilterMenu />
        <div class="product-grid">
            <div v-if="products.length">
                <div class="product-item" v-for="product in products" :key="product.id">
                    <img :src="getProductImage(product.prod_img)" alt="Product Image" v-if="product.prod_img">
                    <div class="product-info">
                        <h3>{{ product.name }}</h3>
                        <p>{{ product.detail }}</p>
                        <p>{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilterMenu from '../components/FilterMenu.vue';

export default {
    components: {
        FilterMenu,
    },
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

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.product-item {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.product-info {
    margin-top: 10px;
}

@media (max-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>