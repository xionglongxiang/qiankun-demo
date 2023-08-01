import "./public-path";

import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import routes from "./router";
import store from "./store";

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  // console.log("sub app render of vue3");
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue3" : "/");
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  // console.log("%c%s", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}
