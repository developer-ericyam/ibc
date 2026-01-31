<template>
  <div>
    <div class="card">
      <LotteryTableHeader
        :id="data.category_id"
        :draw-date="data.date"
        :draw-no="drawNo"
      />
      <div class="lottery-prize-title">Toto</div>
      <div class="lottery-prize-wrapper grid grid-cols-8 gap-px text-center">
        <div v-for="i in 8" :key="i" class="prize" :class="{ plus: i === 7 }">
          {{ data[`number_${i}`] }}
        </div>
      </div>
      <div class="mt-5"></div>
      <div class="lottery-prize-wrapper grid grid-cols-3 gap-px text-center">
        <div class="singapore-title">Prize Group</div>
        <div class="singapore-title">Share Amount (Each)</div>
        <div class="singapore-title">No. of Winning Shares</div>

        <template v-for="row in 6" :key="row">
          <div class="section">Group {{ row }}</div>
          <div class="jackpot_prize">{{ data[`group_amount_${row}`] }}</div>
          <div class="jackpot_prize">{{ data[`group_share_${row}`] }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableSingaporeToto {
  data: any;
  drawNo: string;
}
const props = defineProps<ITableSingaporeToto>();
</script>

<style scoped lang="scss">
.prize {
  line-height: 21px;
  &.plus {
    color: #fff;
    background-color: #cc0000;
  }
}

.singapore-title {
  color: #fff;
  background-color: #48486f;
  text-align: center;
}

.section {
  background-color: #ccc;
  text-align: center;
  line-height: 27px;
}

.jackpot_prize {
  font-size: 14px;
  line-height: 27px;
  font-weight: 700;
  color: #c00;
}
</style>
