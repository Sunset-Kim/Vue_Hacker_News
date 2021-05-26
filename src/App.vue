<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<div class="row">
				라우터뷰 페이지
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
