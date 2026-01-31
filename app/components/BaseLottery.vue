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
const loading = ref(false);
const lotteries = ref<any>([]);

async function fetchLotteryData() {
  try {
    loading.value = true;
    const url = `https://api.loto4d.com/api/result?date=${new Date().getTime()}`;
    const { data } = await useFetch<any>(url);
    if (data.value) {
      lotteries.value = data.value.sort(
        (a: any, b: any) => a.category_id - b.category_id,
      );
    }
    console.log(data.value);
  } catch (err: any) {
    console.log("Error fetching data:", err);
  } finally {
    loading.value = false;
  }
}

fetchLotteryData();
</script>

<style scoped lang="scss">
.lottery-wrapper {
  max-width: 1100px;
  margin-bottom: 20px;
}
</style>
