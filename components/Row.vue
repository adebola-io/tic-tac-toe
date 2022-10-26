<script setup lang="ts">
import CellVue from "./Cell.vue";
const props = defineProps<{
   row: Array<"X" | "O" | "">;
   rowindex: number;
}>();
</script>

<template>
   <CellVue
      v-for="(cellvalue, cellindex) in row"
      :value="cellvalue"
      :cell-number="[rowindex, cellindex]"
   />
</template>
