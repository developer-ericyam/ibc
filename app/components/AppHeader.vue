<template>
  <AppMenuNew />
</template>

<script setup lang="ts">
const { setLocale } = useI18n();

function onLangClickHandler(lang: "en" | "cn" | "id") {
  setLocale(lang);
}
</script>

<style scoped lang="scss">
.top {
  background: #d1ae8e;
  color: #404654;

  .topBox {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    height: 22px;
    line-height: 18px;
    position: relative;
    z-index: 1;

    div {
      font-size: 11px;
    }

    .yuyan {
      display: inline-block;
      vertical-align: top;
      width: 20px;
      height: 14px;
      cursor: pointer;
      margin: 4px 2px;

      &.lang-en {
        background-image: url("~/assets/images/lang_en.png");
      }

      &.lang-cn {
        background-image: url("~/assets/images/lang_cn.png");
      }

      &.lang-my {
        background-image: url("~/assets/images/lang_my.png");
      }
    }
  }
}
</style>
