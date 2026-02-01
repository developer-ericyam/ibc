<template>
  <div class="flex justify-center">
    <div class="lottery-wrapper">
      <div class="grid grid-cols-3 gap-8">
        <LotteryWrapper
          v-for="lottery in lotteries"
          :key="lottery.id"
          :data="lottery"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { config } from "~/constants/config";

dayjs.extend(utc);
dayjs.extend(timezone);

let interval: number | undefined = undefined;

function isWithinActiveTime(): boolean {
  const now = dayjs().tz("Asia/Singapore"); // GMT+8
  const hour = now.hour();
  const minute = now.minute();

  // Check if time is between 6:30 PM (18:30) and 9:00 PM (21:00)
  if (hour === 18 && minute >= 30) {
    return true;
  }
  if (hour === 19 || hour === 20) {
    return true;
  }
  return false;
}

// Fetch lottery data with SSR support
const { data: lotteries, refresh } = await useAsyncData(
  'lottery-results',
  async () => {
    const url = `https://api.loto4d.com/api/result?date=${new Date().getTime()}`;
    const data = await $fetch<any>(url);
    
    if (data) {
      // Sort based on the order in config.ts
      return data.sort((a: any, b: any) => {
        const indexA = config.findIndex((c) => c.id === a.category_id);
        const indexB = config.findIndex((c) => c.id === b.category_id);

        // If not found in config, put at the end
        if (indexA === -1) return 1;
        if (indexB === -1) return -1;

        return indexA - indexB;
      });
    }
    return [];
  },
  {
    default: () => []
  }
);

onMounted(() => {
  console.log("onMounted...");
  
  // Set up polling interval
  interval = setInterval(() => {
    console.log("polling...");
    if (isWithinActiveTime()) refresh();
  }, 1500); // Refresh every 1.5 seconds
});

onBeforeUnmount(() => {
  interval && clearInterval(interval);
});
</script>

<style scoped lang="scss">
.lottery-wrapper {
  max-width: 1100px;
  margin-bottom: 20px;
}
</style>
