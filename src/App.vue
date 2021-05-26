<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<transition name="page">
				<router-view class="router-view"></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
import ToolBar from './components/toolBar.vue';

export default {
	name: 'App',
	components: {
		ToolBar,
	},
};
</script>

<style>
:root {
	/* color */
	--primary: #42b882;
	--secondary: #35495e;
}
.router-view {
	flex: 1;
}
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
