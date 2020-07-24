<template>
  <div>
    <div :class="pageLoaderClasses"></div>
    <div :class="infraClasses"></div>
  </div>
</template>

<script>
  export default {
    name: "PageLoader",
    computed: {
      pageLoaderClasses() {
        return ['pageloader', 'is-theme', this.isLoading ? 'is-active' : ''];
      },
      infraClasses() {
        return ['infraloader', 'is-theme', this.isLoading ? 'is-active' : ''];
      },

    },
    created() {
      setTimeout(() => {
        Promise.all([]).then(() => {
          console.log('No longer loading');
          this.isLoading = false;
        });
      }, 250);
    },
    data() {
      return {
        isLoading: true
      };
    }
  }
</script>
