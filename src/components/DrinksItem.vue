<template>
  <div class="card rounded shadow">
    <img :src="cocktailImage" alt="Drink image" class="card-img-top" height="300">
    <div class="card-body">
      <h4 class="card-title">{{ name }}</h4>
      <p class="card-text text-muted description">{{ description }}</p>      
      <RouterLink :to="`/drinks/${id}`" class="btn btn-primary w-100">Detail</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "DrinksItem",
  props: ["name", "description", "img", "id"],
  components: { RouterLink },
  computed: {
    cocktailImage() {
      return this.img ?? "https://via.placeholder.com/300x380";
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: 50% 80%;
}

.description {
  height: 126px;
  overflow: hidden;
}
</style>