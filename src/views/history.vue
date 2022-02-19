<template>
  <div class="history">
    <img src="../assets/images/footer/13.jpg" alt="" class="history-banner" />
    <div class="history-content">
      <div class="history-title">{{ $t('footer.aboutUs') }}</div>
      <div class="history-content1">
        <div class="history-content1-left">
          {{ $t('aboutUs.REIFFCompany') }}<br /><br />
          {{ $t('aboutUs.TodayBecome') }}<br /><br />
          {{ $t('aboutUs.REIFFTechnical') }}<br /><br />
          {{ $t('aboutUs.largeIntegrated') }}<br /><br />
          {{ $t('aboutUs.REIFFGroup') }}
        </div>
        <img src="../assets/images/footer/10.png" alt="" />
      </div>
      <div class="history-content2">
        <div class="history-content2-left">
          <div class="history-content2-box">
            <div class="history-content2-year">1910</div>
            <div class="history-content2-text">{{ $t('aboutUs.Formation') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1922</div>
            <div class="history-content2-text">{{ $t('aboutUs.companyREIFF') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1931</div>
            <div class="history-content2-text">{{ $t('aboutUs.BusinessExpansion') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1947</div>
            <div class="history-content2-text">{{ $t('aboutUs.startedLeading') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1960</div>
            <div class="history-content2-text">{{ $t('aboutUs.administration') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1962</div>
            <div class="history-content2-text">{{ $t('aboutUs.Establishment') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1966</div>
            <div class="history-content2-text">{{ $t('aboutUs.Rubber') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1979</div>
            <div class="history-content2-text">{{ $t('aboutUs.ReiffJoined') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1984</div>
            <div class="history-content2-text">{{ $t('aboutUs.Hubert') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1988</div>
            <div class="history-content2-text">{{ $t('aboutUs.Logistics') }}</div>
          </div>
        </div>
        <div class="history-content2-right">
          <div class="history-content2-box">
            <div class="history-content2-year">1995</div>
            <div class="history-content2-text">{{ $t('aboutUs.Acquisition') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">1997</div>
            <div class="history-content2-text">{{ $t('aboutUs.RollerIndustrial') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2001</div>
            <div class="history-content2-text">{{ $t('aboutUs.headquarter') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2006</div>
            <div class="history-content2-text">{{ $t('aboutUs.operation') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2010</div>
            <div class="history-content2-text">{{ $t('aboutUs.Celebration') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2011</div>
            <div class="history-content2-text">{{ $t('aboutUs.established') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2013</div>
            <div class="history-content2-text">{{ $t('aboutUs.management') }}</div>
          </div>
          <div class="history-content2-box">
            <div class="history-content2-year">2021</div>
            <div class="history-content2-text">{{ $t('aboutUs.subsidiary') }}</div>
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
.history {
  width: 100%;
  .history-banner {
    width: 100%;
  }
  .history-content {
    padding: 0 15%;
    .history-title {
      color: #000;
      font-weight: bold;
      font-size: 32px;
      margin: 70px 0 35px;
    }
    .history-content1 {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 70px;
      .history-content1-left {
        width: calc(50% - 3px);
        margin-right: 3px;
        background: #F6F6F6;
        padding: 27px 32px;
        font-size: 16px;
        color: #000;
        line-height: 26px;
      }
      img {
        width: 50%;
      }
    }
    .history-content2 {
      display: flex;
      width: 100%;
      margin-bottom: 100px;
      .history-content2-left, .history-content2-right {
        width: 50%;
      }
      .history-content2-box {
        margin-bottom: 20px;
        font-size: 16px;
        .history-content2-year {
          color: #DB2C15;
        }
        .history-content2-text {
          color: #343434;
        }
      }
      .history-content2-right {
        padding-left: 32px;
        width: calc(50% - 32px);
      }
    }
  }
}
</style>

