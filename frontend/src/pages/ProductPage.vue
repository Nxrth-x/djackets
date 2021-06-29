<template>
  <main-layout :title="product.category">
    <ProductModal
      v-if="showModal"
      :src="product.image_url"
      :alt="product.name"
      @derender="toggleModal"
    />
    <div class="container">
      <div class="main-product">
        <div class="product-details">
          <img
            :src="product.image_url"
            :alt="product.name"
            @click="toggleModal"
          />
          <span>Click to zoom</span>
        </div>
        <div class="product-info">
          <h1 class="theme-gradient-font">{{ product.name }}</h1>
          <div class="description">
            <h2>Description</h2>
            <p>{{ product.description }}</p>
          </div>
          <div class="info">
            <h2>Information</h2>
            <p><b>Price:</b> ${{ product.price }}</p>
          </div>
          <div class="product-quantity">
            <button @click="decrement">-</button>
            <input type="number" disabled v-model="quantity" />
            <button @click="increment">+</button>
          </div>
          <div class="cart-action">
            <button @click="addToCart" class="btn-gradient add">
              Add to cart
            </button>
            <button class="remove">Remove from cart</button>
          </div>
        </div>
      </div>
      <div class="more-products">
        <h1 class="theme-gradient-font">More products</h1>
        <ProductsContainer :products="products" />
      </div>
    </div>
  </main-layout>
</template>

<script>
import { ref, onMounted, watch, inject, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

import useModal from '../hooks/useModal'
import useCounter from '../hooks/useCounter'
import { getLatestProducts, getProduct } from '../helpers/requests'
import { objectIsEmpty } from '../helpers/util'

import MainLayout from '../layouts/MainLayout.vue'
import ProductModal from '../components/ProductModal.vue'
import ProductsContainer from '../components/ProductsContainer.vue'

import '../helpers/typedef'

export default {
  components: {
    MainLayout,
    ProductModal,
    ProductsContainer,
  },
  setup() {
    /** @type {Store} */
    const store = inject('store')
    const route = useRoute()

    const [showModal, toggleModal] = useModal()

    const product = ref({})
    const products = ref([])
    const productId = ref(null)
    const [quantity, increment, decrement] = useCounter(1, 1, 10)

    const handleFetchData = async ({ categorySlug, productSlug }) => {
      const requestProduct = await getProduct(categorySlug, productSlug)

      product.value = requestProduct
      productId.value = requestProduct.id

      const storedProduct = store.state.cart.find(
        ({ id }) => id === productId.value
      )

      if (storedProduct) {
        quantity.value = storedProduct.quantity
      } else {
        quantity.value = 1
      }
    }

    const addToCart = () => {
      store.methods.addProduct({
        id: productId.value,
        quantity: quantity.value,
      })
      store.dispatchMiddlewares()
    }

    watch(route, async ({ params }) => {
      if (objectIsEmpty(params)) return

      await handleFetchData(params)
    })

    onMounted(async () => {
      await handleFetchData(route.params)
    })

    onMounted(async () => {
      const productsRequest = await getLatestProducts()

      products.value = productsRequest
    })

    return {
      showModal,
      toggleModal,
      quantity,
      product,
      addToCart,
      increment,
      decrement,
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

div.main-product {
  padding: 4rem 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 720px) {
    grid-template-columns: 3fr 1fr;
  }
}

div.product-details {
  position: relative;

  img {
    border-radius: 0.5rem;
    max-height: 32rem;
    object-fit: cover;
    cursor: pointer;
  }

  span {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
}

div.info,
div.description {
  margin: 1rem 0;
}

div.product-info {
  & > h1 {
    text-transform: uppercase;
    letter-spacing: -2px;
    font-size: 2.5rem;
  }

  div.product-quantity {
    margin: 1.5rem 0 1rem;

    display: flex;
    gap: 1rem;

    input,
    button {
      border: none;
      border-radius: 0.5rem;

      color: var(--gray-600);
      background: var(--white);

      box-shadow: var(--shadow);
    }

    input {
      flex: 1;
      text-align: center;
    }

    button {
      width: 2rem;
      height: 2rem;

      transition: var(--transition);

      &:hover {
        filter: brightness(0.95);
      }
    }
  }

  div.cart-action {
    button {
      padding: 0.5rem;
      border-radius: 0.25rem;
      width: 100%;
      transition: var(--transition);

      &:hover {
        filter: brightness(0.9);
      }

      &.add {
        margin: 1rem 0;
      }

      &.remove {
        border: 1px solid var(--red-600);

        color: var(--red-600);
        background: transparent;

        box-shadow: var(--shadow);

        &:hover {
          color: var(--white);
          background: var(--red-600);
        }
      }
    }
  }
}

div.more-products {
  padding: 0 0 6rem;

  h1 {
    margin-bottom: 2rem;

    width: fit-content;

    font-size: 2.5rem;
    letter-spacing: -2px;
  }
}
</style>
