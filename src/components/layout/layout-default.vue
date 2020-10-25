<template>
  <div class=''>
    <app-header></app-header>
    <main>
      <slot />
    </main>
    <app-footer></app-footer>
    <contact-us></contact-us>
  </div>
</template>

<script>
import AppHeader from '../app-header.vue';
import AppFooter from '../app-footer.vue';
import ContactUs from '../contact-us.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    ContactUs
  },
};
</script>

<style scoped lang='scss'>

</style>
