<template>
  <div id="app">
    <particles-bg type="cobweb" :bg="true" />
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: '2ⁿᵈ Layer Staking Services'
    }
  }
}
</script>

<style>
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#site-content {
  padding: 1rem 2rem;
  flex: auto;
}
</style>