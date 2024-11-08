<template>
  <div class="min-h-screen text-white p-4 md:p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Optimising Your</h1>
        <transition-group name="slide-horizontal" tag="div" class="text-3xl font-bold text-amber-400 mb-8">
          <span :key="animatedWord" class="inline-block">{{ animatedWord }}</span>
        </transition-group>

        <p class="text-lg mb-2">Our programmes will accurately match you to career paths</p>
        <p class="text-lg">
          Where you will <span class="text-green-400">prosper</span> and
          <span class="text-amber-400">thrive</span>
        </p>
      </div>

      <!-- Main Content -->
       <index-desktop class=" hidden md:block" />
      <index-mobile class="md:hidden" />

    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      words: ["Capabilities", "Skills", "Career"],
      currentIndex: 0,
      animatedWord: "Capabilities",
    };
  },
  mounted() {
    this.startWordRotation();
  },
  methods: {
    startWordRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.animatedWord = this.words[this.currentIndex];
      }, 3000); 
    },
  },
};
</script>
<style scoped>
.slide-horizontal-enter-active, .slide-horizontal-leave-active {
  transition: transform 1.5s ease, opacity 1.5s ease;
}
.slide-horizontal-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-horizontal-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>