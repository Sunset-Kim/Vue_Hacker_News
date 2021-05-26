<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<div class="row">
				<router-view class="router-view"></router-view>
			</div>
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

<style></style>
