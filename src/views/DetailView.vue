<template>
  <div class="card shadow rounded">
    <div class="card-body row p-0">
      <img :src="img" alt="Drink image" class="d-none d-lg-block col-12 col-lg-6 p-0 rounded-start">
      <div class="col-12 col-lg-6 p-5">
        <h3 class="card-title h1 text-center">Tequila Sunrise</h3>
        <hr class="border-secondary">
        
        <div class="row my-4 px-4 text-nowrap">
          <div class="col-12 col-sm-6">
            <DrinkStat type="time" value="2 minutes" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="ingredients" value="4 ingredients" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="level" value="medium" />
          </div>
          <div class="col-12 col-sm-6">
            <DrinkStat type="glass" value="long glass" />
          </div>
        </div>
        
        <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas delectus necessitatibus alias assumenda quisquam, quidem dolor corporis eius accusamus maiores animi commodi cupiditate iste. Vitae provident saepe atque commodi quo. Nesciunt sint dolore cumque sed ex similique cum sit magni laudantium.</p>
        <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, architecto dicta earum eaque quos, qui facilis eveniet, fuga porro a dolores dolorum eum dolorem debitis iste eos ipsum inventore aliquam!</p>
      </div>
      <img :src="img" alt="Drink image" class="d-block d-lg-none col-12 col-lg-6 rounded-bottom">
    </div>
  </div>
</template>

<script>
import DrinkStat from '@/components/DrinkStat.vue';

export default {
    data() {
        return {
            img: "https://images.unsplash.com/photo-1620917064753-c93fed918935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        };
    },
    components: { DrinkStat }
}
</script>
