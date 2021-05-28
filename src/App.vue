<template>
	<div id="app">
		<tool-bar></tool-bar>
		<div class="container">
			<router-view class="router-view"></router-view>
			<Spinner :loading="loadingStatus"></Spinner>
		</div>
	</div>
</template>

<script>
// 컴포넌트
import ToolBar from './components/toolBar';
import Spinner from './components/Spinner';

// 이벤트버스
import bus from './utils/bus';

export default {
	name: 'App',
	components: {
		ToolBar,
		Spinner,
	},
	data() {
		return {
			loadingStatus: false,
		};
	},
	methods: {
		startSpinner() {
			this.loadingStatus = true;
		},
		endSpinner() {
			this.loadingStatus = false;
		},
		test() {
			console.log('text');
		},
	},
	created() {
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy() {
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
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
