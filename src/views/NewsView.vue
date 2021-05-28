<template>
	<div class="data-tab">
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';

export default {
	created() {
		bus.$emit('start:spinner');
		this.$store.dispatch('FETCH_NEWS');
		bus.$emit('end:spinner');
	},

	components: {
		ListItem,
	},
};
</script>

<style></style>
