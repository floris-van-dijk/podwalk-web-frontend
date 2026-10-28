<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-npo-blue-600/85 backdrop-blur-lg">
    <DesktopNav
        :user-logged-in="userLoggedIn"
        @toggle-search="toggleSearch"
        @logout="handleLogout"
        class="hidden lg:flex"
    />

    <MobileNav
        :is-menu-open="mobileMenuOpen"
        @toggle-menu="toggleMobileMenu"
        @toggle-search="toggleSearch"
        class="lg:hidden"
    />

    <MobileMenu
        :is-open="mobileMenuOpen"
        :user-logged-in="userLoggedIn"
        @close="closeMobileMenu"
        @logout="handleLogout"
    />
  </nav>

  <SearchOverlay
      :is-open="searchOpen"
      @close="closeSearch"
      @podwalk-selected="selectPodwalk"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { RootState } from "@/store";
import { Podwalk } from "@/types/podwalk";

import DesktopNav from './DesktopNav.vue';
import MobileNav from './MobileNav.vue';
import MobileMenu from './MobileMenu.vue';
import SearchOverlay from './SearchOverlay.vue';

const store = useStore<RootState>();
const router = useRouter();

// State
const mobileMenuOpen = ref(false);
const searchOpen = ref(false);

// Computed
const userLoggedIn = computed(() => store.getters['auth/isAuthenticated']);

// Methods
const toggleMobileMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value;
const closeMobileMenu = () => mobileMenuOpen.value = false;

const toggleSearch = () => {
  searchOpen.value = !searchOpen.value;
  if (searchOpen.value) {
    mobileMenuOpen.value = false; // Sluit mobiel menu als zoekbalk opent
  }
};
const closeSearch = () => searchOpen.value = false;

const handleLogout = () => {
  store.dispatch('auth/logout');
  closeMobileMenu(); // Zorg ervoor dat het menu sluit na uitloggen
  router.push('/');
};

const selectPodwalk = (podwalk: Podwalk) => {
  router.push(`/podwalk/${podwalk.id}`);
  closeSearch();
};

// Lifecycle and Watchers
watch(() => router.currentRoute.value, () => {
  closeMobileMenu();
});

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    if (searchOpen.value) closeSearch();
    else if (mobileMenuOpen.value) closeMobileMenu();
  }
};

onMounted(() => {
  store.dispatch('auth/restoreAuth');
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>