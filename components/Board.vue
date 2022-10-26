<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { AppStore } from "../store";
import RowVue from "./Row.vue";

const store = useStore<AppStore["state"]>();
const board = computed(() => store.state.board);
</script>

<template>
   <div
      id="board"
      class="grid overflow-hidden grid-cols-3 grid-rows-3 h-[75vh] w-[75vw] max-h-[500px] max-w-[500px] aspect-square animate-[board_500ms] rounded-2xl"
   >
      <RowVue
         v-for="(row, rowindex) in board"
         :row="row"
         :rowindex="rowindex"
      />
   </div>
</template>
