<template>
	<div>
		<div class="main">
			<h1>{{ askItem.title }}</h1>
			<div class="userinfo">
				<router-link :to="`user/${askItem.user}`">{{
					askItem.user
				}}</router-link>
				<span>{{ askItem.time }}</span>
			</div>
			<p class="main-content" v-html="askItem.content"></p>
		</div>
		<div
			class="comment"
			v-for="comment in askItem.comments"
			v-bind:key="comment.id"
		>
			<div class="userinfo">{{ askItem.user }}</div>
			<p v-html="comment.content" class="comment-content"></p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		askItem() {
			return this.$store.state.askItem;
		},
	},
	created() {
		const id = this.$route.params.id;
		this.$store.dispatch('FETCH_ASKITEM', id);
	},
};
</script>

<style>
.main {
	margin: 3rem 0;
}
.main h1 {
	font-size: 2.4rem;
	margin-bottom: 1rem;
	line-height: 1.3;
}
.main .userinfo {
	margin-bottom: 1rem;
}
.main p {
	line-height: 1.5;
}
.main .userinfo span {
	margin-right: 2rem;
}
.main .userinfo span:last-child {
	margin: 0;
}
.comment {
	margin: 2rem 0;
	padding: 1rem 1rem;
	border: 3px solid var(--primary);
	border-radius: 5px;
}
.comment .userinfo {
	font-size: 1.8rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid var(--secondary);
	padding-bottom: 1rem;
}
.comment p {
	line-height: 1.3;
}
</style>
