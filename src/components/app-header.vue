<template>
  <div class='app-header'>
    <div class="app-header-fill"></div>
    <div class="app-header-content">
      <div class="app-header-content-contanier">
        <img src="../assets/images/header/logo.png" alt="" class="app-header-logo">
        <div class="app-header-tabs">
          <div class="app-header-tabs-item" v-for="(item, index) in headerData" :key="index"
            @mouseover="hoverIndex = index" 
            @mouseout="hoverIndex = -1">
            <div class="app-header-tabs-item-index"
              :class="{'app-header-tabs-item-index-active': hoverIndex === index}"
              >{{item.title}}</div>
            <div class="app-header-tabs-item-content"
              v-show="hoverIndex === index"
            >
              <div class="app-header-tabs-item-content-item" v-for="(childItem, childIndex) in item.data" :key="childIndex">
                {{childItem}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerData: [
        {
          title: '产品一览',
          data: [
            '滚动轴承和直线技术',
            '带传动',
            '化学粘合',
            '橡胶密封合减震',
            '工业软管',
            '工程塑料'
          ],
        },
        {
          title: '应用行业',
          data: [
            '应用行业'
          ],
        },
        {
          title: '代理和授权',
          data: [
            '品牌代理',
            '授权证书'
          ]
        },
        {
          title: '危险化学品业务和供应链服务',
          data: [
            '危险化学品业务',
            '供应链服务'
          ]
        },
        {
          title: '资料下载',
          data: [
            '资料下载'
          ]
        },
      ],
      hoverIndex: -1,
      hoverChildIndex: -1,
    };
  },
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
          min-width: 185px;
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
