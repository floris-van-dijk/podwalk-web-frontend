<template>
    <div class="grid grid-cols-7 gap-4">
        <div v-for="day in forecast" :key="day.date"
            class="bg-white p-4 rounded-lg shadow-md text-center text-gray-800 hover:shadow-lg transition-shadow">
            <!-- Date - Format it to show just the day name -->
            <h3 class="font-semibold text-lg mb-2">
                {{ new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' }) }}
            </h3>
            <!-- Weather icon -->
            <img :src="day.day.condition.icon" :alt="day.day.condition.text" class="w-12 h-12 mx-auto mb-2">
            <!-- Temperature -->
            <div class=" flex justify-center">
                <p class="text-red-500 font-medium">{{ Math.round(day.day.maxtemp_c) }}°</p>
                <p class="text-blue-500 font-medium">{{ Math.round(day.day.mintemp_c) }}°</p>
            </div>
            <!-- Condition text -->
            <p class="text-sm text-gray-600 mt-2">{{ day.day.condition.text }}</p>
            <!-- Rain chance -->
            <p class="text-sm text-blue-600 mt-1">
                <span class="text-xs">💧</span> {{ day.day.daily_chance_of_rain }}%
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { WeatherForecast } from '@/types/weather'
import { defineProps } from 'vue'

defineProps<{
    forecast: WeatherForecast[]
}>()
</script>

<style scoped>
.grid {
    overflow-x: auto;
    scrollbar-width: thin;
    padding-bottom: 1rem;
}

@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(7, 200px);
    }
}
</style>
