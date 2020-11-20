<template>
  <div class="home">
    <img class="home-banner-img" src="../assets/images/home/home-banner.jpg" alt="">
    <div class="home-main-container">
      <div class="home-main-title">
        <p>大型工业零部件平台</p>
        <p>供应链整体方案供应商</p>
      </div>
      <div class="home-main-content">
        <div class="home-main-content-box">
          睿服集团总部位于德国斯图加特南部的罗伊特林根。自1910年以来，历经四代传承，为超过6万家制造企业提供高品质的零部件和现代化供应链服务，是众多国际一线工业品牌重要的销售渠道和合作伙伴之一；满足客户从轴承、导轨、传动带、化学品、橡胶类产品、软管、工程塑料到精密组装件等方面的采购需求。
          我们的自有产线可以进行灵活的产品开发和定制。睿服集团R.E.T.和Kremer两家子公司拥有超过50年的专业密封设计和生产经验。<br><br>
          睿服在德国拥有122,000平方米的仓储面积，常备库存超过80,000件，实时库存超过2亿人民币，平均每月出货12,000个托盘，其中75%是直接生产性物料。<br><br>
          我们致力于解决客户在面对中小数量的生产性物料时遇到的问题，提供降低采购流程成本和提高总体效率的供应链方案。睿服拥有完整的产品体系，按照德国工业标准建立，依托在德国和上海的物流中心，持续进行本土优化。 <br><br>
          睿服集团共有员工650人，年销售额2.1亿欧元。
          <div class="home-main-contact-box">
            <div class="home-main-contact" @click="handleContactUs">联系我们</div>
          </div>
        </div>
      </div>
      <div class="home-core-product">
        <div class="home-core-product-title">核心产品线</div>
        <div class="home-core-product-img-box">
          <div class="home-core-product-item" @click="handleMaodian">
            <img src="../assets/images/home/product1.jpg" alt="">
            <div class="home-core-product-item-text">德国区和中国区官方授权</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian2">
            <img src="../assets/images/home/product2.jpg" alt="">
            <div class="home-core-product-item-text">德国区和中国区官方授权</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian3">
            <img src="../assets/images/home/product3.jpg" alt="">
            <div class="home-core-product-item-text">睿服橡胶密封和减震</div>
          </div>
        </div>
        <div class="home-core-product-img-box2">
          <div class="home-core-product-item" @click="handleMaodian4">
            <img src="../assets/images/home/product5.jpg" alt="">
            <div class="home-core-product-item-text">德国区官方授权/睿服轴承定制</div>
          </div>
          <div class="home-core-product-item" @click="handleMaodian5">
            <img src="../assets/images/home/product4.jpg" alt="">
            <div class="home-core-product-item-text">中国区和德国区官方授权</div>
          </div>
        </div>
      </div>
      <div class="agency-brand">
        <div class="agency-brand-title">代理品牌</div>
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
      // scrollTo(0,0)
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
