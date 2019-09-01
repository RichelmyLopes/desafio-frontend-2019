import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
import HeaderComponent from "./components/HeaderComponent.vue";
Vue.component("HeaderComponent", HeaderComponent);

import BannerComponent from "./components/BannerComponent.vue";
Vue.component("BannerComponent", BannerComponent);

import NoticiasComponent from "./components/NoticiasComponent.vue";
Vue.component("NoticiasComponent", NoticiasComponent);


import ParceirosComponent from "./components/ParceirosComponent.vue";
Vue.component("ParceirosComponent", ParceirosComponent);

import ContatoComponent from "./components/ContatoComponent.vue";
Vue.component("ContatoComponent", ContatoComponent);

import FooterComponent from "./components/FooterComponent.vue";
Vue.component("FooterComponent", FooterComponent);



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
