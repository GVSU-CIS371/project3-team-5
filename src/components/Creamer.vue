<template>
  <div class="froth" :style="{ backgroundColor: selectedColor }">
    <div v-for="foam in foamCount" :key="foam" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
type Prop = {
  name: string;
};
type Creamer = {
  name: string;
  color: string;
};
const Creamers: Creamer[] = [
  {
    name: "Milk",
    color: "AliceBlue",
  },
  {
    name: "Cream",
    color: "#F5F5DC",
  },
  {
    name: "Half & Half",
    color: "#FFFACD",
  },
];

const props = withDefaults(defineProps<Prop>(), {
  name: "Milk",
});

const selectedColor = computed(() => {
  const selectedCreamer = Creamers.find(creamer => creamer.name === props.name);
  return selectedCreamer ? selectedCreamer.color : "";
});

const foamCount = computed(() => {
  // You can define the logic to determine foam count based on selected creamer here
  return 5; // Example value, you can adjust as needed
});
</script>

<style lang="scss" scoped>
.froth {
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  height: 20%;
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
}
.foam {
  display: block;
  background: #e4e0d2;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

/* Define styles for different foam elements */

/* You can adjust styles for different foam elements here */
</style>

