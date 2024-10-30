<script setup>
import { defineProps } from "vue";
defineProps({
  backgroundColor: {
    type: String,
    default: "#f7fafc",
  },
});
</script>
<template>
  <div class="card" :style="{ backgroundColor: backgroundColor }">
    <slot></slot>
  </div>
</template>

<style>
.card {
  padding: 1.5rem; /* p-6 */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* shadow-md */
}
</style>
