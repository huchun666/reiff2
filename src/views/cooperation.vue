<template>
  <div class="cooperation">
    <img
      src="../assets/images/footer/13.jpg"
      alt=""
      class="cooperation-banner"
    />
    <div class="cooperation-content">
      <div class="cooperation-content1">
        <div class="cooperation-content1-title">{{ $t('CooperativePartners.CooperativePartners') }}</div>
        <div class="cooperation-content1-box">
          {{ $t('CooperativePartners.more') }}<br /><br />
          {{ $t('CooperativePartners.Since') }}
        </div>
      </div>
      <div class="cooperation-content2">
        <img src="../assets/images/footer/05.png" alt="">
        <div class="cooperation-content2-box">
          {{ $t('CooperativePartners.MULCO') }}<br>
          www.mulco.net     www.breco.de/en/
        </div>
      </div>
      <div class="cooperation-content2">
        <img src="../assets/images/footer/03.png" alt="">
        <div class="cooperation-content2-box">
          {{ $t('CooperativePartners.K4plus') }}<br>
          www.k4plus.de
        </div>
      </div>
      <div class="cooperation-content2">
        <img src="../assets/images/footer/01.png" alt="">
        <div class="cooperation-content2-box">
          {{ $t('CooperativePartners.EDiS') }}<br>
          www.edisnet.com
        </div>
      </div>
      <div class="cooperation-content2">
        <img src="../assets/images/footer/09.png" alt="">
        <div class="cooperation-content2-box">
          {{ $t('CooperativePartners.VTH') }}<br>
          www.vth-verband.de
        </div>
      </div>
      <div class="cooperation-content2">
        <img src="../assets/images/footer/02.png" alt="">
        <div class="cooperation-content2-box">
          {{ $t('CooperativePartners.European') }}<br>
          www.eusga.eu
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
.cooperation {
  width: 100%;
  .cooperation-banner {
    width: 100%;
  }
  .cooperation-content {
    padding: 0 15%;
  }
  .cooperation-content1 {
    .cooperation-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .cooperation-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
  .cooperation-content2 {
    margin-bottom: 70px;
    img {
      width: 11.6vw;
    }
    .cooperation-content2-box {
      font-size: 16px;
      color: #000;
    }
  }
}
</style>

