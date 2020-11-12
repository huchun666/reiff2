<template>
  <transition name="fade">
    <div class="component-contact-us">
      <div class="contact-us-box">
        <img
          src="../assets/images/home/close.png"
          alt=""
          class="close-img"
          @click="handleClose"
        />
        <div class="contact-us-container-box">
          <div class="contact-us-container">
            <div class="contact-us-title">MULCO集团历史</div>
            <div class="contact-us-boxx">
              <div class="contact-us-boxx-left">
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">1951 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>Willhelm Herm. Müller研发出第一代可浇注聚氨酯同步带</div>
                    <div>以下4家企业在10月1日组成了Mulco集团：</div>
                    <div>- Willhelm Herm. Müller</div>
                    <div>- Hilger u. Kern</div>
                    <div>- Reiff（睿服）</div>
                    <div>- Rothermundt</div>
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1954 -</div>
                  <div class="contact-us--text-item2-right">
                    第一代双齿面PU同步带问世
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1965 -</div>
                  <div class="contact-us--text-item2-right">
                    委托Contitech代工在市场上推出T型材同步带
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1967 -</div>
                  <div class="contact-us--text-item2-right">
                    委托Breco代工的第一代BRECO同步带成功问世
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1975 -</div>
                  <div class="contact-us--text-item2-right">
                    委托Breco代工的BRECOFLEX生产工艺的研发并获得专利
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1986 -</div>
                  <div class="contact-us--text-item2-right">
                    研发出SFAT新型同步带并获得专利
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1992 -</div>
                  <div class="contact-us--text-item2-right">
                    Contitech在市场上推出ATP型同步带
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1997 -</div>
                  <div class="contact-us--text-item2-right">
                    研发出传输及运行性能显著提高的BAT弧形同步带并申请专利
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2000 -</div>
                  <div class="contact-us--text-item2-right">
                    新型TN运输带研发成功并申请专利
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2001 -</div>
                  <div class="contact-us--text-item2-right">
                    进一步深化研发ATN模块化系统在市场上推出 ATN同步带和传动带
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2002 -</div>
                  <div class="contact-us--text-item2-right">
                    C在市场上推出新型高性能同步带GEN III
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2003 -</div>
                  <div class="contact-us--text-item2-right">
                    启用网页版产品目录，网页配有计算工具并可下载CAD图纸
                  </div>
                </div>
              </div>
              <div class="contact-us-boxx-right">
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2004 -</div>
                  <div class="contact-us--text-item2-right">
                    Contitech在市场上推出ATP型同步带
                  </div>
                </div>
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">2005 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>BRECOFLEX-同步带型号StandartPlus 投入市场</div>
                    <div>
                      SYNCHROCHAIN作为GATES生产的Polychain的竞争对手进入市场
                    </div>
                  </div>
                </div>
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">2007 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>为驱动技术和线性技术单独设计的新型同步带ATS15面世</div>
                    <div>
                      新型小功率驱动的AT3 BRECOFLEX-同步带进入市场
                    </div>
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2008 -</div>
                  <div class="contact-us--text-item2-right">
                    MULCO将ROHS环保安全标准为MULCO标准。
                  </div>
                </div>
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
    return {};
  },
  created() {},
  components: {},
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
  mounted() {},
};
</script>

<style scoped lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.component-contact-us {
  z-index: 2000;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(51, 51, 51, 0.8);
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
      height: 90vh;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .contact-us-container {
      padding: 50px;
      .contact-us-title {
        color: #333;
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 50px;
      }
      .contact-us-boxx {
        display: flex;
      }
      .contact-us-boxx-left {
        margin-right: 20px;
      }
      .contact-us--text-item1 {
        font-size: 14px;
        display: flex;
        margin-bottom: 20px;
        .contact-us--text-item1-left {
          color: #db2c15;
          min-width: 50px;
        }
        .contact-us--text-item1-right {
          color: #151515;
          div {
            margin-bottom: 5px;
          }
        }
      }
      .contact-us--text-item2 {
        font-size: 14px;
        display: flex;
        margin-bottom: 20px;
        .contact-us--text-item2-left {
          color: #db2c15;
          min-width: 50px;
        }
        .contact-us--text-item2-right {
          color: #151515;
          min-width: 50px;
        }
      }
    }
  }
}
</style>

