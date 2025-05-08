<script setup>
defineProps({
  title: String,
  content: String
})
</script>

<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>