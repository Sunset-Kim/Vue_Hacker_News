<template>
	<div>
		<p>name: {{ userInfo.id }}</p>
		<p>created: {{ userInfo.created }}</p>
		<p>created_time: {{ userInfo.created_time }}</p>
		<p>karma: {{ userInfo.karma }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		userInfo() {
			return this.$store.state.userInfo;
		},
	},
	created() {
		console.log(this.$route.params.id);
		let params = this.$route.params.id;
		this.$store.dispatch('FETCH_USERINFO', params);
	},
};
</script>

<style></style>
