<template>
  <header>
    <div class="container">
      <router-link class="title theme-gradient-font" to="/"
        >Djackets</router-link
      >
      <div class="links">
        <a class="link" href="#">Summer</a>
        <a class="link" href="#">Winter</a>
        <router-link class="button login" to="/login">Login</router-link>
        <router-link class="button cart" to="/cart">
          Cart
          <span v-if="productsQuantity">{{ productsQuantity }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, inject } from 'vue'
export default {
  setup() {
    const { state } = inject('store')

    const productsQuantity = computed(() => {
      const total = state.cart.reduce((acc, next) => acc + next.quantity, 0)

      return total > 9 ? '9+' : total
    })

    return {
      productsQuantity,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  background: var(--gray-100);
  height: 5rem;
  display: flex;
  align-items: center;
}

div.container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0rem;

  a.title {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: -1.5px;

    &:hover {
      text-decoration: none;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    a.link {
      text-transform: uppercase;
      letter-spacing: 2px;

      transition: var(--transition);

      &:hover {
        text-decoration: none;
        color: var(--red-600);
      }
    }

    a.button {
      display: none;

      padding: 0.25rem;

      width: 5rem;

      text-align: center;
      font-size: 0.9rem;

      border: none;
      border-radius: 0.25rem;

      transition: var(--transition);

      &:hover {
        text-decoration: none;
      }

      &.login {
        border: 1px solid var(--red-600);
        color: var(--red-600);

        &:hover {
          background: var(--red-600);
          color: var(--white);
        }
      }

      &.cart {
        position: relative;
        color: var(--white);
        background: linear-gradient(
          90deg,
          var(--pink-600),
          var(--red-600),
          var(--yellow-600)
        );

        span {
          position: absolute;
          top: -0.2rem;
          right: -0.2rem;

          width: 1.2rem;
          height: 1.2rem;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: var(--white);

          font-size: 0.6rem !important;

          background: var(--red-600);

          box-shadow: var(--shadow);
        }

        &:hover {
          filter: brightness(0.8);
        }
      }

      @media (min-width: 450px) {
        display: block;
      }
    }
  }
}
</style>