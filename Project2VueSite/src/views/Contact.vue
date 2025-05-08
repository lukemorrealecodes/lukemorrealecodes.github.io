<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitStatus = ref(null)

const handleSubmit = async () => {
  try {
    const response = await fetch('https://formsubmit.co/ajax/lukemorreale@my.cwi.edu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })

    if (response.ok) {
      submitStatus.value = { type: 'success', message: 'Message sent successfully!' }
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    submitStatus.value = { type: 'error', message: 'Failed to send message. Please try again.' }
  }
}
</script>

<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
    <div v-if="submitStatus" class="status-message" :class="submitStatus.type">
      {{ submitStatus.message }}
    </div>
  </div>
</template>