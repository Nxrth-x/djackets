<template>
  <main-layout title="Home">
    <div class="jumbotron">
      <div class="container">
        <h1 class="theme-gradient-font">Djackets</h1>
        <p>Best clothings, anywhere.</p>
      </div>
    </div>
    <main class="container">
      <h1 class="title theme-gradient-font">Latest products</h1>
      <ProductsContainer :products="products" />
    </main>
  </main-layout>
</template>

<script>
import { onBeforeMount, ref } from 'vue'

import { getLatestProducts } from '../helpers/requests'

import MainLayout from '../layouts/MainLayout.vue'
import ProductsContainer from '../components/ProductsContainer.vue'

export default {
  components: {
    MainLayout,
    ProductsContainer,
  },
  setup() {
    const products = ref([])

    onBeforeMount(async () => {
      const requestProducts = await getLatestProducts()

      products.value = requestProducts
    })

    return {
      products,
    }
  },
}
</script>

<style lang="scss" scoped>
div.wrapper {
  min-height: 100vh;
  background: var(--gray-200);
  color: var(--gray-600);
}

div.jumbotron {
  padding: 4rem 0 8rem;
  background: linear-gradient(90deg, var(--gray-300), var(--gray-200));

  div.container {
    h1 {
      font-size: 5rem;
      width: fit-content;

      letter-spacing: -2px;
      color: var(--white);
    }

    p {
      font-size: 1.5rem;
      color: var(--gray-600);
    }

    @media (min-width: 720px) {
      h1 {
        font-size: 8rem;
        letter-spacing: -4px;
      }

      p {
        font-size: 2rem;
      }
    }
  }
}

main {
  padding: 4rem 0 6rem;
}

h1.title {
  color: var(--gray-900);
  font-size: 3rem;
  letter-spacing: -1px;
  margin-bottom: 2rem;
  width: fit-content;
}
</style>