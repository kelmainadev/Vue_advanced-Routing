// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/menu.css');
require("./assets/css/foundation.css");
require("./assets/css/app.css");

import Vue from 'vue'
import App from './App'
import router from './router'
import home from './components/home'

Vue.component('home-section', home)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
