<template>
  <div class="lottery-prize-wrapper grid grid-cols-9 gap-px text-center">
    <div v-for="i in 9" :key="i" class="prize" :class="{ plus: i === 7 }">
      <div v-if="emptyArray.includes(i)" class="empty"></div>
      <div v-else>{{ data[`number_${i}`] }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITableMagnumJackpotPrize {
  data: any;
  emptyArray: number[];
}
const props = defineProps<ITableMagnumJackpotPrize>();
</script>

<style scoped lang="scss">
.prize {
  line-height: 21px;
  &.plus {
    color: #fff;
    background-color: #cc0000;
  }
}

.empty {
  background-color: #aaa;
  width: 100%;
  height: 100%;
}
</style>
