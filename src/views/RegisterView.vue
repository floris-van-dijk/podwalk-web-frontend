<template>
  <AuthLayout>
    <AuthHeader
        title="Maak je account aan"
        leadText="Heb je al een account?"
        linkText="Log hier in"
        linkTo="/login" />

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md w-[80%] self-center">
      <div class="bg-npo-blue-300 py-8 px-4 shadow sm:rounded-lg sm:px-10 rounded-xl">
        <form class="space-y-6" @submit.prevent="handleRegister">
          <FormInput id="username" label="Gebruikersnaam" type="text" autocomplete="username"
                     placeholder="Vul je gebruikersnaam in" v-model="form.username" :error="errors.username" />

          <FormInput id="email" label="E-mailadres" type="email" autocomplete="email"
                     placeholder="Vul je e-mailadres in" v-model="form.email" :error="errors.email" />

          <FormInput id="password" label="Wachtwoord" type="password" autocomplete="new-password"
                     placeholder="Maak je sterke wachtwoord" v-model="form.password" :error="errors.password" />

          <FormInput id="confirmPassword" label="Herhaal wachtwoord" type="password" autocomplete="new-password"
                     placeholder="Herhaal je sterke wachtwoord" v-model="form.confirmPassword"
                     :error="errors.confirmPassword" />

          <div class="flex flex-col items-center text-sm text-npo-white">
            <p class="mb-1">Wachtwoord moet bevatten:</p>
            <ul class="flex flex-col items-start my-auto list-disc list-inside space-y-1">
              <li :class="passwordRequirements.length ? 'text-green-600' : 'text-npo-grey'">Ten minste 8 karakters</li>
              <li :class="passwordRequirements.uppercase ? 'text-green-600' : 'text-npo-grey'">Een hoofdletter</li>
              <li :class="passwordRequirements.lowercase ? 'text-green-600' : 'text-npo-grey'">Een kleine letter</li>
              <li :class="passwordRequirements.number ? 'text-green-600' : 'text-npo-grey'">Een nummer</li>
              <li :class="passwordRequirements.special ? 'text-green-600' : 'text-npo-grey'">Een speciaal karakter</li>
            </ul>
          </div>

          <AlertMessage :message="registerError" type="error" />
          <AlertMessage :message="registerSuccess" type="success" />

          <SubmitButton :isLoading="isLoading" :disabled="!isFormValid" loadingText="Account aan het maken...">
            Maak account aan
          </SubmitButton>
        </form>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
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
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const errors = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const registerSuccess = ref('');

const isLoading = computed(() => store.getters['auth/isLoading']);
const registerError = computed(() => store.state.auth.error);

const passwordRequirements = computed(() => ({
  length: form.password.length >= 8,
  uppercase: /[A-Z]/.test(form.password),
  lowercase: /[a-z]/.test(form.password),
  number: /[0-9]/.test(form.password),
  special: /[!@#$%^&*()_+\-={};':"\\|,.<>?]/.test(form.password),
}));

const isPasswordValid = computed(() => {
  return Object.values(passwordRequirements.value).every(req => req);
});

const isFormValid = computed(() => {
  return form.username.trim() &&
      form.email.trim() &&
      isPasswordValid.value &&
      form.password === form.confirmPassword;
});

const validateForm = () => {
  let isValid = true;
  Object.keys(errors).forEach(key => { errors[key as keyof typeof errors] = '' });

  if (!form.username.trim()) {
    errors.username = 'Gebruikersnaam is verplicht';
    isValid = false;
  }
  if (form.username.length > 32) {
    errors.username = 'Gebruikersnaam mag niet langer zijn dan 32 karakters';
    isValid = false;
  }
  if (!form.email.trim()) {
    errors.email = 'E-mailadres is verplicht';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Voer een geldig e-mailadres in';
    isValid = false;
  }
  if (!form.password) {
    errors.password = 'Wachtwoord is verplicht';
    isValid = false;
  } else if (!isPasswordValid.value) {
    errors.password = 'Wachtwoord voldoet niet aan de vereisten';
    isValid = false;
  }
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Wachtwoorden komen niet overeen';
    isValid = false;
  }
  return isValid;
};

const handleRegister = async () => {
  if (!validateForm()) return;
  registerSuccess.value = '';
  try {
    await store.dispatch('auth/register', {
      username: form.username,
      email: form.email,
      password: form.password
    });
    registerSuccess.value = 'Je account is aangemaakt! Je wordt ingelogd en doorverwezen...';
    setTimeout(() => {
      router.push('/');
    }, 1500);
  } catch (error) {
    console.error('Account aanmaken mislukt:', error);
  }
};
</script>