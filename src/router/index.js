import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
	routes: [
		{
			// url 주소
			path: '/news',
			// url에 해당하는 특정 컴포넌트 경로값
			component: NewsView,
		},
		{
			path: '/ask',
			component: AskView,
		},
		{
			path: '/jobs',
			component: JobsView,
		},
		{
			path: '/*',
			component: NewsView,
		},
	],
});
