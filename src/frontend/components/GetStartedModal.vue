<template>
  <b-modal :active.sync="isGetStartedModalToggled" :width="640" scroll="keep">
    <div class="card">
      <div class="card-content">
        <h1 class="has-text-centered is-size-4 mb-20">Please select one...</h1>
        <div class="columns">
          <div class="column is-6">
            <button class="button is-danger is-inverted is-outlined is-fullwidth is-token" style="min-height: 300px">
              <img src="@/assets/img/coins/Cardano-coin-ADA-symbol.svg">
            </button>
          </div>
          <div class="column is-6">
            <button class="button is-danger is-inverted is-outlined is-fullwidth is-token" style="min-height: 300px">
              <img src="@/assets/img/coins/Tezos-coin-XTZ-symbol.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'GetStartedModal',
    computed: {
      ...mapState('modals', ['isGetStartedModalToggled'])
    }
  }
</script>

<style scoped>

</style>
