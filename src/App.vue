<template>
  <app-layout id="app">
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from './components/app-layout.vue';

export default {
  name: 'app',
  components: {
    AppLayout,
  },
};
</script>
