export const state = () => ({
  isGetStartedModalToggled: false
});

export const mutations = {
  toggleGetStartedModal (state) {
    state.isGetStartedModalToggled = !state.isGetStartedModalToggled;
  }
}
