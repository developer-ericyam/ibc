<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-1/8' }"
    loop
    align="start"
    class="carousel relative"
    :autoplay="{ delay: 2000 }"
  >
    <img :src="item" height="auto" />
  </UCarousel>
</template>

<script setup lang="ts">
const items = [
  "/images/logos/logo-wm.png",
  "/images/logos/logo-ace333.png",
  "/images/logos/logo-ia.png",
  "/images/logos/logo-allBet.png",
  "/images/logos/logo-asiaGaming.png",
  "/images/logos/logo-betsoft.png",
  "/images/logos/logo-bgGaming.png",
  "/images/logos/logo-cq9.png",
  "/images/logos/logo-dreamgaming.png",
  "/images/logos/logo-dreamTech.png",
];
</script>
