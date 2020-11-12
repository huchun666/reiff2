<template>
  <div class="agency">
    <img
      src="../../assets/images/agency/banner.jpg"
      alt=""
      class="agency-banner"
    />
    <div class="agency-content">
      <div class="agency-content1">
        <div class="agency-content1-title">品牌代理</div>
        <div class="agency-content1-box">
          睿服是众多国际知名工业品牌的重要合作伙伴。这些合作很多都可以追溯到二战后市场刚刚建立时。<br /><br />
          在德国我们同时拥有斯凯孚(SKF)和舍弗勒(INA/FAG)两大轴承品牌的授权，是THK直线导轨在德国最大的销售商之一。在中国除了上述产品外，我们还提供Steinmyer丝杆和Franke特种轴承的产品。<br /><br />
          在齿形带和三角带方面，我们同时拥有欧皮特(Optibelt)和马牌(Contitech)的授权，是这两个品牌在欧洲最大的代理商之一。我们是Mulco集团的核心成员，Mulco拥有Breco, Brecoflex 和Synchroflex这三个同步带品牌，是行业的领先供应商，在欧洲拥有整个聚氨酯同步带行业35%的市场份额。<br /><br />
          在化学粘合方面，我们是汉高乐泰在德国最大的代理商之一，在中国拥有各主要城市的授权。此外我们还是德国Epple和Technicoll品牌在中国的总代理。
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
      color: #3a3a3a;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .agency-content1-box {
      font-size: 16px;
      color: #828282;
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

