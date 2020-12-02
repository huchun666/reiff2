<template>
  <div class='product2'>
    <img src="../../assets/images/product2/banner.jpg" alt="" class="product2-banner">
    <div class="product2-content">
      <div class="product2-content1">
        <div class="product2-content1-left">
          <div class="product2-content1-left-title">欧洲一线品牌组成的传动带方案</div>
          <div class="product2-content1-left-text">我们是传动带的大型销售渠道、Mulco集团核心成员、欧皮特和马牌在德国最大的分销商之一。为客户提供综合的产品方案。</div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">下载产品手册</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="http://139.224.105.40/download/产品一览&资料下载/1.2/产品手册_齿形带.pdf" target="_blank" download="齿形带.pdf">齿形带</a>
            </div>
          </div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="http://139.224.105.40/download/产品一览&资料下载/1.2/产品手册_三角带.pdf" target="_blank" download="三角带.pdf">三角带</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content2">
        <div class="product2-content2-left">
          <p>Mulco集团Breco, Brecoflex, Contitech Sychroflex 聚氨酯齿形带</p>
          <p>马牌Contitech齿形带</p>
          <p>欧皮特Optibelt三角带</p>
          <p>马牌Contitech三角带</p>
          <p>Esband输送带、抽吸带和烟草行业特种皮带</p>
          <p>开天KTR联轴器</p>
          <p>Rexnord Tollok涨紧套</p>
        </div>
        <img src="../../assets/images/product2/logo-2.png" alt="">
      </div>
      <div class="product2-content3" id="maodian1">
        <img src="../../assets/images/product2/content1.jpg" alt="" class="product2-content3-img">
        <div class="product2-content3-text">
          <div class="product2-content3-text-title">德国Mulco集团</div>
          <div class="product2-content3-text-sub-title">Breco, Brecoflex, Contitech Synchroflex 品牌</div>
          <div class="product2-content3-text-main">
            Mulco集团在1951年由睿服等四家公司组建，现在拥有欧洲聚氨酯齿形带35%的市场份额和多项专利，多年来一直是聚氨酯齿形带技术的推动者。<br>
            无论是在汽车、精密机床还是食品制药等高端制造领域都可以看到大量Mulco产品的应用。在德国以外Mulco通过“Mulco业务伙伴”的形式在欧洲建立了广泛的销售渠道，在美国通过Brecoflex Co., L.L.C销售。
          </div>
          <div class="product2-content3-text-bottom">
            <div class="product2-content3-text-bottom1" @click="handleContactUs">
              <span>MULCO集团历史</span>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
            <div class="product2-content3-text-bottom1">
              <a href="http://www.mulco.de/en">Mulco集团官网</a>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
            <div class="product2-content3-text-bottom1">
              <a href="http://www.breco.de/en">Breco官网</a>
              <img src="../../assets/images/product2/location.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="product2-content3">
        <img src="../../assets/images/product1/shanghai.png" alt="" class="product2-content3-img">
        <div class="product2-content3-text">
          <div class="product2-content3-text-title">睿服上海</div>
          <div class="product2-content3-text-sub-title">Breco, Brecoflex和Synchroflex 中国官方销售渠道</div>
          <div class="product2-content3-text-main">
            睿服是Mulco集团的组建成员和核心成员，睿服上海公司是睿服集团在华的全资子公司，是Mulco集团在中国的唯一官方销售渠道。<br>
            睿服独自拥有超过2000件的齿形带和皮带模具库存。除了标准型号外，我们还可以根据客户需求提供定制、接驳和特殊涂层。
          </div>
        </div>
      </div>
      <div class="product2-content4">
        <div class="product2-content4-title">Breco 聚氨酯齿形带产品线</div>
        <ul class="product2-content4-ul">
          <li>
            <img src="../../assets/images/product2/001.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECOFLEX® 无缝带、BRECO® M 卷料</div>
                <div>BRECO® V 接驳带</div>
                <div>应用领域广泛的标准齿形带</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/002.png" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Basic</div>
                <div>适用于简单使用场景的低成本方案</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/003.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Protect</div>
                <div>为食品和制药行业开发的无菌齿形带</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/004.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® Move</div>
                <div>适用于高负载的提升装置或者输送应用</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/005.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® ATN</div>
                <div>可以灵活定制专属输送方案的各种ATN模块</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/006.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® 平带</div>
                <div>节约成本和安装空间，适用于各种紧凑设计</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/009.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® 带轮和其它附件</div>
                <div>进口带轮和中国产带轮</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/008.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® 深度定制</div>
                <div>定制齿背厚度、特殊形状、特殊涂层、打孔等专属方案</div>
              </div>
            </div>
          </li>
          <li>
            <img src="../../assets/images/product2/007.jpg" alt="">
            <div class="product2-content4-li-text">
              <div class="product2-content4-li-text-box">
                <div>BRECO® TSM</div>
                <div>张力测试仪</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="product2-content5">
        <div class="product2-content5-left" id="maodian2">
          <div class="product2-content5-left-title">康迪泰克传动带</div>
          <div class="product2-content5-left-content">
            康迪泰克隶属于马牌集团，是橡胶和塑料技术领域的领先专业供应商，为汽车等重要行业开发和生产传动产品，并侧重使用生态环保和资源节约的制造工艺。
          </div>
          <div class="product2-content5-left-content2">
            睿服是康迪泰克传动带在德国的重要合作伙伴，负责德国南方地区的销售；同时也拥有在中国的授权。
          </div>
          <div class="product2-content5-left-title">Contitech 齿形带型号列表</div>
          <div class="product2-content5-left-content3">
            <ul>
              <li>CONTI® SYNCHROBELT </li>
              <li>CONTI® SYNCHROFORCE CXP </li>
              <li>CONTI® SYNCHROFORCE CXA </li>
              <li>CONTI® SYNCHROFORCE CARBON </li>
              <li>CONTI® FALCON PD </li>
              <li>CONTI® SILENTSYNC </li>
              <li>CONTI® SYNCHROCHAIN </li>
              <li>CONTI® SYNCHROCHAIN CARBON </li>
              <li>CONTI® SYNCHROFLEX </li>
              <li>CONTI® SYNCHROFLEX GEN III </li>
            </ul>
            <ul>
              <li>CONTI® SYNCHROCOLOR </li>
              <li>CONTI® SYNCHRORIB </li>
              <li>CONTI® SYNCHROTWIN </li>
              <li>CONTI® SYNCHROTWIN CXP </li>
              <li>CONTI® SYNCHROLINE </li>
              <li>CONTI® POLYFLAT </li>
              <li>CONTI® SYNCHRODRIVE </li>
              <li>CONTI® SYNCHRODRIVE N10 </li>
              <li>CONTI® VSM_1 / VSM_3 张力仪 </li>
            </ul>
          </div>
        </div>
        <div class="product2-content5-right">
          <div class="product2-content5-right-title">下载产品资料</div>
          <div class="product2-content5-right-img-box">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product2-content5-right-img-text">
              <a href="http://139.224.105.40/download/产品一览&资料下载/1.2/1.2-康迪泰克传动带资料.pdf" target="_blank" download="康迪泰克齿形带.pdf">康迪泰克齿形带</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <history-alert @close="handleClose" v-if="contactUsStatus"></history-alert>
  </div>
</template>

<script>
import HistoryAlert from '../../components/history-alert'
export default {
  data() {
    return {
      contactUsStatus: false
    }
  },
  created() {

  },
  components: {
    HistoryAlert
  },
  methods: {
    handleClose() {
      this.contactUsStatus = false;
    },
    handleContactUs() {
      this.contactUsStatus = true;
    }
  },
  mounted() {
    let { fullPath } = this.$route;
    if (fullPath.indexOf('#') > -1) {
      let maodian = fullPath.split('#')[1]
      scrollTo(0, document.getElementById(maodian).offsetTop - 160)
    }
  }
}
</script>

<style scoped lang='scss'>
.product2 {
  width: 100%;
  .product2-banner {
    width: 100%;
  }
  .product2-content {
    padding: 0 15%;
    .product2-content1 {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      .product2-content1-left {
        margin-right: 13%;
        width: 42.3vw;
        .product2-content1-left-title {
          font-size: 32px;
          color: #000;
          font-weight: bold;
        }
        .product2-content1-left-text {
          font-size: 16px;
          color: #000;
          margin-top: 40px;
        }
      }
      .product1-content-right {
        .product1-content-right-title {
          font-size: 22px;
          color: #000;
          margin-bottom: 30px;
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
      }
    }
    .product2-content2 {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 38px 0 70px;
      .product2-content2-left {
        font-size: 16px;
        color: #000;
        font-weight: bold;
      }
      img {
        width: 27.6vw;
        margin-bottom: 40px;
      }
    }
    .product2-content3 {
      display: flex;
      margin-bottom: 70px;
      .product2-content3-text {
        padding-top: 10px;
      }
      .product2-content3-img {
        margin-right: 20px;
      }
      .product2-content3-text-title, .product2-content3-text-sub-title {
        font-size: 20px;
        color: #000;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .product2-content3-text-sub-title {
        font-size: 18px;
      }
      .product2-content3-text-main {
        color: #000;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .product2-content3-text-bottom {
        display: flex;
        .product2-content3-text-bottom1 {
          display: flex;
          align-items: center;
          font-size: 16px;
          margin-right: 3.8vw;
          a, span {
            margin-right: 8px;
            color: #000;
            cursor: pointer;
          }
          img {
            width: 13px;
            margin-bottom: -2px;
          }
        }
        .product2-content3-text-bottom1:last-child {
          margin-right: 0;
        }
      }
    }
    .product2-content4 {
      width: 100%;
      .product2-content4-title {
        font-size: 20px;
        color: #000;
        margin-bottom: 30px;
        font-weight: bold;
      }
      .product2-content4-ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        li {
          width: calc((100% - 40px) / 3);
          margin-right: 20px;
          margin-bottom: 20px;
          img {
            width: 100%;
          }
          .product2-content4-li-text {
            width: calc(100% - 40px);
            height: 88px;
            padding: 0 20px;
            background: #2A364F;
            color: #fff;
            font-size: 14px;
            display: flex;
            align-items: center;
            margin-top: -5px;
          }
        }
        li:nth-child(3n+3) {
          margin-right: 0;
       }
      }
    }
    .product2-content5 {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      .product2-content5-left {
        width: 43vw;
        .product2-content5-left-title {
          font-weight: bold;
          font-size: 20px;
          margin-bottom: 30px;
        }
        .product2-content5-left-content, .product2-content5-left-content2 {
          font-size: 16px;
          color: #000;
        }
        .product2-content5-left-content2 {
          margin-top: 20px;
          margin-bottom: 70px;
        }
        .product2-content5-left-content3 {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #000;
          line-height: 36px;
          margin-bottom: 70px;
        }
      }
      .product2-content5-right {
        .product2-content5-right-title {
          font-size: 22px;
          color: #000;
          font-weight: bold;
          margin-bottom: 32px;
        }
        .product2-content5-right-img-box {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
          .product2-content5-right-img-text {
            color: #000;
            font-size: 16px;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>

