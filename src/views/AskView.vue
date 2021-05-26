<template>
	<div class="data-tab">
		<h2>해커뉴스 탭</h2>
		<p class="data-item" v-for="item in fetchedAsk" v-bind:key="item.id">
			<router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>

			<small
				>{{ item.time_ago }},
				<router-link v-bind:to="`user/${item.user}`">{{
					item.user
				}}</router-link>
			</small>
		</p>
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
