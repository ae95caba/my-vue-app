<script setup>
import { ref } from "vue";

const name = ref("John Doe");
const status = ref("pending");
const link = ref("https://chatgpt.com");
const tasks = ref(["Task one", "Task two", "Task three", "Task four"]);
const newTask = ref("");
const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "peding";
  } else if (status.value === "pending") {
    status.value = "active";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};
</script>

<template>
  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
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
