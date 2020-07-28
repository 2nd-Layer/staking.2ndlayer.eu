<template>
  <div class="hero-body">
    <div class="columns has-text-centered">
      <div class="column is-6 is-offset-3">
        <div class="token-image mb-40">
          <img :src="tezosLogo" alt="Tezos Logo">
        </div>
        <br>
        <h1 class="title is-2 is-light is-semibold is-spaced main-title">Tezos Bakery</h1>
        <h2 class="subtitle is-5 is-light is-thin">
          Cryptocurrency brought to the next level. Join our Tezos Bakery for supercharged rewards.
        </h2>
        <!-- CTA -->
        <p>
          <a href="start" class="button k-button k-primary raised has-gradient is-fat is-bold">
            <span class="text">More details</span>
            <span class="front-gradient"></span>
          </a>
        </p>
      </div>
    </div>
    <section class="section is-medium">
      <div class="container">

        <!-- Content wrapper -->
        <div class="content-wrapper">

          <div class="columns is-vcentered">
            <!-- Feature content -->
            <div class="column is-5 is-offset-1">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light">Network Governance</h3>
                <div class="divider"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-7">
              <img class="side-feature" src="#" alt="">
            </div>
          </div>

          <div class="columns is-vcentered">
            <!-- Feature image -->
            <div class="column is-7">
              <img class="side-feature" src="#" alt="">
            </div>

            <!-- Feature content -->
            <div class="column is-5">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light">Value Stacking</h3>
                <div class="divider"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
              </div>
            </div>
          </div>

          <div class="columns is-vcentered">
            <!-- Feature content -->
            <div class="column is-5 is-offset-1">
              <div class="side-feature-content">

                <h3 class="title is-4 is-light">Increased Security</h3>
                <div class="divider"></div>
                <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
              </div>
            </div>

            <!-- Feature image -->
            <div class="column is-7">
              <img class="side-feature" src="#" alt="">
            </div>
          </div>
        </div>

        <!-- /Content wrapper -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tezosLogo: require('@/assets/images/coins/Tezos-coin-XTZ-symbol.svg')
    }
  }
}
</script>
