<template>
  <div class="page-wrapper">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: '#5507fc'
    };
  },
  head () {
    return {
      title: '2ⁿᵈ Layer Staking Services'
    }
  }
}
</script>
