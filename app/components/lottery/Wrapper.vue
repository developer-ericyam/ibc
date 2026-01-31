<template>
  <component :is="dynamicComponent" :data="data" :draw-no="drawNo" />
</template>

<script setup lang="ts">
import { config } from "~/constants/config";
import Table from "./Table.vue";

interface IWrapper {
  data: any;
}
const props = defineProps<IWrapper>();

const dynamicComponent = computed(() => {
  const found = config.find((item) => item.id === props.data.category_id);
  if (found && found.component) {
    return found.component;
  }
  return Table;
});

const drawNo = computed(() => {
  let output = props.data.draw_no;
  if (props.data.draw_lap) output += `/${props.data.draw_lap}`;
  return output;
});
</script>
