<template>
  <div class="product4">
    <img
      src="../../assets/images/product4/banner.jpg"
      alt=""
      class="product4-banner"
    />
    <div class="product4-content">
      <div class="product4-content1">
        <div class="product4-content1-left">
          <div class="product4-content1-left-title">
            {{ $t('Rubber.Rubber') }}
          </div>
          <div class="product4-content1-left-text">
            {{ $t('Rubber.REIFFOffers') }}
          </div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">{{ $t('Rubber.ProductCatalog') }}</div>
          <div class="product1-content-right-box">
            <div class="product1-content-right-download">
              <img src="../../assets/images/product1/download.png" alt="" />
              <div class="product1-content-right-download-text">
                <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.4/产品手册_密封圈和轴封.pdf" target="_blank" download="密封圈和抽封.pdf">{{ $t('Rubber.SealingRing') }}</a>
              </div>
            </div>
            <div class="product1-content-right-download">
              <img src="../../assets/images/product1/download.png" alt="" />
              <div class="product1-content-right-download-text">
                <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.4/产品手册_边缘保护.pdf" target="_blank" download="边缘保护.pdf">{{ $t('Rubber.EdgeProtection') }}</a>
              </div>
            </div>
          </div>
          <div class="product1-content-right-box">
            <div class="product1-content-right-download">
              <img src="../../assets/images/product1/download.png" alt="" />
              <div class="product1-content-right-download-text">
                <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.4/产品手册_液压气动密封.pdf" target="_blank" download="液压气动密封.pdf">{{ $t('Rubber.Hydraulic') }}</a>
              </div>
            </div>
            <div class="product1-content-right-download">
              <img src="../../assets/images/product1/download.png" alt="" />
              <div class="product1-content-right-download-text">
                <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.4/产品手册_隔音和绝缘材料.pdf" target="_blank" download="隔音和绝缘材料.pdf">{{ $t('Rubber.NoiseProtection') }}</a>
              </div>
            </div>
          </div>
          <div class="product1-content-right-box">
            <div class="product1-content-right-download">
              <img src="../../assets/images/product1/download.png" alt="" />
              <div class="product1-content-right-download-text">
                <a href="http://www.reiff-tp.cn/download/产品一览&资料下载/1.4/产品手册_减震和缓冲.pdf" target="_blank" download="减震和缓冲.pdf">{{ $t('Rubber.Vibration') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="getStatus" class="product4-content2">
        <div class="product4-content2-title">常用橡胶材料一览</div>
        <table cellpadding="0" pixels="0">
          <tr>
            <td>材料名称</td>
            <td>丁腈橡胶</td>
            <td>氟橡胶</td>
            <td>三元乙丙橡胶</td>
            <td>硅胶</td>
            <td>氢化丁腈橡胶</td>
            <td>全氟橡胶</td>
            <td>全氟乙丙烯</td>
            <td>聚四氟乙烯</td>
            <td>聚氨酯</td>
            <td>氯丁橡胶</td>
            <td>氟硅橡胶</td>
          </tr>
          <tr>
            <td>英文缩写</td>
            <td>NBR</td>
            <td>FPM</td>
            <td>EPDM</td>
            <td>MVQ (SI)</td>
            <td>HNBR</td>
            <td>FFKM</td>
            <td>FEP</td>
            <td>PTFE</td>
            <td>PU</td>
            <td>CR</td>
            <td>MFQ</td>
          </tr>
          <tr>
            <td>肖氏硬度</td>
            <td>50-90</td>
            <td>50</td>
            <td>50-90</td>
            <td>90</td>
            <td>70-90</td>
            <td>65-90</td>
            <td>85-95</td>
            <td>95</td>
            <td>65-95</td>
            <td>50-90</td>
            <td>40-60</td>
          </tr>
          <tr>
            <td>耐磨性</td>
            <td>好</td>
            <td>好</td>
            <td>良</td>
            <td>良</td>
            <td>好</td>
            <td>好</td>
            <td>良</td>
            <td>低</td>
            <td>极好</td>
            <td>好</td>
            <td>良</td>
          </tr>
          <tr>
            <td>抗压缩变形</td>
            <td>好</td>
            <td>很好</td>
            <td>好</td>
            <td>好</td>
            <td>中</td>
            <td>很好</td>
            <td>好</td>
            <td>低</td>
            <td>良</td>
            <td>好</td>
            <td>好</td>
          </tr>
          <tr>
            <td>耐磨性</td>
            <td>好</td>
            <td>好</td>
            <td>良</td>
            <td>良</td>
            <td>好</td>
            <td>好</td>
            <td>良</td>
            <td>低</td>
            <td>极好</td>
            <td>好</td>
            <td>良</td>
          </tr>
          <tr>
            <td>抗风化</td>
            <td>良</td>
            <td>优</td>
            <td>优</td>
            <td>很好</td>
            <td>好</td>
            <td>优</td>
            <td>优</td>
            <td>优</td>
            <td>很好</td>
            <td>很好</td>
            <td>很好</td>
          </tr>
          <tr>
            <td>抗臭氧性</td>
            <td>低</td>
            <td>优</td>
            <td>优</td>
            <td>优</td>
            <td>好</td>
            <td>优</td>
            <td>优</td>
            <td>优</td>
            <td>很好</td>
            <td>很好</td>
            <td>优</td>
          </tr>
          <tr>
            <td>耐矿物油脂</td>
            <td>优</td>
            <td>优</td>
            <td>不适宜</td>
            <td>好</td>
            <td>好</td>
            <td>优</td>
            <td>优</td>
            <td>优</td>
            <td>很好</td>
            <td>好</td>
            <td>很好</td>
          </tr>
          <tr>
            <td>燃油稳定性</td>
            <td>好</td>
            <td>优</td>
            <td>不适宜</td>
            <td>低</td>
            <td>良</td>
            <td>优</td>
            <td>优</td>
            <td>优</td>
            <td>好</td>
            <td>低</td>
            <td>好</td>
          </tr>
          <tr>
            <td>耐溶剂性</td>
            <td>一般</td>
            <td>很好</td>
            <td>低-良</td>
            <td>良-好</td>
            <td>一般</td>
            <td>很好</td>
            <td>很好</td>
            <td>很好</td>
            <td>良</td>
            <td>一定程度上</td>
            <td>良-好</td>
          </tr>
          <tr>
            <td>一般耐酸性</td>
            <td>良</td>
            <td>很好</td>
            <td>好</td>
            <td>良</td>
            <td>好</td>
            <td>很好</td>
            <td>很好</td>
            <td>很好</td>
            <td>低</td>
            <td>好</td>
            <td>良</td>
          </tr>
          <tr>
            <td>耐温</td>
            <td>–30 至 +100</td>
            <td>–20 至+200</td>
            <td>–40 至+130</td>
            <td>-55 至+200</td>
            <td>–30 至 +140</td>
            <td>–25 至 +325</td>
            <td>–60 至 +200</td>
            <td>–200 至 +260</td>
            <td>–25 至 +100</td>
            <td>–20 至 +150</td>
            <td>–60 至+250</td>
          </tr>
          <tr>
            <td>耐蒸汽性</td>
            <td>好</td>
            <td>好</td>
            <td>很好</td>
            <td>好</td>
            <td>好</td>
            <td>很好</td>
            <td>好</td>
            <td>很好</td>
            <td>不适宜</td>
            <td>好</td>
            <td>140°C 饱和蒸汽</td>
          </tr>
        </table>
      </div>
      <div class="product4-content3">
        <div class="product4-content3-left">
          <div class="product4-content3-left-title">
            {{ $t('Rubber.ManyFactors') }}
          </div>
          <div class="product4-content3-left-content">
            {{ $t('Rubber.distributors') }}<br>
            {{ $t('Rubber.distributors2') }}
          </div>
        </div>
        <div class="product4-content3-right">
          <img src="../../assets/images/product4/001.png" alt="">
        </div>
      </div>
      <div class="product4-content4">
        <div class="product4-content4-title">
          {{ $t('Rubber.Rubberprofiles') }}
        </div>
        <div class="product4-content4-text">
          {{ $t('Rubber.highQuality') }}
        </div>
        <div class="product4-content4-img-container">
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/01.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.conservatories') }}</div>
              <div class="product4-content4-img-text-content">EPDM</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/02.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.RoomDoors') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.PlasticProfiles') }}、TPE、EPDM</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/03.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.InteriorExtensions') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.PlasticProfiles') }}、TPE、EPDM</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/04.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.Bodies') }}</div>
              <div class="product4-content4-img-text-content">EPDM、{{ $t('Rubber.PlasticProfiles') }}</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/05.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.Engine') }}</div>
              <div class="product4-content4-img-text-content">EPDM、TPE</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/06.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.Renewable') }}</div>
              <div class="product4-content4-img-text-content">EPDM、NBR</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/07.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.Equipment') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.PlasticProfiles') }}、FPM</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/08.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.Machinery') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.PlasticProfiles') }}、TPE、EPDM、NBR</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/09.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.ElectronicEquipment') }}</div>
              <div class="product4-content4-img-text-content">EPDM</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/10.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.MedicalEquipment') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.Silicon') }}、{{ $t('Rubber.PlasticProfiles') }}</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/11.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.FoodEquipment') }}</div>
              <div class="product4-content4-img-text-content">{{ $t('Rubber.Silicon') }}</div>
            </div>
          </div>
          <div class="product4-content4-img-box">
            <img src="../../assets/images/product4/12.jpg" alt="">
            <div class="product4-content4-img-text">
              <div class="product4-content4-img-text-title">{{ $t('Rubber.PipeSealing') }}</div>
              <div class="product4-content4-img-text-content">EPDM、CR</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getStatus() {
      return this.$i18n.locale === 'zh'
    }
  },
};
</script>

<style scoped lang='scss'>
.product4-banner {
  width: 100%;
}
.product4-content {
  padding: 0 15%;
}
.product4-content1 {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  .product4-content1-left {
    margin-right: 13%;
    width: 35vw;
    .product4-content1-left-title {
      font-size: 32px;
      color: #000;
      font-weight: bold;
    }
    .product4-content1-left-text {
      font-size: 16px;
      color: #000;
      margin-top: 40px;
      line-height: 26px;
    }
  }
  .product1-content-right {
    .product1-content-right-title {
      font-size: 22px;
      color: #000;
      margin-bottom: 30px;
    }
    .product1-content-right-box {
      display: flex;
    }
    .product1-content-right-download {
      display: flex;
      align-items: center;
      margin-bottom: 32.5px;
      font-size: 16px;
      color: #000;
      cursor: pointer;
      img {
        width: 24.4px;
        margin-right: 5px;
      }
    }
    .product1-content-right-download:nth-child(2n) {
      margin-left: 50px;
    }
  }
}
table tr:nth-child(odd) {
  background-color:#f6f6f6;
}
table tr:nth-child(even) {
  background-color:#fff;
}
table tr:first-child {
  background: #FFEEEB;
}
td {
  border-left: 1px solid #E8E8E8;
  border-top: 1px solid #E8E8E8;
  height:40px;
  padding: 0 20px 0 10px;
  font-size: 14px;
}
table {
  border-right: 1px solid #E8E8E8;
  border-bottom: 1px solid #E8E8E8;
  border-collapse: collapse;
  margin-bottom: 70px;
}
.product4-content2-title {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 14px;
}
.product4-content3 {
  display: flex;
  width: 100%;
  margin-bottom: 70px;
  .product4-content3-left {
    background: #F6F6F6;
    padding: 40px;
    width: 45%;
    .product4-content3-left-title {
      font-size: 20px;
      color: #000;
      font-weight: bold;
      line-height: 36px;
      margin-bottom: 30px;
    }
    .product4-content3-left-content {
      font-size: 16px;
      color: #000;
      line-height: 26px;
    }
  }
  .product4-content3-right {
    width: 55%;
    img {
      width: 100%;
    }
  }
}
.product4-content4 {
  .product4-content4-title {
    margin-bottom: 40px;
    font-size: 32px;
    font-weight: bold;
    color: #000;
  }
  .product4-content4-text {
    font-size: 16px;
    color: #000;
    margin-bottom: 40px;
  }
  .product4-content4-img-container {
    display: flex;
    flex-wrap: wrap;
    .product4-content4-img-box {
      width: calc((100% - 30px) / 4);
      margin-right: 10px;
      margin-bottom: 70px;
      img {
        width: 100%;
      }
      .product4-content4-img-text {
        background: #DB2C15;
        color: #fff;
        padding: 10px 13px;
        margin-top: -5px;
        height: 55px;
        .product4-content4-img-text-title {
          font-size: 14px;
          margin-bottom: 4px;
          font-weight: bold;
        }
        .product4-content4-img-text-content {
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
    .product4-content4-img-box:nth-child(4n+4) {
      margin-right: 0;
    }
  }
}
</style>

