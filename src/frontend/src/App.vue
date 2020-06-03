<template>
  <div id="app">
    <header>
        <nav class="navbar is-spaced" role="navigation" aria-label="dropdown main navigation">
          <div class="navbar-brand">
            <!-- navbar items, navbar burger... -->
          </div>
          <div class="navbar-end">
            <div class="navbar-end">
              <a class="navbar-item is-hoverable title is-4" href="/overview/">Overview</a>
              <a class="navbar-item is-hoverable title is-4" href="/code-quality/">Cardano</a>
              <a class="navbar-item is-hoverable title is-4" href="/resources/">Tezos</a>
            </div>
          </div>
        </nav>
    </header>
    <div id="site-content">
      <article class="message is-success has-background-transparent" style="width: 30%;">
        <div class="message-body has-text-white">
          <strong>2ⁿᵈ Layer Staking Services</strong> is a value-added Staking Services provider for
          <strong>Proof of Stake</strong> cryptocurrencies.
        </div>
      </article>
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
  name: 'App'
};
</script>

<style>
footer {
  background-color: #2c7df7;
  flex-shrink: 0;
  padding: 1rem;
  width: 100%;
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
  background-color: white;
  opacity: 0.6;
}

.navbar-item.logo {
  padding: 0px;
}

.has-background-transparent {
  background: transparent;
}
</style>
