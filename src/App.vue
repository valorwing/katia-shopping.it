<template>
  <div id="app">
    <Hero />
    <PriceGrid />
    <Brands />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue'
import PriceGrid from './components/PriceGrid.vue'
import Brands from './components/Brands.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
