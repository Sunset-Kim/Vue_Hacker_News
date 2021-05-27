<template>
	<div>
		<ul>
			<li class="data-item" v-for="item in listItems" v-bind:key="item.id">
				<div class="points">
					{{ item.points || 0 }}
				</div>

				<div class="main">
					<!-- 타이틀 영역 분기처리 -->
					<template v-if="item.domain">
						<a class="headline" v-bind:href="item.url" target="_blank">
							{{ item.title }}
						</a>
					</template>
					<template v-else>
						<router-link class="headline" :to="`item/${item.id}`">
							{{ item.title }}
						</router-link>
					</template>

					<small>
						{{ item.time_ago }} by
						<router-link
							v-if="item.user"
							class="username"
							v-bind:to="`/user/${item.user}`"
							>{{ item.user }}
						</router-link>
						<a v-else class="username" :href="item.url">
							{{ item.domain }}
						</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		listItems() {
			return this.$store.state.list;
		},
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
	display: flex;
	line-height: 1.8;
	border-bottom: 1px solid var(--primary);
	margin-bottom: 0.5rem;
}
.data-item .points {
	display: flex;
	align-items: center;
	justify-content: center;

	flex: 0 0 80px;
	font-weight: bold;
	font-size: 2rem;
	color: var(--primary);
}
.data-item .main {
	flex: 1;
}
.data-item .main a.headline {
	margin-bottom: 1rem;

	color: var(--secondary);
	font-weight: bold;

	transition: 0.2s ease-in-out;
}
.data-item a.headline:hover {
	color: var(--primary);
	text-decoration: underline;
}

.data-item small {
	display: flex;
	align-items: center;
}
.data-item small .username {
	color: dodgerblue;
	padding: 0 1rem;
}
</style>
