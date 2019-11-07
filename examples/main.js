import Vue from "vue";
import App from "./App.vue";

import ConfirmBox from "../packages/index";

Vue.config.productionTip = false;

Vue.use(ConfirmBox);

new Vue({
  render: h => h(App)
}).$mount("#app");
