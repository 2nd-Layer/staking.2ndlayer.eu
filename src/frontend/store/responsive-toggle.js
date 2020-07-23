export const state = () => ({
  isMobileMenuToggled: false
});

export const mutations = {
  toggle (state) {
    state.isMobileMenuToggled = !state.isMobileMenuToggled;
  }
}
