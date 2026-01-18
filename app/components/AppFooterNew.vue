<template>
  <div id="divFooter-container" class="footer-conatiner">
    <div class="footer-wrapper">
      <div class="footer-logo footer-logo-top gdlive333">
        <img src="~/assets/images/logo-white.png" style="height: 50px" />
      </div>
      <div class="footer-content">
        <div class="w90">
          <div class="footer-partner-logo">
            <FooterCarousel />
          </div>
          <div class="footer-copyright">
            Copyright © 2014-2024 | IBC003 | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// var swiperFooterLogo = new Swiper("#partnerLogo .swiper-container", {
//   slidesPerView: 8,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 6,
//     },
//     767: {
//       slidesPerView: 4,
//     },
//   },
// });
</script>

<style scoped lang="scss">
.footer-wrapper {
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    .footer-logo-top {
      padding: 10vw 0 2vw;
    }
  }
  .footer-logo-top {
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 75px 0 50px;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  @media screen and (max-width: 1023px) {
    .footer-logo-top:after {
      left: -20%;
      right: -20%;
    }
  }
  .footer-logo-top:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: -100%;
    left: -10%;
    right: -10%;
    margin: auto;
    z-index: -1;
    pointer-events: none;
    border-radius: 50% 50% 0% 0% / 100% 100% 0% 0%;
    background: #175078;
  }

  @media screen and (max-width: 1023px) {
    .footer-content {
      padding-bottom: 100px;
    }
  }
  .footer-content {
    position: relative;
    z-index: 2;
    overflow: hidden;

    .footer-copyright {
      text-align: center;
      padding: 20px 0;
      border-top: 1px solid #eee;
      color: #eee;
    }
  }

  @media screen and (max-width: 1023px) {
    .footer-content:after {
      left: -20%;
      right: -20%;
    }
  }
  .footer-content:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10%;
    right: -10%;
    margin: auto;
    z-index: -1;
    pointer-events: none;
    background: #175078;
  }

  .footer-partner-logo {
    padding: 20px 0;
  }
}

.w90 {
  max-width: 1920px;
  width: 90%;
  margin: 0 auto;
}
</style>
