<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { AppStore } from "../store";

const store = useStore<AppStore["state"]>();
const nextPlayer = computed(() => store.state.nextPlayer);
const props = defineProps<{
   value: "X" | "O" | "";
   cellNumber: [number, number];
}>();

function play() {
   store.commit({
      type: "play",
      location: props.cellNumber,
      value: nextPlayer.value,
   });
}
</script>

<template>
   <div
      @click="play"
      class="cell w-full h-full flex justify-center cursor-pointer hover:brightness-75 bg-red-500 text-white items-center text-[50pt] border-2"
   >
      {{ value }}
   </div>
</template>
