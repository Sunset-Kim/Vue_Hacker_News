import Vue from 'vue';
import App from './App.vue';
import { router } from './routers/index';
import 'reset-css';
import '../src/css/initial.css';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
