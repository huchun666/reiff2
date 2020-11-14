<template>
  <div class="service">
    <img
      src="../../assets/images/chemistry/banner.jpg"
      alt=""
      class="service-banner"
    />
    <div class="service-content">
      <div class="service-content1">
        <div class="service-content1-title">供应链服务</div>
        <div class="service-content1-box">
          持续优化供应链是每个制造企业的重要任务。<br /><br />
          我们致力于解决客户在面对中小数量的生产性物料时遇到的问题，提供降低采购流程成本和提高总体效率的供应链方案。睿服拥有完整的产品体系，按照德国工业标准建立，依托在德国和上海的物流中心，持续进行本土优化。<br /><br />
          凭借在欧洲市场丰富的经验和市场地位，我们提供国际采购服务，延伸客户的采购渠道。例如客户指定海外供应商，我们完成从询价、下单、外币付款、国际物流和进口报关等整套流程，直接在国内以人民币形式交付产品。针对客户日益增长的整合本土供应商的需求，我们也提供国内代采购服务。
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

