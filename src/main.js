// Importuj style Bootstrapa
import "bootstrap/dist/css/bootstrap.css";

// Importuj główny komponent aplikacji
import { createApp } from "vue";
import App from "./App.vue";

// Importuj router Vue Router (jeśli to konieczne)
import router from "./router";

// Tworzenie i renderowanie aplikacji
const app = createApp(App);

// Podłącz router Vue Router do aplikacji (jeśli używasz routera)
app.use(router);

// Montuj aplikację na elemencie z id "app"
app.mount("#app");

// Importuj skrypty Bootstrapa (opcjonalnie)
import "bootstrap/dist/js/bootstrap.js";
