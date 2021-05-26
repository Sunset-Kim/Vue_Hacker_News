import Vue from 'vue';
import Vuex from 'vuex';

// store 모듈
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		news: [],
		ask: [],
		jobs: [],
	},
	mutations,
	getters: {
		fetchedAsk(state) {
			return state.ask;
		},
	},
	actions,
});
