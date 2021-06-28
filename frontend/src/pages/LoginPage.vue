<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <h1 class="theme-gradient-font">Login</h1>
      <form @submit.prevent="handleSubmit">
        <label>
          <span>Email</span>
          <div class="input-group">
            <span>@</span>
            <input type="email" placeholder="Email" v-model="user.email" />
          </div>
        </label>
        <label>
          <span>Password</span>
          <div class="input-group">
            <span>*</span>
            <input
              type="password"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
        </label>
        <button class="btn-gradient">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

import { logUserIn } from '../helpers/auth'
import { saveTokenToLocalStorage } from '../helpers/local-storage'

import Header from '../components/Header.vue'

export default {
  components: { Header },
  setup() {
    const user = reactive({
      email: '',
      password: '',
    })

    const handleSubmit = async () => {
      try {
        const data = await logUserIn(user)

        saveTokenToLocalStorage(data.token)
      } catch (error) {
        console.log(error)
      }
    }

    return {
      user,
      handleSubmit,
    }
  },
}
</script>

<style lang="scss" scoped>
div.wrapper {
  background: var(--gray-200);
}

div.container {
  height: calc(100vh - 5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    letter-spacing: -2px;
  }

  form {
    width: 90%;
    max-width: 24rem;

    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;

      & > span {
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
      }

      div.input-group {
        display: flex;
        align-items: center;

        background: var(--white);

        border-radius: 0.25rem;

        overflow: hidden;

        box-shadow: var(--shadow);

        input {
          flex: 1;
          border: none;
          outline: none;

          padding: 0 1rem;
        }

        span {
          display: grid;
          place-items: center;

          width: 3rem;
          height: 3rem;

          background: linear-gradient(90deg, var(--pink-600), var(--red-600));

          color: var(--gray-200);
        }
      }
    }

    button {
      font-size: 1.125rem;
    }
  }
}
</style>