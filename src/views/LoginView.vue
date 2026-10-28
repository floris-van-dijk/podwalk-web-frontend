<template>
  <AuthLayout>
    <AuthHeader
        title="Log in op je account"
        leadText="Nog geen account?"
        linkText="Maak hier je account aan"
        linkTo="/register"
    />

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-[80%] self-center">
      <div class="bg-npo-blue-300 py-8 px-4 shadow sm:rounded-lg sm:px-10 rounded-xl">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <FormInput id="email" label="E-mailadres" type="email" autocomplete="email"
                     placeholder="Vul je e-mailadres in" v-model="form.email" :error="errors.email" />

          <FormInput id="password" label="Wachtwoord" type="password" autocomplete="current-password"
                     placeholder="Vul je wachtwoord in" v-model="form.password" :error="errors.password" />

          <AlertMessage :message="loginError" type="error" />

          <SubmitButton :isLoading="isLoading" loadingText="Aan het inloggen...">
            Log in
          </SubmitButton>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import type { RootState } from '@/store';
import AuthLayout from "@/components/Auth/AuthLayout.vue";
import AuthHeader from "@/components/Auth/AuthHeader.vue";
import FormInput from "@/components/Auth/FormInput.vue";
import AlertMessage from "@/components/Auth/AlertMessage.vue";
import SubmitButton from "@/components/Auth/SubmitButton.vue";

const router = useRouter();
const store = useStore<RootState>();

const form = reactive({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: ''
});

const isLoading = computed(() => store.getters['auth/isLoading']);
const loginError = computed(() => store.state.auth.error);

const validateForm = () => {
  let isValid = true;
  errors.email = '';
  errors.password = '';

  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Voer een geldig e-mailadres in';
    isValid = false;
  }
  if (!form.password) {
    errors.password = 'Wachtwoord is verplicht';
    isValid = false;
  }
  return isValid;
};

const handleLogin = async () => {
  if (!validateForm()) return;
  try {
    await store.dispatch('auth/login', {
      email: form.email,
      password: form.password
    });
    router.push('/');
  } catch (error) {
    console.error('Inloggen mislukt:', error);
  }
};
</script>