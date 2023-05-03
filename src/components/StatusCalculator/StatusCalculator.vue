<template>
  <div> 
  <div>
    <form>
      <div><input type="number" placeholder="STR" v-model="data.STR" min="1" max="130"></div>
      <div><input type="number" placeholder="AGI" v-model="data.AGI" min="1" max="130"></div>
      <div><input type="number" placeholder="VIT" v-model="data.VIT" min="1" max="130"></div>
      <div><input type="number" placeholder="DEX" v-model="data.DEX" min="1" max="130"></div>
      <div><input type="number" placeholder="INT" v-model="data.INT" min="1" max="130"></div>
      <div><input type="number" placeholder="LUK" v-model="data.LUK" min="1" max="130"></div>
    </form>
  </div>
  <div>
    <h1> IC: {{ varibleCast }}</h1>
  </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const data = reactive({
  STR:null,
  AGI:null,
  VIT:null,
  DEX:null,
  INT:null,
  LUK:null
})

const varibleCast = computed(
  () => Math.round(530-(2*(data.DEX||1) + (data.INT||1)))
)

</script>


<style>
form div {
  margin: 5px;
  padding: 5px;
  text-align: start;
}
</style>