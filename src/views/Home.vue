<template>
  <div class="home">
    <img
      class="home-banner-img"
      src="../assets/images/home/home-banner.jpg"
      alt=""
    />
    <div class="home-main-container">
      <div class="home-main-title">
        <p>{{ $t("home.wideRange") }}</p>
        <p>{{ $t("home.SupplyChain") }}</p>
      </div>
      <div class="home-main-content">
        <div class="home-main-content-box">
          {{ $t("home.TheHeadquarter") }}<br /><br />
          {{ $t("home.REIFFHas") }}<br /><br />
          {{ $t("home.WeAreCommitted") }} <br /><br />
          {{ $t("home.REIFFGroup") }} <br /><br />
          {{ $t("home.REIFFGroup2") }} <br /><br />
          {{ $t("home.REIFFGroup3") }} <br /><br />
          {{ $t("home.REIFFGroup4") }} <br /><br />
          {{ $t("home.employees") }}
          <div class="home-main-contact-box">
            <div class="home-main-contact" @click="handleContactUs">
              {{ $t("home.ContactUs") }}
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content">
        <div class="product2-content3" id="maodian1">
          <img
            src="../assets/images/product2/content1.jpg"
            alt=""
            class="product2-content3-img"
          />
          <div class="product2-content3-text">
            <div class="product2-content3-text-title">
              {{ $t("Driving.MulcoGroup") }}
            </div>
            <div class="product2-content3-text-sub-title">
              {{ $t("Driving.BrecoContitech") }}
            </div>
            <div class="product2-content3-text-main">
              {{ $t("Driving.MulcoGroupWasFounded") }}<br />
              {{ $t("Driving.MulcoProducts") }}
            </div>
            <div class="product2-content3-text-bottom">
              <div
                class="product2-content3-text-bottom1"
                @click="handleShowHistory"
              >
                <span>{{ $t("Driving.HistoryOfMULCO") }}</span>
                <img src="../assets/images/product2/location.png" alt="" />
              </div>
              <div class="product2-content3-text-bottom1">
                <a href="http://www.mulco.de/en" target="_blank">{{
                  $t("Driving.OfficialHomepage")
                }}</a>
                <img src="../assets/images/product2/location.png" alt="" />
              </div>
              <div class="product2-content3-text-bottom1">
                <a href="http://www.breco.de/en" target="_blank">{{
                  $t("Driving.OfficialHomepageBreco")
                }}</a>
                <img src="../assets/images/product2/location.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="product2-content3">
          <img
            src="../assets/images/product1/shanghai.png"
            alt=""
            class="product2-content3-img"
          />
          <div class="product2-content3-text">
            <div class="product2-content3-text-title">
              {{ $t("Driving.REIFFShanghai") }}
            </div>
            <div class="product2-content3-text-sub-title">
              {{ $t("Driving.TheOfficialDistribution") }}
            </div>
            <div class="product2-content3-text-main">
              {{ $t("Driving.REIFFIsTheFounding") }}<br />
              {{ $t("Driving.REIFFAlone") }}
            </div>
          </div>
        </div>
        <div class="product2-content4">
          <div class="product2-content4-title">
            {{ $t("Driving.BrecoPolyurethane") }}
          </div>
          <ul class="product2-content4-ul">
            <li>
              <img src="../assets/images/product2/001.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>{{ $t("Driving.BRECOFLEXFlex") }}</div>
                  <div>{{ $t("Driving.BRECObelt") }}</div>
                  <div>{{ $t("Driving.StandardTiming") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/002.png" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>BRECO® Basic</div>
                  <div>{{ $t("Driving.Low-cost") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/003.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>BRECO® Protect</div>
                  <div>{{ $t("Driving.SterileTiming") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/004.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>BRECO® Move</div>
                  <div>{{ $t("Driving.SuitableFor") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/005.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>BRECO® ATN</div>
                  <div>{{ $t("Driving.VariousATM") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/006.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>{{ $t("Driving.BRECOFlatBelt") }}</div>
                  <div>{{ $t("Driving.CostSaving") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/009.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>{{ $t("Driving.BRECOBeltPulleys") }}</div>
                  <div>{{ $t("Driving.ImportedPulleys") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/008.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>{{ $t("Driving.BRECOExclusive") }}</div>
                  <div>{{ $t("Driving.CustomizedTooth") }}</div>
                </div>
              </div>
            </li>
            <li>
              <img src="../assets/images/product2/007.jpg" alt="" />
              <div class="product2-content4-li-text">
                <div class="product2-content4-li-text-box">
                  <div>BRECO® TSM</div>
                  <div>{{ $t("Driving.TensionTester") }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <contact-us @close="handleClose" v-if="contactUsStatus"></contact-us>
    <history-alert @close="handleCloseHistory" v-if="isShowHistory"></history-alert>
  </div>
</template>

<script>
import ContactUs from "../components/contact-us";
import HistoryAlert from '../components/history-alert'
import { mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    ContactUs,
    HistoryAlert,
  },
  data() {
    return {
      contactUsStatus: false,
      isShowHistory: false,
    };
  },
  methods: {
    ...mapMutations(["setCurrentIndex"]),
    handleClose() {
      this.contactUsStatus = false;
    },
    handleCloseHistory() {
      this.isShowHistory = false;
    },
    handleContactUs() {
      this.contactUsStatus = true;
    },
    handleShowHistory() {
      this.isShowHistory = true;
    },
    handleMaodian() {
      this.setCurrentIndex(0);
      this.$router.push({ path: "product/2#maodian1" });
    },
    handleMaodian2() {
      this.setCurrentIndex(0);
      this.$router.push({ path: "product/2#maodian2" });
    },
    handleMaodian3() {
      this.setCurrentIndex(0);
      this.$router.push({ path: "product/4" });
      scrollTo(0, 0);
    },
    handleMaodian4() {
      this.setCurrentIndex(0);
      this.$router.push({ path: "product/1" });
      scrollTo(0, 0);
    },
    handleMaodian5() {
      this.setCurrentIndex(0);
      this.$router.push({ path: "product/3" });
      scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-banner-img {
  width: 100%;
}
.home-main-title {
  font-size: 32px;
  color: #000;
  line-height: 14px;
  padding: 50px 0;
  text-align: center;
  font-weight: bold;
}
.home-main-content {
  color: #000;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  justify-content: center;
  padding-bottom: 62px;
  .home-main-content-box {
    width: 70vw;
    .home-main-contact-box {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 20px;
    }
    .home-main-contact {
      text-align: center;
      background: #db2c15;
      width: 200px;
      height: 60px;
      font-size: 18px;
      color: #fff;
      line-height: 60px;
      cursor: pointer;
    }
  }
}
.product2-content {
  padding: 0 15%;
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
  .product2-content3-text-title,
  .product2-content3-text-sub-title {
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
    line-height: 26px;
  }
  .product2-content3-text-bottom {
    display: flex;
    .product2-content3-text-bottom1 {
      display: flex;
      align-items: center;
      font-size: 16px;
      margin-right: 3vw;
      a,
      span {
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
  margin-bottom: 40px;
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
        background: #2a364f;
        color: #fff;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-top: -5px;
      }
    }
    li:nth-child(3n + 3) {
      margin-right: 0;
    }
  }
}
</style>
