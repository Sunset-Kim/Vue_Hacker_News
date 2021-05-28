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
	// 	return fetchNewsList()
	// 		.then(response => {
	// 			context.commit('SET_NEWS', response.data);
	// 		})
	// 		.catch(error => {
	// 			console.log(error);
	// 		});
	// },

	// FETCH_ASK(context) {
	// 	return fetchAskList()
	// 		.then(response => context.commit('SET_ASK', response.data))
	// 		.catch(error => console.error(error));
	// },

	// FETCH_JOBS(context) {
	// 	return fetchJobsList()
	// 		.then(response => context.commit('SET_JOBS', response.data))
	// 		.catch(error => console.error(error));
	// },

	FETCH_LIST({ commit }, pagename) {
		return fetchList(pagename)
			.then(res => {
				console.log(res);
				commit('SET_LIST', res.data);
			})
			.catch(error => console.log(error));
	},

	FETCH_USERINFO(context, id) {
		return fetchUserInfo(id)
			.then(response => context.commit('SET_USERINFO', response.data))
			.catch(error => console.log(error));
	},

	FETCH_ASKITEM({ commit }, id) {
		fetchAskItem(id)
			.then(response => commit('SET_ASKITEM', response.data))
			.catch(error => console.log(error));
	},
};
