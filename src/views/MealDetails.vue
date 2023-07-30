<template>
  <div class="w-[800] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div>Category: {{ meal.strCategory }}</div>
      <div>Area: {{ meal.strArea }}</div>
      <div>Tags: {{ meal.strTags }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const meal = ref({});
const route = useRoute();

onMounted(async () => {
  await axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

