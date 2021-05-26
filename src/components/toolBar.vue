<template>
	<header class="header">
		<div class="container">
			<div class="row">
				<router-link to="/news">News</router-link>
				<router-link to="/ask">Asks</router-link>
				<router-link to="/jobs">Jobs</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	height: 8rem;
	line-height: 8rem;
	background-color: #42b882;
}

a {
	display: block;
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 3rem;
}
a:hover {
	color: #35495e;
	transition: 0.3s ease-in-out;
}
a:last-child {
	padding-right: 0;
}
.router-link-exact-active {
	color: #35495e;
	font-weight: bold;
}
</style>
