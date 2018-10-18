import cHeader from "./c-header";

const components = {
  cHeader,
}

export default (Vue) => {
  Vue = Vue || window.Vue;
  Object.keys(components).map(key => {
    Vue.component(key, components[key]);
  });
}
