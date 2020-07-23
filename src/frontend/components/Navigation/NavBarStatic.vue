<template>
  <!-- Static navbar -->
  <nav class="navbar is-light">
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <a href="index.html" class="navbar-item">
          <img src="@/assets/img/logo/2ndlayer-logo.svg" alt="">
        </a>
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
  }
</script>
