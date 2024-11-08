<template>
  <header class="relative text-white">
    <!-- Glowing Light Effect -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-2/3 bg-green-500 rounded-full blur-xl opacity-40"></div>

    <nav class="sticky top-0 z-10">
      <div class="max-w-screen-xl mx-auto p-4 lg:p-5 lg:pt-12">
        <div class="flex items-center justify-between h-16">
          <!-- Logo (hidden on mobile) -->
          <div class="flex-shrink-0 hidden md:block">
            <a href="/" class="flex flex-col items-center">
              <img src="/public/BEC logo .png" class="w-16 lg:w-20" alt="BEC Logo" />
              <span class="text-white text-xs lg:text-sm mt-1">Because Everybody Counts...</span>
            </a>
          </div>
        
          <!-- Desktop Menu -->
          <div class="hidden md:flex justify-center flex-wrap">
            <UHorizontalNavigation :links="links" class="flex-wrap justify-center">
              <template #default="{ link }">
                <span class="group-hover:text-yellow-500 relative font-extrabold text-base lg:text-lg px-1 lg:px-2 whitespace-nowrap">
                  {{ link.label }}
                </span>
              </template>
            </UHorizontalNavigation>
          </div>

          <div class="hidden md:flex">
            <a href="/login" class="flex items-center">
              <UIcon 
                name="i-heroicons-arrow-right-end-on-rectangle" 
                class="text-green-500 hover:text-yellow-500 cursor-pointer w-6 h-6 lg:w-8 lg:h-8"
              />
              <span class="hover:text-yellow-500 relative font-extrabold text-base lg:text-lg px-1 lg:px-2">Login</span>
            </a>  
          </div>

          <!-- Mobile Layout -->
          <div class="flex md:hidden items-center justify-between w-full">
            <!-- Mobile menu button -->
            <button @click="toggleMobileMenu" class="text-white hover:text-yellow-500 focus:outline-none z-50">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Logo (centered on mobile) -->
            <div class="flex-shrink-0">
              <a href="/" class="flex flex-col items-center">
                <img src="/public/BEC logo .png" class="w-16" alt="BEC Logo" />
                <span class="text-white text-xs mt-1">Because Everybody Counts...</span>
              </a>
            </div>

            <div class="w-6"></div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Modal -->
      <div v-if="isMobileMenuOpen" 
           class="fixed inset-0 z-40 md:hidden bg-main-700  bg-opacity-50 backdrop-blur-sm"
           @click="toggleMobileMenu">
        <div class="fixed inset-y-0 left-0 w-64 bg-green-900 shadow-lg transform transition-transform duration-300 ease-in-out"
             @click.stop>
          <!-- Mobile Menu Content -->
          <div class="flex flex-col h-full">
            <!-- Logo in menu -->
            <div class="p-4 border-b border-gray-700">
              <a href="/" class="flex flex-col items-center">
                <img src="/public/BEC logo .png" class="w-16" alt="BEC Logo" />
                <span class="text-white text-sm mt-2">Because Everybody Counts...</span>
              </a>
            </div>

            <!-- Navigation Links -->
            <div class="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
              <a v-for="link in links" 
                 :key="link.to" 
                 :href="link.to" 
                 class="flex items-center px-4 py-3 text-white hover:bg-green-800 hover:text-yellow-500 rounded-lg transition-colors duration-200">
                <UIcon :name="link.icon" class="w-5 h-5 mr-3 flex-shrink-0"/>
                <span class="whitespace-nowrap">{{ link.label }}</span>
              </a>
              
              <!-- Login Link -->
              <a href="/login" 
                 class="flex items-center px-4 py-3 text-white hover:bg-green-800 hover:text-yellow-500 rounded-lg transition-colors duration-200">
                <UIcon name="i-heroicons-arrow-right-end-on-rectangle" class="w-5 h-5 mr-3 flex-shrink-0"/>
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'BEC Programmes',
  icon: 'i-heroicons-chart-bar',
  to: '/components/horizontal-navigation'
}, {
  label: 'How it works',
  icon: 'i-heroicons-question-mark-circle',
  to: '/components/command-palette'
}, {
  label: 'Knowledge Base',
  icon: 'i-heroicons-academic-cap',
  to: '/components/tooltip'
}, {
  label: 'Neuodivergent',
  icon: 'i-heroicons-star',
  to: '/components/modal'
},{
  label: 'About Us',
  icon: 'i-heroicons-information-circle',
  to: '/components/accordion'
}]
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>