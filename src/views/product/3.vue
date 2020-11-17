<template>
  <div class='product3'>
    <img src="../../assets/images/product3/banner.jpg" alt="" class="product3-banner">
    <div class="product3-content">
      <div class="product3-content1">
        <div class="product3-content1-left">
          <div class="product3-content1-left-title">化学粘合和密封</div>
          <div class="product3-content1-left-text">睿服提供全系列的汉高乐泰(Loctite)、Epple粘合密封胶、Technicoll粘合剂、Wacker瓦克硅橡胶、Sika密封胶、OKS润滑剂、Tesa胶带等高质量的德系解决方案。</div>
        </div>
        <div class="product1-content-right">
          <div class="product1-content-right-title">下载产品手册</div>
          <div class="product1-content-right-download">
            <img src="../../assets/images/product1/download.png" alt="">
            <div class="product1-content-right-download-text">
              <a href="" download="化学粘合和密封.pdf">化学粘合和密封</a>
            </div>
          </div>
        </div>
      </div>
      <div class="product3-content2">
        <div class="product3-content2-left">
          <div class="product3-content2-left-top" :class="{'product3-content2-left-top-active': content1}" @mouseover="handleHoverContent('content1')" @mouseout="handleOutContent('content1')">
            <div class="product3-content2-left-top-title">汉高德国最大的工业经销商之一<br>中国区授权经销商</div>
            <div class="product3-content2-left-top-content">汉高乐泰是全球粘合剂、密封剂和功能涂层材料领域的重要供应商。睿服同时拥有德国汉高和中国汉高的官方授权，是汉高通用工业重要的合作伙伴。睿服为中国客户提供全系列的汉高产品和更优化的供货渠道。</div>
          </div>
          <div class="product3-content2-left-bottom" :class="{'product3-content2-left-top-active': content3}" @mouseover="handleHoverContent('content3')" @mouseout="handleOutContent('content3')">
            <div class="product3-content2-left-top-title">Technicoll中国区总代理</div>
            <div class="product3-content2-left-top-content">Technicoll 系列粘和剂在塑料、金属、发泡材料、纺织物、皮革、橡胶、陶瓷和绝缘等材料的大面积粘接上有着广泛的应用。</div>
          </div>
        </div>
        <div class="product3-content2-middle">
          <div class="product3-content2-left-top" :class="{'product3-content2-left-top-active': content2}" @mouseover="handleHoverContent('content2')" @mouseout="handleOutContent('content2')">
            <div class="product3-content2-left-top-title">Wacker德国区授权经销商<br>中国区项目授权</div>
            <div class="product3-content2-left-top-content">瓦克公司的有机硅系列产品以其多样化及卓越性能享誉整个行业，在汽车电子、消费电子、通讯和半导体行业中有着广泛应用。</div>
          </div>
          <div class="product3-content2-left-bottom" :class="{'product3-content2-left-top-active': content4}" @mouseover="handleHoverContent('content4')" @mouseout="handleOutContent('content4')">
            <div class="product3-content2-left-top-title">Epple中国区总代理</div>
            <div class="product3-content2-left-top-content">Epple产品耐酸碱等化学侵蚀性，同时具有高耐热性，可承受高达800℃的温度。Epple密封胶可在不同温度和化学腐蚀条件下实现可靠的密封效果。Epple的全系列产品都不含硅，在喷涂、化工和汽车等领域应用广泛。</div>
          </div>
        </div>
        <div class="product3-content2-right">
          <img src="../../assets/images/product3/logo-3.png" alt="">
        </div>
      </div>
      <div class="product3-content3">
        <div class="product3-content2-title-box">
          <div class="product3-content2-title">厌氧胶</div>
          <div class="product3-content2-sub-title">厌氧胶是单组份胶水，在不接触氧气的条件下可以在室温环境硬化。</div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">螺纹锁固</div>
              <div class="product3-content3-example-text-box-text">
                螺纹锁固胶水是传统机械式锁固的替代方案，效果更好也更容易拆卸，常见的螺栓松动、螺纹锁死和腐蚀等现象都可以有效防止，从而显著提高效率和降低维护成本。通过这种方式还可以更好地保持预紧力，防止由于振动和碰撞造成的松动。和传统方式比较胶水有更好的渗透力和间隙填充，锁固效果更持久，更有效地防止腐蚀。
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product1')" @mouseout="handleOutImage('product1')">
            <img src="../../assets/images/product3/001.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 221 低强度螺纹锁固胶</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product1">适用于大多数金属表面，低强度、易拆卸。触变性粘度。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product2')" @mouseout="handleOutImage('product2')">
            <img src="../../assets/images/product3/002.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 243 中等强度螺纹锁固胶</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product2">可以应用在包括惰性金属的所有金属基材上，耐少量工业油污，适用于震动部件的防松脱，可使用手工工具进行拆卸。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">固持胶</div>
              <div class="product3-content3-example-text-box-text">
                固持类胶水用于精密组件的安装，例如轴承、轴套和花键在外壳或轴上的装配。具备最大程度转移载荷的能力，并且能使之均匀分散，有效地避免摩擦腐蚀。胶水在液体状态时施工，粘接表面100%均匀涂抹，固持胶充分填充零部件之间的间隙后固化成型。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product3')" @mouseout="handleOutImage('product3')">
            <img src="../../assets/images/product3/003.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 603高强度固持胶</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product3">使用在例如锥形工件的装配中，或者滑动轴承等表面不光滑部件的安装，对粘接表面无法完全去除的油脂有很好的溶油能力。可以在10分钟内初固，能够耐受金属装配作业中出现微振磨损以及腐蚀现象。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product4')" @mouseout="handleOutImage('product4')">
            <img src="../../assets/images/product3/004.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 641 高强度固持胶</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product4">固持强度可控，适用于圆柱形部件的可拆卸作业，建议用于间隙小于0.2mm的作业。能在20分钟内初固。</div>
          </div>
        </div>
      </div>
      <div class="product3-content3">
        <div class="product3-content2-title-box">
          <div class="product3-content2-title">结构粘接</div>
          <div class="product3-content2-sub-title">多用于工程结构件的粘接，能在额定时间内承受许多应力作用而不被破坏。主要用于受力结构件的粘接，能够承受较大的载荷，在常温以上的工作温度下仍有较好的机械强度，具有耐化学品和耐其他介质、耐老化等特性。</div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">氰基丙烯酸酯（瞬干胶）</div>
              <div class="product3-content3-example-text-box-text">
                可以在粘接材料表面非常快的固化。基材表面的湿气可以引发胶水的固化反应，反应会从基材表面向胶水中间进行。瞬干胶被广泛用于有快速固定要求的小部件粘接。由于它的间隙填充能力有限，所以在粘接过程中需要与被粘接表面紧密配合。对于绝大数基材瞬干胶都有非常好的粘接力，在剪切强度和拉伸强度上都有非常优异的表现。
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product5')" @mouseout="handleOutImage('product5')">
            <img src="../../assets/images/product3/005.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 401 通用性胶水</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product5">适用于酸性表面，例如铬或电镀处理表面。也适用于多孔基材，例如木材、纸张、皮革、软木以及织物。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product6')" @mouseout="handleOutImage('product6')">
            <img src="../../assets/images/product3/006.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple-Bond 8212 非溶剂型瞬干胶</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product6">用于金属、塑料、橡胶或其他弹性体的粘接，性能稳定。低粘度。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">丙烯酸脂</div>
              <div class="product3-content3-example-text-box-text">
                丙烯酸脂类胶水主要应用于高负载下的环境，替代传统的机械式连接方式。工件通过丙烯酸脂粘合后拥有更高的强度、抗剪切刚性和整体坚固性。</div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product7')" @mouseout="handleOutImage('product7')">
            <img src="../../assets/images/product3/003.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">SikaFast®-5215 NT</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product7">双组份丙烯酸快速固化结构胶可粘接玻璃、玻纤、木材、铝板、钢铁、塑料材料，例如修整后的PU表面、光亮油漆面、蜂窝板等。快干，粘结力超强，可代替焊接和铆接。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product8')" @mouseout="handleOutImage('product8')">
            <img src="../../assets/images/product3/008.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite AA 3038</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product8">适用于粘接表面光滑、附着力小的材料，例如PP或者PE类的聚烯烃化合物。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">环氧树脂</div>
              <div class="product3-content3-example-text-box-text">
                环氧树脂类胶水主要应用于高负载下的环境，替代传统的机械式连接方式。工件通过环氧树脂粘合后拥有更高的强度、抗剪切刚性和整体坚固性。通常使用在例如空间发射、汽车等对产品性能要求更好的行业。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product9')" @mouseout="handleOutImage('product9')">
            <img src="../../assets/images/product3/009.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite E-20HP</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product9">是一种中等粘度的环氧树脂胶水，在室温下固化后形成坚韧的胶层，具有优异的机械性能，并有很好的绝缘性。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product10')" @mouseout="handleOutImage('product10')">
            <img src="../../assets/images/product3/010.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite E-120</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product10">是一种拥有极长操作时间的双组份环氧树脂，在室温下固化形成坚韧的胶层，具有优异的机械性能和抵抗环境腐蚀的性能，能够牢固地粘接多种基材。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">溶剂型胶水</div>
              <div class="product3-content3-example-text-box-text">
                溶剂型胶水采用涂刷或者抹刀作业，在需粘接的两个接触面涂抹好胶水，等待溶剂挥发后开始操作。两个接触面粘合后就具有了很好的初始粘度，不可以再对粘接进行修正。需等待一段时间以便溶剂彻底挥发。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product11')" @mouseout="handleOutImage('product11')">
            <img src="../../assets/images/product3/011.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">TEROSON 2444</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product11">以聚氯丁烯为基础的溶剂型粘合剂，产品具有良好的初始强度和很高的最终强度。粘接效果为柔性粘接，同时具有防水性和耐热性。适用于整车厂的玻璃粘接、密封、隔音防震等。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product12')" @mouseout="handleOutImage('product12')">
            <img src="../../assets/images/product3/010.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">technicoll® 8055</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product12">快速起效的溶剂型胶水，初始粘性很高，有很好的附着性, 效果持久。同时具有防水性和耐热性。</div>
          </div>
        </div>
      </div>
      <div class="product3-content3">
        <div class="product3-content2-title-box">
          <div class="product3-content2-title">弹性粘接</div>
          <div class="product3-content2-sub-title">弹性胶粘剂主要用来吸收或者补偿动态载荷。胶水具有很高的本体强度（内聚力）和相对较高的模量，固化后在拥有弹性性能的同时，又具有较高的连接强度。</div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">硅胶</div>
              <div class="product3-content3-example-text-box-text">
                硅胶通过空气中的水分子(单组份)，或与其他成分混合(双组分)后在温度的作用下形成橡胶状的高性能弹性体，从而灵活的实现粘接或者密封的效果。
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product13')" @mouseout="handleOutImage('product13')">
            <img src="../../assets/images/product3/013.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Wacker E43</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product13">单组份，常温24小时完全固化。具有良好的耐温性和优质的密封粘接性能。对许多材质都不需底涂剂，尤其适合硅橡胶与硅橡胶制品间的相互粘接。同时该产品具有绝缘性、抗辐射性以及化学稳定性能，E43N符合美国FDA食品标注，而且环保。广泛应用于电子、橡胶制品、生物、医疗和食品加工领域。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product14')" @mouseout="handleOutImage('product14')">
            <img src="../../assets/images/product3/006.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">TEROSON® SI 33</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product14">无溶剂单组份硅胶密封完全固化后无臭、耐光，并具有良好的粘合性能和良好的耐化学性。应用于金属、铝材、硬质PVC、陶瓷或玻璃的粘接和密封。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">聚氨酯</div>
              <div class="product3-content3-example-text-box-text">
                聚氨酯胶相比传统的单组份胶水性能上更加出色。它通过与空气中的水分子作用硬化成具有弹性的材料。根据配方的不同聚氨酯硬度可以从软到硬灵活调节来满足不同的应用场景。高粘接强度，灵活适用各种缝隙、涂抹面积，优秀的耐腐蚀性。</div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product15')" @mouseout="handleOutImage('product15')">
            <img src="../../assets/images/product3/003.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Sikaflex 252</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product15">适合于高负载部位的结构性粘接，包括木材、金属、尤其是铝(包括阳极氧化的部分) 、钢板(包括磷化过、镀铬和镀锌的部件) 、金属底漆和漆面(双组份) 、陶瓷材料及塑料。表面可喷漆，具有良好的填缝性能。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product16')" @mouseout="handleOutImage('product16')">
            <img src="../../assets/images/product3/008.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">TEROSON PU 92</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product16">对涂漆表面、许多金属和塑料有良好的附着力，无需底涂，可以直接涂漆，即使在尚未固化时。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">MS聚合物</div>
              <div class="product3-content3-example-text-box-text">
                以MS聚合物为基础成分的单组份产品，通过吸收空气中的水分子硬化成高性能的弹性体。成分中自带催化剂，不需底涂，适用于绝大多数基材。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product17')" @mouseout="handleOutImage('product17')">
            <img src="../../assets/images/product3/009.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">TEROSON MS 939 单组份胶合剂</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product17">用于弹性密封，固化后形成一种耐UV的热固性弹性体。 它抗流挂，初粘性强，无腐蚀性，不含溶剂、异氰酸酯、硅酮和聚氯乙烯。使用 LOCTITE MS 9371B 可加快固化速度。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product18')" @mouseout="handleOutImage('product18')">
            <img src="../../assets/images/product3/010.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">UHU POLY MAX EXPRESS</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product18">多用途高性能密封材料适用于绝大部分材料和各种应用场景。始终保持弹性，粘接后可对施工位置进行修正。100%防水。可用于室外环境。无收缩，可用于缝隙处。不含溶剂。抗真菌。固化后表面可涂漆。</div>
          </div>
        </div>
      </div>
      <div class="product3-content3">
        <div class="product3-content2-title-box">
          <div class="product3-content2-title">密封材料</div>
          <div class="product3-content2-sub-title">密封材料作用于不同基面之间，例如平面间、轴间、螺纹间或缝隙间。本身可以是膏状、也可以是液体状，有些在工件上完成施工后仍会保持原来的液体状态，有些在需要在固化后才能起到密封作用。</div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">平面密封</div>
              <div class="product3-content3-example-text-box-text">
                平面密封胶应用于例如法兰面的密封。可以持续地保护被密封区域，有效阻止液体或者气体的进入，并且不受设备工作环境例如温度和压力变化的影响。
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product19')" @mouseout="handleOutImage('product19')">
            <img src="../../assets/images/product3/005.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple 22</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product19">单组份含溶剂的聚合物特别适用于对密封的强度和附着能力要求很高的环境。胶水本身粘度很低，在狭窄的缝隙间可以顺利进入，起到出色的密封效果。溶剂挥发后可形成坚固的密封膜，效果持久。耐温范围</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product20')" @mouseout="handleOutImage('product20')">
            <img src="../../assets/images/product3/006.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple 33 单组份含溶剂的聚合物</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product20">适用于各种苛刻的使用环境。固化后形成高弹性的密封膜，可以密封工件间很宽的缝隙。最高耐温到320°C。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">螺纹密封</div>
              <div class="product3-content3-example-text-box-text">
                螺纹密封作用于螺纹间的空间，防止由于气体或液体侵入造成的腐蚀。螺纹密封两侧经常会存在压力差，完全固化后的密封可以承受住管道极限的爆破压力。</div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product21')" @mouseout="handleOutImage('product21')">
            <img src="../../assets/images/product3/003.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">Loctite 511</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product21">单组分、低强度、具有快速固化性能的触变性厌氧型密封胶。在隔绝空气的情况下，乐泰511平面密封胶可在金属表面间快速固化。用于密封金属螺纹配件。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product22')" @mouseout="handleOutImage('product22')">
            <img src="../../assets/images/product3/008.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple 37 单组份含溶剂的聚合物</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product22">对金属材料和塑料材料有很高的粘接强度。在超过120°C时仍具有良好弹性，超过400°C逐渐开始硬化。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">弹性和塑料密封胶</div>
              <div class="product3-content3-example-text-box-text">
                接缝部位的密封需要出色的弹性和耐温，特别是当整个工件遇到大范围的温度变化、碰撞和振动时。在受力时密封胶都会发生形变，如果对形变比较敏感，塑料密封胶是很更好的选择。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product23')" @mouseout="handleOutImage('product23')">
            <img src="../../assets/images/product3/009.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple stucarit 309</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product23">始终保持膏体状态，不会形成固化膜。使用stucarit 309后安装和拆卸都非常轻松。特别适用于精密组件或者复杂形状的工件，例如30-80微米的间隙。膏状的stucarit 309可以在需要密封的表面均匀分布，提高复杂组件的安装效率，不需过度计算预紧力和安装扭力。 </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product24')" @mouseout="handleOutImage('product24')">
            <img src="../../assets/images/product3/010.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">epple 28</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product24">特别添加塑料成分的含溶剂的聚合物密封胶，很好地解决了由于振动或温度变化引起密封胶膨胀。不含硅。有弹性。固化后可以拆卸。耐矿物油。</div>
          </div>
        </div>
      </div>
      <div class="product3-content3">
        <div class="product3-content2-title-box">
          <div class="product3-content2-title">润滑</div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">润滑油</div>
              <div class="product3-content3-example-text-box-text">
                油有很好的导热性，同时还具有出色的流动性和渗透性，因此在高温环境或者高转速环境下是非常好的选择。常见的应用场景例如动在力总成、链条、轴承、液压或者压缩机中。
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product25')" @mouseout="handleOutImage('product25')">
            <img src="../../assets/images/product3/005.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 3570 </div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product25">一种专门为食品技术中的高温用途所研发的链条润滑剂。适用于包装和食品加工行业的喷漆、烘干和干燥设备的输送系统。在高达 250°C 的使用温度下不会形成硬质残留物。粘附能力强，无滴落倾向，耐水和水蒸汽，对酸性介质呈惰性，不含固体润滑剂，适用于自动润滑系统。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product26')" @mouseout="handleOutImage('product26')">
            <img src="../../assets/images/product3/006.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 8601 生物多功能润滑油</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product26">对暴露在外的链条和机器部件进行润滑，也可用于高温环境。拥有良好的润滑特性和渗透性能，可生物降解、在高达 160℃ 条件下使用，不含硅。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">润滑脂</div>
              <div class="product3-content3-example-text-box-text">
                润滑脂是在基础油里面添加增稠剂调配出来的，在待润滑部位更好的附着性，可以持续起到润滑作用，同时还可以防止外界的湿气、杂质进入。通常使用在轴承、旋转体、阀门、导轨、链条等位置。</div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product27')" @mouseout="handleOutImage('product27')">
            <img src="../../assets/images/product3/003.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 480</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product27">用于食品技术设备的防水高压润滑脂，例如设备中的高负荷滚动和滑动轴承。 出色的耐热水和冷水、消毒剂和清洁剂。 具有出色的防腐蚀性。 耐高温且具有氧化稳定性。</div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product28')" @mouseout="handleOutImage('product28')">
            <img src="../../assets/images/product3/008.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 1110 </div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product28">适用于冷热水、暖气阀门和管道的密封和润滑，亦可用于汽车的冷却系统，O型圈、油封的装配，能兼容各类塑料和橡胶。可用作阻力油，提供缓冲、锁紧、微调、抗磨、润滑等功能，具有良好的防水性能。 长效润滑和密封作用，不干固、不硬化、不渗出。使用温度范围广，能与塑料、橡胶等兼容。</div>
          </div>
        </div>
        <div class="product3-content3-example">
          <div class="product3-content3-example-text">
            <div class="product3-content3-example-text-box">
              <div class="product3-content3-example-text-title">润滑膏</div>
              <div class="product3-content3-example-text-box-text">
                润滑膏和润滑脂基础成分类似，但是固装物的比例更高，具备更好的润滑、密封和防腐蚀性能，适用于极端的温度、压力变化或者强腐蚀介质环境。 
              </div>
            </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product29')" @mouseout="handleOutImage('product29')">
            <img src="../../assets/images/product3/009.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 250 高温润滑膏</div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product29">始终保持膏体状态，不会形成固化膜。使用stucarit 309后安装和拆卸都非常轻松。特别适用于精密组件或者复杂形状的工件，例如30-80微米的间隙。膏状的stucarit 309可以在需要密封的表面均匀分布，提高复杂组件的安装效率，不需过度计算预紧力和安装扭力。 </div>
          </div>
          <div class="product3-content3-example-middle" @mouseover="handleHoverImage('product30')" @mouseout="handleOutImage('product30')">
            <img src="../../assets/images/product3/010.png" alt="">
            <div class="product3-content3-example-middle-text"><div class="product3-content3-example-middle-text-box">OKS 240 铜基高温螺钉油膏 </div></div>
            <div class="product3-content3-example-middle-text-hover" v-show="product30">用于装配承受高温和腐蚀性影响的螺栓连接、管道接头、法兰接头和配件螺纹接头。即使在高使用温度和环境温度下运行长时间后，仍可进行可靠的、无破坏性的拆卸，提供螺栓预应力与拧紧力矩的最佳比例，导电。</div>
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
      product1: false,
      product2: false,
      product3: false,
      product4: false,
      product5: false,
      product6: false,
      product7: false,
      product8: false,
      product9: false,
      product10: false,
      product11: false,
      product12: false,
      product13: false,
      product14: false,
      product15: false,
      product16: false,
      product17: false,
      product18: false,
      product19: false,
      product20: false,
      product21: false,
      product22: false,
      product23: false,
      product24: false,
      product25: false,
      product26: false,
      product27: false,
      product28: false,
      product29: false,
      product30: false,
      content1: false,
      content2: false,
      content3: false,
      content4: false,
    };
  },
  created() {},
  components: {},
  methods: {
    handleHoverImage(param) {
      this[param] = true
    },
    handleOutImage(param) {
      this[param] = false
    },
    handleHoverContent(param) {
      this[param] = true
    },
    handleOutContent(param) {
      this[param] = false
    },
  },
  mounted() {},
};
</script>

<style scoped lang='scss'>
.product3 {
  width: 100%;
  .product3-banner {
    width: 100%;
  }
  .product3-content {
    padding: 0 15%;
  }
  .product3-content1 {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    .product3-content1-left {
      margin-right: 13%;
      width: 42.3vw;
      .product3-content1-left-title {
        font-size: 32px;
        color: #000;
        font-weight: bold;
      }
      .product3-content1-left-text {
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
  .product3-content2 {
    display: flex;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 70px;
    .product3-content2-left, .product3-content2-middle {
      width: calc(40% - 20px);
      margin-right: 20px;
      .product3-content2-left-top, .product3-content2-left-bottom {
        background: #F6F6F6;
        margin-bottom: 20px;
        padding: 2.1vw;
        .product3-content2-left-top-title {
          color: #000;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 13.5px;
          line-height: 36px;
        }
        .product3-content2-left-top-content {
          color: #000;
          font-size: 16px;
          line-height: 26px;
        }
      }
      .product3-content2-left-top-active {
        background: #DB2C15;
        .product3-content2-left-top-title {
          color: #fff;
        }
        .product3-content2-left-top-content {
          color: #fff;
        }
      }
    }
    .product3-content2-right {
      width: 30%;
      img {
        width: 100%;
      }
    }
  }
  .product3-content3 {
    border: 1px solid #E3E3E3;
    width: calc(100% - 2px);
    margin-bottom: 70px;
    .product3-content2-title-box {
      padding: 40px 40px 20px 40px;
      .product3-content2-title {
        font-size: 32px;
        color: #DB2C15;
        margin-bottom: 15px;
      }
      .product3-content2-sub-title {
        color: #000;
        font-size: 16px;
      }
    }
    .product3-content3-example {
      display: flex;
      width: 100%;
      padding: 20px 0;
      background: #E3E3E3;
      margin-top: 20px;
      .product3-content3-example-text {
        padding: 0 30px 0 40px;
        display: flex;
        align-items: center;
        width: calc(60% - 120px);
        .product3-content3-example-text-box {
          .product3-content3-example-text-title {
            font-size: 20px;
            color: #000;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .product3-content3-example-text-box-text {
            font-size: 16px;
            color: #000;
            line-height: 26px;
          }
        }
      }
      .product3-content3-example-middle {
        display: flex;
        flex-direction: column;
        width: 15%;
        margin-right: 20px;
        justify-content: center;
        position: relative;
        img {
          width: 100%;
          background: #fff;
        }
        .product3-content3-example-middle-text {
          width: calc(100% - 40px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #DB2C15;
          color: #fff;
          font-size: 14px;
          padding: 9px 20px;
          .product3-content3-example-middle-text-box {
            height: 38px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .product3-content3-example-middle-text-hover {
          position: absolute;
          left: 0;
          bottom: 0;
          background: rgba(0,0,0,0.70);
          padding: 14px 12px;
          color: #fff;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>

