<script setup>
import Card from '../components/Card.vue';
</script>

<template>
  <div class="menu">
    <h1>Concession Stand Menu</h1>
    <div class="menu-grid">
      <Card
        title="Popcorn ($32)"
        content="Fresh, hot popcorn with your choice of butter. Available in small, medium, and large sizes."
      />
      <Card
        title="Nachos ($45)"
        content="Crispy tortilla chips served with warm cheese sauce and optional jalapeños."
      />
      <Card
        title="Candy Selection ($87)"
        content="Wide variety of movie theater candies including M&Ms, Skittles, Twizzlers, and more."
      />
      <Card
        title="Soft Drinks ($63)"
        content="Coca-Cola products available in various sizes. Free refills on large drinks!"
      />
      <Card
        title="Hot Dogs($0.50)"
        content="All-beef hot dogs served with your choice of condiments and toppings."
      />
      <Card
        title="Combo Deals ($350)"
        content="Save money with our combo packages! Includes popcorn, drink, and your choice of candy or nachos."
      />
    </div>
  </div>
</template>