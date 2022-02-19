<template>
  <div class="all-company">
    <img
      src="../assets/images/footer/13.jpg"
      alt=""
      class="all-company-banner"
    />
    <div class="all-company-content">
      <div class="all-company-title">{{ $t('footer.companies') }}</div>
      <div class="all-company-content1">
        <div class="all-company-content1-box all-company-content1-box-mid">
          <div class="all-company-content1-left all-company-content1-left-mid">
            <img src="../assets/images/footer/06.png" alt="">
            <div class="all-company-content1-left-text">
              {{ $t('GroupCompanies.largest') }}<br>{{ $t('GroupCompanies.reiff') }}
            </div>
          </div>
        </div>
        <div class="all-company-content1-box">
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/08.png" alt="">
            <div class="all-company-content1-left-text">
              {{ $t('GroupCompanies.ROLLER') }}<br>{{ $t('GroupCompanies.gummi') }}
            </div>
          </div>
          <div class="all-company-content1-left">
            <img src="../assets/images/footer/04.png" alt="">
            <div class="all-company-content1-left-text">
              {{ $t('GroupCompanies.specializes') }}<br>{{ $t('GroupCompanies.kremer') }}
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
          color: #000;
          line-height: 26px;
        }
      }
      .all-company-content1-left:nth-child(2n+2) {
        margin-right: 0;
      }
      .all-company-content1-left-mid {
        margin-right: 0;
      }
    }
    .all-company-content1-box-mid {
      justify-content: center;
    }
  }
}
</style>

