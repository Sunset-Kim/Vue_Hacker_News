import Vue from 'vue';
import VueRouter from 'vue-router';

// 라우터 컴포넌트
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/news',
			name: 'news',
			component: createListView('NewsView'),
		},
		{
			path: '/ask',
			name: 'ask',
			component: createListView('AskView'),
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: createListView('JobsView'),
		},
		{
			path: '/item/:id',
			component: ItemView,
		},
		{
			// 동적라우트 매치
			path: '/user/:id',
			component: UserView,
		},
	],
});
