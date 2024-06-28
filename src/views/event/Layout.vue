<script setup>
import { ref, onMounted, computed } from 'vue'
import EventService from '@/services/EventService.js'

const props = defineProps({
  id: {
    required: true
  }
})
const event = ref('')
const id = computed(() => props.id)

onMounted(() => {
  EventService.getEvent(id.event)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
</template>
