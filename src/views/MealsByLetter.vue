<template>
  <div>
    <div class="flex gap-2 mt-2 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}
      </router-link>
    </div>
    <MealsCard :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealsCard from "../components/MealsCard.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
