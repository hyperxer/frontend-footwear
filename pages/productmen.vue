<template>
  <div class="container content-space-1">
      <div class="row">
          <div class="col-lg-3">
              <!-- Navbar -->
              <div class="navbar-expand-lg mb-5">
                  <!-- Navbar Toggle -->
                  <div class="d-grid">
                      <button type="button" class="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse"
                          data-bs-target="#navbarVerticalNavMenuEg2" aria-label="Toggle navigation"
                          aria-expanded="false" aria-controls="navbarVerticalNavMenuEg2">
                          <span class="d-flex justify-content-between align-items-center">
                              <span class="text-dark">Filter</span>

                              <span class="navbar-toggler-default">
                                  <i class="bi-list"></i>
                              </span>

                              <span class="navbar-toggler-toggled">
                                  <i class="bi-x"></i>
                              </span>
                          </span>
                      </button>
                  </div>
                  <!-- End Navbar Toggle -->

                  <!-- Navbar Collapse -->
                  <div id="navbarVerticalNavMenuEg2" class="collapse navbar-collapse">
                      <div class="w-100">
                          <!-- Form -->
                          <form @submit.prevent="searchProducts">
                              <div class="border-bottom pb-4 mb-4">
                                  <h5>Brand</h5>

                                  <div class="d-grid gap-2">
                                      <div class="form-check" v-for="brand in brands" :key="brand.id">
                                          <input class="form-check-input" type="checkbox" :value="brand.id"
                                              v-model="filters.brandIds" :id="`brandCheckbox${brand.id}`">
                                          <label class="form-check-label" :for="`brandCheckbox${brand.id}`">{{
                                              brand.name }}</label>
                                      </div>
                                  </div>

                                  <!-- View More - Collapse -->
                                  <div class="collapse" id="collapseBrand">
                                      <div class="d-grid gap-2">
                                          <!-- Additional brands can be listed here -->
                                      </div>
                                  </div>
                                  <!-- End View More - Collapse -->

                                  <!-- Link -->
                                  <a class="link-sm link-collapse" href="#collapseBrand" role="button"
                                      data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseBrand">
                                      <span class="link-collapse-default">View more</span>
                                      <span class="link-collapse-active">View less</span>
                                  </a>
                                  <!-- End Link -->
                              </div>

                              <div class="border-bottom pb-4 mb-4">
                                  <h5>Size</h5>

                                  <div class="d-grid gap-2">
                                      <div class="row row-cols-2 row-cols-sm-4">
                                          <div v-for="size in sizes" :key="size.id" class="col-3 mb-2">
                                              <button :class="['btn', 'btn-size', {}]">
                                                  {{ size.size }}
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="border-bottom pb-4 mb-4">
                                  <h5>Color</h5>

                                  <div class="d-grid gap-2">
                                      <!-- <div class="form-check" v-for="color in colors" :key="color.id">
                                          <input class="form-check-input" type="checkbox" :value="color.id" v-model="filters.colorIds" :id="`colorCheckbox${color.id}`">
                                          <label class="form-check-label" :for="`colorCheckbox${color.id}`">
                                              <span :style="{ backgroundColor: getColorHex(color.name) }" class="color-swatch"></span>
                                          </label>
                                      </div> -->
                                      <div class="row row-cols-2 row-cols-sm-4">
                                          <!-- Render color buttons here -->
                                          <div v-for="color in colors" :key="color.id" class="col mb-2">
                                              <button :class="['btn', 'btn-color', {}]"
                                                  :style="{ backgroundColor: getColorHex(color.name) }"></button>
                                          </div>
                                      </div>
                                  </div>
                              </div>

                              <div class="border-bottom pb-4 mb-4">
                                  <h5>Category</h5>

                                  <div class="d-grid gap-2">
                                      <div class="form-check" v-for="category in categories" :key="category.id">
                                          <input class="form-check-input" type="checkbox" :value="category.id"
                                              v-model="filters.categoryIds" :id="`categoryCheckbox${category.id}`">
                                          <label class="form-check-label" :for="`categoryCheckbox${category.id}`">{{
                                              category.name }}</label>
                                      </div>
                                  </div>

                                  <!-- View More - Collapse -->
                                  <div class="collapse" id="collapseCategory">
                                      <div class="d-grid gap-2">
                                          <!-- Additional categories can be listed here -->
                                      </div>
                                  </div>
                                  <!-- End View More - Collapse -->

                                  <!-- Link -->
                                  <a class="link-sm link-collapse" href="#collapseCategory" role="button"
                                      data-bs-toggle="collapse" aria-expanded="false"
                                      aria-controls="collapseCategory">
                                      <span class="link-collapse-default">View more</span>
                                      <span class="link-collapse-active">View less</span>
                                  </a>
                                  <!-- End Link -->
                              </div>

                              <div class="d-grid">
                                  <button type="button" class="btn btn-white btn-transition"
                                      @click="clearFilters">Clear all</button>
                              </div>
                          </form>
                          <!-- End Form -->
                      </div>
                  </div>
                  <!-- End Navbar Collapse -->
              </div>
              <!-- End Navbar -->
          </div>

          <div class="col-lg-9">
              <div class="row align-items-center mb-5">
                  <div class="col-sm mb-3 mb-sm-0">
                      <h6 class="mb-0">{{ products.length }} products</h6>
                  </div>
              </div>

              <div class="row row-cols-sm-2 row-cols-md-3 mb-10">
                  <div class="col-6 col-md-4 mb-4" v-for="product in products" :key="product.id">
                      <!-- Card -->
                      <div class="card card-bordered shadow-none text-center h-100">
                          <div class="card-pinned">
                              <img class="card-img-top" :src="getProductImage(product.prod_img)" alt="Product Image">
                              <div class="card-pinned-top-start">
                                  <span class="badge bg-success rounded-pill" v-if="product.isNew">New arrival</span>
                              </div>
                              <div class="card-pinned-top-end">
                                  <button type="button"
                                      class="btn btn-outline-secondary btn-xs btn-icon rounded-circle"
                                      data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save for later"
                                      data-bs-original-title="Save for later">
                                      <i class="bi-heart"></i>
                                  </button>
                              </div>
                          </div>
                          <div class="card-body">
                              <div class="mb-2">
                                  <!-- <a class="link-sm link-secondary" :href="`/category/${product.categoryId}`">{{
                                      product.category.name }}</a> -->
                              </div>
                              <h4 class="card-title">
                                  <a class="text-dark" :href="`/product/${product.id}`">{{ product.name }}</a>
                              </h4>
                              <p class="card-text text-dark">${{ product.price.toFixed(2) }}</p>
                          </div>
                          <div class="card-footer pt-0">
                              <!-- Rating -->
                              <a class="d-inline-flex align-items-center mb-3" href="#">
                                  <div class="d-flex gap-1 me-2">
                                      <!-- Add rating stars here if available -->
                                  </div>
                                  <span class="small">{{ product.rating || 'No rating' }}</span>
                              </a>
                              <!-- End Rating -->
                              <button type="button" class="btn btn-outline-primary btn-sm rounded-pill">Add to
                                  cart</button>
                          </div>
                      </div>
                      <!-- End Card -->
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          filters: {
              brandIds: [],
              sizeIds: [],
              colorIds: [],
              categoryIds: []
          },
          products: [],
          brands: [],
          colors: [],
          sizes: [],
          categories: [],
          colorMap: {
              'black': '#000000',
              'white': '#FFFFFF',
              'blue': '#0000FF',
              'red': '#FF0000',
              'green': '#008000',
              'yellow': '#FFFF00',
              'orange': '#FFA500',
              'purple': '#800080',
              'pink': '#FFC0CB',
              'brown': '#A52A2A',
              'gray': '#808080',
              'silver': 'C0C0C0',
              'lime': '#00FF00',
              'cyan': '#00FFFF',
              'magenta': '#FF00FF',
              'navy': '#000080',
              'teal': '#008080',
              'maroon': '#800000',
              'olive': '#808000',
              'darkgreen': '#006400',
              'lavender': "#dcbeff"

          }
      };
  },
  async mounted() {
      await this.fetchFilters();
      await this.searchProducts();
  },
  methods: {
      async fetchFilters() {
          try {
              const [brandsResponse, colorsResponse, sizesResponse, categoriesResponse] = await Promise.all([
                  this.$axios.get('/brand'),
                  this.$axios.get('/color'),
                  this.$axios.get('/size/male'),
                  this.$axios.get('/category')
              ]);
              this.brands = brandsResponse.data;
              this.colors = colorsResponse.data;
              this.sizes = sizesResponse.data;
              this.categories = categoriesResponse.data;
          } catch (error) {
              console.error('Error fetching filters:', error);
          }
      },
      async searchProducts() {
          try {
              const { brandIds, colorIds, sizeIds, categoryIds } = this.filters;
              const response = await this.$axios.get('/products', {
                  params: {
                      brandIds: brandIds.join(','),
                      colorIds: colorIds.join(','),
                      sizeIds: sizeIds.join(','),
                      categoryIds: categoryIds.join(',')
                  }
              });
              this.products = response.data;
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      },
      clearFilters() {
          this.filters = {
              brandIds: [],
              sizeIds: [],
              colorIds: [],
              categoryIds: []
          };
          this.searchProducts();
      },
      getProductImage(image) {
          return image ? `http://localhost:3001/imgproducts/${image}` : '../assets/images/default.jpg';
      },
      getColorHex(colorName) {
          return this.colorMap[colorName] || '#DDDDDD'; // สีเริ่มต้นถ้าชื่อสีไม่พบในแมพ
      }
  }
};
</script>

<style scoped>
/* Add your responsive styles here */

.color-swatch {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.color-swatch:hover {
  border-color: #000;
}

.btn-color {
  height: 40px;
  width: 40px;
  border-radius: 4px;
  border: none;
  padding: 0;
  margin: 2px;
}

.btn-color.active {
  border: 2px solid #000;
}

.btn-size {
  width: 100%;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: white;
  color: black;
}

.btn-size.active {
  background-color: #007bff;
  color: #fff;
}

.card-img-top {
  width: 100%;
  height: auto;
}
</style>
