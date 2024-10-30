<script setup>
import { defineProps } from "vue";
defineProps({
  title: { type: String, default: "Become a Vue Dev" },
  subtitle: {
    type: String,
    default: "Find the Vue job that fits your skills and needs",
  },
});
</script>

<template>
  <section class="hero-section">
    <div class="container">
      <div class="text-center">
        <h1 class="hero-title">{{ title }}</h1>
        <p class="hero-description">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.hero-section {
  background-color: #38a169; /* bg-green-700 */
  padding-top: 5rem; /* py-20 */
  padding-bottom: 5rem; /* py-20 */
  margin-bottom: 1rem; /* mb-4 */
}

.container {
  max-width: 80rem; /* max-w-7xl */
  margin-left: auto; /* mx-auto */
  margin-right: auto; /* mx-auto */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem; /* sm:px-6 */
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem; /* lg:px-8 */
  }
}

.hero-title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 800; /* font-extrabold */
  color: white; /* text-white */
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3rem; /* sm:text-5xl */
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem; /* md:text-6xl */
  }
}

.hero-description {
  margin: 1rem 0; /* my-4 */
  font-size: 1.25rem; /* text-xl */
  color: white; /* text-white */
}
</style>
