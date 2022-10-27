<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
   props: {
      message: { type: String as PropType<string | null>, required: true },
   },
   data() {
      return {
         isError: false,
         isSuccess: false,
         isNeutral: false,
      };
   },
});
</script>

<template>
   <div
      id="alert"
      :class="[
         { error: isError, success: isSuccess, neutral: isNeutral },
         'fixed top-0 px-20 py-5 bg-gray-300 mt-3 rounded-2xl animate-[alert_500ms]',
      ]"
   >
      {{ message }}
   </div>
</template>

<style scoped>
.error {
   background-color: red;
   color: white;
}
.success {
   background-color: green;
   color: white;
}
</style>
