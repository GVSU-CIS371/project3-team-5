<template>
  <div>
    <!-- Beverage component with dynamic props -->
    <Beverage 
      :isIced="currentTemp === 'Cold'"
      :creamer="selectedCreamer"
      :syrup="selectedSyrup"
      :beverage="selectedBaseBeverage"
    />

    <!-- Temperature selection -->
    <ul>
      <li v-for="temp in temps" :key="temp">
        <label>
          <input
            type="radio"
            name="temperature"
            :id="`r${temp}`"
            :value="temp"
            v-model="currentTemp"
          />
          {{ temp }}
        </label>
      </li>
    </ul>

    <!-- Creamer selection -->
    <ul>
      <li v-for="creamerOption in creamerOptions" :key="creamerOption">
        <label>
          <input
            type="radio"
            name="creamer"
            :id="`c${creamerOption}`"
            :value="creamerOption"
            v-model="selectedCreamer"
          />
          {{ creamerOption }}
        </label>
      </li>
    </ul>

    <!-- Syrup selection -->
    <ul>
      <li v-for="syrupOption in syrupOptions" :key="syrupOption">
        <label>
          <input
            type="radio"
            name="syrup"
            :id="`s${syrupOption}`"
            :value="syrupOption"
            v-model="selectedSyrup"
          />
          {{ syrupOption }}
        </label>
      </li>
    </ul>

    <!-- Base beverage selection -->
    <ul>
      <li v-for="baseOption in baseBeverageOptions" :key="baseOption">
        <label>
          <input
            type="radio"
            name="baseBeverage"
            :id="`b${baseOption}`"
            :value="baseOption"
            v-model="selectedBaseBeverage"
          />
          {{ baseOption }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";

// Reactive variables for temperature, creamer, syrup, and base beverage options
const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");

const creamerOptions = ref(["None", "Milk", "Cream", "Half & Half"]);
const selectedCreamer = ref("None");

const syrupOptions = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const selectedSyrup = ref("None");

const baseBeverageOptions = ref(["Coffee", "Green Tea", "Black Tea"]);
const selectedBaseBeverage = ref("Coffee");
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>

