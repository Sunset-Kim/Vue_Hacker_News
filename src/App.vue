<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<router-view class="router-view"></router-view>
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
</style>
