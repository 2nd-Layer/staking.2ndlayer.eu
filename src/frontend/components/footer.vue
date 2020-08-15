<template>
  <footer class="footer">
    <div class="container">
      <!-- Logo -->
      <div class="footer-logo">
        <a href="/">
          <img :src="logo" alt="2nd Layer Staking Services">
          <div class="brand-subtitle">Multi-Ledger Staking Services</div>
        </a>
      </div>

      <!-- Columns -->
      <div class="columns footer-columns is-vcentered">
        <div class="column is-4">
          <!-- Links group -->
          <ul class="footer-links">
            <li>
              <nuxt-link to="/cardano-stake-pool">Cardano Stake Pool</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/tezos-bakery">Tezos Bakery</nuxt-link>
            </li>

          </ul>
        </div>
        <!-- Newsletter -->
        <div class="column is-4">
          <div class="subscribe-block">
            <form>
              <!-- Field -->
              <div class="control">
                <!-- Special input -->
                <input class="krypton-subscribe-input" type="email" name="email" placeholder="">
                <button class="subscribe-button">
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Links group -->
        <div class="column is-4">
          <ul class="footer-links">
            <li>
              <a href="https://twitter.com/2nd_Layer">Twitter</a>
            </li>

            <li>
              <a href="https://www.youtube.com/channel/UCncyGaCH5emsxroa3-YIb_A/">YouTube</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Copyright -->
      <p v-if="new Date().getFullYear() > 2020" class="k-copyright">© 2020 – {{ new Date().getFullYear() }} | 2ⁿᵈ Layer. All Rights Reserved.</p>
      <p v-else class="k-copyright">© 2020 | 2ⁿᵈ Layer. All Rights Reserved.</p>
      <br>
    </div>

    <!-- Absolute image -->
    <img class="solar-system" :src="solarSystem" alt="N/A">
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require('@/assets/images/2ndLayer-logo.svg'),
      solarSystem: require('@/assets/images/bg/solar.svg')
    }
  }
}
</script>
