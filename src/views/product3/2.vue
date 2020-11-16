<template>
  <div class="agency">
    <img
      src="../../assets/images/agency/banner.jpg"
      alt=""
      class="agency-banner"
    />
    <div class="agency-content">
      <div class="agency-content1">
        <div class="agency-content1-title">授权证书</div>
        <div class="agency-content1-box">
          睿服是汇集众多一线制造商的平台，如果需要了解以下品牌以外的代理授权情况，请和我们联系。
        </div>
      </div>
      <div class="agency-content2">
        <ul>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">SKF斯凯孚轴承代理授权</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">INA舍弗勒轴承代理授权</div>
          </li>
        </ul>
        <ul>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">Breco中国区业务授权</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">Contitech马牌皮带业务授权</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">Optibelt欧皮特皮带业务授权</div>
          </li>
        </ul>
        <ul>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">汉高德国卓越合作伙伴</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">汉高中国区经销商授权(通用工业)</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">汉高中国经销商授权(表面处理)</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">Technicoll胶水中国代理授权</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">Epple胶水中国总代理授权</div>
          </li>
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">OKS润滑剂销售授权</div>
          </li>
        </ul>
        <ul class="agency-content2-box-bottom">
          <li class="agency-content2-box">
            <img src="../../assets/images/product2/location.png" alt="">
            <div class="agency-content2-box-text">中国危险化学品经营许可证</div>
          </li>
        </ul>
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
  .agency-content2 {
    ul {
      margin-bottom: 50px;
      .agency-content2-box {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        img {
          height: 14px;
          margin-right: 10px;
        }
        .agency-content2-box-text {
          font-size: 16px;
          color: #000;
        }
        .agency-content2-box-text:hover {
          color: #DB2C15;
        }
      }
    }
    .agency-content2-box-bottom {
      margin-bottom: 117px;
    }
  }
}
</style>

