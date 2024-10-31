import "./assets/main.css";
import router from "./router";
import "primeicons/primeicons.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).mount("#app");

app.use(router);
app.mount("#app");
