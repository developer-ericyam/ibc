<template>
  <UDrawer
    direction="left"
    title=" "
    description=" "
    :handle="false"
    :ui="{
      content: 'w-full max-w-full',
    }"
    v-model:open="open"
  >
    <slot />
    <template #content>
      <div class="popup-container" bis_skin_checked="1">
        <div class="btn-close-popup" bis_skin_checked="1" @click="open = false">
          <div bis_skin_checked="1"><span></span><span></span></div>
        </div>
        <div class="popup-wrapper" bis_skin_checked="1">
          <div class="popup-content" bis_skin_checked="1">
            <div class="slideNav-header" bis_skin_checked="1">
              <div class="slideNav-top" bis_skin_checked="1">
                <div class="slideNav-logo" bis_skin_checked="1">
                  <NuxtLinkLocale to="home">
                    <img src="~/assets/images/logo-white.png" />
                  </NuxtLinkLocale>
                </div>
                <div class="slideNav-social" bis_skin_checked="1">
                  <a
                    href="https://www.youtube.com/channel/UCLE_vp2_WlGk7zcnplMcQvg"
                    target="_blank"
                    ><img src="~/assets/images/social/icn-youtube.png"
                  /></a>
                  <a
                    href="https://www.instagram.com/ibc.003_official/"
                    target="_blank"
                    ><img src="~/assets/images/social/icn-ig.png"
                  /></a>
                  <a
                    href="https://www.facebook.com/Ibc003-Asia-105154011858910"
                    target="_blank"
                    ><img src="~/assets/images/social/icn-fb.png"
                  /></a>
                  <a href="" target="_blank"
                    ><img src="~/assets/images/social/icn-twitter.png"
                  /></a>
                </div>
                <div
                  id="btnLanguage"
                  class="slideNav-language"
                  data-popup-open="popupLanguage"
                  bis_skin_checked="1"
                >
                  <div bis_skin_checked="1">
                    <img src="~/assets/images/icn-flag-uk.jpg" />
                  </div>
                </div>
              </div>
              <div class="slideNav-loginRegister" bis_skin_checked="1">
                <div
                  id="slideNav-btnLogin"
                  class="btn-login btn-slideNav-login btn-slideNav-LR"
                  data-popup-open="popupLogin"
                  bis_skin_checked="1"
                >
                  LOGIN
                </div>
                <div
                  id="slideNav-btnRegister"
                  class="btn-login btn-slideNav-register btn-slideNav-LR"
                  bis_skin_checked="1"
                >
                  <a href="/en/registration/748534"> REGISTER </a>
                </div>
              </div>
            </div>

            <div class="slideNav-content" bis_skin_checked="1">
              <ul id="cloneCSS" class="slideNav-ul">
                <li>
                  <NuxtLinkLocale to="/casino">{{
                    t("pageCasino")
                  }}</NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/sport-betting-malaysia">
                    {{ t("pageSports") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/poker">{{
                    t("pagePoker")
                  }}</NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/ilottery">
                    {{ t("pageLottery") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/slot-games-machines-free">
                    {{ t("pageSlot") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale to="/promotion">
                    {{ t("pagePromotion") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/hall_of_ranking`"
                    target="_blank"
                  >
                    {{ t("pageRanking") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/affiliate`"
                    target="_blank"
                  >
                    {{ t("pageAffiliate") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/vip`"
                    target="_blank"
                  >
                    {{ t("pageVIP") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/verify`"
                    target="_blank"
                  >
                    {{ t("pageKYC") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/how-to-help`"
                    target="_blank"
                  >
                    {{ t("pageHelp") }}
                  </NuxtLinkLocale>
                </li>
                <li>
                  <NuxtLinkLocale
                    :to="`https://ibc003mys.com/${locale}/challenge`"
                    target="_blank"
                  >
                    {{ t("pageChallenge") }}
                  </NuxtLinkLocale>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const open = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
</script>

<style scoped lang="scss">
.popup-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  position: relative;

  .slideNav-header {
    position: relative;
    overflow: hidden;
    z-index: 2;
    background: #175078;

    &:after {
      content: "";
      background-color: #fff;
      position: absolute;
      bottom: -30px;
      left: 0;
      right: 0;
      margin: auto;
      margin-left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 125%;
      height: 50%;
      z-index: -1;
      pointer-events: none;
      border-radius: 50% 50% 0% 0% / 100% 100% 0% 0%;
    }

    .slideNav-logo {
      padding-top: 10px;
      padding-bottom: 15px;
      padding-left: 50px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);

      img {
        max-height: 50px;
        height: 15vw;
        padding: 3px;
      }
    }

    .slideNav-social {
      text-align: right;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;

      @media screen and (min-width: 400px) {
        position: absolute;
        top: 12px;
        right: 50px;
      }
    }

    .slideNav-language {
      position: absolute;
      top: 15px;
      right: 0px;
      z-index: 3;
      text-align: center;
      font-size: 12px;
      padding: 0 10px;
      color: #312000;
      cursor: pointer;
    }
  }
}

#btnLanguage {
  img {
    border-radius: 100px;
  }
}

// btn-login & register
.slideNav-loginRegister {
  display: flex;
  max-width: 80%;
  margin: auto;
  .btn-login {
    text-align: center;
    padding: 15px;
    cursor: pointer;
    color: #85d2ff;
    font-size: 14px;
    font-weight: 600;
  }

  .btn-slideNav-LR {
    padding: 15px 0;
    font-size: 22px;
    width: 60%;
    margin: 20px 4px;
    border-radius: 1vw;
    -webkit-transition: 0.2s -webkit-transform;
    transition: 0.2s -webkit-transform;
    transition: 0.2s transform;
    transition:
      0.2s transform,
      0.2s -webkit-transform;
  }

  .btn-slideNav-login {
    background-color: #16aaff;
    color: #fff;
  }

  .btn-slideNav-register {
    background: #fff;
    font-weight: 600;
    background: rgb(23, 80, 120);
    background: -moz-linear-gradient(
      0deg,
      rgba(23, 80, 120, 1) 00%,
      rgba(22, 170, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(23, 80, 120, 1) 00%,
      rgba(22, 170, 255, 1) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(23, 80, 120, 1) 00%,
      rgba(22, 170, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#175078",endColorstr="#16aaff",GradientType=1);
    > a {
      color: #fff;
    }
  }
}

// btn-close
.slide-nav .btn-close-popup {
  right: auto;
  left: 10px;
  z-index: 3;
  > div {
    border-color: transparent;
    background-color: transparent;
  }
}

.btn-close-popup {
  position: absolute;
  top: 15px;
  left: 10px;
  cursor: pointer;
  z-index: 9;

  > div {
    padding: 16px 8px;
    border-radius: 50%;
    border: 1px solid #175087;
  }

  span {
    background-color: #fff;
    width: 25px;
    height: 4px;
    border-radius: 2px;
    display: block;
    transform: translateY(1px) rotate(45deg);
    &:nth-child(2) {
      -webkit-transform: translateY(-3px) rotate(-45deg);
      transform: translateY(-3px) rotate(-45deg);
    }
  }
}

// anchor tag
.slideNav-content ul {
  margin: auto;
  width: 80%;
  > li {
    float: none;
    width: 100%;
    display: block;
    text-align: left;
    margin-top: 5px;
    padding: 0 15px;
    text-transform: capitalize;
    border-bottom: 1px solid #ededed;
    > a {
      font-size: 16px;
      display: block;
      padding: 15px 20px 10px 30px;
      color: #888;
      transition:
        color 0.2s,
        border 0.2s;
    }
  }
}
</style>
