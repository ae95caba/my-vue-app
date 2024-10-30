<script setup>
import Card from "./Card.vue";
</script>
<template>
  <!-- Developers and Employers -->
  <section class="developers-employers-section">
    <div class="container">
      <div class="grid-container">
        <Card backgroundColor="bg-gray-100">
          <h2 class="card-title">For Developers</h2>
          <p class="card-description">
            Browse our Vue jobs and start your career today
          </p>
          <a href="jobs.html" class="card-button">Browse Jobs</a>
        </Card>
        <Card>
          <h2 class="card-title">For Employers</h2>
          <p class="card-description">
            List your job to find the perfect developer for the role
          </p>
          <a href="add-job.html" class="card-button employer-button">Add Job</a>
        </Card>
      </div>
    </div>
  </section>
</template>

<style>
.developers-employers-section {
  padding-top: 1rem; /* py-4 */
  padding-bottom: 1rem; /* py-4 */
}

.container {
  max-width: 1280px; /* lg:container */
  margin-left: auto; /* m-auto */
  margin-right: auto; /* m-auto */
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1rem; /* gap-4 */
  padding: 1rem; /* p-4 */
  border-radius: 0.5rem; /* rounded-lg */
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* md:grid-cols-2 */
  }
}

.card-title {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 700; /* font-bold */
}

.card-description {
  margin-top: 0.5rem; /* mt-2 */
  margin-bottom: 1rem; /* mb-4 */
}

.card-button {
  display: inline-block;
  background-color: #000; /* bg-black */
  color: white; /* text-white */
  border-radius: 0.5rem; /* rounded-lg */
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem; /* py-2 */
  text-decoration: none;
}

.card-button:hover {
  background-color: #4a5568; /* hover:bg-gray-700 for developer button */
}

.employer-button {
  background-color: #48bb78;
  background-color: #38a169;
}
.employer-button:hover {
  background-color: #48bb78;
}
</style>
