<template>
	<div class="data-tab">
		<h2>해커뉴스 탭</h2>
		<p
			class="data-item"
			v-for="item in this.$store.state.news"
			v-bind:key="item.id"
		>
			<a v-bind:href="item.url">
				{{ item.title }}
			</a>

			<small> {{ item.time_ago }}, {{ item.user }}</small>
		</p>
	</div>
</template>

<script>
export default {
	created() {
		this.$store.dispatch('FETCH_NEWS');
	},
};
</script>

<style>
.data-tab h2 {
	font-size: 2.8rem;
	font-weight: bold;
	margin: 3rem 0;
}
.data-item {
	overflow: hidden;
	line-height: 1.8;
	border-bottom: 1px solid var(--primary);
	margin-bottom: 0.5rem;
}
.data-item a {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	display: block;
	font-weight: bold;
	color: dodgerblue;
	transition: 0.2s ease-in-out;
}
.data-item small {
	display: block;
}

.data-item a:hover {
	color: var(--secondary);
}
</style>
