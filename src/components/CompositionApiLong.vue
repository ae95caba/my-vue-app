<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("John Doe");
    const status = ref("pending");
    const link = ref("https://chatgpt.com");
    const tasks = ref(["Task one", "Task two", "Task three", "Task four"]);
    const toggleStatus = () => {
      if (status.value === "active") {
        status.value = "peding";
      } else if (status.value === "pending") {
        status.value = "active";
      } else {
        status.value = "active";
      }
    };
    return {
      name,
      status,
      link,
      tasks,
      toggleStatus,
    };
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
