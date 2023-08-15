<template>
  <div class="flex flex-col p-8 items-center justify-center"></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data.meals;
});
</script>

