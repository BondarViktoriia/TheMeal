<template>
  <div class="bg-white shadow rounded-xl">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl" />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="my-1">{{ meal.strCategory }}</p>
    </div>
    <div class="p-3 flex items-center justify-between">
      <YoutubeButton :href="meal.strYoutube" />
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="px-3 py-2 rounded border-2 text-white bg-blue-600 border-blue-600 hover:bg-blue-500 hover:text-white transition-colors"
        >View</router-link
      >
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>

