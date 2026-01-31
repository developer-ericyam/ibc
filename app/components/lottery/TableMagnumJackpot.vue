<template>
  <div>
    <div class="card">
      <LotteryTableHeader
        :id="data.category_id"
        :draw-date="data.date"
        :draw-no="drawNo"
      />

      <!-- Jackpot 1 -->
      <div class="lottery-prize-title">Jackpot 1</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[]" />
      <LotteryBlinkJackpot
        label="Prize:"
        :prize="data.first_jackpot_prize"
        :status="data.first_jackpot_status"
      />

      <!-- Jackpot 2 -->
      <div class="lottery-prize-title">Jackpot 2</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[6]" />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[1]" />
      <LotteryBlinkJackpot
        label="Prize:"
        :prize="data.second_jackpot_prize"
        :status="data.second_jackpot_status"
      />

      <!-- Jackpot 3 -->
      <div class="lottery-prize-title">Jackpot 3</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[8, 9]" />

      <!-- Jackpot 4 -->
      <div class="lottery-prize-title">Jackpot 4</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[6, 8, 9]" />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[1, 8, 9]" />

      <!-- Jackpot 5 -->
      <div class="lottery-prize-title">Jackpot 5</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[5, 6, 8, 9]" />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize :data="data" :emptyArray="[1, 2, 8, 9]" />

      <!-- Jackpot 6 -->
      <div class="lottery-prize-title">Jackpot 6</div>
      <LotteryTableMagnumJackpotPrize
        :data="data"
        :emptyArray="[4, 5, 6, 8, 9]"
      />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize
        :data="data"
        :emptyArray="[1, 2, 3, 8, 9]"
      />

      <!-- Jackpot 7 -->
      <div class="lottery-prize-title">Jackpot 7</div>
      <LotteryTableMagnumJackpotPrize
        :data="data"
        :emptyArray="[3, 4, 5, 6, 8, 9]"
      />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize
        :data="data"
        :emptyArray="[1, 2, 5, 6, 8, 9]"
      />
      <div class="text-or">Or</div>
      <LotteryTableMagnumJackpotPrize
        :data="data"
        :emptyArray="[1, 2, 3, 4, 8, 9]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableMagnumJackpot {
  data: any;
  drawNo: string;
}
const props = defineProps<ITableMagnumJackpot>();
</script>

<style scoped lang="scss">
.text-or {
  line-height: 27px;
  text-align: center;
}
</style>
