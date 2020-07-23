<template>
  <div>
    <PageLoader></PageLoader>

    <!-- Dark Wrapper -->
    <div class="dark-wrapper">
      <!-- Landing page Hero -->
      <section class="hero is-fullheight">
        <div class="hero-head">
          <NavBarClone></NavBarClone>
          <NavBarStatic></NavBarStatic>
        </div>
        <ParticlesJs></ParticlesJs>


        <nuxt></nuxt>


        <!-- Hero footer -->
        <div class="hero-foot">
          <div class="container">
            <div class="tabs is-centered">
              <!-- Client / partner list -->
              <ul>
                <li>
                  <a href="https://cardano.org/" target="_blank">
                    <img class="hero-logo" src="@/assets/img/coins/Cardano-coin-ADA-symbol.svg" alt="Cardano">
                  </a>
                </li>
                <li><a href="#"><img class="hero-logo" src="@/assets/img/coins/Tezos-coin-XTZ-symbol.svg" alt=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- /Landing page Hero -->
    </div>

    <GetStartedModal></GetStartedModal>
  </div>
</template>

<script>
  import NavBarClone from '@/components/Navigation/NavBarClone';
  import NavBarStatic from '@/components/Navigation/NavBarStatic';
  import ParticlesJs from "@/components/ParticlesJs";
  import PageLoader from "../components/PageLoader";
  import GetStartedModal from "../components/GetStartedModal";

  export default {
    components: {
      GetStartedModal,
      NavBarClone,
      NavBarStatic,
      ParticlesJs,
      PageLoader
    }
  }
</script>
