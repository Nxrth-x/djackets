<template>
  <footer>
    <div class="container">
      <div class="title">
        <h1 class="theme-gradient-font">Djackets</h1>
        <p>
          An application by
          <a href="#" target="_blank" class="theme-gradient-font">Nxrth-x</a>
        </p>
      </div>
      <div class="links">
        <a href="https://github.com/Nxrth-x" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/lima-eder" target="_blank">LinkedIn</a>
        <a href="https://facebook.com/DCCLXXIX" target="_blank">Facebook</a>
      </div>
      <div class="about">
        <p>
          Djackets is an e-commerce project developed using Django and Vue for
          mainly studies. If you liked this project, please consider giving it a
          star on <a href="#" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: var(--black-light);
}

div.container {
  padding: 2rem 0;

  display: grid;
  align-items: center;
  gap: 2rem;

  color: var(--gray-500);

  div.title {
    h1 {
      width: fit-content;
      letter-spacing: -2px;
    }

    p a {
      font-weight: 700;
    }
  }

  div.links {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    font-size: 0.8rem;

    a {
      color: var(--pink-500);
    }
  }

  div.about {
    font-size: 0.8rem;

    a {
      color: var(--pink-500);
    }
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>