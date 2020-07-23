<template>
  <!-- Responsive toggle -->
  <span class="navbar-burger burger" @click.prevent="toggleMobileMenu">
      <span></span>
      <span></span>
      <span></span>
  </span>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    methods: {
      toggle() {
        this.toggleMobileMenu();
      },
      ...mapMutations({
        toggleMobileMenu: 'responsive-toggle/toggle'
      })
    }
  }
</script>
