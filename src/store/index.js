import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		news: [],
		ask: [],
		jobs: [],
	},
	getters: {
		fetchedAsk(state) {
			return state.ask;
		},
	},
	mutations: {
		SET_NEWS(state, data) {
			state.news = data;
		},
		SET_ASK(state, data) {
			state.ask = data;
		},
		SET_JOBS(state, data) {
			state.jobs = data;
		},
	},
	actions: {
		FETCH_NEWS(context) {
			fetchNewsList()
				.then(response => {
					console.log(context);
					context.commit('SET_NEWS', response.data);
				})
				.catch(error => {
					console.log(error);
				});
		},
		FETCH_ASK(context) {
			fetchAskList()
				.then(response => context.commit('SET_ASK', response.data))
				.catch(error => console.error(error));
		},
		FETCH_JOBS(context) {
			fetchJobsList()
				.then(response => context.commit('SET_JOBS', response.data))
				.catch(error => console.error(error));
		},
	},
});
