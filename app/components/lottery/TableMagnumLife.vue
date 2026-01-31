<template>
  <div>
    <div class="card">
      <LotteryTableHeader
        :id="data.category_id"
        :draw-date="data.date"
        :draw-no="drawNo"
      />
      <div class="lottery-prize-title">Winning Numbers</div>
      <div class="lottery-prize-wrapper grid grid-cols-8 gap-px text-center">
        <div v-for="i in 8" :key="i" class="prize">
          {{ data[`winning_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-title">Bonus Numbers</div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div v-for="i in 2" :key="i" class="prize">
          {{ data[`bonus_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-title">Grand Prize</div>
      <div class="message">RM 1,000 everyday for 20 years</div>
      <div class="lottery-prize-title">Grand Prize</div>
      <div class="message">RM 1,000 everyday for 100 days</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableMagnumLife {
  data: any;
  drawNo: string;
}
defineProps<ITableMagnumLife>();
</script>

<style scoped lang="scss">
.message {
  background-color: #ccc;
  text-align: center;
  line-height: 27px;
}

.prize {
  line-height: 21px;
}
</style>
