<template>
  <div class=''>
    <app-header></app-header>
    <main>
      <slot />
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../app-header.vue';
import AppFooter from '../app-footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped lang='scss'>

</style>
