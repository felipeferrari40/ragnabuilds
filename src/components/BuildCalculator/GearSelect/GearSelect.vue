<template>
  <div class="inline-block w-full" >
    <select class="inline-flex w-3/5">
      <option value="">{{ msg }}</option>
      <option v-for="(item, i) in itens" :key="i">{{ item.name }}</option>
    </select>
    <refine-value class="m-3 inline-flex w-1/5"/>
  </div>
</template>

<script setup>
import RefineValue from "./RefineValue.vue";
import { defineProps } from "vue";

defineProps({
  msg: String,
});
</script>

<style scoped>
template {
  display: flex;
}
</style>