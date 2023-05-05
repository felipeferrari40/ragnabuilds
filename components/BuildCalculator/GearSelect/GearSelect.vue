<template>
  <select class="">
  <option value="">{{ msg }}</option>
  <option v-for="(item , i) in itens" :key="i">{{ item.name }}</option></select>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  msg: String
})

</script>

<style scoped>

template{
  display: flex;
}

</style>