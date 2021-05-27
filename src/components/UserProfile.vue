<template>
	<div id="user-info">
		<div class="user-container">
			<!-- 아이콘 -->
			<div class="user-img">
				<i class="fas fa-user"></i>
			</div>
			<!-- 텍스트 -->
			<div class="user-info">
				<!-- 아이디 -->
				<slot name="username"></slot>
				<div class="user-info-desc">
					<!-- 아이디정보 -->
					<slot name="time"></slot>
					<slot name="karma"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// computed: {
	// 	userInfo() {
	// 		return this.$store.state.userInfo;
	// 	},
	// },
};
</script>

<style>
.user-container {
	display: inline-flex;
	padding: 1rem;
}
.user-img {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin-right: 2rem;

	font-size: 3rem;
}

.user-info {
	color: var(--secondary);
}
</style>
