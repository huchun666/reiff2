<template>
  <div class="download">
    <img src="../../assets/images/download/banner.jpg" alt="" class="download-banner">
    <div class="download-content">
      <div class="download-title">资料下载</div>
      <div class="download-sub-title">公司介绍</div>
      <ul>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">睿服中国宣传手册</div>
        </li>
      </ul>
      <div class="download-sub-title">睿服产品手册</div>
      <ul>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">01 产品手册_轴承和导轨</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">02 产品手册_轴承工具和维护化学品</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">03 产品手册_齿形带</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">04 产品手册_三角带</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">05 产品手册_化学粘合和密封</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">06 产品手册_密封圈和轴封</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">07 产品手册_液压气动密封</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">08 产品手册_边缘保护</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">09 产品手册_减震和缓冲</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">10 产品手册_隔音和绝缘材料</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">11 产品手册_工程塑料 </div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">12 产品手册_输送软管</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">13 产品手册_液压软管</div>
        </li>
      </ul>
      <div class="download-sub-title">Epple资料下载</div>
      <ul>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">01 Epple密封产品</div>
        </li>
        <li>
          <img src="../../assets/images/product2/location.png" alt="" />
          <div class="download-content2-box-text">02 Epple_粘合产品</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped lang='scss'>
.download {
  width: 100%;
  .download-banner {
    width: 100%;
  }
  .download-content {
    padding: 0 18.6%;
  }
  ul {
    margin-bottom: 50px;
    li {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      img {
        height: 16px;
        margin-right: 10px;
      }
      .download-content2-box-text {
        font-size: 20px;
        color: #828282;
      }
    }
  }
  .download-title {
    font-size: 32px;
    color: #3a3a3a;
    font-weight: bold;
    margin: 70px 0 50px;
  }
  .download-sub-title {
    margin-bottom: 23px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
}
</style>

