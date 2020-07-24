<template>
  <header>
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="navbar-item logo" :src="LayerLogoSVG" />
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <span><a class="navbar-item is-hoverable" href="/">Overview</a></span>
          <span><a class="navbar-item is-hoverable" href="/cardano-stake-pool/">Cardano Stake Pool</a></span>
          <span><a class="navbar-item is-hoverable" href="/tezos-bakery/">Tezos Bakery</a></span>
          <div class="navbar-item is-nav-link">
            <a href="/begin-staking-now/" class="button k-button k-primary raised has-gradient slanted">
              <span class="text">Begin Staking Now</span>
              <span class="front-gradient"></span>
            </a>
          </div>
          <a class="navbar-item" href="https://twitter.com/2nd_Layer">
          <i class="fab fa-twitter-square title"></i>
          </a>
          <a class="navbar-item" href="https://www.youtube.com/channel/UCncyGaCH5emsxroa3-YIb_A/">
          <i class="fab fa-youtube-square title"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      LayerLogoSVG: require('~/assets/images/2ndLayer_Logo.svg')
    }
  }
};
</script>

<style>
.navbar {
  padding-bottom: 0px;
}

.navbar-item.logo {
  max-width: 20vw;
  padding: 0px;
}

a.navbar-item {
  font-family: Cabin,sans-serif;
  text-transform: uppercase;
  font-size: .75rem;
}
</style>