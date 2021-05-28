import {
	// fetchNewsList,
	// fetchAskList,
	// fetchJobsList,
	fetchUserInfo,
	fetchAskItem,
	fetchList,
} from '../api/index';

export default {
	FETCH_LIST({ commit }, pagename) {
		return fetchList(pagename)
			.then(res => {
				commit('SET_LIST', res.data);
				return res.data;
			})
			.catch(error => console.log(error));
	},

	FETCH_USERINFO(context, id) {
		return fetchUserInfo(id)
			.then(response => context.commit('SET_USERINFO', response.data))
			.catch(error => console.log(error));
	},

	FETCH_ASKITEM({ commit }, id) {
		return fetchAskItem(id)
			.then(response => commit('SET_ASKITEM', response.data))
			.catch(error => console.log(error));
	},
};
