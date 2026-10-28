<template>
  <footer v-if="showFooter" class="bg-gradient-to-b from-npo-blue-400 to-npo-blue-900 text-npo-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

        <!-- Logo and Links Section -->
        <div class="space-y-6 flex flex-col items-center sm:items-start">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <span class="text-npo-white font-bold text-lg">hoor alles met</span>
            <img src="@/assets/npo-luister-logo.png" alt="NPO Luister logo" class="h-12 aspect-auto">
          </div>

          <!-- Links -->
          <nav class="flex flex-col items-start space-y-3">
            <FooterLink href="#" text="Algemene voorwaarden" />
            <FooterLink href="#" text="Privacybeleid" />
          </nav>

          <!-- Social Media -->
          <div class="flex space-x-4 pt-2">
            <SocialLink
                href="#"
                icon="facebook"
                ariaLabel="Volg ons op Facebook"
            />
            <SocialLink
                href="#"
                icon="instagram"
                ariaLabel="Volg ons op Instagram"
            />
          </div>
        </div>

        <!-- App Download Section -->
        <div class="space-y-6">
          <h3 class="text-lg font-semibold">Download de app</h3>

          <div class="flex flex-col items-center justify-start gap-4">
            <!-- App Store Button -->
            <StoreButton
                store="apple"
                class="w-12"
            />

            <!-- Google Play Button -->
            <StoreButton
                store="google"
            />
          </div>
        </div>


        <!-- Newsletter Section -->
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">
              Elke week het beste van NPO Luister in jouw mailbox
            </h3>
            <p class="text-npo-grey text-sm leading-relaxed">
              Meld je gratis aan voor onze wekelijkse nieuwsbrief.<br>
              Uitschrijven kan op elk moment.
            </p>
          </div>

          <!-- Newsletter Form -->
          <NewsletterForm />
        </div>
      </div>
    </div>

    <!-- Bottom Border -->
    <div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p class="text-center text-npo-grey text-sm">
          © {{ currentYear }} NPO Luister. Alle rechten voorbehouden.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FooterLink from "@/components/Footer/FooterLink.vue";
import SocialLink from "@/components/Footer/SocialLink.vue";
import StoreButton from "@/components/Footer/StoreButton.vue";
import NewsletterForm from "@/components/Footer/NewsletterForm.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const showFooter = computed(() => {
  const hiddenFooterPaths = ['view-podwalks', 'login', 'register']
  return !hiddenFooterPaths.some(path => route.fullPath.includes(path))
})

const currentYear = computed(() => new Date().getFullYear())
</script>