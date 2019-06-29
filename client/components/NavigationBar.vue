<template>

	<!-- <div>
		<button @click='showHide()'>ShowHide</button>
		<div ref='navigationBar' id='navigationBar' class="navigationBar hide"></div>
	</div> -->
	<nav id="navigation-bar" class="row navigation-bar f-navigation">
		<div class="col-5 offset-1">
			<a href="#home"><img class="navbar-logo" src="~assets/img/Logo-betta.svg" alt="Logo" /></a>
		</div>
		<div class="col-5 col-sm-5 d-flex justify-content-end align-items-center">
			<a class="navbar-show" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click='showHide()'>Menu</a>
		</div>
		<div id="nav-bar-items" class="nav-bar-items hide row w-100 justify-content-center align-items-center">
			<div class="nav-bar-items-container row">
				<div class="main-menu-items row justify-content-center pb-3 w-100">
					<div class="col-10 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#home">Home</a>
					</div>
					<div class="navbar-hide col-2 d-md-none align-self-center f-navigation">
						<a class="nav-link" href="#" @click='showHide()'></a>
					</div>
					<div class="col-12 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#">News</a>
					</div>
					<div class="col-12 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#">Collections</a>
					</div>
					<div class="col-12 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#">Events</a>
					</div>
					<div class="col-12 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#">Boutique</a>
					</div>
					<div class="col-12 col-md-auto flex-grow-1 f-navigation">
						<a class="nav-link" href="#">Contacts</a>
					</div>
				</div>
				<div class="small-menu-items row pt-3 w-100 f-navigation-small">
					<div class="col-12">
						<a class="nav-link" href="#home">Home</a>
					</div>
					<div class="col-12">
						<a class="nav-link" href="#">News</a>
					</div>
					<div class="col-12">
						<a class="nav-link" href="#">Collections</a>
					</div>
				</div>
				<div class="social-menu-items row w-100 align-items-center f-navigation-social">
					<div>
						<a class="nav-link" href="#home"><i class="fa fa-instagram"></i></a>
					</div>
					<div>
						<a class="nav-link" href="#"><i class="fa fa-facebook-square"></i></a>
					</div>
					<div class="navbar-hide d-none d-md-flex flex-grow-1 justify-content-end">
						<a class="nav-link" href="#" @click='showHide()'></a>
					</div>
				</div>
			</div>
		</div> 
	</nav>

</template>


<script>

	import { mapActions } from 'vuex';

	export default {
		name: 'NavigationBar',
		data() {
			return {
				hidden: true
			}
		},
		methods: {
			showHide() {
				if (this.hidden) {
					this.animateCSS({element: '#nav-bar-items', animationName: 'slideInDown', type: ['nav-bar-items', 'show'] })
				} else {
					this.animateCSS({element: '#nav-bar-items', animationName: 'slideOutUp', type: ['nav-bar-items', 'hide'] })
				}
				this.hidden = !this.hidden;
			},
			...mapActions([
				'animateCSS'
			])
		}
	}

</script>


<style lang="scss">
	@import '~assets/css/main.scss';
	
	.navigation-bar {
		padding-top: 30px;
		@include media-breakpoint-up(sm) {
			padding-top: 50px;
		}
		&.f-navigation {
			.navbar-show {
				text-decoration: underline;
				cursor: pointer;
				&:hover {
					text-decoration: none;
				}
			}
		}
		.navbar-logo {
			display: block;
			width: 150px;
			height: 100px;
			@include media-breakpoint-up(sm) {
				width: 200px;
				height: 100px;
			}
			@include media-breakpoint-up(md) {
				width: 200px;
				height: 150px;
			}
			@include media-breakpoint-up(lg) {
				width: 250px;
				// height: 150px;
			}
			@include media-breakpoint-up(xl) {
				width: 300px;
				// height: 150px;
			}
		}
	}

	.nav-bar-items {
		position: absolute;
		left: 0;
		top: 0;
		background-color: $color-black;
		height: 100vh;

		@include media-breakpoint-up(sm) {
			height: 100vh;
		}
		@include media-breakpoint-up(md) {
			height: 400px;
		}
		@include media-breakpoint-up(lg) {
			height: 400px;
		}
		@include media-breakpoint-up(xl) {
			height: 500px;
		}
		&.hide {
			display: none
		}

		a {
			color: $color-white;
			&:hover {
				color: $color-add;
			}
		}

		.nav-bar-items-container {
			padding: 0px 35px;
			@include media-breakpoint-up(sm) {
				padding: 0px 50px;
			}
			@include media-breakpoint-up(md) {
				height: 250px;
				padding: 0px 50px;
			}
			@include media-breakpoint-up(lg) {
				height: 250px;
				padding: 0px 100px;
			}
			@include media-breakpoint-up(xl) {
				height: 340px;
				width: 990px;
				padding: 0px;
			}
		}

		.main-menu-items {
			border-bottom: 1px solid $color-white;
			div {
				@include media-breakpoint-up(md) {
					padding-left: 0px;
					padding-right: 0px;
				}
			}
		}

		.small-menu-items {
			div {
				@include media-breakpoint-up(md) {
					padding-left: 0px;
					padding-right: 0px;
				}
			}
		}

		.social-menu-items {
			div {
				padding-left: 15px;
				@include media-breakpoint-up(md) {
					padding-left: 0px;
					padding-right: 0px;
				}
			}
		}

		.navbar-hide {
			a {
				display: block;
				background-image: url('~assets/img/x.svg');
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
				width: 20px;
				height: 20px;

				color: $color-white;
				&:hover {
					background-image: url('~assets/img/x-hover.svg');
				}

				margin-left: 20px;
				@include media-breakpoint-up(sm) {
					margin-left: 0;
				}
			}
		}	
	}
	
</style>