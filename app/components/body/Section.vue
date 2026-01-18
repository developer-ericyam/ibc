<template>
  <div class="container">
    <BodySection1Notice />
    <BodySection2Sponsor />
    <!-- <BodySection3Game /> -->
    <BodySection4Promotion />
    <BodySection5Service />
    <BodySection6SEO />
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  z-index: 1;
  padding-top: 40px;

  &::before,
  &::after {
    display: table;
    content: " ";
  }

  &::after {
    clear: both;
  }
}
</style>
