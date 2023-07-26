
<template>
  <div bg-gray-100 h-full>
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="px-2 h-full hover:bg-purple-200 inline-flex items-center"
      >
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          to="/"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center"
          >Search Meals</router-link
        >
        <router-link
          to="/"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center"
        >
          Meals By Letter</router-link
        >
        <router-link
          to="/"
          class="px-2 h-full hover:bg-purple-200 inline-flex items-center"
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
