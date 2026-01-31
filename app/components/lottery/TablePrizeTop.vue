<template>
  <table class="w-full">
    <tbody>
      <tr>
        <td class="lottery-prize-title w-[45%]">1st Prize 首獎</td>
        <td class="lottery-prize-number">
          {{ firstPrizeKey ? data[firstPrizeKey] : data.first_prize }}
        </td>
      </tr>
      <tr>
        <td class="lottery-prize-title w-[45%]">2nd Prize 二獎</td>
        <td class="lottery-prize-number">
          {{ secondPrizeKey ? data[secondPrizeKey] : data.second_prize }}
        </td>
      </tr>
      <tr>
        <td class="lottery-prize-title w-[45%]">3rd Prize 三獎</td>
        <td class="lottery-prize-number">
          {{ thirdPrizeKey ? data[thirdPrizeKey] : data.third_prize }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface ITablePrizeTop {
  data: any;
  firstPrizeKey?: string;
  secondPrizeKey?: string;
  thirdPrizeKey?: string;
}
const props = defineProps<ITablePrizeTop>();
</script>

<style scoped lang="scss">
table {
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #aaa;
  }

  .lottery-prize-number {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
