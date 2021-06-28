<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { provide } from 'vue'
import store from './store'

export default {
  setup() {
    provide('store', store)
  },
}
</script>

<style lang="scss">
:root {
  --black: #000;
  --black-light: #181818;
  --white: #fff;

  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  --red-50: #fef2f2;
  --red-100: #fee2e2;
  --red-200: #fecaca;
  --red-300: #fca5a5;
  --red-400: #f87171;
  --red-500: #ef4444;
  --red-600: #dc2626;
  --red-700: #b91c1c;
  --red-800: #991b1b;
  --red-900: #7f1d1d;

  --yellow-50: #fffbeb;
  --yellow-100: #fef3c7;
  --yellow-200: #fde68a;
  --yellow-300: #fcd34d;
  --yellow-400: #fbbf24;
  --yellow-500: #f59e0b;
  --yellow-600: #d97706;
  --yellow-700: #b45309;
  --yellow-800: #92400e;
  --yellow-900: #78350f;

  --green-50: #ecfdf5;
  --green-100: #d1fae5;
  --green-200: #a7f3d0;
  --green-300: #6ee7b7;
  --green-400: #34d399;
  --green-500: #10b981;
  --green-600: #059669;
  --green-700: #047857;
  --green-800: #065f46;
  --green-900: #064e3b;

  --blue-50: #eff6ff;
  --blue-100: #dbeafe;
  --blue-200: #bfdbfe;
  --blue-300: #93c5fd;
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
  --blue-600: #2563eb;
  --blue-700: #1d4ed8;
  --blue-800: #1e40af;
  --blue-900: #1e3a8a;

  --indigo-50: #eef2ff;
  --indigo-100: #e0e7ff;
  --indigo-200: #c7d2fe;
  --indigo-300: #a5b4fc;
  --indigo-400: #818cf8;
  --indigo-500: #6366f1;
  --indigo-600: #4f46e5;
  --indigo-700: #4338ca;
  --indigo-800: #3730a3;
  --indigo-900: #312e81;

  --purple-50: #f5f3ff;
  --purple-100: #ede9fe;
  --purple-200: #ddd6fe;
  --purple-300: #c4b5fd;
  --purple-400: #a78bfa;
  --purple-500: #8b5cf6;
  --purple-600: #7c3aed;
  --purple-700: #6d28d9;
  --purple-800: #5b21b6;
  --purple-900: #4c1d95;

  --pink-50: #fdf2f8;
  --pink-100: #fce7f3;
  --pink-200: #fbcfe8;
  --pink-300: #f9a8d4;
  --pink-400: #f472b6;
  --pink-500: #ec4899;
  --pink-600: #db2777;
  --pink-700: #be185d;
  --pink-800: #9d174d;
  --pink-900: #831843;

  --transition: 250ms ease-in-out;

  --shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.05);
  --shadow-dark: 0 0.25rem 1rem rgba(0, 0, 0, 0.125);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}

body::-webkit-scrollbar {
  width: 0.5rem;
}

body::-webkit-scrollbar-track {
  background: var(--black-light);
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(
    180deg,
    var(--pink-600),
    var(--red-600),
    var(--yellow-600)
  );
}

h1,
h2,
h3,
h4,
h5,
h6,
b {
  color: var(--gray-700);
}

html,
body {
  color: var(--gray-600);
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 81.25%;
  }
}

.container {
  margin: 0 auto;
  max-width: 70rem;
  width: 90%;
}

.theme-gradient-background {
  background: linear-gradient(
    90deg,
    var(--pink-600),
    var(--red-600),
    var(--yellow-600)
  );
}

.theme-gradient-font {
  background: linear-gradient(
    90deg,
    var(--pink-600),
    var(--red-600),
    var(--yellow-600)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-gradient {
  padding: 0.5rem 1rem;

  color: var(--white);

  border: none;
  border-radius: 0.25rem;

  background: linear-gradient(
    90deg,
    var(--pink-600),
    var(--red-600),
    var(--yellow-600)
  );

  transition: var(--transition);

  &:hover {
    filter: brightness(0.9);
  }
}
</style>
