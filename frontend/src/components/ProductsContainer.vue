<template>
  <div class="products-container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  props: ['products'],
}
</script>

<style lang="scss" scoped>
div.products-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(1fr, 20rem));
  gap: 2rem;

  @media (min-width: 450px) {
    grid-template-columns: repeat(2, minmax(13rem, 20rem));
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(13rem, 20rem));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(13rem, 20rem));
  }
}
</style>