import { ref, onBeforeUnmount, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';


export function useMapbox() {

  onMounted(() => {
    console.log();
  });

  const map = ref<mapboxgl.Map | null>(null);

  const initializeMap = (
    containerId: string,
    options: Partial<mapboxgl.MapOptions> = {}
  ) => {
    const mapInstance = new mapboxgl.Map({
      container: containerId,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5.2913, 52.1326],
      zoom: 7,
      attributionControl: false,
      ...options,
    });

    map.value = mapInstance;
    return mapInstance;
  };

  const addClickListener = (callback: (e: mapboxgl.MapMouseEvent) => void) => {
    if (map.value) {
      map.value.on('click', callback);
    }
  };

  const cleanup = () => {
    if (map.value) {
      map.value.remove();
      map.value = null;
    }
  };

  onBeforeUnmount(cleanup);

  return {
    map,
    initializeMap,
    addClickListener,
    cleanup,
  };
}
