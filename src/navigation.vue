<template>
	<div>
		<transition name="slideinout" appear>
		<b-alert :show="$root.dismissCountDown" style="z-index: 1000; position: fixed; top: 1rem; left: 0; right: 0; width: 90%; margin: 0 auto; opacity: 0.90;" dismissible :variant="$root.alertVariant" @dismissed="$root.dismissAlert" @dismiss-count-down="$root.countDownChanged">
			<p>{{ $root.alertText }}</p>
		</b-alert>
		</transition>

		<b-navbar id="app-topbar" toggleable="sm" type="dark" variant="primary">

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			<b-navbar-brand to="#">
				<img src="/static/imgs/Qvain_neg_300px.png" class="d-inline-block align-top" alt="Fairdata: Qvain">
			</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item title="CSC customer support
servicedesk (at) csc.fi
+358 9 457 2821
Weekdays from 8:30 AM to 4 PM" href="mailto:servicedesk@csc.fi?subject=Fairdata%2FQvain%3A%20support%20request">Contact Us</b-nav-item>
					<b-nav-item target="_blank" rel="noopener noreferrer" href="https://www.fairdata.fi/en/qvain/qvain-user-guide/">Docs</b-nav-item>
				</b-navbar-nav>


				<!-- right-aligned items -->
				<b-navbar-nav class="ml-auto right-nav-items">

					<!-- language dropdown -->
					<!--
					<b-nav-item-dropdown text="lang" right>
						<b-dropdown-item to="#" @click="$root.language = 'en'">EN</b-dropdown-item>
						<b-dropdown-item to="#" @click="$root.language = 'fi'" disabled>FI</b-dropdown-item>
						<b-dropdown-item to="#" @click="$root.language = 'se'" disabled>SE</b-dropdown-item>
					</b-nav-item-dropdown>
					-->

					<!-- login dropdown -->

					<transition name="fade">
						<b-nav-text class="user-nav load-placeholder" key="user-loading" v-if="$auth.loading.state">
							<font-awesome-icon icon="circle-notch" spin />
						</b-nav-text>

						<b-nav-item-dropdown class="user-nav" key="user-dropdown" v-else-if="$auth.loggedIn" right>
							<template slot="text">
								<span style="font-weight: bold;">User</span>
							</template>

							<b-dropdown-header>
								<font-awesome-icon icon="user" class="text-primary mr-2" fixed-width /> <a>{{ $auth.user.name }}</a>
							</b-dropdown-header>
							<b-dropdown-divider></b-dropdown-divider>
							<b-dropdown-item to="/userinfo">About me</b-dropdown-item>
							<b-dropdown-item @click="logout()">Sign out</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item class="user-nav" key="user-login" v-else :href="$auth.loginUrl">Login</b-nav-item>
					</transition>

				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<b-navbar :toggleable="false" type="dark" id="app-subbar">
			<b-nav-toggle target="app-subbar-collapse"></b-nav-toggle>
			<b-collapse is-nav id="app-subbar-collapse">
				<transition name="fade" tag="b-navbar-nav">
					<b-nav-text v-if="$auth.loading.state" key="loading" class="load-placeholder"></b-nav-text>
					<b-navbar-nav v-else key="links">
						<b-nav-item v-if="$route.path !== '/datasets'" key="datasets" to="/datasets">My Datasets</b-nav-item>
						<b-nav-item v-else key="editor" :to="editorUrl">Editor</b-nav-item>
					</b-navbar-nav>
				</transition>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
	position: absolute;
}
.fade-move {
	transition: transform 0.2s;
}

.user-nav {
	width: 4em;
	text-align: center;
	&.dropdown {
		z-index:10000;
	}
	&.fade-leave-active {
		right: 0;
		top: 0;
	}
}


.load-placeholder {
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.right-nav-items {
	position: relative;
}
</style>


<script>
export default {
	name: 'navigation',
	data: function() {
		return {
		}
	},
	computed: {
		editorUrl() {
			if (this.$store.state.metadata.id) {
				return "/dataset/" + this.$store.state.metadata.id
			} else if (this.$store.state.record) {
				return "/dataset/edit"
			} else {
				return "/dataset/new"
			}
		},
	},
	methods: {
		async logout() {
			if (await this.$auth.logout()) {
				this.$root.showAlert("User signed out.", "primary")
			} else {
				this.$root.showAlert("Failed to sign out. Please try again later.", "danger")
			}
		},
	},
}
</script>
