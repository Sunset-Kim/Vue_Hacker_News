<template>
	<div>
		<div class="data-tab">
			<h2>해커뉴스 탭</h2>
			<p
				class="data-item"
				v-for="item in this.$store.state.jobs"
				v-bind:key="item.id"
			>
				<a v-bind:href="item.url">
					{{ item.title }}
				</a>

				<small>{{ item.time_ago }}, {{ item.domain }}</small>
			</p>
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
