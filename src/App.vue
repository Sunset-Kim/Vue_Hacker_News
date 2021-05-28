<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<transition name="page">
				<router-view class="router-view"></router-view>
			</transition>
		</div>
		<Spinner :loading="loadingStatus"></Spinner>
	</div>
</template>

<script>
import ToolBar from './components/toolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';

export default {
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	name: 'App',
	components: {
		ToolBar,
		Spinner,
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
