<script setup>
import Card from '../components/Card.vue';
</script>

<template>
  <div class="home">
    <h1>Now playing at Vecchio's Movies</h1>
    <div class="cards">
      <Card
        title="Interstellar (9:15pm)"
        content="Matthew Mcconaughey must go to space to save Earth"
      />
      <Card
        title="Ratatouille (6:30pm)"
        content="Ok so there is this rat but he can like cook food"
      />
      <Card
        title="Space Jam (8:00pm)"
        content="I'm gonna be honest I don't think I ever saw this one but I know it's Michael Jordan"
      />
    </div>
  </div>
</template>