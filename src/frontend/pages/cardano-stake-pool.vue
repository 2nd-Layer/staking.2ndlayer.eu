<template>
  <div id="site-content">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <div class="video-wrapper">
              <div class="video-container">
  <!--              <div class="video-button levitate js-modal-btn" data-video-id="6WG7D47tGb0">-->
  <!--                <img src="@/assets/img/icons/play.svg" alt="">-->
  <!--              </div>-->
                <h2 class="text-center">
                  Cardano Shelley mainnet is comming soon...
                </h2>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .video-wrapper {
    background-color: rgba(127, 0, 255, 0.9);
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 0;
    padding-top: 56.25%;
    position: relative;

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        color: white;
        font-size: 1.25em;
        font-weight: bold;
        margin-top: 30px;
      }
    }
  }
</style>
