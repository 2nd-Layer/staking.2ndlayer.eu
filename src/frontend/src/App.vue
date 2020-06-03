<template>
  <div id="app">
    <header>
        <nav class="navbar is-spaced" role="navigation" aria-label="dropdown main navigation">
          <div class="navbar-brand">
            <!-- navbar items, navbar burger... -->
          </div>
          <div class="navbar-end">
            <div class="navbar-end">
              <a class="navbar-item is-hoverable title is-4" href="/commits/">Commits</a>
              <a class="navbar-item is-hoverable title is-4" href="/code-quality/">Code Quality</a>
              <a class="navbar-item is-hoverable title is-4" href="/resources/">Resources</a>
              <a class="navbar-item is-hoverable title is-4" href="/about/">About</a>
            </div>
          </div>
        </nav>
    </header>
    <div id="site-content">
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
}

#site-content {
  padding: 1rem 2rem;
  flex: auto;
}

.navbar {
  background-color: rgb(18, 50, 98);
}

.navbar-item.logo {
  padding: 0px;
}
</style>
