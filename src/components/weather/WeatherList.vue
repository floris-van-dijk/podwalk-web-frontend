<template>
    <div class="space-y-4">
        <WeatherCard :forecast="forecast" />
    </div>
</template>

<script setup lang="ts">
import type { WeatherForecast } from '@/types/weather'
import WeatherCard from './WeatherCard.vue'
import { defineProps } from 'vue'

defineProps<{
    forecast: WeatherForecast[]
}>()
</script>
