<template>
  <div class="service">
    <img
      src="../../assets/images/chemistry/banner.jpg"
      alt=""
      class="service-banner"
    />
    <div class="service-content">
      <div class="service-content1">
        <div class="service-content1-title">{{ $t('SupplyChainService.title') }}</div>
        <div class="service-content1-box">
          {{ $t('SupplyChainService.ContinuousSupply') }}<br /><br />
          {{ $t('SupplyChainService.committed') }}<br /><br />
          {{ $t('SupplyChainService.extensive') }}
        </div>
      </div>
      <div class="service-content2">
        <img src="../../assets/images/service/01.jpg" alt="">
        <img src="../../assets/images/service/02.jpg" alt="">
        <img src="../../assets/images/service/03.jpg" alt="">
        <img src="../../assets/images/service/04.jpg" alt="">
      </div>
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
.service {
  width: 100%;
  .service-banner {
    width: 100%;
  }
  .service-content {
    padding: 0 15%;
  }
  .service-content1 {
    .service-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .service-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
  .service-content2 {
    width: 100%;
    display: flex;
    margin-bottom: 127px;
    img {
      width: calc((100% - 30px) / 4);
      margin-right: 10px;
    }
    img:last-child {
      margin-right: 0;
    }
  }
}
</style>

