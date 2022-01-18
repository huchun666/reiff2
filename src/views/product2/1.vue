<template>
  <div class="application-container">
    <img
      src="../../assets/images/application/banner.jpg"
      alt=""
      class="application-banner"
    />
    <div class="application-content">
      <div class="application-content1">
        <div class="application-content1-title">应用行业</div>
        <div class="application-content1-box">
          睿服一百多年来依靠优秀的产品质量和专业的供应链服务成为制造业值得信赖的合作伙伴。在德国、比利时、卢森堡和中国有超过6万家制造企业是我们的客户。<br /><br />
          从产品应用角度分析，睿服的客户主要集中在精密制造、医疗设备、食品和制药设备、全自动包装线、汽车和工程机械等领域；从供应链服务和供应链持续优化角度分析，大型制造企业和跨国集团是睿服重要的客户群体。
        </div>
      </div>
      <div class="application-content2">
        <img src="../../assets/images/application/001.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">汽车行业</div>
          <div class="application-content2-text">
            Breco 齿形带广泛地应用在生产线上，例如车身冲压和输送，是整车厂设备维护的指定品牌。<br><br>
            睿服的Kremer子公司多年为汽车行业设计和生产橡胶产品，<br><br>例如ABS/ESP系统和电气件的密封。<br><br>
            马牌Contitech齿形带。 Epple全系列不含硅胶水。
          </div>
        </div>
      </div>
      <div class="application-content3">
        <div class="application-content3-text-box">
          <div class="application-content3-text-title">医疗行业</div>
          <div class="application-content3-text">
            以Breco为核心的传动带方案。<br><br>
            符合医疗行业要求的橡胶产品，例如密封、减震、边角保护和输送软管。<br><br>
            斯凯孚、舍弗勒和睿服订制轴承。<br><br>
            符合医疗行业要求的化学品，例如胶水、密封和润滑油脂。
          </div>
        </div>
        <img src="../../assets/images/application/002.jpg" alt="" />
      </div>
      <div class="application-content2">
        <img src="../../assets/images/application/003.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">食品和制药设备、全自动包装线</div>
          <div class="application-content2-text">
            Breco聚氨酯齿形带。<br><br>
            马牌Contitech、欧皮特传动带。<br><br>
            符合食品和制药行业要求的橡胶产品，例如密封、减震和边角保护。<br><br>
            斯凯孚、舍弗勒和睿服订制轴承。<br><br>
            化学品，例如胶水、密封和润滑油脂。<br><br>
            FDA级的输送软管。
          </div>
        </div>
      </div>
      <div class="application-content3">
        <div class="application-content3-text-box">
          <div class="application-content3-text-title">精密制造、机床</div>
          <div class="application-content3-text">
            Breco聚氨酯齿形带。<br><br>
            马牌Contitech、欧皮特传动带。<br><br>
            橡胶产品，例如密封、减震和边角保护。<br><br>
            斯凯孚、舍弗勒和睿服订制轴承。<br><br>
            化学品，例如胶水、密封和润滑油脂。<br><br>
            工业输送软管。
          </div>
        </div>
        <img src="../../assets/images/application/004.jpg" alt="" />
      </div>
      <div class="application-content2 application-content5">
        <img src="../../assets/images/application/005.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">电子行业</div>
          <div class="application-content2-text">
            芯片和电路版生产线需要的Breco高精密齿形带。<br><br>
            防尘、防水和防腐蚀需要的橡胶密封产品。<br><br>
            封装需要的粘合胶和密封胶。
          </div>
        </div>
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
.application-container {
  width: 100%;
  .application-banner {
    width: 100%;
  }
  .application-content {
    padding: 0 15%;
  }
  .application-content1 {
    .application-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .application-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 50px;
    }
  }
  .application-content2 {
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    img {
      width: 18vw;
      margin-right: 10px;
    }
    .application-content2-text-box {
      width: calc(100% - 18vw - 10px);
      background: #F6F6F6;
      padding: 20px;
      .application-content2-text-title {
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .application-content2-text {
        font-size: 16px;
        color: #000;
        line-height: 15px;
      }
    }
  }
  .application-content3 {
    display: flex;
    width: 100%;
    margin-bottom: 40px;
    img {
      width: 18vw;
      margin-left: 10px;
    }
    .application-content3-text-box {
      width: calc(100% - 18vw - 10px);
      background: #F6F6F6;
      padding: 20px;
      .application-content3-text-title {
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .application-content3-text {
        font-size: 16px;
        color: #000;
        line-height: 15px;
      }
    }
  }
  .application-content5 {
    margin-bottom: 117px;
  }
}
</style>

