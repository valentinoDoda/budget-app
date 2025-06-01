import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/router";
import BaseSection from "./Base/BaseSection.vue";
import BaseButton from "./Base/BaseButton.vue";
const app = createApp(App);
app.component("base-section", BaseSection);
app.component("base-button", BaseButton);

app.use(store);
app.use(router);
app.mount("#app");
