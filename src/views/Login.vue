<script setup lang="ts">
import { ref } from "vue";
import { userStore } from "../stores/user";

const _email = ref("");
const _password = ref("");
</script>

<template>
  <section>
    <h1>Login or register</h1>
    <form>
      <input type="email" placeholder="Email" v-model="_email" />
      <input type="password" placeholder="Password" v-model="_password" />
      <div>
        <button type="button" @click="userStore.login(_email, _password)">
          Login
        </button>
        <button type="button" @click="userStore.register(_email, _password)">
          Register
        </button>
      </div>
    </form>
  </section>
</template>
