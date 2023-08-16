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
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

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
