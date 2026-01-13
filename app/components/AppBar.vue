<template>
  <div id="divHeaderTop-bottom" class="headerTop-bottom">
    <div id="headerTop-left" class="headerTop-left">
      <div id="btnMenu" class="btn-menu" data-popup-open="slideNav">
        <div><span /><span /><span /></div>
      </div>
    </div>

    <div id="divHeaderTop-logo" class="headerTop-logo">
      <NuxtLinkLocale to="/">
        <img src="/assets/images/logo.png" />
      </NuxtLinkLocale>
    </div>
    <div id="divHeadertop-right" class="headerTop-right">
      <div
        id="btnLanguange-top"
        class="btn-language"
        data-popup-open="popupLanguage"
      >
        <img src="~/assets/images/icn-flag-uk.jpg" />
      </div>
      <UModal title=" " description=" ">
        <div
          id="btnLogin"
          class="btn-login"
          data-popup-open="popupLogin"
          @click="onClickLoginHandler"
        >
          <img src="~/assets/images/icn-userlogin_b3.png" />Login
        </div>

        <template #content>
          <LoginForm />
        </template>
      </UModal>
    </div>
  </div>
</template>

<script setup lang="ts">
function onClickLoginHandler() {
  console.log("123");
}
</script>

<style scoped lang="scss">
#divHeaderTop-bottom {
  display: table;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 100;
  z-index: 110;
  padding-bottom: 2.5vw;

  > div {
    display: table-cell;
    table-layout: fixed;
  }

  &.headerTop-bottom:after {
    content: "";
    background-color: #fff;
    border-bottom: 2px solid #000;
    position: absolute;
    width: auto;
    height: 90%;
    bottom: 0;
    left: -30%;
    right: -30%;
    margin: auto;
    pointer-events: none;
    z-index: -1;
    width: 100%;
    border-radius: 0% 0% 50% 50% / 0% 0% 25% 25%;
  }

  #headerTop-left {
    position: absolute;
    left: 0;
    .btn-menu {
      position: relative;
      > div {
        padding: 25px 15px;
        cursor: pointer;
      }

      span {
        width: 30px;
        height: 4px;
        display: block;
        margin: 4px 0;
        background-color: #16aaff;
        border-radius: 4px;
        -webkit-transition: -webkit-transform 0.3s linear;
        transition: -webkit-transform 0.3s linear;
        transition: transform 0.3s linear;
        transition: transform 0.3s linear, -webkit-transform 0.3s linear;

        &:nth-child(2) {
          width: 25px;
        }

        &:nth-child(3) {
          width: 20px;
        }
      }
    }
  }

  #divHeaderTop-logo {
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 10px 0;

    &.headerTop-logo {
      a {
        display: table;
        margin: auto;
        transform: scale(1.5);
        transform-origin: top center;
        img {
          max-height: 50px;
          height: 5vw;
          padding: 3px 0;
        }
      }
    }
  }

  #divHeadertop-right {
    position: absolute;
    right: 0;

    > div {
      display: inline-block;
    }

    #btnLanguange-top {
      color: #fff;
      text-align: center;
      padding: 0 10px;
      cursor: pointer;

      img {
        margin: 0px auto 5px;
        display: block;
        border-radius: 50%;
        border: 1px solid #444;
      }
    }

    .btn-login {
      user-select: none;
      text-align: center;
      padding: 15px;
      cursor: pointer;
      color: #85d2ff;
      font-size: 14px;
      font-weight: 600;

      img {
        margin: 0px auto;
        display: block;
        width: 35px;
        height: 35px;
      }
    }
  }
}
</style>
