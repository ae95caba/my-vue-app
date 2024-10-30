<script setup>
import { defineProps } from "vue";
defineProps({
  job: Object,
});
</script>

<template>
  <div class="job-card">
    <div class="job-card-content">
      <div class="job-type">
        <div class="job-type-label">{{ job.type }}</div>
        <h3 class="job-title">{{ job.title }}</h3>
      </div>

      <div class="job-description">
        {{ job.description }}
      </div>

      <h3 class="salary">{{ job.salary }} / Year</h3>

      <div class="divider"></div>

      <div class="job-details">
        <div class="location">
          <i class="fa-solid fa-location-dot"></i>
          {{ job.location }}
        </div>
        <a :href="`/job/` + job.id" class="read-more-button">Read More</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Translate bg-white, rounded-xl, shadow-md */
.job-card {
  background-color: #ffffff; /* bg-white */
  border-radius: 1rem; /* rounded-xl */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  position: relative;
}

/* Translate p-4 */
.job-card-content {
  padding: 16px; /* p-4 */
}

/* Translate mb-6 */
.job-type {
  margin-bottom: 24px; /* mb-6 */
}

.job-type-label {
  color: #4b5563; /* text-gray-600 */
  margin: 8px 0; /* my-2 */
}

/* Translate text-xl, font-bold */
.job-title {
  font-size: 1.25rem; /* text-xl */
  font-weight: 700; /* font-bold */
}

/* Translate mb-5 */
.job-description {
  margin-bottom: 20px; /* mb-5 */
}

/* Translate text-green-500, mb-2 */
.salary {
  color: #48bb78; /* text-green-500 */
  margin-bottom: 8px; /* mb-2 */
}

/* Translate border, border-gray-100, mb-5 */
.divider {
  border: 1px solid #f7fafc; /* border-gray-100 */
  margin-bottom: 20px; /* mb-5 */
}

/* Translate flex, flex-col, lg:flex-row, justify-between, mb-4 */
.job-details {
  display: flex;
  flex-direction: column; /* flex-col */
  justify-content: space-between; /* justify-between */
  margin-bottom: 16px; /* mb-4 */
}

/* Translate text-orange-700, mb-3 */
.location {
  color: #c05621; /* text-orange-700 */
  margin-bottom: 12px; /* mb-3 */
  display: flex;
  align-items: center; /* Center icon and text */
}

.fa-solid.fa-location-dot {
  font-size: 1.125rem; /* text-lg */
  margin-right: 4px; /* Space between icon and text */
}

/* Translate h-[36px], bg-green-500, hover:bg-green-600, text-white, px-4, py-2, rounded-lg, text-center, text-sm */
.read-more-button {
  height: 36px; /* h-[36px] */
  background-color: #48bb78; /* bg-green-500 */
  color: #ffffff; /* text-white */
  padding: 8px 16px; /* px-4 py-2 */
  border-radius: 0.5rem; /* rounded-lg */
  text-align: center; /* text-center */
  font-size: 0.875rem; /* text-sm */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Make it inline-block for padding */
}

/* Hover state */
.read-more-button:hover {
  background-color: #38a169; /* hover:bg-green-600 */
}
</style>
