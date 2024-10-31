<script setup>
import JobData from "@/jobs.json";
import { ref } from "vue";
import JobListing from "./JobListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const jobs = ref(JobData);
</script>

<template>
  <section class="job-list-section">
    <div class="container">
      <h2 class="heading">Browse Jobs</h2>

      <!-- Show job listing when done loading -->
      <div class="job-list">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="section">
    <a href="/jobs" class="button">View All Jobs</a>
  </section>
</template>

<style>
.section {
  margin: auto;
  max-width: 32rem; /* Equivalent to max-w-lg */
  margin-top: 2.5rem; /* Equivalent to my-10 (top/bottom margin) */
  margin-bottom: 2.5rem;
  padding-left: 1.5rem; /* Equivalent to px-6 (left/right padding) */
  padding-right: 1.5rem;
}

.button {
  display: block;
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem 1.5rem; /* Equivalent to py-4 and px-6 */
  border-radius: 0.75rem; /* Equivalent to rounded-xl */
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #4b5563; /* Equivalent to hover:bg-gray-700 */
}

/* Translate bg-blue-50 */
.job-list-section {
  background-color: #ebf8ff; /* light blue */
  padding: 40px 16px; /* px-4 py-10 in Tailwind */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Translate text-3xl and text-green-500 */
.heading {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700; /* font-bold */
  color: #48bb78; /* green color equivalent to text-green-500 */
  margin-bottom: 24px; /* mb-6 */
  text-align: center;
}

/* Translate grid layout */
.job-list {
  display: grid;
  grid-template-columns: 1fr; /* 1 column for mobile */
  gap: 24px; /* gap-6 */
}

@media (min-width: 768px) {
  .job-list {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* md:grid-cols-3 for larger screens */
  }
}
</style>
