<template>
  <div class="idea">
    <img
      src="../assets/images/footer/13.jpg"
      alt=""
      class="idea-banner"
    />
    <div class="idea-content">
      <div class="idea-content1">
        <div class="idea-content1-title">{{ $t('CompanyPhilosophy.CompanyPhilosophy') }}</div>
        <div class="idea-content1-box">
          {{ $t('CompanyPhilosophy.PremiumService') }}<br /><br />
          {{ $t('CompanyPhilosophy.program') }}<br /><br />
          {{ $t('CompanyPhilosophy.With') }}<br /><br />
          {{ $t('CompanyPhilosophy.Group') }}
        </div>
      </div>
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
.idea {
  width: 100%;
  .idea-banner {
    width: 100%;
  }
  .idea-content {
    padding: 0 15%;
  }
  .idea-content1 {
    .idea-content1-title {
      font-size: 32px;
      color: #000;
      margin: 70px 0 40px;
      font-weight: bold;
    }
    .idea-content1-box {
      font-size: 16px;
      color: #000;
      line-height: 26px;
      margin-bottom: 70px;
    }
  }
}
</style>

