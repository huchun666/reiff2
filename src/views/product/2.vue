<template>
  <div class='product2'>
    <img src="../../assets/images/product2/banner.jpg" alt="" class="product2-banner">
    <div class="product2-content">
      <div class="product2-content1">
        <div class="product2-content1-left">
          <div class="product2-content1-left-title">{{ $t('Driving.DrivingBeltsFrom') }}</div>
          <div class="product2-content1-left-text">{{ $t('Driving.WeAreTheLarge') }}</div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">{{ $t('bearing.ProductCatalog') }}</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.2/产品手册_齿形带.pdf" target="_blank" download="齿形带.pdf">{{ $t('Driving.TimingBelts') }}</a>
            </div>
          </div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.2/产品手册_三角带.pdf" target="_blank" download="三角带.pdf">{{ $t('Driving.V-belts') }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content2">
        <div class="product2-content2-left">
          <p>{{ $t('Driving.BrecoBrecolex') }}</p>
          <p>{{ $t('Driving.ContitechTimingBelts') }}</p>
          <p>{{ $t('Driving.Optibelt') }}</p>
          <p>{{ $t('Driving.Contitech') }}</p>
          <p>{{ $t('Driving.EsbandConveyor') }}</p>
          <p>{{ $t('Driving.KTRCouplings') }}</p>
          <p>{{ $t('Driving.Rexnord') }}</p>
        </div>
        <img src="../../assets/images/product2/logo-2.png" alt="">
      </div>
      <div class="product2-content3" id="maodian1">
        <img src="../../assets/images/product2/content1.jpg" alt="" class="product2-content3-img">
        <div class="product2-content3-text">
          <div class="product2-content3-text-title">{{ $t('Driving.MulcoGroup') }}</div>
          <div class="product2-content3-text-sub-title">{{ $t('Driving.BrecoContitech') }}</div>
          <div class="product2-content3-text-main">
            {{ $t('Driving.MulcoGroupWasFounded') }}<br>
            {{ $t('Driving.MulcoProducts') }}
          </div>
          <div class="product2-content3-text-bottom">
            <div class="product2-content3-text-bottom1" @click="handleContactUs">
              <span>{{ $t('Driving.HistoryOfMULCO') }}</span>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
            <div class="product2-content3-text-bottom1">
              <a href="http://www.mulco.de/en" target="_blank">{{ $t('Driving.OfficialHomepage') }}</a>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
            <div class="product2-content3-text-bottom1">
              <a href="http://www.breco.de/en" target="_blank">{{ $t('Driving.OfficialHomepageBreco') }}</a>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content3">
        <img src="../../assets/images/product1/shanghai.png" alt="" class="product2-content3-img">
        <div class="product2-content3-text">
          <div class="product2-content3-text-title">{{ $t('Driving.REIFFShanghai') }}</div>
          <div class="product2-content3-text-sub-title">{{ $t('Driving.TheOfficialDistribution') }}</div>
          <div class="product2-content3-text-main">
            {{ $t('Driving.REIFFIsTheFounding') }}<br>
            {{ $t('Driving.REIFFAlone') }}
          </div>
        </div>
      </div>
      <div class="product2-content4">
        <div class="product2-content4-title">{{ $t('Driving.BrecoPolyurethane') }}</div>
        <ul class="product2-content4-ul">
          <li>
            <img src="../../assets/images/product2/001.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>{{ $t('Driving.BRECOFLEXFlex') }}</div>
                <div>{{ $t('Driving.BRECObelt') }}</div>
                <div>{{ $t('Driving.StandardTiming') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/002.png" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Basic</div>
                <div>{{ $t('Driving.Low-cost') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/003.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Protect</div>
                <div>{{ $t('Driving.SterileTiming') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/004.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Move</div>
                <div>{{ $t('Driving.SuitableFor') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/005.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® ATN</div>
                <div>{{ $t('Driving.VariousATM') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/006.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>{{ $t('Driving.BRECOFlatBelt') }}</div>
                <div>{{ $t('Driving.CostSaving') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/009.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>{{ $t('Driving.BRECOBeltPulleys') }}</div>
                <div>{{ $t('Driving.ImportedPulleys') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/008.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>{{ $t('Driving.BRECOExclusive') }}</div>
                <div>{{ $t('Driving.CustomizedTooth') }}</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/007.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® TSM</div>
                <div>{{ $t('Driving.TensionTester') }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="product2-content5">
        <div class="product2-content5-left" id="maodian2">
          <div class="product2-content5-left-title">{{ $t('Driving.ContitechDriving') }}</div>
          <div class="product2-content5-left-content">
            {{ $t('Driving.ContitechMember') }}
          </div>
          <div class="product2-content5-left-content2">
            {{ $t('Driving.REIFFkey') }}
          </div>
          <div class="product2-content5-left-title">{{ $t('Driving.ContitechTiming') }}</div>
          <div class="product2-content5-left-content3">
            <ul>
              <li>CONTI® SYNCHROBELT </li>
              <li>CONTI® SYNCHROFORCE CXP </li>
              <li>CONTI® SYNCHROFORCE CXA </li>
              <li>CONTI® SYNCHROFORCE CARBON </li>
              <li>CONTI® FALCON PD </li>
              <li>CONTI® SILENTSYNC </li>
              <li>CONTI® SYNCHROCHAIN </li>
              <li>CONTI® SYNCHROCHAIN CARBON </li>
              <li>CONTI® SYNCHROFLEX </li>
              <li>CONTI® SYNCHROFLEX GEN III </li>
            </ul>
            <ul>
              <li>CONTI® SYNCHROCOLOR </li>
              <li>CONTI® SYNCHRORIB </li>
              <li>CONTI® SYNCHROTWIN </li>
              <li>CONTI® SYNCHROTWIN CXP </li>
              <li>CONTI® SYNCHROLINE </li>
              <li>CONTI® POLYFLAT </li>
              <li>CONTI® SYNCHRODRIVE </li>
              <li>CONTI® SYNCHRODRIVE N10 </li>
              <li>CONTI® VSM_1 / VSM_3 张力仪 </li>
            </ul>
          </div>
        </div>
        <div class="product2-content5-right">
          <div class="product2-content5-right-title">{{ $t('Driving.ProductInformation') }}</div>
          <div class="product2-content5-right-img-box">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product2-content5-right-img-text">
              <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.2/1.2-康迪泰克传动带资料.pdf" target="_blank" download="康迪泰克齿形带.pdf">{{ $t('Driving.ContitechTimingBelts2') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <history-alert @close="handleClose" v-if="contactUsStatus"></history-alert>
  </div>
</template>

<script>
import HistoryAlert from '../../components/history-alert'
export default {
  data() {
    return {
      contactUsStatus: false
    }
  },
  created() {

  },
  components: {
    HistoryAlert
  },
  methods: {
    handleClose() {
      this.contactUsStatus = false;
    },
    handleContactUs() {
      this.contactUsStatus = true;
    }
  },
  mounted() {
    let { fullPath } = this.$route;
    if (fullPath.indexOf('#') > -1) {
      let maodian = fullPath.split('#')[1]
      scrollTo(0, document.getElementById(maodian).offsetTop - 160)
    }
  }
}
</script>

<style scoped lang='scss'>
.product2 {
  width: 100%;
  .product2-banner {
    width: 100%;
  }
  .product2-content {
    padding: 0 15%;
    .product2-content1 {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .product2-content1-left {
        margin-right: 13%;
        width: 42.3vw;
        .product2-content1-left-title {
          font-size: 32px;
          color: #000;
          font-weight: bold;
        }
        .product2-content1-left-text {
          font-size: 16px;
          color: #000;
          margin-top: 40px;
        }
      }
      .product1-content-right {
        .product1-content-right-title {
          font-size: 22px;
          color: #000;
          margin-bottom: 30px;
        }
        .product1-content-right-download {
          display: flex;
          align-items: center;
          margin-bottom: 32.5px;
          font-size: 16px;
          color: #000;
          cursor: pointer;
          img {
            width: 24.4px;
            margin-right: 5px;
          }
        }
      }
    }
    .product2-content2 {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 38px 0 70px;
      .product2-content2-left {
        font-size: 16px;
        color: #000;
        font-weight: bold;
      }
      img {
        width: 27.6vw;
        margin-bottom: 40px;
      }
    }
    .product2-content3 {
      display: flex;
      margin-bottom: 70px;
      .product2-content3-text {
        padding-top: 10px;
      }
      .product2-content3-img {
        margin-right: 20px;
      }
      .product2-content3-text-title, .product2-content3-text-sub-title {
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .product2-content3-text-sub-title {
        font-size: 18px;
      }
      .product2-content3-text-main {
        color: #000;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .product2-content3-text-bottom {
        display: flex;
        .product2-content3-text-bottom1 {
          display: flex;
          align-items: center;
          font-size: 16px;
          margin-right: 3.8vw;
          a, span {
            margin-right: 8px;
            color: #000;
            cursor: pointer;
          }
          img {
            width: 13px;
            margin-bottom: -2px;
          }
        }
        .product2-content3-text-bottom1:last-child {
          margin-right: 0;
        }
      }
    }
    .product2-content4 {
      width: 100%;
      .product2-content4-title {
        font-size: 20px;
        color: #000;
        margin-bottom: 30px;
        font-weight: bold;
      }
      .product2-content4-ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        li {
          width: calc((100% - 40px) / 3);
          margin-right: 20px;
          margin-bottom: 20px;
          img {
            width: 100%;
          }
          .product2-content4-li-text {
            width: calc(100% - 40px);
            height: 88px;
            padding: 0 20px;
            background: #2A364F;
            color: #fff;
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-top: -5px;
          }
        }
        li:nth-child(3n+3) {
          margin-right: 0;
       }
      }
    }
    .product2-content5 {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      .product2-content5-left {
        width: 43vw;
        .product2-content5-left-title {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 30px;
        }
        .product2-content5-left-content, .product2-content5-left-content2 {
          font-size: 16px;
          color: #000;
        }
        .product2-content5-left-content2 {
          margin-top: 20px;
          margin-bottom: 70px;
        }
        .product2-content5-left-content3 {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #000;
          line-height: 36px;
          margin-bottom: 70px;
        }
      }
      .product2-content5-right {
        .product2-content5-right-title {
          font-size: 22px;
          color: #000;
          font-weight: bold;
          margin-bottom: 32px;
        }
        .product2-content5-right-img-box {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
          .product2-content5-right-img-text {
            color: #000;
            font-size: 16px;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>

