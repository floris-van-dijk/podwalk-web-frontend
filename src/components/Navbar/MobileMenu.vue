<template>
  <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 transform -translate-y-full"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-full"
  >
    <div v-if="isOpen" class="lg:hidden absolute top-16 left-0 right-0 bg-npo-blue-600/85 backdrop-blur-lg border-t border-npo-blue-400" role="menu">
      <div class="px-4 py-6 space-y-6 flex flex-col items-center">
        <router-link @click="$emit('close')" to="/" class="flex flex-row font-npo text-lg gap-2" :class="{ 'text-npo-orange': $route.path === '/' }" role="menuitem" aria-label="Ga naar de thuispagina">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.08848 4.76243L6.08847 5.54298C4.57181 6.72681 3.81348 7.31873 3.40674 8.15333C3 8.98792 3 9.95205 3 11.8803V13.9715C3 17.7562 3 19.6485 4.17157 20.8243C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8243C21 19.6485 21 17.7562 21 13.9715V11.8803C21 9.95205 21 8.98792 20.5933 8.15333C20.1865 7.31873 19.4282 6.72681 17.9115 5.54298L16.9115 4.76243C14.5521 2.92081 13.3724 2 12 2C10.6276 2 9.44787 2.92081 7.08848 4.76243Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
          Thuis
        </router-link>
        <router-link @click="$emit('close')" to="/view-podwalks" class="flex flex-row font-npo text-lg gap-2" :class="{ 'text-npo-orange': $route.path === '/view-podwalks' }" role="menuitem" aria-label="Bekijk alle podwalks op de kaart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.25345 4.19584L4.02558 4.90813C3.03739 5.48137 2.54329 5.768 2.27164 6.24483C2 6.72165 2 7.30233 2 8.46368V16.6283C2 18.1542 2 18.9172 2.34226 19.3418C2.57001 19.6244 2.88916 19.8143 3.242 19.8773C3.77226 19.9719 4.42148 19.5953 5.71987 18.8421C6.60156 18.3306 7.45011 17.7994 8.50487 17.9435C8.98466 18.009 9.44231 18.2366 10.3576 18.6917L14.1715 20.588C14.9964 20.9982 15.004 21 15.9214 21H18C19.8856 21 20.8284 21 21.4142 20.4013C22 19.8026 22 18.8389 22 16.9117V10.1715C22 8.24423 22 7.2806 21.4142 6.68188C20.8284 6.08316 19.8856 6.08316 18 6.08316H15.9214C15.004 6.08316 14.9964 6.08139 14.1715 5.6712L10.8399 4.01463C9.44884 3.32297 8.75332 2.97714 8.01238 3.00117C7.27143 3.02521 6.59877 3.41542 5.25345 4.19584Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 3V17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 6.5V20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Kaart
        </router-link>
        <router-link @click="$emit('close')" to="/faq" class="flex flex-row font-npo text-lg gap-2" :class="{ 'text-npo-orange': $route.path === '/faq' }" role="menuitem" aria-label="Ga naar de veelgestelde vragen pagina">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path d="M13.8793 15.9206L13.7529 16.4921C13.3736 16.6571 13.0709 16.782 12.8448 16.8667C12.6188 16.9556 12.3563 17 12.0575 17C11.5977 17 11.2395 16.8772 10.9828 16.6317C10.7299 16.382 10.6034 16.0667 10.6034 15.6857C10.6034 15.5376 10.613 15.3873 10.6322 15.2349C10.6513 15.0783 10.682 14.9026 10.7241 14.7079L11.1954 12.854C11.2375 12.6762 11.272 12.509 11.2989 12.3524C11.3295 12.1915 11.3448 12.0455 11.3448 11.9143C11.3448 11.6772 11.3008 11.5122 11.2126 11.419C11.1245 11.3259 10.9559 11.2794 10.7069 11.2794C10.5843 11.2794 10.4579 11.3005 10.3276 11.3429C10.2011 11.3852 10.092 11.4254 10 11.4635L10.1264 10.8921C10.4368 10.7524 10.7337 10.6339 11.0172 10.5365C11.3008 10.4349 11.569 10.3841 11.8218 10.3841C12.2778 10.3841 12.6284 10.5069 12.8736 10.7524C13.1226 10.9937 13.2471 11.309 13.2471 11.6984C13.2471 11.7788 13.2375 11.9206 13.2184 12.1238C13.2031 12.327 13.1724 12.5132 13.1264 12.6825L12.6552 14.5302C12.6169 14.6783 12.5824 14.8476 12.5517 15.0381C12.5211 15.2286 12.5057 15.3725 12.5057 15.4698C12.5057 15.7153 12.5556 15.8825 12.6552 15.9714C12.7548 16.0603 12.9272 16.1048 13.1724 16.1048C13.2874 16.1048 13.4176 16.0836 13.5632 16.0413C13.7088 15.9947 13.8142 15.9545 13.8793 15.9206ZM14 8.16825C14 8.48995 13.8889 8.76508 13.6667 8.99365C13.4483 9.21799 13.1839 9.33016 12.8736 9.33016C12.5632 9.33016 12.2969 9.21799 12.0747 8.99365C11.8525 8.76508 11.7414 8.48995 11.7414 8.16825C11.7414 7.84656 11.8525 7.57143 12.0747 7.34286C12.2969 7.11429 12.5632 7 12.8736 7C13.1839 7 13.4483 7.11429 13.6667 7.34286C13.8889 7.57143 14 7.84656 14 8.16825Z" fill="currentColor"/>
          </svg>
          FAQ
        </router-link>

        <div class="border-t border-npo-blue-400 pt-4 flex flex-col items-center space-y-4">
          <router-link v-if="userLoggedIn && isAdmin" @click="$emit('close')" to="/admin" class="flex flex-row font-npo text-lg gap-2" role="menuitem" aria-label="Ga naar de beheerpagina">
            <svg class="w-5 h-5 text-npo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.331.83 2.864 2.334a1.724 1.724 0 00.426 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-.426 2.573c.942 1.543-.83 3.331-2.334 2.864a1.724 1.724 0 00-2.573.426c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-.426c-1.543.942-3.331-.83-2.864-2.334a1.724 1.724 0 00-.426-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 00.426-2.573c-.942-1.543.83-3.331 2.334-2.864a1.724 1.724 0 002.573-.426z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="font-medium">Beheerpagina</span>
          </router-link>
          <button v-if="userLoggedIn" @click="handleLogout" class="flex flex-row font-npo text-lg gap-2" role="menuitem" aria-label="Uitloggen">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 7C8.99999 5.34315 10.3431 4 12 4C13.6568 4 15 5.34315 15 7C15 8.65685 13.6568 10 12 10C10.3431 10 8.99999 8.65685 8.99999 7ZM12 2C9.23857 2 6.99999 4.23858 6.99999 7C6.99999 9.76142 9.23857 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM5.36453 18.4379C5.66342 17.7063 6.20163 16.8657 7.1867 16.2018C8.17142 15.5381 9.67816 15 12.0001 15C14.322 15 15.8287 15.5381 16.8134 16.2018C17.7985 16.8657 18.3367 17.7063 18.6355 18.4379C18.6718 18.5266 18.6704 18.5848 18.6641 18.6208C18.6571 18.6603 18.6373 18.7097 18.5904 18.7647C18.4912 18.8811 18.2838 19 18.0001 19H6.00002C5.7163 19 5.50886 18.8811 5.40965 18.7647C5.36279 18.7097 5.34297 18.6603 5.33601 18.6208C5.32967 18.5848 5.32829 18.5266 5.36453 18.4379ZM12.0001 13C9.36151 13 7.44567 13.6154 6.0689 14.5433C4.69246 15.471 3.93027 16.6603 3.51306 17.6816C3.15382 18.5609 3.35626 19.4387 3.88743 20.0619C4.39712 20.66 5.17916 21 6.00002 21H18.0001C18.8209 21 19.6029 20.66 20.1126 20.062C20.6438 19.4387 20.8462 18.561 20.487 17.6816C20.0698 16.6603 19.3077 15.471 17.9312 14.5433C16.5545 13.6154 14.6386 13 12.0001 13Z" fill="currentColor"/></svg>
            <span class="font-medium">Uitloggen</span>
          </button>
          <router-link v-else @click="$emit('close')" to="/login" class="flex flex-row font-npo text-lg gap-2" role="menuitem" aria-label="Inloggen">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.99999 7C8.99999 5.34315 10.3431 4 12 4C13.6568 4 15 5.34315 15 7C15 8.65685 13.6568 10 12 10C10.3431 10 8.99999 8.65685 8.99999 7ZM12 2C9.23857 2 6.99999 4.23858 6.99999 7C6.99999 9.76142 9.23857 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM5.36453 18.4379C5.66342 17.7063 6.20163 16.8657 7.1867 16.2018C8.17142 15.5381 9.67816 15 12.0001 15C14.322 15 15.8287 15.5381 16.8134 16.2018C17.7985 16.8657 18.3367 17.7063 18.6355 18.4379C18.6718 18.5266 18.6704 18.5848 18.6641 18.6208C18.6571 18.6603 18.6373 18.7097 18.5904 18.7647C18.4912 18.8811 18.2838 19 18.0001 19H6.00002C5.7163 19 5.50886 18.8811 5.40965 18.7647C5.36279 18.7097 5.34297 18.6603 5.33601 18.6208C5.32967 18.5848 5.32829 18.5266 5.36453 18.4379ZM12.0001 13C9.36151 13 7.44567 13.6154 6.0689 14.5433C4.69246 15.471 3.93027 16.6603 3.51306 17.6816C3.15382 18.5609 3.35626 19.4387 3.88743 20.0619C4.39712 20.66 5.17916 21 6.00002 21H18.0001C18.8209 21 19.6029 20.66 20.1126 20.062C20.6438 19.4387 20.8462 18.561 20.487 17.6816C20.0698 16.6603 19.3077 15.471 17.9312 14.5433C16.5545 13.6154 14.6386 13 12.0001 13Z" fill="currentColor"/></svg>
            <span class="font-medium">Inloggen</span>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';

const props = defineProps<{
  isOpen: boolean,
  userLoggedIn: boolean
}>();

const emit = defineEmits(['close', 'logout']);

const store = useStore<RootState>();
const isAdmin = computed(() => store.getters['auth/isAdmin']);

const handleLogout = () => {
  emit('logout');
  emit('close');
};
</script>