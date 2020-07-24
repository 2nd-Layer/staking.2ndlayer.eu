<template>
  <div class="navbar-end">
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" to="/">Overview</nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" to="/cardano">Cardano Stake Pool</nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <a class="is-centered-responsive" href="/tezos">Tezos Bakery</a>
    </div>

    <!-- Stake Now -->
    <div class="navbar-item is-nav-link">
      <a @click.prevent="toggleGetStartedModal()" class="button k-button k-primary raised has-gradient slanted">
        <span class="text">Begin Staking Now</span>
        <span class="front-gradient"></span>
      </a>
    </div>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'NavContent',
    methods: {
      ...mapMutations('modals', ['toggleGetStartedModal'])
    }
  }
</script>
