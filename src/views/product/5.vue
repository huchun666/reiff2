<template>
  <div class="product5">
    <img
      src="../../assets/images/product5/banner.jpg"
      alt=""
      class="product2-banner"
    />
    <div class="product2-content">
      <div class="product2-content1">
        <div class="product2-content1-left">
          <div class="product2-content1-left-title">工业软管</div>
          <div class="product2-content1-left-text">
            睿服的工业软管产品系列由Norres (诺锐), Contitech (德国马牌), Semprit
            (森佩理特), Rehau
            (德国瑞好)和睿服自有品牌组成。包含了各种橡胶和塑料材质的工业软管。此外还提供全系列的德系管夹和管接头，如LUDECKE,
            GEKA, Norma (诺马)等。<br /><br />
            无论是输送食品级原料、酸碱液体、蒸汽还是铁屑、木屑、沙石，在睿服平台都能找到高质量的产品方案。
          </div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">下载产品手册</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="" />
            <div class="product1-content-right-download-text">
              <a href="http://139.224.105.40/download/产品一览&资料下载/1.5/产品手册_输送软管.pdf" download="输送软管.pdf">输送软管</a>
            </div>
          </div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="" />
            <div class="product1-content-right-download-text">
              <a href="http://139.224.105.40/download/产品一览&资料下载/1.5/产品手册_液压软管.pdf" download="液压软管.pdf">液压软管</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content2">
        <img src="../../assets/images/product5/logo-5.png" alt="">
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

