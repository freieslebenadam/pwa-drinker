<template>
  <div class="card rounded shadow">
    <img :src="img" alt="Drink image" class="card-img-top" height="200">
    <div class="card-body">
      <h4 class="card-title">Tequila Sunrise</h4>
      <p class="card-text text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolore cum, amet delectus.</p>      
      <RouterLink to="/drinks/1" class="btn btn-primary w-100">Detail</RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "DrinksItem",
  components: { RouterLink },
  data() {
    return {
      img: "https://images.unsplash.com/photo-1620917064753-c93fed918935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: 50% 80%;
}
</style>