
<template>
  <div bg-gray-100 h-full>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="px-5 h-full hover:bg-purple-200 inline-flex items-center transition-colors"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors"
          >Search Meals</router-link
        >
        <router-link
          :to="{ name: 'byLetter' }"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors"
        >
          Meals By Letter</router-link
        >
        <router-link
          :to="{ name: 'byIngredient' }"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center transition-colors"
        >
          Meal By Ingredients</router-link
        >
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>


<style scoped>
</style>
