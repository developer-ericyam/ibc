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
        :data="data"
        :col="data.category_id === LOTTERY.DAMACAI_6D ? 3 : undefined"
      />
      <LotteryTablePrize
        title="Consolation 安慰獎"
        type="consolation"
        :data="data"
        :col="data.category_id === LOTTERY.DAMACAI_6D ? 3 : undefined"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOTTERY } from "~/constants/lottery";

interface ITable {
  data: any;
  drawNo?: string;
}
const props = defineProps<ITable>();
</script>

<style scoped lang="scss"></style>
