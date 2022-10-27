<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useStore } from "vuex";
import { AppStore } from "./store";

import Board from "./components/Board.vue";
import AppAlert from "./components/AppAlert.vue";

const store = useStore<AppStore["state"]>(),
   gameStarted = ref(false),
   nextPlayerText = ref<HTMLSpanElement | null>(null);

// const unwatch =
watch(
   () => store.state.nextPlayer,
   () => {
      nextPlayerText.value?.animate(
         [
            {
               color: "red",
            },
            {
               color: "initial",
            },
         ],
         { duration: 500, fill: "both" }
      );
   }
);

function startNewGame(event: MouseEvent) {
   const target = event.target as HTMLButtonElement;
   target.classList.add("closed-button");
   target.ontransitionend = () => {
      gameStarted.value = true;
   };
}

// onBeforeUnmount(() => {
//    unwatch();
// });
</script>

<template>
   <AppAlert v-if="store.state.alert" :message="store.state.message" />
   <button
      @click="startNewGame"
      v-if="!gameStarted"
      type="button"
      class="bg-blue-500 rounded-[2rem] px-20 py-4 text-white cursor-pointer hover:scale-110 duration-500"
   >
      Start New Game
   </button>

   <Board v-if="gameStarted" />

   <div
      v-if="!store.state.gameOver && gameStarted"
      class="font-bold text-[18pt] mt-5"
   >
      Next Player:
      <span ref="nextPlayerText">{{ store.state.nextPlayer }}</span>
   </div>

   <button
      @click="store.commit('restart')"
      v-if="store.state.gameOver"
      type="button"
      class="bg-blue-500 rounded-[2rem] px-20 py-4 mt-10 text-white cursor-pointer hover:scale-110 duration-500"
   >
      Restart Game
   </button>
</template>

<style scoped lang="scss">
.closed-button {
   transform: scale(0.5);
   opacity: 0.7;
}
</style>
