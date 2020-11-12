<template>
  <div class='app-header'>
    <div class="app-header-fill"></div>
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
              <div class="app-header-tabs-item-content-item" v-for="(childItem, childIndex) in item.data" :key="childIndex" @click="handleRouteLink(childItem.url, index)">
                {{childItem.title}}
              </div>
            </div>
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
      headerData: [
        {
          title: '产品一览',
          data: [
            {
              title: '滚动轴承和直线技术',
              url: '/product/1'
            },
            {
              title: '带传动',
              url: '/product/2'
            },
            {
              title: '化学粘合',
              url: '/product/3'
            },
            {
              title: '橡胶密封合减震',
              url: '/product/4'
            },
            {
              title: '工业软管',
              url: '/product/5'
            },
            {
              title: '工程塑料',
              url: '/product/6'
            },
          ],
        },
        {
          title: '应用行业',
          url: '/product2/1',
          data: [
            {
              title: '应用行业',
              url: '/product2/1'
            },
          ],
        },
        {
          title: '代理和授权',
          data: [
            {
              title: '品牌代理',
              url: '/product3/1'
            },
            {
              title: '授权证书',
              url: '/product3/2'
            },
          ]
        },
        {
          title: '危险化学品业务和供应链服务',
          data: [
            {
              title: '危险化学品业务',
              url: '/product4/1'
            },
            {
              title: '供应链服务',
              url: '/product4/2'
            },
          ]
        },
        {
          title: '资料下载',
          url: '/product5/1',
          data: [
            {
              title: '资料下载',
              url: '/product5/1'
            },
          ]
        },
      ],
      hoverIndex: -1,
      hoverChildIndex: -1,
    };
  },
  computed: {
    ...mapState(['currentIndex'])
  },
  methods: {
    ...mapMutations(['setCurrentIndex', 'setCurrentIndexFooter']),
    handleRouteTitleLink(length, url, index) {
      if (this.$route.path !== url && length === 1) {
        this.setCurrentIndex(index)
        this.setCurrentIndexFooter(-1)
        scrollTo(0,0)
        this.$router.push({path: url})
      }
    },
    handleRouteLink(url, index) {
      if (this.$route.path !== url) {
        this.setCurrentIndex(index)
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
  .app-header-fill {
    width: 100%;
    height: 160px;
  }
  .app-header-content {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
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
      margin-right: 8.8vw;
      cursor: pointer;
    }
    .app-header-tabs {
      display: flex;
      margin-bottom: -10px;
      .app-header-tabs-item {
        position: relative;
        margin-left: 3.9vw;
        .app-header-tabs-item-content {
          position: absolute;
          left: 0;
          top: 42px;
          min-width: 200px;
          border-bottom: 1px solid #333;
          .app-header-tabs-item-content-item {
            padding: 10px 20px;
            border-top: 1px solid #333;
            font-size: 16px;
            cursor: pointer;
            color: #3a3a3a;
            background: #fff;
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
    }
  }
}
</style>
