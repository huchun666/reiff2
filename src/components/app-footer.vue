<template>
  <div class='app-footer'>
    <div class="app-footer-top">
      <div class="app-footer-top-left">
        <div class="app-footer-top-left-title">关于睿服集团</div>
        <ul class="app-footer-top-left-ul">
          <li>发展历史</li>
          <li>集团公司一览</li>
          <li>合作伙伴</li>
          <li>公司理念</li>
        </ul>
      </div>
      <div class="app-footer-top-left">
        <div class="app-footer-top-left-title">法务</div>
        <ul class="app-footer-top-left-ul">
          <li>版权信息</li>
          <li>一般业务条款</li>
          <li>数据保护声明</li>
        </ul>
      </div>
      <div class="app-footer-top-right">
        <div class="app-footer-top-right-title">联系我们</div>
        <ul class="app-footer-top-right-ul">
          <li>睿服工业零部件（上海）有限公司</li>
          <li>上海市闵行区都会路1835号6号楼B</li>
          <li>邮编：201108</li>
          <br>
          <li>电话：021 6220 7582 分机802</li>
          <li>传真：021 6220 7589</li>
          <li>邮箱：shanghai@reiff-tp.cn</li>
        </ul>
      </div>
    </div>
    <div class="app-footer-bottom">
      @2020 REIFF Technical Products Shanghai Co,. Ltd
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped lang='scss'>
.app-footer {
  background: #f6f6f6;
}
.app-footer-top {
  display: flex;
  padding: 80px 0 60px 18vw;
  .app-footer-top-left {
    margin-right: 9.4vw;
  }
  .app-footer-top-left-title, .app-footer-top-right-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;
  }
  .app-footer-top-left-ul {
    li {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
  .app-footer-top-right-ul {
    font-size: 16px;
    color: #888;
    li {
      margin-bottom: 5px;
    }
  }
}
.app-footer-bottom {
  border-top: 1px solid #828282;
  padding-left: 18vw;
  height: 77px;
  line-height: 77px;
  font-size: 16px;
  color: #888;
}
</style>