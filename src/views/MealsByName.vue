<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyWord"
      class="rounded border-2 border-gray-200 w-full"
      placeholder=" Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
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
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeButton from "../components/YoutubeButton.vue";

const keyWord = ref("");
const meals = computed(() => store.state.searchMeals);

const route = useRoute();

const searchMeals = () => {
  store.dispatch("searchMeals", keyWord.value);
};

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    searchMeals();
  }
});
</script>

