<script setup>
import logo from "@/assets/images/logo.png";
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-left">
          <!-- Logo -->
          <a class="logo" href="index.html">
            <img class="logo-img" :src="logo" alt="Vue Jobs" />
            <span class="logo-text">Vue Jobs</span>
          </a>
          <div class="menu">
            <div class="menu-items">
              <a href="index.html" class="menu-link active">Home</a>
              <a href="jobs.html" class="menu-link">Jobs</a>
              <a href="add-job.html" class="menu-link">Add Job</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Navbar Styles */
.navbar {
  background-color: #047857; /* Tailwind bg-green-700 */
  border-bottom: 1px solid #059669; /* Tailwind border-green-500 */
}

.container {
  max-width: 1120px; /* Tailwind max-w-7xl */
  padding-left: 16px; /* Tailwind px-2 */
  padding-right: 16px; /* Tailwind px-2 */
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 640px) {
  .container {
    padding-left: 24px; /* Tailwind sm:px-6 */
    padding-right: 24px; /* Tailwind sm:px-6 */
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 32px; /* Tailwind lg:px-8 */
    padding-right: 32px; /* Tailwind lg:px-8 */
  }
}

.navbar-content {
  display: flex;
  height: 80px; /* Tailwind h-20 */
  align-items: center;
  justify-content: space-between;
}

.navbar-left {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .navbar-left {
    justify-content: flex-start; /* Tailwind md:justify-start */
  }
}

.logo {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 16px; /* Tailwind mr-4 */
}

.logo-img {
  height: 40px; /* Tailwind h-10 */
  width: auto;
}

.logo-text {
  display: none;
  color: white;
  font-size: 1.5rem; /* Tailwind text-2xl */
  font-weight: bold;
  margin-left: 8px; /* Tailwind ml-2 */
}

@media (min-width: 768px) {
  .logo-text {
    display: block; /* Tailwind md:block */
  }
}

.menu {
  margin-left: auto;
}

.menu-items {
  display: flex;
  gap: 8px; /* Tailwind space-x-2 */
}

.menu-link {
  color: white;
  background-color: transparent;
  border-radius: 4px;
  padding: 8px 12px; /* Tailwind px-3 py-2 */
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
}

.menu-link.active {
  background-color: #065f46; /* Tailwind bg-green-900 */
}

.menu-link:hover {
  background-color: #111827; /* Tailwind hover:bg-gray-900 */
  color: white; /* Tailwind hover:text-white */
}
</style>
