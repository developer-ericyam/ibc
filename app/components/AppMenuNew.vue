<template>
  <div>
    <AppBar />
    <div id="divHeader-menu">
      <div id="cssmenunew">
        <ul>
          <li :class="{ active: route.path === localePath('/') }">
            <NuxtLinkLocale to="/">{{ t("pageHome") }}</NuxtLinkLocale>
          </li>
          <li :class="{ active: route.path === localePath('/casino') }">
            <NuxtLinkLocale to="/casino">{{ t("pageCasino") }}</NuxtLinkLocale>
          </li>
          <li
            :class="{
              active: route.path === localePath('/sport-betting-malaysia'),
            }"
          >
            <NuxtLinkLocale to="/sport-betting-malaysia">
              {{ t("pageSports") }}
            </NuxtLinkLocale>
          </li>
          <li :class="{ active: route.path === localePath('/poker') }">
            <NuxtLinkLocale to="/poker">{{ t("pagePoker") }}</NuxtLinkLocale>
          </li>
          <li :class="{ active: route.path === localePath('/ilottery') }">
            <NuxtLinkLocale to="/ilottery">
              {{ t("pageLottery") }}
            </NuxtLinkLocale>
          </li>
          <li
            :class="{
              active: route.path === localePath('/slot-games-machines-free'),
            }"
          >
            <NuxtLinkLocale to="/slot-games-machines-free">
              {{ t("pageSlot") }}
            </NuxtLinkLocale>
          </li>
          <li :class="{ active: route.path === localePath('/promotion') }">
            <NuxtLinkLocale to="/promotion">
              {{ t("pagePromotion") }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale
              to="https://uw99ranking.com/jackpot/jackpot.aspx"
              target="_blank"
            >
              {{ t("pageJackpot") }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale
              :to="`https://uw99my.com/${locale}/vip`"
              target="_blank"
            >
              {{ t("pageVIP") }}
            </NuxtLinkLocale>
          </li>
          <li>
            <NuxtLinkLocale
              to="https://uw99my.com/index.php?view=prod&sort=DATE&lang=en&p=1"
              target="_blank"
            >
              {{ t("pageRedeem") }}
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
</script>

<style scoped lang="scss">
#divHeader-menu {
  #cssmenunew {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99;
    margin-top: -2.5vw;
    padding-top: 2.5vw;
    width: auto;
    line-height: 1;
    font-family: "Open Sans", sans-serif;
    list-style: none;
    border: 0px currentColor;
    border-image: none;
    display: block;
    position: relative;

    ul {
      position: static;
      text-align: center;
      font-size: 0px;
      padding: 0;
      display: table;
      margin: 0 auto;
      list-style: none;
      border: 0px currentColor;
      border-image: none;
      line-height: 1;
      -webkit-box-sizing: border-box;

      li {
        display: inline-block;
        float: none;
        position: relative;
        padding: 0;
        list-style: none;
        margin: 0px;
        border: 0px currentColor;
        border-image: none;
        line-height: 1;

        a {
          border-image: none;
          font-size: 14px;
          padding: 15px 20px 12px;
          padding-left: 12px;
          padding-right: 12px;
          text-transform: capitalize;
          border: 0;
          text-align: center;
          font-weight: 600;
          color: #fff;
          line-height: 1;
          display: block;
          position: relative;
          list-style: none;
          margin: 0px;
        }

        &:hover > a,
        &.active > a {
          transform: translateY(-5px);
          &::after {
            display: block;
          }
        }

        a::after {
          content: "";
          position: absolute;
          display: none;
          top: auto;
          bottom: 0px;
          left: 15px;
          right: 15px;
          width: auto;
          height: 2px;
          margin: auto;
          border-radius: 2px;
          background-color: #16aaff;
          -webkit-transform: none;
          transform: none;
          border: 0;
        }
      }
    }
  }
}
</style>
