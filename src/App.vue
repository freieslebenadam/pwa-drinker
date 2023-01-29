<template>
  <div id="app">
    <AppNavbar />
    
    <main class="container-fluid container-md pt-4">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  components: {AppNavbar}
}
</script>
