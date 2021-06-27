<template>
  <div class="modal-wrapper" @click="$emit('derender')">
    <div>
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'alt'],
  emits: ['derender'],
}
</script>

<style lang="scss" scoped>
div.modal-wrapper {
  z-index: 10;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  cursor: pointer;

  & > div {
    cursor: default;
    max-width: 32rem;
    width: 90%;

    img {
      border-radius: 0.5rem;
      box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.125);
    }
  }
}
</style>