<template>
	<div class="data-tab">
		<list-item></list-item>
	</div>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixin from '../mixins/ListMixin';

export default {
	mixins: [ListMixin],
	components: {
		ListItem,
	},
};
</script>

<style></style>
