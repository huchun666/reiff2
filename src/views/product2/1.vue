<template>
  <div class="application-container">
    <img
      src="../../assets/images/application/banner.jpg"
      alt=""
      class="application-banner"
    />
    <div class="application-content">
      <div class="application-content1">
        <div class="application-content1-title">{{ $t('Applications.Applications') }}</div>
        <div class="application-content1-box">
          {{ $t('Applications.ForMore') }}<br /><br />
          {{ $t('Applications.perspective') }}
        </div>
      </div>
      <div class="application-content2">
        <img src="../../assets/images/application/001.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">{{ $t('Applications.AutomotiveIndustry') }}</div>
          <div class="application-content2-text">
            {{ $t('Applications.BrecoTiming') }}<br><br>
            {{ $t('Applications.REIFFSubsidiary') }}<br><br>{{ $t('Applications.system') }}<br><br>
            {{ $t('Applications.Contitech') }}
          </div>
        </div>
      </div>
      <div class="application-content3">
        <div class="application-content3-text-box">
          <div class="application-content3-text-title">{{ $t('Applications.MedicalIndustry') }}</div>
          <div class="application-content3-text">
            {{ $t('Applications.BrecoPolyurethane') }}<br><br>
            {{ $t('Applications.RubberProducts') }}<br><br>
            {{ $t('Applications.Customized') }}<br><br>
            {{ $t('Applications.ChemicalProducts') }}
          </div>
        </div>
        <img src="../../assets/images/application/002.jpg" alt="" />
      </div>
      <div class="application-content2">
        <img src="../../assets/images/application/003.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">{{ $t('Applications.FoodAndPharmaceutical') }}</div>
          <div class="application-content2-text">
            {{ $t('Applications.BrecoPolyurethaneTiming') }}<br><br>
            {{ $t('Applications.Optibelt') }}<br><br>
            {{ $t('Applications.industries') }}<br><br>
            {{ $t('Applications.Customized') }}<br><br>
            {{ $t('Applications.lubricatingGrease') }}<br><br>
            {{ $t('Applications.Transportation') }}
          </div>
        </div>
      </div>
      <div class="application-content3">
        <div class="application-content3-text-box">
          <div class="application-content3-text-title">{{ $t('Applications.PrecisionManufacturing') }}</div>
          <div class="application-content3-text">
            {{ $t('Applications.BrecoPolyurethaneTiming') }}<br><br>
            {{ $t('Applications.Optibelt') }}<br><br>
            {{ $t('Applications.vibrationDamping') }}<br><br>
            {{ $t('Applications.Customized') }}<br><br>
            {{ $t('Applications.lubricatingGrease') }}<br><br>
            {{ $t('Applications.IndustrialHoses') }}
          </div>
        </div>
        <img src="../../assets/images/application/004.jpg" alt="" />
      </div>
      <div class="application-content2 application-content5">
        <img src="../../assets/images/application/005.jpg" alt="" />
        <div class="application-content2-text-box">
          <div class="application-content2-text-title">{{ $t('Applications.ElectronicsIndustry') }}</div>
          <div class="application-content2-text">
            {{ $t('Applications.BrecoHigh') }}<br><br>
            {{ $t('Applications.RubberSealing') }}<br><br>
            {{ $t('Applications.AdhesivesAndSealants') }}
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

