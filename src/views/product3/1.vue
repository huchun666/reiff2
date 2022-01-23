<template>
  <div class="agency">
    <img
      src="../../assets/images/agency/banner.jpg"
      alt=""
      class="agency-banner"
    />
    <div class="agency-content">
      <div class="agency-content1">
        <div class="agency-content1-title">{{ $t('Applications.ProductDistribution') }}</div>
        <div class="agency-content1-box">
          {{ $t('Applications.REIFFpartner') }}<br /><br />
          {{ $t('Applications.InGermany') }}<br /><br />
          {{ $t('Applications.ForTiming') }}<br /><br />
          {{ $t('Applications.chemicalBonding') }}
        </div>
      </div>
      <img src="../../assets/images/agency/logo-7.png" alt="" class="agency-logo">
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
.agency {
  width: 100%;
  .agency-banner {
    width: 100%;
  }
  .agency-content {
    padding: 0 15%;
  }
  .agency-content1 {
    .agency-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .agency-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
  .agency-logo {
    width: 100%;
    margin-bottom: 100px;
  }
}
</style>

