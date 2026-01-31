<template>
  <div class="my-1">
    <div class="lottery-prize-title">{{ title }}</div>
    <div class="lottery-prize-wrapper grid" :class="`grid-cols-${col} gap-px`">
      <div
        v-for="(prizeNumber, index) in prizeNumbers"
        :key="prizeNumber.id"
        class="lottery-number"
        :class="{
          [`col-span-${col}`]:
            index === prizeNumbers.length - 1 && (index + 1) % col !== 0,
        }"
      >
        <span v-html="prizeNumber.number" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ITablePrize {
  title: string;
  type: string;
  data: any;
  col?: number;
}

const props = withDefaults(defineProps<ITablePrize>(), {
  col: 5,
});

const prizeNumbers = computed(() => {
  if (!props.data.numbers) return [];
  return props.data.numbers
    .filter((item: any) => item.type === props.type)
    .sort((a: any, b: any) => a.position - b.position);
});
</script>

<style scoped lang="scss">
.lottery-number {
  font-size: 22px;
}
</style>
