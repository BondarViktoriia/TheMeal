<template>
  <div class="bg-gray-100 h-full max-w-[1200px] mx-auto">
    <Navbar />
    <main>
      <div class="max-w-[1200px] mx-auto mt-[40px]">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./NavBar.vue";
</script>
