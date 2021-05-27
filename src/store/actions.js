import {
	// fetchNewsList,
	// fetchAskList,
	// fetchJobsList,
	fetchUserInfo,
	fetchAskItem,
	fetchList,
} from '../api/index';

export default {
	// FETCH_NEWS(context) {
	// 	fetchNewsList()
	// 		.then(response => {
	// 			context.commit('SET_NEWS', response.data);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// },

	// FETCH_ASK(context) {
	// 	fetchAskList()
	// 		.then(response => context.commit('SET_ASK', response.data))
	// 		.catch(error => console.error(error));
	// },

	// FETCH_JOBS(context) {
	// 	fetchJobsList()
	// 		.then(response => context.commit('SET_JOBS', response.data))
	// 		.catch(error => console.error(error));
	// },

	FETCH_LIST({ commit }, pagename) {
		fetchList(pagename)
			.then(({ data }) => commit('SET_LIST', data))
			.catch(error => console.log(error));
	},

	FETCH_USERINFO(context, id) {
		fetchUserInfo(id)
			.then(response => context.commit('SET_USERINFO', response.data))
			.catch(error => console.log(error));
	},

	FETCH_ASKITEM({ commit }, id) {
		fetchAskItem(id)
			.then(response => commit('SET_ASKITEM', response.data))
			.catch(error => console.log(error));
	},
};
