<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "pending",
      link: "https://chatgpt.com",
      tasks: ["Task one", "Task two", "Task three", "Task four"],
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "peding";
      } else if (this.status === "pending") {
        this.status = "active";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <br />
  <p v-if="status === `active`">User is active</p>
  <p v-else-if="status === `pending`">User is pending</p>
  <p v-else>User is inactive</p>
  <br />
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <br />
  <a :href="link">user link</a> <br />
  <!-- <a href="link">user link</a> -->
  <br />
  <button @click="toggleStatus">change status</button>
</template>
