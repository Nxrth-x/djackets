<template>
  <div class="page-wrapper">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import { watch, onBeforeMount } from 'vue'

import { setPageTitle } from '../helpers/page'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  props: ['title'],
  components: { Header, Footer },
  setup(props) {
    onBeforeMount(() => setPageTitle(props.title))

    watch(() => props.title, setPageTitle)
  },
}
</script>

<style lang="scss" scoped>
div.page-wrapper {
  min-height: 100vh;
  background: var(--gray-200);
  color: var(--gray-600);
}
</style>