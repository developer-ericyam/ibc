<template>
  <div>
    <div class="card">
      <LotteryTableHeader
        :id="data.category_id"
        :draw-date="data.date"
        :draw-no="drawNo"
      />
      <LotteryTablePrizeTop :data="data" />
      <LotteryTablePrize
        title="Special 特別獎"
        type="special"
        :data="specialNumbers"
      />
      <LotteryTablePrize
        title="Consolation 安慰獎"
        type="consolation"
        :data="consolationNumbers"
      />

      <!-- 3D -->
      <div class="lottery-prize-title">3D</div>
      <LotteryTablePrizeTop
        :data="data"
        first-prize-key="first_d3_prize"
        second-prize-key="second_d3_prize"
        third-prize-key="third_d3_prize"
      />

      <!-- Lotto 6/45 -->
      <div class="lottery-prize-title">Lotto 6/45</div>
      <div class="lottery-prize-wrapper grid grid-cols-8 gap-px text-center">
        <div v-for="i in 8" :key="i" class="prize" :class="{ plus: i === 7 }">
          {{ data[`lotto_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot 1</div>
        <LotteryBlinkJackpot :prize="data.lotto_first_jackpot_prize" />
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot 2</div>
        <LotteryBlinkJackpot :prize="data.lotto_second_jackpot_prize" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableSabah88Props {
  data: any;
  drawNo: string;
}
const props = defineProps<ITableSabah88Props>();

const specialNumbers = computed(() => {
  const numbers = Array.from({ length: 15 }).map((_, i) => {
    return {
      id: i + 1,
      position: i + 1,
      type: "special",
      number: props.data[`special_number_${i + 1}`],
    };
  });
  return { numbers };
});

const consolationNumbers = computed(() => {
  const numbers = Array.from({ length: 10 }).map((_, i) => {
    return {
      id: i + 1,
      position: i + 1,
      type: "consolation",
      number: props.data[`consolation_number_${i + 1}`],
    };
  });
  return { numbers };
});
</script>

<style scoped lang="scss">
.prize {
  line-height: 27px;
  &.plus {
    color: #fff;
    background-color: #cc0000;
  }
}

.jackpot-label {
  line-height: 27px;
}

.lottery-prize-wrapper {
  margin-top: 1px;
  .jackpot-label {
    background-color: #ccc;
  }
  :deep(.prize-message) {
    color: #c00;
    background-color: #fff;
  }
}
</style>
