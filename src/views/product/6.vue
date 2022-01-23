<template>
  <div class="product5">
    <img
      src="../../assets/images/product6/banner.jpg"
      alt=""
      class="product2-banner"
    />
    <div class="product2-content">
      <div class="product2-content1">
        <div class="product2-content1-left">
          <div class="product2-content1-left-title">{{ $t('Engineering.EngineeringPlastic') }}</div>
          <div class="product2-content1-left-text">
            {{ $t('Engineering.segmentation') }}<br><br>
            {{ $t('Engineering.organization') }}
          </div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">{{ $t('Engineering.ProductCatalog') }}</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="" />
            <div class="product1-content-right-download-text">
              <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.6/产品手册_工程塑料.pdf" target="_blank" download="工程塑料.pdf">{{ $t('Engineering.EngineeringPlastic') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content2">
        <img src="../../assets/images/product5/logo-6.png" alt="">
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
.product5 {
  width: 100%;
  .product2-banner {
    width: 100%;
  }
  .product2-content {
    padding: 0 15%;
  }
  .product2-content1 {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .product2-content1-left {
      margin-right: 13%;
      width: 42.3vw;
      .product2-content1-left-title {
        font-size: 32px;
        color: #000;
        font-weight: bold;
      }
      .product2-content1-left-text {
        font-size: 16px;
        color: #000;
        margin-top: 40px;
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
  .product2-content2 {
    margin: 70px 0 110px;
  }
}
</style>

