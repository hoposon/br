<template>
	<div class="container-fluid">
		<NavigationBar />
		<div class="home"></div>
	</div>
</template>

<script>

	import NavigationBar from '../components/NavigationBar';

	export default {
		components: {
			NavigationBar
		}
	}

</script>

<style lang='scss'>
	@import '~assets/css/main.scss';
	
	.home {
		height: 5000px
	}
</style>
