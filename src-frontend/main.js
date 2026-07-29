import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from "pinia";

import { VueQueryPlugin, QueryClient } from "@tanstack/vue-query";

import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);

const queryClient = new QueryClient();

app.use(createPinia());

app.use(VueQueryPlugin, {
    queryClient,
});

app.use(router);

app.mount("#app");