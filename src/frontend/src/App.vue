<template>
  <div id="app">
    <header>
        <nav class="navbar is-spaced" role="navigation" aria-label="dropdown main navigation">
          <div class="navbar-brand">
            <img class="navbar-item logo" :src="StakingServicesLogoSVG" />
          </div>
          <div class="navbar-end">
            <div class="navbar-end">
              <span><a class="navbar-item is-hoverable title is-4" href="/overview/">Overview</a></span>
              <span><a class="navbar-item is-hoverable title is-4" href="/cardano-stake-pool/">Cardano Stake Pool</a></span>
              <span><a class="navbar-item is-hoverable title is-4" href="/tezos-bakery/">Tezos Bakery</a></span>
              <a class="navbar-item" href="https://www.facebook.com/2ndlayer.eu/">
                <i class="fab fa-facebook-square title"></i>
              </a>
              <a class="navbar-item" href="https://www.linkedin.com/company/2ndlayer/">
                <i class="fab fa-linkedin title"></i>
              </a>
              <a class="navbar-item" href="https://github.com/2nd-Layer">
                <i class="fab fa-github-square title"></i>
              </a>
              <a class="navbar-item" href="https://www.youtube.com/channel/UCncyGaCH5emsxroa3-YIb_A/">
                <i class="fab fa-youtube-square title"></i>
              </a>
            </div>
          </div>
        </nav>
    </header>
    <div id="site-content">
      <section class="section" id="opening">
        <article class="content has-background-transparent" style="width: 30%;">
          <div class="content has-text-white">
            <strong>2ⁿᵈ Layer Staking Services</strong> is a value-added Staking Services provider for
            <strong>Proof of Stake</strong> cryptocurrencies.
          </div>
        </article>
      </section>
      <hr class="is-fullwidth" />
      <section class="section" id="cardano">
        <h2 class="title is-2 has-text-left has-text-white">About Cardano</h2>
        <div class="container">
          <div class="content has-text-left has-text-white">
            <figure class="image is-pulled-right is-128x128">
              <img class="image symbol is-mono-white" :src="CardanoCoinADASymbolSVG" />
            </figure>
            <p>
              <strong>Cardano</strong> (<strong>ADA</strong>) is a <strong>Proof of Stake</strong> blockchain with on-chain governance and support for smart contracts. It's written in a high-assurance Haskell programming language best suited for mission-critical applications. It aspires to be the <strong>global financial operating system</strong>.
            </p>
            <p>The development of this 3<sup>rd</sup> generation blockchain platform is done using the scientific method in partherships with leading academic institutions. Most, if not all relevant primary research is undergoing peer-review process, and a large portion of the research is presented at leading scientific conferences.</p>
          </div>
        </div>
      </section>
      <hr class="is-fullwidth" />
      <section class="section" id="tezos">
        <h2 class="title is-2 has-text-left has-text-white">About Tezos</h2>
        <div class="container">
          <div class="content has-text-left has-text-white">
            <figure class="image is-pulled-left is-128x128">
              <img class="image symbol is-mono-white" :src="TezosCoinXTZSymbolSVG" />
            </figure>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <hr class="is-fullwidth" />
      <section class="section" id="ending">
        <h2 class="title is-2 has-text-left has-text-white">Our value proposition</h2>
        <div class="container">
          <div class="content has-text-left has-text-white">
            <p>
              Donec volutpat rutrum ligula, quis volutpat massa varius vitae. Fusce dolor urna, volutpat in vulputate ac, rutrum non nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor, diam vel consectetur sagittis, nulla eros dapibus tellus, placerat dictum ante nisi eu diam. Maecenas eu commodo libero. Sed consequat varius orci vitae sodales. Fusce eleifend gravida pulvinar. Nulla eleifend ullamcorper nisi, ut luctus diam pellentesque a. Suspendisse accumsan venenatis lorem quis viverra. Morbi et neque nisi.
            </p>
            <p>
              Nulla facilisi. Mauris et vehicula dolor. Donec volutpat mattis convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed lacus elit, accumsan eu erat at, finibus gravida risus. Quisque sit amet auctor ipsum, vitae dictum metus. Integer accumsan congue dolor scelerisque ultrices.
            </p>
            <p>
              Morbi at ante sit amet tortor venenatis euismod et eu nunc. Suspendisse faucibus metus vel vulputate fringilla. Aenean laoreet sem at libero fermentum, eget pretium nibh venenatis. Mauris eget convallis ligula, eu auctor lectus. Donec vel volutpat felis. Donec faucibus a ligula in aliquam. Sed sed mollis libero, at auctor magna. Aliquam ut ultrices augue, ac rhoncus urna. Integer suscipit magna nec neque vehicula, ac pharetra dui commodo. Sed lectus lacus, finibus eget blandit in, fringilla id ligula. Pellentesque in eros lectus. Nam interdum suscipit elementum. Nulla efficitur ex dui, sed molestie ligula tempus a. Duis bibendum leo id dolor laoreet dapibus. Mauris non eros non magna consequat viverra. Vestibulum venenatis euismod tempor.
            </p>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <div class="columns">
        <div class="column is-one-half">
        </div>
        <div class="column has-text-centered is-one-fifth">
          <p class="has-text-white">
              2020 © <strong class="has-text-white">PERLUR Group</strong><br>
              All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      StakingServicesLogoSVG: require('./assets/2nd_Layer_Staking_Services_Long_No_Border_Text_Transparent.svg'),
      CardanoCoinADASymbolSVG: require('./assets/Cardano-coin-ADA-symbol.svg'),
      TezosCoinXTZSymbolSVG: require('./assets/Tezos-coin-XTZ-symbol.svg')
    }
  }
};
</script>

<style>
footer {
  background-color: rgba(3, 191, 215, 0.75);
  flex-shrink: 0;
  padding: 1rem;
  width: 100%;
}

img.is-mono-white {
    filter: brightness(0) invert(1);
}

hr.is-fullwidth {
    width: 100vw;
    position: relative;
    left: calc(-50vw + 50%);
}

#site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: url('https://www.kraken.com/_assets/files/2019-02//kraken_desktop_hero/2048.webp');
  background-size: cover;
  background-repeat: no-repeat;
}

#site-content {
  padding: 1rem 2rem;
  flex: auto;
}

.navbar {
  background-color: rgba(40, 98, 147, 0.6);
}

.navbar-item.logo {
  padding: 0px;
  height: 70px;
  filter: brightness(0) invert(1);
}

.has-background-transparent {
  background: transparent;
}
</style>
