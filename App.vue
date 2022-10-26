<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { AppStore } from "./store";

import Board from "./components/Board.vue";

const store = useStore<AppStore["state"]>(),
   gameStarted = ref(true);

function startNewGame(event: MouseEvent) {
   const target = event.target as HTMLButtonElement;
   target.classList.add("closed-button");
   target.ontransitionend = () => {
      gameStarted.value = true;
   };
}
</script>

<template>
   <button
      @click="startNewGame"
      v-if="!gameStarted"
      type="button"
      class="bg-orange-500 rounded-[2rem] px-20 py-4 text-white cursor-pointer hover:scale-110 duration-500"
   >
      Start New Game
   </button>

   <Board v-if="gameStarted" />

   <div>No. of Moves: {{ store.state.moves }}</div>
   <div>Next Player: {{ store.state.nextPlayer }}</div>
</template>

<style scoped lang="scss">
.closed-button {
   transform: scale(0.5);
   opacity: 0.7;
}
</style>
