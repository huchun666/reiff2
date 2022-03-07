<template>
  <div class="home">
    <img class="home-banner-img" src="../assets/images/home/home-banner.jpg" alt="">
    <div class="home-main-container">
      <div class="home-main-title">
        <p>{{ $t('home.wideRange') }}</p>
        <p>{{ $t('home.SupplyChain') }}</p>
      </div>
      <div class="home-main-content">
        <div class="home-main-content-box">
          {{ $t('home.TheHeadquarter') }}<br><br>
          {{ $t('home.REIFFHas') }}<br><br>
          {{ $t('home.WeAreCommitted') }} <br><br>
          {{ $t('home.REIFFGroup') }} <br><br>
          {{ $t('home.employees') }}
          <div class="home-main-contact-box">
            <div class="home-main-contact" @click="handleContactUs">{{ $t('home.ContactUs') }}</div>
          </div>
        </div>
      </div>
      <div class="home-core-product">
        <div class="home-core-product-title">{{ $t('home.CoreProductLines') }}</div>
        <div class="home-core-product-img-box">
          <div class="home-core-product-item" @click="handleMaodian">
            <img src="../assets/images/home/product1.jpg" alt="">
            <div class="home-core-product-item-text">{{ $t('home.OfficialDistributor') }}</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian2">
            <img src="../assets/images/home/product2.jpg" alt="">
            <div class="home-core-product-item-text">{{ $t('home.OfficialDistributor') }}</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian3">
            <img src="../assets/images/home/product3.jpg" alt="">
            <div class="home-core-product-item-text">{{ $t('home.REIFFRubberProducts') }}</div>
          </div>
        </div>
        <div class="home-core-product-img-box2">
          <div class="home-core-product-item" @click="handleMaodian4">
            <img src="../assets/images/home/product5.jpg" alt="">
            <div class="home-core-product-item-text">{{ $t('home.OfficialDistributorSpecial') }}</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian5">
            <img src="../assets/images/home/product4.jpg" alt="">
            <div class="home-core-product-item-text">{{ $t('home.OfficialDistributor') }}</div>
          </div>
        </div>
      </div>
      <div class="agency-brand">
        <div class="agency-brand-title">{{ $t('home.DistributionBrands') }}</div>
        <img src="../assets/images/home/logo.jpg" alt="">
      </div>
    </div>
    <contact-us @close="handleClose" v-if="contactUsStatus"></contact-us>
  </div>
</template>

<script>
import ContactUs from '../components/contact-us'
import { mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    ContactUs
  },
  data() {
    return {
      contactUsStatus: false
    }
  },
  methods: {
    ...mapMutations(['setCurrentIndex']),
    handleClose() {
      this.contactUsStatus = false;
    },
    handleContactUs() {
      this.contactUsStatus = true;
    },
    handleMaodian() {
      this.setCurrentIndex(0)
      this.$router.push({path: 'product/2#maodian1'})
    },
    handleMaodian2() {
      this.setCurrentIndex(0)
      this.$router.push({path: 'product/2#maodian2'})
    },
    handleMaodian3() {
      this.setCurrentIndex(0)
      this.$router.push({path: 'product/4'})
      scrollTo(0,0)
    },
    handleMaodian4() {
      this.setCurrentIndex(0)
      this.$router.push({path: 'product/1'})
      scrollTo(0,0)
    },
    handleMaodian5() {
      this.setCurrentIndex(0)
      this.$router.push({path: 'product/3'})
      scrollTo(0,0)
    },
  }
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
      background: #DB2C15;
      width: 200px;
      height: 60px;
      font-size: 18px;
      color: #fff;
      line-height: 60px;
      cursor: pointer;
    }
  }
}
.home-core-product {
  background: #f6f6f6;
  padding: 80px 22vw;
  .home-core-product-img-all {
    width: 100%;
  }
  .home-core-product-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin-bottom: 30px;
  }
  .home-core-product-img-box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
    .home-core-product-item {
      margin-right: 40px;
      width: calc((100% - 80px) / 3);
      cursor: pointer;
      img {
        width: 100%;
      }
      .home-core-product-item-text {
        background: #DB2C15;
        color: #fff;
        padding: 11px 9px;
        font-size: 16px;
        margin-top: -5px;
      }
    }
    .home-core-product-item:last-child {
      margin-right: 0;
    }
  }
  .home-core-product-img-box2 {
    display: flex;
    justify-content: center;
    width: 100%;
    .home-core-product-item {
      margin-right: 40px;
      width: calc((100% - 40px) / 2);
      cursor: pointer;
      img {
        width: 100%;
      }
      .home-core-product-item-text {
        background: #DB2C15;
        color: #fff;
        padding: 11px 9px;
        font-size: 16px;
        margin-top: -5px;
      }
    }
    .home-core-product-item:last-child {
      margin-right: 0;
    }
  }
}
.agency-brand {
  text-align: center;
  padding: 80px 0;
  .agency-brand-title {
    font-size: 32px;
    color: #424242;
    margin-bottom: 50px;
    font-weight: bold;
  }
  img {
    width: 59vw;
  }
}
</style>
