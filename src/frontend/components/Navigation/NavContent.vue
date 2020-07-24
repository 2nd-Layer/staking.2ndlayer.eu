<template>
  <div class="navbar-end">
    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" to="/">Overview</nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <nuxt-link class="is-centered-responsive" to="/cardano-stake-pool">Cardano Stake Pool</nuxt-link>
    </div>

    <!-- Menu item -->
    <div class="navbar-item is-nav-link">
      <a class="is-centered-responsive" href="/tezos-bakery">Tezos Bakery</a>
    </div>

    <!-- Stake Now -->
    <div class="navbar-item is-nav-link">
      <a href="/begin-staking-now" class="button k-button k-primary raised has-gradient slanted">
        <span class="text">Begin Staking Now</span>
        <span class="front-gradient"></span>
      </a>
    </div>

    <div class="navbar-item is-nav-link">
      <a href="https://twitter.com/2nd_Layer">
        <i class="fab fa-twitter-square is-size-3"></i>
      </a>
    </div>

    <div class="navbar-item is-nav-link">
      <a href="https://www.youtube.com/channel/UCncyGaCH5emsxroa3-YIb_A/">
        <i class="fab fa-youtube-square is-size-3"></i>
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
