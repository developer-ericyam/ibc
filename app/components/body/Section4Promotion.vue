<template>
  <div class="appDown">
    <div class="titleCell mt-10">
      <h2>Promotion</h2>
    </div>

    <div class="promos">
      <ul>
        <li>
          <a href="#"><img src="~/assets/images/promotion/UDST1000.jpg" /></a>
        </li>
        <li><img src="~/assets/images/promotion/Design_1000x200.jpg" /></li>
        <li><img src="~/assets/images/promotion/Refer Friends 1000.jpg" /></li>
        <li><img src="~/assets/images/promotion/Levelling Programme.jpg" /></li>
      </ul>
      <div class="button-more">
        <NuxtLinkLocale to="/promotion">View More</NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.promos ul {
  padding: 0;
  text-align: center;
  margin-top: 26px;
  li {
    width: 49%;
    display: inline-block;
    padding: 13px 3px;
    border-radius: 50px;
    img {
      border-radius: 16px;
    }
  }
}

.button-more {
  text-align: center;
  background: url(~/assets/images/games/primary-medium-new-selected.png);
  background-size: cover;
  width: 14%;
  margin: 0 auto;
  min-height: 62px;
  padding: 10px;
  font-size: 15px;
  text-transform: uppercase;
  color: #636363;
}
</style>
