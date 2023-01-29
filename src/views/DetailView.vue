<template>
  <div v-if="!cocktail">Loading...</div>
  <div v-else class="card shadow rounded">
    <div class="card-body row p-0">
      <img :src="cocktail.image" alt="Drink image" class="d-none d-lg-block col-12 col-lg-6 p-0 rounded-start">
      <div class="col-12 col-lg-6 p-5">
        <h3 class="card-title h1 pb-2">{{ cocktail.name }}</h3>
        <div class="d-flex gap-1 flex-wrap">
          <span v-for="tag in cocktail.tags" class="badge bg-secondary px-3 py-2">{{ tag }}</span>
        </div>
        
        <hr class="border-secondary">
        
        <div class="row my-4 px-4 text-nowrap">
          <div class="col-12 col-sm-6">
            <DrinkStat type="time" value="2 minutes" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="ingredients" :value="`${cocktail.ingredients.length} ingredients`" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="level" value="medium" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="glass" :value="cocktail.glass" />
          </div>
        </div>
        
        <p class="card-text text-muted">{{ cocktail.description }}</p>
        <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto dicta earum eaque quos, qui facilis eveniet, fuga porro a dolores dolorum eum dolorem debitis iste eos ipsum inventore aliquam!</p>
      </div>
      <img :src="cocktail.image" alt="Drink image" class="d-block d-lg-none col-12 col-lg-6 rounded-bottom">
    </div>
  </div>
</template>

<script>
import DrinkStat from '@/components/DrinkStat.vue';

export default {
  components: { DrinkStat },
  computed: {
    cocktail() {
      return this.$store.state.currentCocktail;
    }
  },
  mounted() {
    this.$store.dispatch("fetchCocktail", this.$route.params.id);
  }
}
</script>
