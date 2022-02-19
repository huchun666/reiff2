<template>
  <div class="idea">
    <img
      src="../assets/images/footer/13.jpg"
      alt=""
      class="idea-banner"
    />
    <div class="idea-content">
      <div class="idea-content1">
        <div class="idea-content1-title">{{ $t('footer.generalTermsOfBusiness') }}</div>
        <div class="idea-content1-sub-title">There are 1 file of General Terms and Conditions available:</div>
        <div class="idea-content1-title-content">
          <img src="../assets/images/product2/location.png" alt="">
          <div class="idea-content1-title-content-text">
            <a href="http://www.reiff-tp.cn/download/一般业务条款/REIFF General Terms and Conditions.pdf" target="_blank" download="REIFF General Terms and Conditions.pdf">REIFF General Terms and Conditions.pdf</a>
          </div>
        </div>
        <div class="idea-content1-box">
          "intend" and "plan" on these Internet pages, we aim to make it clear when we are making forward-looking statements. Statements of this kind reflect the views of the REIFF Group with regard to future events at which they were made, and are subject to risks and uncertainties. The REIFF Group disclaims any intention or obligation to update these forward-looking statements.
        </div>
        <div class="idea-content1-sub-title">Licensing rights</div>
        <div class="idea-content1-box idea-content1-box-last">
          The REIFF Group would like to provide you with an innovative and informative website. However, we ask for your understanding of the fact that the REIFF Group must protect its intellectual property, including patents, brands and copyrights, and that these Internet pages do not grant any license to use the intellectual property of the REIFF Group.
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
.idea {
  width: 100%;
  .idea-banner {
    width: 100%;
  }
  .idea-content {
    padding: 0 15%;
  }
  .idea-content1 {
    .idea-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .idea-content1-sub-title {
      font-size: 18px;
      font-weight: bold;
    }
    .idea-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
      margin-bottom: 30px;
    }
    .idea-content1-box-last {
      margin-bottom: 100px;
    }
  }
  .idea-content1-title-content {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #000;
    margin: 15px 0 24px;
    img {
      height: 16px;
      margin-right: 8px;
    }
  }
}
</style>

