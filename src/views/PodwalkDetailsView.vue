<template>
    <div class="pt-24 py-8">
        <div v-if="isLoading" class="flex justify-center items-center h-64">
            <div class="text-lg">Loading podwalk details...</div>
        </div>

        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <strong>Error:</strong> {{ error }}
        </div>

        <div v-else-if="podwalk">
            <div class="mb-6">
                <div class="w-screen h-[400px] relative -mt-24">
                    <img :src="podwalk.cover_image.file.url" alt="Podwalk Image" class="w-full h-full object-cover">

                    <!-- Overlay gradient for better text readability -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>

                    <!-- Text overlay -->
                    <div class="absolute bottom-40 left-0 right-0">
                        <div class="max-w-4xl mx-auto">
                            <h1 class="text-4xl font-bold text-white mb-2 drop-shadow-lg">
                                {{ podwalk.name }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="max-w-6xl mx-auto px-4">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Details Card -->
                    <div class="rounded-lg shadow-md p-6">
                        <div>
                            <div class="flex justify-between">
                            </div>
                            <div>
                                <div class="flex-col justify-between">
                                    <div class="flex justify-between">


                                    </div>
                                    <p class="mb-4 text-start">{{ podwalk.description || podwalk.detail.description.data.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Map Card -->
                    <div class="rounded-lg shadow-md p-6">
                        <div class="flex justify-between">
                            <h1 class="ml-4 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"
                                    fill="none" class="inline align-middle mr-1" style="vertical-align: middle;">
                                    <path
                                        d="M7.5 7.5H7C7 7.63261 7.05268 7.75979 7.14645 7.85355L7.5 7.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM7 3V7.5H8V3H7ZM7.14645 7.85355L10.1464 10.8536L10.8536 10.1464L7.85355 7.14645L7.14645 7.85355Z"
                                        fill="#ffffff" />
                                </svg>
                                {{ Math.round(podwalk.bounds.length.minutes) }} min
                            </h1>
                            <h1 class="flex items-center text-nowrap text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                    fill="none" stroke="#ffffff" class="inline align-middle mr-1"
                                    style="vertical-align: middle;">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M4.04537 18.5083C2.68179 17.1448 2 16.463 2 15.6157C2 14.7685 2.68179 14.0867 4.04537 12.7231L12.7231 4.04537C14.0867 2.68179 14.7685 2 15.6157 2C16.463 2 17.1448 2.68179 18.5083 4.04537L19.9546 5.49167C21.3182 6.85525 22 7.53704 22 8.38426C22 9.23148 21.3182 9.91327 19.9546 11.2769L11.2769 19.9546C9.91327 21.3182 9.23148 22 8.38426 22C7.53704 22 6.85525 21.3182 5.49167 19.9546L4.04537 18.5083Z"
                                            stroke="#ffffff" stroke-width="1.5"></path>
                                        <path d="M8.46436 8.46448L9.87857 9.87869" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round"></path>
                                        <path d="M12.707 4.2218L14.1212 5.63602" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round"></path>
                                        <path d="M4.22168 12.7072L5.63589 14.1214" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round"></path>
                                        <path d="M6.34326 10.5858L8.46458 12.7071" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round"></path>
                                        <path d="M10.5859 6.34314L12.7073 8.46446" stroke="#ffffff" stroke-width="1.5"
                                            stroke-linecap="round"></path>
                                    </g>
                                </svg>
                                {{ Math.round(podwalk.bounds.length.km) }} km
                            </h1>
                            <h1 class="text-right mr-4"> {{ podwalk.place }}</h1>
                        </div>
                        <div id="detail-map" class="w-full h-64 rounded-lg"></div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-4">Weervoorspelling voor {{ podwalk.place }}:</h2>
                    <div v-if="isWeatherLoading" class="text-center text-gray-500">Loading weather...</div>
                    <div v-else-if="weatherError" class="text-center text-red-500">Error loading weather: {{
                        weatherError }}
                    </div>
                    <div v-else-if="weatherForecast && weatherForecast.length > 0">
                        <WeatherList :forecast="weatherForecast" />
                    </div>
                </div>
            </div>
            <div class="flex justify-center pt-10">
                <button @click="$router.go(-1)"
                    class="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
                    ← Terug
                </button>
            </div>
        </div>

        <div v-else class="text-center text-gray-500 mt-8">
            <p>Podwalk niet gevonden</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import mapboxgl from 'mapbox-gl'
import type { RootState } from '@/store'
import WeatherList from '@/components/weather/WeatherList.vue'

const mapboxToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN

if (mapboxToken) {
  mapboxgl.accessToken = mapboxToken;
} else {
  console.error('❌ Mapbox access token is missing!');
}

const route = useRoute()
const store = useStore<RootState>()
const detailMap = ref<mapboxgl.Map | null>(null)
const weather = computed(() => store.state.weather)

const podwalkId = computed(() => route.params.id)
const podwalks = computed(() => store.state.podwalks.podwalks)
const podwalk = computed(() =>
    podwalks.value.find(p => p.id.toString() === podwalkId.value)
)
const isLoading = computed(() => store.getters['podwalks/isLoading'])
const error = computed(() => store.state.podwalks.error)

const initializeDetailMap = () => {
    if (!mapboxToken || !podwalk.value) return

    const mapContainer = document.getElementById('detail-map')
    if (!mapContainer) {
        console.error('Map container not found')
        return
    }

    const mapInstance = new mapboxgl.Map({
        container: 'detail-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [podwalk.value.lng, podwalk.value.lat],
        zoom: 12
    })

    detailMap.value = mapInstance

    mapInstance.on('load', () => {
        // Add route if coordinates are available
        addRouteToMap(mapInstance)

        // Add start/end markers
        addRouteMarkers(mapInstance)
    })
}

const addRouteToMap = (mapInstance: mapboxgl.Map) => {
    if (!podwalk.value?.details) return

    console.log('📍 Podwalk details structure:', podwalk.value.details)
    console.log('📍 Details type:', typeof podwalk.value.details)
    console.log('📍 Is array:', Array.isArray(podwalk.value.details))

    // Extract coordinates from podwalk.details
    const routeCoordinates = extractRouteCoordinates(podwalk.value.details)

    console.log('📍 Extracted coordinates:', routeCoordinates)

    if (routeCoordinates.length > 0) {
        // Add route source
        mapInstance.addSource('route', {
            type: 'geojson',
            data: {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: routeCoordinates
                }
            }
        })

        // Add route layer
        mapInstance.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: {
                'line-join': 'round',
                'line-cap': 'round'
            },
            paint: {
                'line-color': '#FF6B35',
                'line-width': 4,
                'line-opacity': 0.8
            }
        })

        // Fit map to route bounds
        fitMapToRoute(mapInstance, routeCoordinates)
    } else {
        console.log('⚠️ No route coordinates found')
    }
}

const extractRouteCoordinates = (details: any): number[][] => {
    const coordinates: number[][] = []

    console.log('🔍 Extracting coordinates from:', details)

    // Check if we have stops array in the podwalk object
    if (podwalk.value?.stops && Array.isArray(podwalk.value.stops)) {
        console.log('📍 Found stops array with', podwalk.value.stops.length, 'stops')

        // Sort stops by order to ensure correct route sequence
        const sortedStops = [...podwalk.value.stops].sort((a, b) => a.order - b.order)

        sortedStops.forEach((stop, index) => {
            if (stop.lat && stop.lng) {
                coordinates.push([stop.lng, stop.lat])
                console.log(`✅ Added stop ${index + 1} (order: ${stop.order}):`, [stop.lng, stop.lat])
            }
        })
    }

    // Fallback: if no stops found, use main podwalk coordinates
    if (coordinates.length === 0 && podwalk.value) {
        coordinates.push([podwalk.value.lng, podwalk.value.lat])
        console.log('📍 Using fallback podwalk coordinates:', [podwalk.value.lng, podwalk.value.lat])
    }

    console.log('✅ Final coordinates array:', coordinates.length, 'points')
    return coordinates
}

const addRouteMarkers = (mapInstance: mapboxgl.Map) => {
    if (!podwalk.value) return

    // Add start marker (green)
    const startMarker = document.createElement('div')
    startMarker.style.cssText = `
        background-color: #10B981;
        width: 24px;
        height: 24px;
        border: 3px solid #fff;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `

    new mapboxgl.Marker(startMarker)
        .setLngLat([podwalk.value.lng, podwalk.value.lat])
        .addTo(mapInstance)

    // If you have end coordinates, add end marker (red) here
}

const fitMapToRoute = (mapInstance: mapboxgl.Map, coordinates: number[][]) => {
    if (coordinates.length === 0) return

    const bounds = new mapboxgl.LngLatBounds()
    coordinates.forEach(coord => bounds.extend(coord as [number, number]))

    mapInstance.fitBounds(bounds, {
        padding: 50,
        maxZoom: 15
    })
}

// Watch for podwalk data changes
watch(podwalk, (newPodwalk) => {
    if (newPodwalk && mapboxToken) {
        // Destroy existing map if it exists
        if (detailMap.value) {
            detailMap.value.remove()
            detailMap.value = null
        }
        // Initialize new map
        setTimeout(initializeDetailMap, 100)
    }
}, { immediate: true })

const isWeatherLoading = computed(() => store.getters['weather/isLoading'])
const weatherError = computed(() => store.state.weather?.error || null)
const weatherForecast = computed(() => store.getters['weather/getForecast'])

onMounted(async () => {
    try {
        if (!podwalk.value) {
            // If not found in store, fetch details from backend
            await store.dispatch('podwalks/fetchPodwalk', podwalkId.value)
        }

        // Whether we just fetched it or already had it, check if we have podwalk data
        const currentPodwalk = podwalk.value
        if (currentPodwalk) {
            await store.dispatch('weather/fetchWeatherForecast', {
                lat: currentPodwalk.lat,
                lng: currentPodwalk.lng,
                days: 7
            })
        }

        // Fetch podwalks if not already loaded
        if (podwalks.value.length === 0) {
            await store.dispatch('podwalks/fetchPodwalks')
        }

        // Initialize map after DOM is ready
        if (currentPodwalk && mapboxToken) {
            setTimeout(initializeDetailMap, 100)
        }
    } catch (error) {
        console.error('Error in component initialization:', error)
    }

    //print weather forecast
    console.log(weather.value)
})

onBeforeUnmount(() => {
    if (detailMap.value) {
        detailMap.value.remove()
    }
})
</script>

<style scoped>
@import 'mapbox-gl/dist/mapbox-gl.css';

:deep(body) {
    overflow-x: hidden !important;
}

/* Optional: Add animation for text when it loads */
.absolute h1 {
    animation: fadeInUp 0.6s ease-out;
}

.absolute p {
    animation: fadeInUp 0.6s ease-out 0.2s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>