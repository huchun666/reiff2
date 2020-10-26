<template>
  <div class='product1'>
    <img src="../../assets/images/product1/banner.jpg" alt="" class="product1-banner">
    <div class="product1-content">
      <div class="product1-content-left">
        <div class="product1-content-left-title">轴承和导轨</div>
        <div class="product1-content-left-text">
          睿服为客户提供从标准型号到产品定制的全系列轴承和导轨。<br><br>
          我们同时拥有舍弗勒（Schaeffler）和斯凯孚（SKF）的经销商授权，是这两个品牌在德国最大的经销商之一，和斯凯孚的合作可以一直追溯到上世纪50年代；我们也是THK导轨在德国最大的经销商之一。得益于各一线制造商的支持和全系列的产品线，睿服是中等到小量需求的理想合作伙伴。 <br><br>
          我们自上世纪90年代开始在中国定制轴承产线、按照德国工业标准生产，大批量出口德国和其他欧洲国家。随着生产线在国际间的转移，越来越多的中国客户也开始使用睿服的定制轴承。
        </div>
        <img src="../../assets/images/product1/logo-1.jpg" alt="" class="product1-logo">
      </div>
      <div class="product1-content-right">
        <div class="product1-content-right-title">下载产品手册</div>
        <div class="product1-content-right-download">
          <img src="../../assets/images/product1/download.png" alt="">
          <div class="product1-content-right-download-text">
            <a href="" download="轴承和导轨.pdf">轴承和导轨</a>
          </div>
        </div>
        <div class="product1-content-right-download">
          <img src="../../assets/images/product1/download.png" alt="">
          <div class="product1-content-right-download-text">
            <a href="" download="轴承工具维护化学品.pdf">轴承工具维护化学品</a>
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
        color: #3a3a3a;
        margin-bottom: 40px;
      }
      .product1-content-left-text {
        color: #828282;
        font-size: 16px;
        margin-bottom: 35px;
      }
    }
    .product1-content-right {
      .product1-content-right-title {
        font-size: 22px;
        color: #333;
        margin-bottom: 30px;
      }
      .product1-content-right-download {
        display: flex;
        align-items: center;
        margin-bottom: 32.5px;
        font-size: 16px;
        color: #333;
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

