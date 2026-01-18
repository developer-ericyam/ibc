<template>
  <div class="carousel relative -mt-16">
    <UCarousel v-slot="{ item }" :items="items" class="w-full" autoplay>
      <img :src="item" width="100%" height="auto" />
    </UCarousel>
    <div class="bannerAction">
      <a href="/en/registration/748534">REGISTER NOW</a>
      <p>
        Kasino Playtech, Kasino Leocity88, Kasino Oldtown, Kasino NewTown Kasino
        12win, Kasino XPG, Kasino Touch2Bet, Kasino 998, Kasino 855, Kasino
        Crown, Casino M88, Kasino W88
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  "/images/banners/banner1.jpg",
  "/images/banners/banner2.jpg",
  "/images/banners/banner3.jpg",
  "/images/banners/banner4.jpg",
  "/images/banners/banner5.jpg",
  "/images/banners/banner6.webp",
  "/images/banners/banner7.jpg",
  "/images/banners/banner8.jpg",
  "/images/banners/banner9.jpg",
  "/images/banners/banner10.jpg",
  "/images/banners/banner11.jpg",
  "/images/banners/banner12.webp",
  "/images/banners/banner13.jpg",
  "/images/banners/banner14.jpg",
  "/images/banners/banner15.jpg",
];
</script>

<style scoped lang="scss">
.carousel {
  &:after {
    content: "";
    background-color: #fff;
    border-top: 2px solid #888;
    position: absolute;
    width: 125vw;
    height: 15vw;
    bottom: -21%;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50% 55% 0% 0% / 100% 100% 0% 0%;
    z-index: 0;
    margin-left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    pointer-events: none;
  }
}

.bannerAction {
  z-index: 1;
  position: absolute;
  top: calc(84% - 55px);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    width: 192px;
    height: 54px;
    line-height: 52px;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
    color: #fff;
    font-size: 19px;
    background: linear-gradient(
      0deg,
      rgba(23, 80, 120, 1) 0%,
      rgba(22, 170, 255, 1) 100%
    );
    border-radius: 18px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    transition: all 0.2s ease;
    display: block;
    animation-name: uw88_grow;
    animation-duration: 3000ms;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  p {
    width: 50%;
    text-align: center;
  }
}

@keyframes uw88_grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
