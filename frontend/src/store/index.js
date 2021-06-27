import { reactive } from 'vue'
import '../helpers/typedef.js'

/**
 * @type {State}
 */
const state = reactive(
  JSON.parse(localStorage.getItem('_products')) || {
    cart: [],
    total: 0,
  }
)

const store = {
  state,
  methods: {
    addProduct({ quantity, id }) {
      let productInState = state.cart.find(
        ({ id: productId }) => id === productId
      )

      if (productInState) {
        productInState.quantity = quantity
        productInState.id = id
        return
      }

      state.cart.push({
        id,
        quantity,
      })
    },
    removeProduct(productId) {
      state.cart = state.cart.filter(product => product.id !== productId)
    },
  },
  listeners: {
    syncLocalStorate() {
      localStorage.setItem('_products', JSON.stringify(state))
    },
  },
  dispatchMiddlewares() {
    this.listeners.syncLocalStorate()
  },
}

export default store
