<template>
	<div>
		<user-profile>
			<div class="username" slot="username">
				{{ userInfo.id }}
			</div>
			<div class="time" slot="time">
				{{ 'Joined ' + userInfo.created + ',' }}
			</div>
			<div class="karma" slot="karma">
				{{ 'karma score ' + userInfo.karma }}
			</div>
		</user-profile>
	</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
	components: {
		UserProfile,
	},
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

<style scoped>
.username {
	font-size: 1.8rem;
	font-weight: bold;
}
.time {
	line-height: 1.4;
	font-size: 1.4rem;
}
.karma {
	line-height: 1.4;
	font-size: 1.4rem;
}
</style>
