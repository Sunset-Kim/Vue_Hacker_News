<template>
	<div>
		잡스뷰
		<div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
	</div>
</template>

<script>
import { fetchJobsList } from '../api/index';

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		fetchJobsList()
			.then(response => (this.users = response.data))
			.catch(error => console.log(error));
	},
};
</script>

<style></style>
