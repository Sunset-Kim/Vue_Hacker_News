<template>
	<div>
		에스크뷰
		<div v-for="user in fetchedAsk" v-bind:key="user.id">
			{{ user.title }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		// 3번 방법 맵 게터스 사용
		...mapGetters({
			fetchedAsk: 'fetchedAsk',
		}),

		// 2번 방법 맵스테이트 사용
		// ...mapState({
		// 	ask: state => state.ask,
		// }),
		//
		// 1번 방법
		// ask() {
		// 	return this.$store.state.ask;
		// },
	},
	created() {
		this.$store.dispatch('FETCH_ASK');
	},
};
</script>

<style></style>
