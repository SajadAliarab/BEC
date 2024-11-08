<template>
  <div class="bg-main-700  min-h-screen flex flex-col">
    <Header />
    <div class="flex-1 flex overflow-hidden">
      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto transition-transform">
        <slot></slot>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/UI/Header.vue';
import Footer from '~/components/UI/Footer.vue';
const sidebarOpen = ref(false);
</script>