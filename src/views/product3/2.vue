<template>
  <div class="agency">
    <img
      src="../../assets/images/agency/banner.jpg"
      alt=""
      class="agency-banner"
    />
    <div class="agency-content">
      <div class="agency-content1">
        <div class="agency-content1-title">{{ $t('Authorization.title') }}</div>
        <img style="width: 50vw" src="../../assets/images/product3/Breco_sq.png" alt="">
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
    margin-bottom: 40px;
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

