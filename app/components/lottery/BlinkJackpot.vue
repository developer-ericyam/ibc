<template>
  <div class="prize-message" :class="{ 'flex-col': display === 'col' }">
    <div>
      {{ label }} <b>{{ formatJackpotPrize(prize) }}</b>
    </div>
    <div :class="{ blink: !!status }">
      {{ status }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface ILotteryBlinkJackpotProps {
  prize: string;
  label?: string;
  status?: string;
  display?: "row" | "col";
}
const props = withDefaults(defineProps<ILotteryBlinkJackpotProps>(), {
  display: "row",
});

function formatJackpotPrize(value: number | string): string {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "-";
  return (
    "RM " +
    num.toLocaleString("en-MY", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
</script>

<style scoped lang="scss">
.prize-message {
  background-color: #ccc;
  text-align: center;
  min-height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blink {
  animation: blinker 1s linear infinite;
  color: red;
  font-size: 14px;
  font-weight: bold;
  padding-left: 5px;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
