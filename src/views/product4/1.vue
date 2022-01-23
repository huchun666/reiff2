<template>
  <div class="chemistry">
    <img
      src="../../assets/images/chemistry/banner.jpg"
      alt=""
      class="chemistry-banner"
    />
    <div class="chemistry-content">
      <div class="chemistry-content1">
        <div class="chemistry-content1-title">{{ $t('Hazardous.title') }}</div>
        <div class="chemistry-content1-box">
          {{ $t('Hazardous.content') }}<br /><br />
          {{ $t('Hazardous.content2') }}
        </div>
      </div>
      <img src="../../assets/images/chemistry/logo.jpg" alt="" class="chemistry-logo">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped lang='scss'>
.chemistry {
  width: 100%;
  .chemistry-banner {
    width: 100%;
  }
  .chemistry-content {
    padding: 0 15%;
  }
  .chemistry-content1 {
    .chemistry-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .chemistry-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
  .chemistry-logo {
    width: 31.1vw;
    margin-bottom: 70px;
  }
}
</style>

