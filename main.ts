import App from "./App.vue";
import { createApp } from "vue";
import store from "./store";
import "./main.scss";

createApp(App).use(store).mount("#app");
