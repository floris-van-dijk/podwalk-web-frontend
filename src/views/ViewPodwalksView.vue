<template>
    <div id="map" class="w-full h-full overflow-hidden"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import mapboxgl from 'mapbox-gl';
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'
import type { Podwalk } from '@/types/podwalk'
import router from '@/router'

const mapboxToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
console.log('🗺️ Mapbox Token:', mapboxToken ? 'Token found' : 'Token missing!');

if (!mapboxToken) {
    console.error('❌ Mapbox access token is missing! Please set VUE_APP_MAPBOX_ACCESS_TOKEN in your .env.local file');
} else {
    mapboxgl.accessToken = mapboxToken;
}

const map = ref<mapboxgl.Map | null>(null);
const markers = ref<mapboxgl.Marker[]>([]); // Store markers to manage them
const store = useStore<RootState>()

const podwalks = computed(() => store.state.podwalks.podwalks)
const isLoading = computed(() => store.getters['podwalks/isLoading'])
const error = computed(() => store.state.podwalks.error)

const fetchAndLogPodwalks = async () => {
    try {
        await store.dispatch('podwalks/fetchPodwalks')

        console.log('✅ Podwalks fetched successfully:', podwalks.value)
        console.log('📊 Number of podwalks:', podwalks.value.length)

        podwalks.value.forEach((podwalk, index) => {
            console.log(`🚶‍♂️ Podwalk ${index + 1}:`, {
                id: podwalk.id,
                name: podwalk.name,
                place: podwalk.place,
                description: podwalk.description,
                coordinates: { lat: podwalk.lat, lng: podwalk.lng }
            })
        })
    } catch (err) {
        console.error('❌ Error fetching podwalks:', err)
    }
}

// Function to clear existing markers
const clearMarkers = () => {
    markers.value.forEach(marker => marker.remove())
    markers.value = []
}

// Function to add markers for podwalks
const addPodwalkMarkers = () => {
    if (!map.value || !podwalks.value.length) return

    console.log('📍 Adding markers for', podwalks.value.length, 'podwalks')

    // Clear existing markers first
    clearMarkers()

    podwalks.value.forEach((podwalk: Podwalk) => {
        // Create a fresh popup each time
        const currentPopup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="bg-npo-blue-600 text-white rounded-lg shadow-lg w-64">
            <img src="${podwalk.cover_image.file.url}" alt="${podwalk.name}" class="w-full h-20 object-cover rounded-lg mb-2">
            <p class="m-0 text-base font-bold text-left ml-2">${podwalk.name}</p>
            <p class="m-0 mb-1 text-sm text-left ml-2">${podwalk.place}</p>
            <p class="m-0 text-xs text-gray-200 text-left ml-2"></p>
            <div class="flex items-center ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"
                                    fill="none" class="inline align-middle mr-1" style="vertical-align: middle;">
                                    <path
                                        d="M7.5 7.5H7C7 7.63261 7.05268 7.75979 7.14645 7.85355L7.5 7.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM7 3V7.5H8V3H7ZM7.14645 7.85355L10.1464 10.8536L10.8536 10.1464L7.85355 7.14645L7.14645 7.85355Z"
                                        fill="#ffffff" />
                                </svg>
                                ${Math.round(podwalk.bounds.length.minutes)} min</p>
                                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
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
                                ${Math.round(podwalk.bounds.length.km)} km</p>
                                </div>
            <div class="px-2 pb-2">
              <button
                onclick="window.goToPodwalkDetails && window.goToPodwalkDetails(${podwalk.id})"
                class="w-full py-1 bg-white text-npo-blue-600 font-semibold rounded text-xs hover:bg-gray-100 transition"
              >
                Bekijk details
              </button>
            </div>
          </div>
        `)

        // Create a custom marker element
        const markerElement = document.createElement('div')
        markerElement.className = 'podwalk-marker'
        markerElement.style.cssText = `
      width: 20px;
      height: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    `

        // Create a child element for the visual part
        const markerVisual = document.createElement('div')
        markerVisual.style.cssText = `
      background-color: #FF6B35;
      width: 20px;
      height: 20px;
      border: 2px solid #1F3353;
      border-radius: 50%;
      transition: transform 0.2s ease;
      transform-origin: center center;
    `

        markerElement.appendChild(markerVisual)

        // Add hover effect to the visual element, not the marker element
        markerElement.addEventListener('mouseenter', () => {
            markerVisual.style.transform = 'scale(1.1)'
        })
        markerElement.addEventListener('mouseleave', () => {
            markerVisual.style.transform = 'scale(1)'
        })

        // Create and add the marker
        const marker = new mapboxgl.Marker(markerElement)
            .setLngLat([podwalk.lng, podwalk.lat])
            .setPopup(currentPopup)
            .addTo(map.value!)

        // Store the marker reference
        markers.value.push(marker)

        console.log(`📍 Added marker for "${podwalk.name}" at [${podwalk.lng}, ${podwalk.lat}]`)
    })

    // Optionally fit the map to show all markers
    if (markers.value.length > 0) {
        fitMapToMarkers()
    }
}

// Function to fit the map to show all markers
const fitMapToMarkers = () => {
    if (!map.value || !podwalks.value.length) return

    const bounds = new mapboxgl.LngLatBounds()

    podwalks.value.forEach((podwalk: Podwalk) => {
        bounds.extend([podwalk.lng, podwalk.lat])
    })

    map.value.fitBounds(bounds, {
        padding: 50, // Add some padding around the markers
        maxZoom: 10  // Don't zoom in too much
    })

    console.log('🗺️ Map fitted to show all', podwalks.value.length, 'podwalk markers')
}

const initializeMap = () => {
    if (!mapboxToken) {
        console.error('❌ Cannot initialize map: Mapbox token is missing');
        return;
    }

    console.log('🗺️ Initializing Mapbox map...');

    try {
        const mapInstance = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [5.2913, 52.1326], // Netherlands coordinates
            zoom: 7,
            attributionControl: false,
            maxBounds: [
                [2.5, 50.0],
                [8.0, 54.0]
            ]
        });

        map.value = mapInstance;

        // Add zoom and rotation controls to the top-right corner.
        mapInstance.addControl(new mapboxgl.NavigationControl({ showCompass: true }), 'right');

        // Add style switcher control (satellite and streets)
        class StyleSwitcherControl {
            onAdd(map) {
                this._map = map;
                this._container = document.createElement('div');
                this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';

                // Satellite button
                const satBtn = document.createElement('button');
                satBtn.type = 'button';
                satBtn.title = 'Satellite View';
                satBtn.innerHTML = '🛰️';
                satBtn.onclick = () => {
                    map.setStyle('mapbox://styles/mapbox/satellite-streets-v12');
                };

                // Streets button
                const streetBtn = document.createElement('button');
                streetBtn.type = 'button';
                streetBtn.title = 'Streets View';
                streetBtn.innerHTML = '🗺️';
                streetBtn.onclick = () => {
                    map.setStyle('mapbox://styles/mapbox/streets-v11');
                };

                this._container.appendChild(satBtn);
                this._container.appendChild(streetBtn);

                return this._container;
            }
            onRemove() {
                this._container.parentNode.removeChild(this._container);
                this._map = undefined;
            }
        }

        mapInstance.addControl(new StyleSwitcherControl(), 'right');

        mapInstance.on('load', () => {
            console.log('✅ Mapbox map loaded successfully');
            addPodwalkMarkers()
        });

        mapInstance.on('error', (e) => {
            console.error('❌ Mapbox error:', e);
        });

    } catch (error) {
        console.error('❌ Error initializing map:', error);
    }
};

// Watch for changes in podwalks data and update markers
watch(podwalks, (newPodwalks) => {
    console.log('🔄 Podwalks data updated, refreshing markers...')
    if (map.value && newPodwalks.length > 0) {
        addPodwalkMarkers()
    }
}, { deep: true })

// Watch for loading state changes
watch(isLoading, (loading) => {
    console.log('⏳ Loading state:', loading)
})

// Watch for errors
watch(error, (errorMessage) => {
    if (errorMessage) {
        console.error('💥 Store error:', errorMessage)
    }
})

onMounted(async () => {
    // First fetch the podwalks data
    await fetchAndLogPodwalks()

    // Then initialize the map
    if (mapboxToken) {
        initializeMap();
    }
});

onBeforeUnmount(() => {
    // Clean up markers
    clearMarkers()

    // Remove map
    if (map.value) {
        map.value.remove();
    }
});

window.goToPodwalkDetails = (id) => {
    router.push(`/podwalk/${id}`)
}
</script>

<style scoped>
@import 'mapbox-gl/dist/mapbox-gl.css';

#map {
    width: 100%;
    height: 100%;
}

/* Custom styles for podwalk markers */
:deep(.podwalk-marker) {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Custom popup styles */
:deep(.mapboxgl-popup-content) {
    border-radius: 8px;
    box-shadow: 0 4px 12px hsl(217 82% 6%);
    background: #003087 !important;
    /* npo-blue-600 */
    color: #fff !important;
    border: none !important;
    padding: 0 !important;
}

:deep(.mapboxgl-popup-tip) {
    border-top-color: hsl(217 82% 6%) !important;
}
</style>