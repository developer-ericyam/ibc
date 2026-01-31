<template>
  <div>
    <div class="card">
      <LotteryTableHeader
        :id="data.category_id"
        :draw-date="data.date"
        :draw-no="drawNo"
      />
      <div class="lottery-prize-title">5D</div>
      <div
        v-for="i in 3"
        :key="i"
        class="lottery-prize-wrapper grid grid-cols-4 gap-px text-center"
      >
        <div class="flex items-center justify-center text-[16px] bg-[#ccc]!">
          {{ toOrdinal(i) }}
        </div>
        <div class="text-[20px]">{{ data[`d5_number_${i}`] }}</div>
        <div class="flex items-center justify-center text-[16px] bg-[#ccc]!">
          {{ toOrdinal(i + 3) }}
        </div>
        <div class="text-[20px]">{{ data[`d5_number_${i + 3}`] }}</div>
      </div>
      <div class="mb-2" />

      <div class="lottery-prize-title">6D</div>
      <div class="lottery-prize-wrapper grid grid-cols-4 gap-px text-center">
        <div class="flex items-center justify-center text-[16px] bg-[#ccc]!">
          1st
        </div>
        <div class="text-[18px] col-span-3">{{ data.d6_number_1 }}</div>
      </div>
      <div
        v-for="i in 4"
        :key="i"
        class="lottery-prize-wrapper grid grid-cols-4 gap-px text-center"
      >
        <div class="flex items-center justify-center text-[16px] bg-[#ccc]!">
          {{ toOrdinal(i + 1) }}
        </div>
        <div class="text-[18px]">{{ data[`d6_first_number_${i + 1}`] }}</div>
        <div class="flex items-center justify-center text-[16px] bg-[#ccc]!">
          or
        </div>
        <div class="text-[18px]">{{ data[`d6_second_number_${i + 1}`] }}</div>
      </div>
      <div class="mb-2" />

      <div class="lottery-prize-title">Star Toto 6/50</div>
      <div class="lottery-prize-wrapper grid grid-cols-8 gap-px text-center">
        <div v-for="i in 8" :key="i" class="prize" :class="{ plus: i === 7 }">
          {{ data[`star_toto_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot 1</div>
        <LotteryBlinkJackpot
          display="col"
          :prize="data.star_toto_first_jackpot_prize"
          :status="data.star_toto_first_jackpot_status"
        />
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot 2</div>
        <LotteryBlinkJackpot
          display="col"
          :prize="data.star_toto_second_jackpot_prize"
          :status="data.star_toto_second_jackpot_status"
        />
      </div>
      <div class="mb-2" />

      <div class="lottery-prize-title">Power Toto 6/55</div>
      <div class="lottery-prize-wrapper grid grid-cols-6 gap-px text-center">
        <div v-for="i in 6" :key="i" class="prize">
          {{ data[`power_toto_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot</div>
        <LotteryBlinkJackpot
          display="col"
          :prize="data.power_toto_first_jackpot_prize"
          :status="data.power_toto_first_jackpot_status"
        />
      </div>
      <div class="mb-2" />

      <div class="lottery-prize-title">Supreme Toto 6/58</div>
      <div class="lottery-prize-wrapper grid grid-cols-6 gap-px text-center">
        <div v-for="i in 6" :key="i" class="prize">
          {{ data[`supreme_toto_number_${i}`] }}
        </div>
      </div>
      <div class="lottery-prize-wrapper grid grid-cols-2 gap-px text-center">
        <div class="jackpot-label">Jackpot</div>
        <LotteryBlinkJackpot
          display="col"
          :prize="data.supreme_toto_first_jackpot_prize"
          :status="data.supreme_toto_first_jackpot_status"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableTotoProps {
  data: any;
  drawNo: string;
}
const props = defineProps<ITableTotoProps>();

function toOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
}
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
