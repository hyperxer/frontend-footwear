<template>
  <div class="featured-products">
    <h2>สินค้าแนะนำ</h2>
    <div class="products">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.name" />
        <p>{{ product.name }}</p>
        <span>{{ product.price }}</span>
      </div>
    </div>
    <a href="/all-products" class="view-all">VIEW ALL</a>
    
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      products: [
        { name: 'Running shoes for men', price: '2975 ฿', image: require('../assets/images/card-image2.jpg') },
        { name: 'Running shoes for men', price: '3750 ฿', image: require('../assets/images/card-image2.jpg') },
        { name: 'Running shoes for men', price: '2450 ฿', image: require('../assets/images/card-image3.jpg') },
        { name: 'Running shoes for men', price: '3590 ฿', image: require('../assets/images/card-image5.jpg') },
        { name: 'Running shoes for men', price: '1990 ฿', image: require('../assets/images/card-image6.jpg') },
      ],
    };
  },
};
</script>

<style scoped>
.featured-products {
  text-align: center;
  margin: 20px;
}

.featured-products h2 {
  font-weight: bold;
  margin-bottom: 20px;
}

.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product-card {
  flex: 1;
  margin: 10px;
  text-align: center;
  min-width: 200px;
}

.product-card img {
  width: 100%;
  height: auto;
}

.product-card p {
  margin: 10px 0;
}

.product-card span {
  font-weight: bold;
}

.view-all {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #000;
}

@media (max-width: 1200px) {
  .product-card {
    flex: 0 0 45%;
  }
}

@media (max-width: 768px) {
  .product-card {
    flex: 0 0 100%;
  }
}
</style>