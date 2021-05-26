<template>
	<div>
		<div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
	</div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		fetchNewsList()
			.then(respones => (this.users = respones.data))
			.catch(error => console.log(error));
	},
};
</script>

<style></style>
