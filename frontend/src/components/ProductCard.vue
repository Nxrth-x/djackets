<template>
  <div class="product">
    <img :src="product.thumbnail_url" :alt="product.name" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">${{ product.price }}</p>
      <router-link class="theme-gradient-font" :to="product.absolute_url">
        View details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style lang="scss" scoped>
div.product {
  border-radius: 0.5rem;
  overflow: hidden;

  background: var(--white);

  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);

  img {
    height: 14rem;
    object-fit: cover;
  }

  div.product-info {
    padding: 0.5rem 1rem 1rem;

    h3 {
      color: var(--gray-700);
    }
  }
}
</style>
