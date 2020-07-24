<template>
  <div class="landing-wrapper">
    <particles-bg type="cobweb" :bg="false" :color="color" style="position: absolute; top: 0; bottom: 0;"/>
    <div class="hero is-fullheight">
      <div class="hero-header">
        <Header/>
      </div>
      <div class="hero-body">
        <nuxt/>
      </div>
      <div class="hero-footer">
        <!-- Hero footer -->
        <div class="hero-foot">
          <div class="container">
            <div class="is-centered coin-list">
              <a href="https://cardano.org/" target="_blank">
                <img class="hero-logo" src="@/assets/images/coins/Cardano-coin-ADA-symbol.svg" alt="Cardano">
              </a>
              <a href="#">
                <img class="hero-logo" src="@/assets/images/coins/Tezos-coin-XTZ-symbol.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        color: ["#5507fc"]
      };
    },
    head() {
      return {
        title: '2ⁿᵈ Layer Staking Services'
      }
    }
  }
</script>
