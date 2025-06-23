import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);

// Global CSS imports
// import "./assets/css/tailwind.css";
import "./assets/css/style.css";


app.mount("#app");
