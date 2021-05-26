<template>
	<div>
		에스크뷰
		<div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
	</div>
</template>

<script>
import { fetchAskList } from '../api/index';

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		fetchAskList()
			.then(response => (this.users = response.data))
			.catch(error => console.log(error));
	},
};
</script>

<style></style>
