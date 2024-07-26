<template>
  <body>
    
  
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar-brand">
      <nuxt-link to="/"><h1>Shoes Plus +</h1></nuxt-link>
    </div>
    <div class="navbar-menu">
      <ul>
        <li><nuxt-link to="productnews" class="nav-link">สินค้ามาใหม่</nuxt-link></li>
        <li><nuxt-link to="bestseller" class="nav-link">รองเท้าขายดี</nuxt-link></li>
        <li><nuxt-link to="productmen" class="nav-link">รองเท้าผู้าย</nuxt-link></li>
        <li><nuxt-link to="productwomen" class="nav-link">รองเท้าผู้หญิง</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-icons">
      <nuxt-link to="login"><i class="fa fa-user nav-link"></i></nuxt-link>
      <a><i class="fa fa-search nav-link"></i></a>
      <a><i class="fa fa-shopping-bag nav-link"></i></a>
    </div>
  </nav>
</body>
</template>


<script>
export default {
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Kanit', sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  transition: background-color 0.3s;
}

.a {
  color: #000000;
}

.navbar-scrolled {
  background-color: white;
}

.navbar-brand h1 {
  font-size: 1.5rem;
}

.nav-link {
  color: #000000;
}

.navbar-menu ul {
  display: flex;
  list-style: none;
}

.navbar-menu ul li {
  margin-right: 2rem;
}

.navbar-icons a {
  margin-left: 1rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
}
</style>
