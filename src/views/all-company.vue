<template>
  <div class="all-company">
    <img
      src="../assets/images/footer/13.jpg"
      alt=""
      class="all-company-banner"
    />
    <div class="all-company-content">
      <div class="all-company-title">集团公司一览</div>
      <div class="all-company-content1">
        <div class="all-company-content1-box">
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/06.png" alt="">
            <div class="all-company-content1-left-text">
              德国最大的工业零部件供应商之一。致力于提供符合现代工业要求的工业服务，集产品供应、技术服务、电子商务一体。www.reiff-tp.de
            </div>
          </div>
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/08.png" alt="">
            <div class="all-company-content1-left-text">
              位于比利时和卢森堡等法语地区的工业零部件供应商，已有80年工业服务历史www.gummi-roller.lu
            </div>
          </div>
        </div>
        <div class="all-company-content1-box">
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/07.png" alt="">
            <div class="all-company-content1-left-text">
              R.E.T.专注于汽车领域，例如电子技术和传感技术领域的密封和减震系统，以及各种橡胶定制件。www.ret-gmbh.de
            </div>
          </div>
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/04.png" alt="">
            <div class="all-company-content1-left-text">
              Kremer专业从事橡胶产品的开发、生产和服务，如密封、模压件、平面密封件以及各种塑料和弹性体，拥有超过50年的专业经验，是众多知名企业的指定供应商。www.kremer-tec.de
            </div>
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
.all-company {
  width: 100%;
  .all-company-banner {
    width: 100%;
  }
  .all-company-content {
    padding: 0 15%;
    .all-company-title {
      font-size: 32px;
      font-weight: bold;
      margin: 70px 0 115px;
    }
    .all-company-content1-box {
      display: flex;
      .all-company-content1-left {
        width: calc((100% - 14.4vw) / 2);
        text-align: center;
        margin-right: 14.4vw;
        margin-bottom: 100px;
        img {
          margin-bottom: 32px;
        }
        .all-company-content1-left-text {
          font-size: 16px;
          color: #888;
        }
      }
      .all-company-content1-left:nth-child(2n+2) {
        margin-right: 0;
      }
    }
  }
}
</style>

