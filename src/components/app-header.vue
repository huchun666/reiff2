<template>
  <div class='app-header'>
    <div class="app-header-content">
      <div class="app-header-content-contanier">
        <img src="../assets/images/header/logo.png" alt="" class="app-header-logo" @click="handleGoHome">
        <div class="app-header-tabs">
          <div class="app-header-tabs-item" v-for="(item, index) in headerData" :key="index"
            @mouseover="hoverIndex = index" 
            @mouseout="hoverIndex = -1">
            <div class="app-header-tabs-item-index"
              :class="{'app-header-tabs-item-index-active': hoverIndex === index || currentIndex === index}"
              @click="handleRouteTitleLink(item.data.length, item.url, index)"
              >{{item.title}}</div>
            <div class="app-header-tabs-item-content"
              v-show="hoverIndex === index && item.data.length > 1"
            >
              <div
                class="app-header-tabs-item-content-item"
                v-for="(childItem, childIndex) in item.data"
                :key="childIndex"
                @click="handleRouteLink(childItem.url, index, childIndex)"
                :class="{'app-header-tabs-item-content-item-selected': currentChildIndex === childIndex && currentIndex === index}"
              >
                {{childItem.title}}
              </div>
            </div>
          </div>
          <div class="app-header-tabs-item app-header-lang">
            <img v-if="isShowLang" src="../assets/images/home/icon-ch.png" alt="" @click="handleChange('zh')">
            <img v-else src="../assets/images/home/icon-en.png" alt="" @click="handleChange('en')">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      hoverIndex: -1,
      hoverChildIndex: -1,
      isShowLang: false,
    };
  },
  computed: {
    ...mapState(['currentIndex', 'currentChildIndex']),
    headerData() {
      return [
        {
          title: this.$t('menu.product'),
          data: [
            {
              title: this.$t('menu.bearing'),
              url: '/product/1'
            },
            {
              title: this.$t('menu.belt'),
              url: '/product/2'
            },
            {
              title: this.$t('menu.adhesive'),
              url: '/product/3'
            },
            {
              title: this.$t('menu.rubber'),
              url: '/product/4'
            },
            {
              title: this.$t('menu.industrial'),
              url: '/product/5'
            },
            {
              title: this.$t('menu.engineering'),
              url: '/product/6'
            },
          ],
        },
        {
          title: this.$t('menu.applications'),
          url: '/product2/1',
          data: [
            {
              title: this.$t('menu.applications'),
              url: '/product2/1'
            },
          ],
        },
        {
          title: this.$t('menu.distribution'),
          data: [
            {
              title: this.$t('menu.productDistribution'),
              url: '/product3/1'
            },
            {
              title: this.$t('menu.certificateOfAuthorization'),
              url: '/product3/2'
            },
          ]
        },
        {
          title: this.$t('menu.hazardous'),
          data: [
            {
              title: this.$t('menu.hazardousChemical'),
              url: '/product4/1'
            },
            {
              title: this.$t('menu.supplyChainService'),
              url: '/product4/2'
            },
          ]
        },
        {
          title: this.$t('menu.download'),
          url: '/product5/1',
          data: [
            {
              title: this.$t('menu.download'),
              url: '/product5/1'
            },
          ]
        },
      ]
    }
  },
  methods: {
    ...mapMutations(['setCurrentIndex', 'setCurrentIndexFooter', 'setCurrentChildIndex']),
    handleChange(lang) {
      if(lang === 'zh') {
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale')
        this.isShowLang = false
      }else if(lang === 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale')
        this.isShowLang = true
      }
    },
    handleRouteTitleLink(length, url, index) {
      if (this.$route.path !== url && length === 1) {
        this.setCurrentIndex(index)
        this.setCurrentIndexFooter(-1)
        scrollTo(0,0)
        this.$router.push({path: url})
      }
    },
    handleRouteLink(url, index, childIndex) {
      if (this.$route.path !== url) {
        this.setCurrentIndex(index)
        this.setCurrentChildIndex(childIndex)
        this.setCurrentIndexFooter(-1)
        scrollTo(0,0)
        this.$router.push({path: url})
      }
    },
    handleClearStatus() {
      this.setCurrentIndex(-1)
    },
    handleGoHome() {
      if (this.$route.path !== '/') {
        this.handleClearStatus()
        this.setCurrentIndexFooter(-1)
        scrollTo(0,0)
        this.$router.push({name: 'Home'})
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.app-header {
  width: 100%;
  .app-header-content {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    .app-header-content-contanier {
      display: flex;
      align-items: flex-end;
    }
    .app-header-logo {
      width: 200px;
      height: 41px;
      margin-right: 3vw;
      cursor: pointer;
    }
    .app-header-tabs {
      display: flex;
      margin-bottom: -10px;
      .app-header-tabs-item {
        position: relative;
        margin-left: 3.2vw;
        .app-header-tabs-item-content {
          position: absolute;
          left: 0;
          top: 40px;
          min-width: 200px;
          border-bottom: 1px solid #333;
          .app-header-tabs-item-content-item {
            padding: 10px 20px;
            border-top: 1px solid #333;
            font-size: 16px;
            cursor: pointer;
            color: #333;
            background: #fff;
          }
          .app-header-tabs-item-content-item-selected {
            color: #DB2C15;
          }
          .app-header-tabs-item-content-item:hover {
            color: #DB2C15;
          }
        }
        .app-header-tabs-item-index {
          cursor: pointer;
          font-size: 18px;
          padding: 10px 0;
        }
        .app-header-tabs-item-index-active {
          color: #DB2C15;
        }
      }
      .app-header-lang {
        margin-left: 3.8vw;
        display: flex;
        align-items: center;
        img {
          width: 65px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
