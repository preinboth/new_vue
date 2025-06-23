<template>
  <div>
    <h2>About View</h2>
    <p>{{ _vuename }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const _viewname = ref("About View");
</script>
