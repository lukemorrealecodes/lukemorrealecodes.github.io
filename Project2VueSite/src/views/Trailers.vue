<script setup>
import { ref } from 'vue'

const trailers = ref([
  {
    title: 'Interstellar',
    embedId: 'zSWdZVtXT7E',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
  },
  {
    title: 'Ratatouille',
    embedId: 'NgsQ8mVkN8w',
    description: 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.'
  },
  {
    title: 'Space Jam',
    embedId: 'oKNy-MWjkcU',
    description: 'Basketball champion Michael Jordan teams up with the Looney Tunes gang to defeat the Monstars in an epic basketball game.'
  }
])
</script>

<template>
  <div class="trailers">
    <h1>Movie Trailers</h1>
    <div class="trailers-grid">
      <div v-for="trailer in trailers" :key="trailer.title" class="trailer-card">
        <h2>{{ trailer.title }}</h2>
        <div class="video-container">
          <iframe
            :src="'https://www.youtube.com/embed/' + trailer.embedId"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>{{ trailer.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trailers {
  padding: 1rem;
}

.trailers-grid {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.trailer-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.trailer-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin-bottom: 1rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.trailer-card p {
  color: #666;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .trailers {
    padding: 2rem;
  }
  
  .trailers-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1200px;
    margin: 2rem auto;
  }
}</style>