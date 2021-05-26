<template>
	<div>
		<div v-for="user in users" v-bind:key="user.id">{{ user.title }}</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			users: [],
		};
	},
	created() {
		let vm = this;
		axios
			.get('https://api.hnpwa.com/v0/news/1.json')
			.then(function(response) {
				vm.users = response.data;
			})
			.catch(function(error) {
				console.log(error, '비정상적인 접근');
			});
	},
};
</script>

<style></style>
