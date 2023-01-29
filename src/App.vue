<template>
  <div id="app">
    <AppNavbar />
    
    <main class="container-fluid container-md py-4">
      <router-view/>
    </main>
    
    <div v-if="offline" class="position-fixed bottom-0 shadow-lg alert alert-danger alert-dismissible fade show" role="alert">
      You are currently <strong>offline!</strong>.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar.vue";

export default {
  components: {AppNavbar},
  computed: {
    offline() {
      return this.$store.state.offline;
    }
  }
}
</script>
