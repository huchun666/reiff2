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
            <div class="contact-us-title">{{ $t('Driving.HistoryOfMULCO') }}</div>
            <div class="contact-us-boxx">
              <div class="contact-us-boxx-left">
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">1951 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>{{ $t('Innovations.October') }}</div>
                    <div>{{ $t('Innovations.Founding') }}</div>
                    <div>- {{ $t('Innovations.Willhelm') }}</div>
                    <div>- {{ $t('Innovations.Hilger') }}</div>
                    <div>- {{ $t('Innovations.Reutlingen') }}</div>
                    <div>- {{ $t('Innovations.Rothermundt') }}</div>
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1954 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.first') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1965 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.CONTI') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1967 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.BRECO') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1975 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.Development') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1986 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.launches') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1992 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.patenting') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">1997 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.Further') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2000 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.application') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2001 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.performance') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2002 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.Activation') }}
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2003 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.BRECOFLEX') }}
                  </div>
                </div>
              </div>
              <div class="contact-us-boxx-right">
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2004 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.TIMING') }}
                  </div>
                </div>
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">2005 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>{{ $t('Innovations.Introduction') }}</div>
                  </div>
                </div>
                <div class="contact-us--text-item1">
                  <div class="contact-us--text-item1-left">2007 -</div>
                  <div class="contact-us--text-item1-right">
                    <div>{{ $t('Innovations.manufacturers') }}</div>
                  </div>
                </div>
                <div class="contact-us--text-item2">
                  <div class="contact-us--text-item2-left">2008 -</div>
                  <div class="contact-us--text-item2-right">
                    {{ $t('Innovations.blue') }}
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
        color: #000;
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

