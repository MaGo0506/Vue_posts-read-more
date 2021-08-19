/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/scss/bootstrap.scss';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Uploader from 'v-uploader';
import VueFirestore from 'vue-firestore';
import App from './App.vue';
import { store } from './store/store';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueFirestore, {
	key: 'id',
	enumerable: true,
});

const router = new VueRouter({
	routes: Routes,
	mode: 'history',
});

const uploaderConfig = {
	uploadFileUrl: 'https://console.firebase.google.com/u/0/project/vue-image-gallery/storage/vue-image-gallery.appspot.com/files',
	deleteFileUrl: 'https://console.firebase.google.com/u/0/project/vue-image-gallery/storage/vue-image-gallery.appspot.com/files',
	showMessage: (vue, message) => {
		vue.$dlg.alert(message, null, { messageType: 'error' });
	},
};

Vue.use(Uploader, uploaderConfig);

new Vue({
	store,
	el: '#app',
	render: (h) => h(App),
	router,
});
