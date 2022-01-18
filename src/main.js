import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/base.scss'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false;
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/i18n/zh.json'),
    'en': require('@/i18n/en.json')
  }
})

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
