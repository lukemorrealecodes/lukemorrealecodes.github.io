<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <button class="menu-toggle" @click="toggleMenu">
      <span class="menu-icon"></span>
    </button>
    <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
      <router-link to="/" @click="isMenuOpen = false">Home</router-link>
      <router-link to="/about" @click="isMenuOpen = false">About</router-link>
      <router-link to="/contact" @click="isMenuOpen = false">Contact</router-link>
      <router-link to="/other-features" @click="isMenuOpen = false">Other Features</router-link>
      <router-link to="/menu" @click="isMenuOpen = false">Menu</router-link>
    </div>
  </nav>
</template>