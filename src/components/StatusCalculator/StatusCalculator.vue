<template>
  <div class="flex">
    <div class="flex">
      <form>
        <div><input type="number" placeholder="STR" v-model="data.STR" min="1" max="130"></div>
        <div><input type="number" placeholder="AGI" v-model="data.AGI" min="1" max="130"></div>
        <div><input type="number" placeholder="VIT" v-model="data.VIT" min="1" max="130"></div>
        <div><input type="number" placeholder="INT" v-model="data.INT" min="1" max="130"></div>
        <div><input type="number" placeholder="DEX" v-model="data.DEX" min="1" max="130"></div>
        <div><input type="number" placeholder="LUK" v-model="data.LUK" min="1" max="130"></div>
      </form>
    </div>
    <form>
      <div><label>Palito</label><input class="mx-3" id="sticks" type="checkbox" @change="sticksUp()"
          v-model="data.sticks"></div>
      <div><label>Comida</label><input class="mx-3" id="foods" type="checkbox" @change="foodsUp()" v-model="data.foods">
      </div>
      <div><label>Bless</label><input class="mx-3" id="bless" type="checkbox" @change="blessUp()" v-model="data.bless">
      </div>
      <div><label>Classe :</label></div>
      <div>
        <select class="w-42" v-model="selected">
          <option v-for="charClass in charClasses" :key="charClass.name">{{ charClass.name }}</option>
        </select>
      </div>
    </form>
    <div class="flex">
      <h1> IC: {{ varibleCast }}</h1>
      <h1></h1>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';

const charClasses = ref([
  {name: 'Rune Knight'},
  {name: 'Guillotin Cross'},
  {name: 'Arch Bishop'},
  {name: 'Ranger'},
  {name: 'Warlock'},
  {name: 'Mechanic'},
  {name: 'Royal Guard'},
  {name: 'Shadow Chaser'},
  {name: 'Shura'},
  {name: 'Maestro'},
  {name: 'Wanderer'},
  {name: 'Sorcerer'},
  {name: 'Geneticist'},
  {name: 'Rebelion'},
  {name: 'Kagerou/Oboro'},
  {name: 'Soul Reaper'},
  {name: 'Star Emperor'}
])

const data = reactive({
  STR: null,
  AGI: null,
  VIT: null,
  DEX: null,
  INT: null,
  LUK: null,
  sticks: false,
  sticksBonus: 0,
  foods: false,
  foodsBonus: 0,
  bless: false,
  blessBonus: 0,
})

function sticksUp() {
  if (data.sticks == false) {
    data.sticksBonus = 0
  } else {
    data.sticksBonus = 15
  }
}

function foodsUp() {
  if (data.foods == false) {
    data.foodsBonus = 0
  } else {
    data.foodsBonus = 20
  }
}

function blessUp() {
  if (data.bless == false) {
    data.blessBonus = 0
  } else {
    data.blessBonus = 10
  }
}

//let foodsUp = 20
//let blessUp = 10

const varibleCast = computed(
  () => Math.round(2 *(data.DEX + data.sticksBonus + data.foodsBonus + data.blessBonus) + (data.INT + data.sticksBonus + data.foodsBonus + data.blessBonus))
)

</script>


<style>
form div {
  margin: 5px;
  padding: 5px;
  text-align: start;
}
</style>