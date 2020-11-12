<template>
  <transition name="fade">
    <div class='component-contact-us'>
      <div class="contact-us-box">
        <img src="../assets/images/home/close.png" alt="" class="close-img" @click="handleClose">
        <div class="contact-us-container-box">
          <img src="../assets/images/home/contact-us.jpg" alt="" class="contact-us-img">
          <div class="contact-us-container">
            <div class="contact-us-title">联系我们</div>
            <div class="contact-us-footer">
              <div class="contact-us-footer-left">
                <div class="contact-us-footer-left-title">中国</div>
                <ul class="contact-us-footer-left-content">
                  <li>睿服工业零部件（上海）有限公司</li>
                  <li>上海市闵行区都会路1835号6号楼B</li>
                  <li>邮编：201108</li>
                  <br>
                  <li>电话：+86 21 6220 7582 ex 802</li>
                  <li>传真：+86 21 6220 7589</li>
                  <li>邮箱：shanghai@reiff-tp.cn</li>
                </ul>
              </div>
              <div class="contact-us-footer-left">
                <div class="contact-us-footer-left-title">Germany</div>
                <ul class="contact-us-footer-left-content">
                  <li>REIFF Technische Produkte GmbH</li>
                  <li>Tübinger Str. 2-6</li>
                  <li>D-72762 Reutlingen</li>
                  <br>
                  <li>Tel: +49 7121 323-0</li>
                  <li>Fax: + 49 7121 323-3460</li>
                  <li>Email: kundenservice@reiff-gruppe.de</li>
                  <li>www.reiff-tp.de</li>
                </ul>
              </div>
              <div class="contact-us-footer-left">
                <div class="contact-us-footer-left-title contact-us-footer-left-title-hidden">中国</div>
                <ul class="contact-us-footer-left-content">
                  <li>R.E.T. GmbH</li>
                  <li>Aspenhaustraße 15</li>
                  <li>D- 72770 Reutlingen</li>
                  <br>
                  <li>Tel: +49 7121 5101-0</li>
                  <li>Fax: +49 7121 5101-199</li>
                  <li>Email: info@ret-gmbh.de</li>
                  <li>www.ret-gmbh.de</li>
                </ul>
              </div>
              <div class="contact-us-footer-left">
                <div class="contact-us-footer-left-title contact-us-footer-left-title-hidden">1</div>
                <ul class="contact-us-footer-left-content">
                  <li>KREMER GmbH</li>
                  <li>Kinzigstr. 9 </li>
                  <li>D-63607 Wächtersbach</li>
                  <br>
                  <li>Tel: +49 6053 6161 0 </li>
                  <li>Fax: + 49 6053 9739</li>
                  <li>Email: info@kremer-tec.de</li>
                  <li>www.kremer-tec.de</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  components: {

  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang='scss'>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.component-contact-us {
  z-index: 2000;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(51,51,51,0.80);
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-us-box {
    width: 60.8vw;
    background: #fff;
    position: relative;
    height: 90vh;
    .contact-us-img {
      width: 100%;
    }
    .close-img {
      width: 22px;
      height: 22px;
      position: absolute;
      right: -41px;
      top: 0;
      cursor: pointer;
    }
    .contact-us-container-box {
      overflow-y: auto;
      overflow-x: hidden;
      height: 90vh;
    }
    .contact-us-container {
      padding: 50px;
      .contact-us-title {
        color: #333;
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 37px;
      }
      .contact-us-footer {
        display: flex;
        .contact-us-footer-left {
          margin-left: 3.1vw;
          font-size: 13px;
          .contact-us-footer-left-title {
            color: #DB2C15;
            margin-bottom: 16px;
            font-size: 18px;
            height: 24px;
          }
          .contact-us-footer-left-title-hidden {
            opacity: 0;
          }
        }
        .contact-us-footer-left:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>

