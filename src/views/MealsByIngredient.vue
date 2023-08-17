<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-red-500">
      Meals for {{ ingredient.strIngredient }}
    </h1>
  </div>
  <MealsCard :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealsCard from "../components/MealsCard.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const ingredient = computed(() => store.state.ingredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
