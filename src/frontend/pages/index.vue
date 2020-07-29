<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Landing page Title -->
        <div class="column is-6 landing-caption">
          <h1 class="title is-1 is-light is-semibold is-spaced main-title">Multi-Ledger Staking Services</h1>
          <h2 class="subtitle is-6 is-light is-thin">
            2ⁿᵈ Layer Staking Services is a value-added Staking Services provider for Proof of Stake
            cryptocurrencies.
          </h2>
          <!-- CTA -->
          <p>
            <a href="/begin-staking-now/" class="button k-button k-primary raised has-gradient is-fat is-bold">
              <span class="text">Get Started</span>
              <span class="front-gradient"></span>
            </a>
          </p>
        </div>
        <!-- Hero image -->
        <div class="column is-6">
          <div class="video-wrapper">
            <div class="video-container">
              <!--              <div class="video-button levitate js-modal-btn" data-video-id="6WG7D47tGb0">-->
              <!--                <img :src="playButton" alt="">-->
              <!--              </div>-->

              <div class="video-button levitate">
                <img :src="playButton" alt="Play Button">
              </div>
              <h2 class="text-center">
                Intro coming soon...
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'landing',
    data() {
      return {
        playButton: require('@/assets/images/icons/play.svg')
      };
    }
  }
</script>
