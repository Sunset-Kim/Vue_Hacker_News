<template>
	<div>
		<h1>잡스뷰</h1>
		<div v-for="user in this.$store.state.jobs" v-bind:key="user.id">
			{{ user.title }}
		</div>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
	},
};
</script>

<style></style>
