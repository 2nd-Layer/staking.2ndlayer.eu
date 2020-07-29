<template>
  <!-- Static navbar -->
  <nav class="navbar is-light">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img :src="logo" alt="2nd Layer Staking Services Logo">
        </nuxt-link>
        <!-- Responsive toggle -->
        <ResponsiveToggle/>
      </div>
      <!-- Menu -->
      <div id="navbarMenu" :class="navMenuClass">
        <NavContent/>
      </div>
    </div>
  </nav>
  <!-- /Static navbar -->
</template>

<script>
  import NavContent from "./NavContent";
  import ResponsiveToggle from "./ResponsiveToggle";
  import { mapState } from 'vuex';

  export default {
    components: {
      NavContent,
      ResponsiveToggle
    },
    computed: {
      navMenuClass() {
        return ['navbar-menu', this.isMobileMenuToggled ? 'is-active' : '']
      },
      ...mapState({
        isMobileMenuToggled: 'responsive-toggle/isMobileMenuToggled'
      })
    },
    data() {
      return {
        logo: require('@/assets/images/2ndLayer-logo.svg')
      };
    }
  }
</script>
