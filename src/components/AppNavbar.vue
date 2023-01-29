<template>
  <nav class="navbar navbar-expand-lg bg-primary navbar-dark shadow">
    <div class="container-fluid container-md">
      <RouterLink to="/drinks" class="navbar-brand d-flex gap-2 align-items-center">
        <GlassCocktail />
        <span>Drinker</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import GlassCocktail from "vue-material-design-icons/GlassCocktail.vue";

  export default {
    name: "AppNavbar",
    components: { RouterLink, GlassCocktail }
}
</script>
