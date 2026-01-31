<template>
  <div v-if="info">
    <div
      class="table-header"
      :style="{ background: info.background, color: info.color }"
    >
      <img
        v-if="!info.hideLogo"
        class="lottery-logo"
        :src="`/images/lotteries/logo_${info.key}.${info.format || 'gif'}`"
        :alt="`logo-${info.key}`"
      />
      <div class="lottery-name">{{ info.name }}</div>
    </div>
    <div class="table-date">
      <div>Date: {{ formatDate }}</div>
      <div v-if="drawNo">Draw No: {{ drawNo }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { config } from "~/constants/config";

interface ITableHeaderProps {
  id: number;
  drawDate?: string;
  drawNo?: string;
}
const props = defineProps<ITableHeaderProps>();
const info = computed(() => {
  return config.find((item) => item.id === props.id);
});

const formatDate = computed(() => {
  if (!props.drawDate) return "";
  return dayjs(props.drawDate).format("DD-MM-YYYY (ddd)");
});
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  align-items: center;
  justify-content: center;

  .lottery-logo {
    width: 20%;
    text-align: center;
  }

  .lottery-name {
    width: 80%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
  }
}

.table-date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 31px;
}
</style>
