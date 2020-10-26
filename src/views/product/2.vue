<template>
  <div class='product2'>
    <img src="../../assets/images/product2/banner.jpg" alt="" class="product2-banner">
    <div class="product2-content">
      <div class="product2-content1">
        <div class="product2-content1-left">
          <div class="product2-content1-left-title">欧洲一线品牌组成的传动带方案</div>
          <div class="product2-content1-left-text">我们是传动带的大型销售渠道、Mulco集团核心成员、欧皮特和马牌在德国最大的分销商之一。为客户提供综合的产品方案。</div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">下载产品手册</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="" download="齿形带.pdf">齿形带</a>
            </div>
          </div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="" download="三角带.pdf">三角带</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content2">
        <div class="product2-content2-left">
          <p>Mulco集团Breco, Brecoflex, Contitech Sychroflex 聚氨酯齿形带</p>
          <p>马牌Contitech齿形带</p>
          <p>欧皮特Optibelt三角带</p>
          <p>马牌Contitech三角带</p>
          <p>Esband输送带、抽吸带和烟草行业特种皮带</p>
          <p>开天KTR联轴器</p>
          <p>Rexnord Tollok涨紧套</p>
        </div>
        <img src="../../assets/images/product2/logo-2.png" alt="">
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
.product2 {
  width: 100%;
  .product2-banner {
    width: 100%;
  }
  .product2-content {
    padding: 0 18.6%;
    .product2-content1 {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      .product2-content1-left {
        margin-right: 13%;
        width: 42.3vw;
        .product2-content1-left-title {
          font-size: 32px;
          color: #3A3A3A;
          font-weight: bold;
        }
        .product2-content1-left-text {
          font-size: 16px;
          color: #828282;
          margin-top: 40px;
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
    .product2-content2 {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 38px 0 70px;
      .product2-content2-left {
        font-size: 18px;
        color: #3a3a3a;
      }
      img {
        width: 529px;
      }
    }
  }
}
</style>

