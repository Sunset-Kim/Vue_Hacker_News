<template>
	<div>
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';

export default {
	mixins: [ListMixin],
	components: {
		ListItem,
	},
};
</script>

<style></style>
