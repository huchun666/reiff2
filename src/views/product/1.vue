<template>
  <div class='product1'>
    <img src="../../assets/images/product1/banner.jpg" alt="" class="product1-banner">
    <div class="product1-content">
      <div class="product1-content-left">
        <div class="product1-content-left-title">{{ $t('bearing.BearingandGuideRail') }}</div>
        <div class="product1-content-left-text">
          {{ $t('bearing.REIFFProvide') }}<br><br>
          {{ $t('bearing.WeHaveTheAuthorization') }}<br><br>
          {{ $t('bearing.WeHaveCustomized') }}
        </div>
        <img src="../../assets/images/product1/logo-1.jpg" alt="" class="product1-logo">
      </div>
      <div class="product1-content-right">
        <div class="product1-content-right-title">{{ $t('bearing.ProductCatalog') }}</div>
        <div class="product1-content-right-download">
          <img src="../../assets/images/product1/download.png" alt="">
          <div class="product1-content-right-download-text">
            <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.1/产品手册_轴承和导轨.pdf" target="_blank" download="轴承和导轨.pdf">{{ $t('bearing.BearingandGuideRail') }}</a>
          </div>
        </div>
        <div class="product1-content-right-download">
          <img src="../../assets/images/product1/download.png" alt="">
          <div class="product1-content-right-download-text">
            <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.1/产品手册_轴承工具和维护化学品.pdf" target="_blank" download="轴承工具维护化学品.pdf">{{ $t('bearing.MaintenanceTools') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  components: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped lang='scss'>
.product1 {
  width: 100%;
  .product1-banner {
    width: 100%;
  }
  .product1-content {
    display: flex;
    justify-content: center;
    padding: 70px 0;
    .product1-content-left {
      width: 43.8vw;
      margin-right: 9.6%;
      .product1-content-left-title {
        font-weight: bold;
        font-size: 32px;
        color: #000;
        margin-bottom: 40px;
      }
      .product1-content-left-text {
        color: #000;
        font-size: 16px;
        margin-bottom: 35px;
        line-height: 26px;
      }
    }
    .product1-content-right {
      .product1-content-right-title {
        font-size: 22px;
        color: #000;
        margin-bottom: 30px;
      }
      .product1-content-right-download {
        display: flex;
        align-items: center;
        margin-bottom: 32.5px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
        img {
          width: 24.4px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>

