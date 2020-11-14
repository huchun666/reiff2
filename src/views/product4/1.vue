<template>
  <div class="chemistry">
    <img
      src="../../assets/images/chemistry/banner.jpg"
      alt=""
      class="chemistry-banner"
    />
    <div class="chemistry-content">
      <div class="chemistry-content1">
        <div class="chemistry-content1-title">危险化学品业务</div>
        <div class="chemistry-content1-box">
          中国对危险化学品从进口、运输到储存的管控日渐收紧。欧盟同时也加强了对此类产品的出口管理，提出了更严格的包装和运输要求。<br /><br />
          睿服多年来积累了丰富的化学品进口操作经验，除提供睿服体系的产品外，也可由客户指定供应商或者提货地点，我们完成从运输、进口到本土交付的中间环节。
        </div>
      </div>
      <img src="../../assets/images/chemistry/logo.jpg" alt="" class="chemistry-logo">
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
.chemistry {
  width: 100%;
  .chemistry-banner {
    width: 100%;
  }
  .chemistry-content {
    padding: 0 15%;
  }
  .chemistry-content1 {
    .chemistry-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .chemistry-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
  .chemistry-logo {
    width: 31.1vw;
    margin-bottom: 70px;
  }
}
</style>

