<template>
  <div class="p-8 pb-0 text-red-600">
    <h1 class="text-4xl font-bold mb-4">Popular Meals</h1>
  </div>
  <MealsCardVue :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import MealsCardVue from "../components/MealsCard.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i += 1) {
    await axiosClient
      .get("random.php")
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
