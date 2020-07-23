<template>
  <div>
    <!--    &lt;!&ndash; Pageloader &ndash;&gt;-->
    <PageLoader></PageLoader>
    <!--    <div class="infraloader is-active"></div>-->

    <!-- Token Wrapper -->
    <div class="token-wrapper">
      <!-- Landing page Hero -->
      <section class="hero is-medium">
        <div class="hero-head">
          <NavBarClone></NavBarClone>
          <NavBarStatic></NavBarStatic>
        </div>

        <nuxt/>
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
