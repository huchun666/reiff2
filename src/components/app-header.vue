<template>
  <div class="app-header">
    <div class="app-header-content">
      <div class="app-header-content-contanier">
        <img
          src="../assets/images/header/breco_logo.jpg"
          alt=""
          class="app-header-breco-logo"
          @click="handleGoHome"
        />
        <img
          src="../assets/images/header/logo.png"
          alt=""
          class="app-header-logo"
          @click="handleGoHome"
        />
        <div class="app-header-tabs">
          <div
            class="app-header-tabs-item"
            v-for="(item, index) in headerData"
            :key="index"
            @mouseover="hoverIndex = index"
            @mouseout="hoverIndex = -1"
          >
            <div
              class="app-header-tabs-item-index"
              :class="{
                'app-header-tabs-item-index-active':
                  hoverIndex === index || currentIndex === index,
              }"
              @click="handleRouteTitleLink(item.data.length, item.url, index)"
            >
              {{ item.title }}
            </div>
            <div
              class="app-header-tabs-item-content"
              v-show="hoverIndex === index && item.data.length > 1"
            >
              <div
                class="app-header-tabs-item-content-item"
                v-for="(childItem, childIndex) in item.data"
                :key="childIndex"
                @click="handleRouteLink(childItem.url, index, childIndex)"
                :class="{
                  'app-header-tabs-item-content-item-selected':
                    currentChildIndex === childIndex && currentIndex === index,
                }"
              >
                {{ childItem.title }}
              </div>
            </div>
          </div>
          <div
            class="app-header-tabs-item app-header-lang"
            @click="handleLinkToOffical"
          >
            <img src="../assets/images/header/icon-logo.png" alt="" />
            <span class="app-header-lang__text">睿服官网</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      hoverIndex: -1,
      hoverChildIndex: -1,
      isShowLang: false,
    };
  },
  computed: {
    ...mapState(["currentIndex", "currentChildIndex"]),
    headerData() {
      return [
        {
          title: this.$t("footer.aboutUs"),
          url: "/history",
          data: [
            {
              title: this.$t("footer.aboutUs"),
              url: "/history",
            },
          ],
        },
        {
          title: this.$t("menu.applications"),
          url: "/product2/1",
          data: [
            {
              title: this.$t("menu.applications"),
              url: "/product2/1",
            },
          ],
        },
        {
          title: this.$t("menu.certificateOfAuthorization"),
          url: "/product3/2",
          data: [
            {
              title: this.$t("menu.certificateOfAuthorization"),
              url: "/product3/2",
            },
          ],
        },
        {
          title: this.$t("menu.download"),
          url: "/product5/1",
          data: [
            {
              title: this.$t("menu.download"),
              url: "/product5/1",
            },
          ],
        },
      ];
    },
  },
  methods: {
    ...mapMutations([
      "setCurrentIndex",
      "setCurrentIndexFooter",
      "setCurrentChildIndex",
    ]),
    handleLinkToOffical() {
      window.open('http://www.reiff-tp.cn', '_blank');
    },
    handleChange(lang) {
      if (lang === "zh") {
        localStorage.setItem("locale", "zh");
        this.$i18n.locale = localStorage.getItem("locale");
        this.isShowLang = false;
      } else if (lang === "en") {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = localStorage.getItem("locale");
        this.isShowLang = true;
      }
    },
    handleRouteTitleLink(length, url, index) {
      if (this.$route.path !== url && length === 1) {
        this.setCurrentIndex(index);
        this.setCurrentIndexFooter(-1);
        scrollTo(0, 0);
        this.$router.push({ path: url });
      }
    },
    handleRouteLink(url, index, childIndex) {
      if (this.$route.path !== url) {
        this.setCurrentIndex(index);
        this.setCurrentChildIndex(childIndex);
        this.setCurrentIndexFooter(-1);
        scrollTo(0, 0);
        this.$router.push({ path: url });
      }
    },
    handleClearStatus() {
      this.setCurrentIndex(-1);
    },
    handleGoHome() {
      if (this.$route.path !== "/") {
        this.handleClearStatus();
        this.setCurrentIndexFooter(-1);
        scrollTo(0, 0);
        this.$router.push({ name: "Home" });
      }
    },
  },
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
    .app-header-breco-logo {
      width: 160px;
      margin-bottom: -10px;
      margin-right: 25px;
    }
    .app-header-logo {
      width: 200px;
      height: 41px;
      margin-right: 10vw;
      cursor: pointer;
    }
    .app-header-tabs {
      display: flex;
      margin-bottom: -10px;
      align-items: center;
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
            color: #db2c15;
          }
          .app-header-tabs-item-content-item:hover {
            color: #db2c15;
          }
        }
        .app-header-tabs-item-index {
          cursor: pointer;
          font-size: 18px;
          padding: 10px 0;
        }
        .app-header-tabs-item-index-active {
          color: #db2c15;
        }
      }
      .app-header-lang {
        margin-left: 3.8vw;
        display: flex;
        align-items: center;
        border: 0.5px solid rgba(151,151,151,1);
        border-radius: 11px;
        padding: 0 10px;
        height: 22px;
        cursor: pointer;
        img {
          width: 12px;
        }
        &__text {
          font-size: 14px;
          color: #484b52;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
