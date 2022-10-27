<script setup lang="ts">
import { useStore } from "vuex";
import { AppStore } from "../store";
import Cell from "./Cell.vue";

const store = useStore<AppStore["state"]>();
</script>

<template>
   <div
      id="board"
      :class="[
         { 'opacity-70': store.state.gameOver },
         'grid overflow-hidden grid-cols-3 grid-rows-3 h-[75vh] w-[75vw] max-h-[500px] max-w-[500px] sm:w-[94vw] sm:h-[65vh] aspect-square animate-[board_500ms] rounded-2xl duration-500',
      ]"
   >
      <Cell
         v-for="(cellvalue, cellindex) in store.state.board"
         :value="cellvalue ?? null"
         :cell-number="cellindex"
         class="cell w-full h-full flex justify-center cursor-pointer hover:bg-blue-300 hover:scale-90 duration-300 bg-blue-200 rounded-[10px] text-blue-900 items-center text-[50pt] border-[3px] border-white"
      />
   </div>
</template>
