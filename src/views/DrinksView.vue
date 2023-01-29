<template>
  <div class="drinks">
    <h1 class="d-flex gap-2 align-items-center justify-content-center justify-content-md-start">
      <TextBoxMultipleOutline :size="40" />
      <span>Drinks</span>
    </h1>
    
    <div class="row g-4 g-lg-3 mt-4">
      <div v-if="loading">loading...</div>
      <div v-else v-for="cocktail in cocktails" class="col-12 col-md-6 col-lg-4 col-xxl-3 px-5 px-md-3 px-lg-2">
        <DrinksItem
          :id="cocktail.id"
          :name="cocktail.name"
          :img="cocktail.image"
          :description="cocktail.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DrinksItem from '@/components/DrinksItem.vue';
import TextBoxMultipleOutline from "vue-material-design-icons/TextBoxMultipleOutline.vue";

export default {
  name: "DrinksView",
  components: { DrinksItem, TextBoxMultipleOutline },
  computed: {
    cocktails() {
      return this.$store.state.cocktails;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  mounted() {
    this.$store.dispatch("fetchCocktails");
  }
}
</script>
