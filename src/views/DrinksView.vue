<template>
  <div class="drinks">
    <h1 class="d-flex gap-2 align-items-center justify-content-center justify-content-md-start">
      <TextBoxMultipleOutline :size="40" />
      <span>Drinks</span>
    </h1>
    
    <div class="row mt-4">
      <div class="col-12 col-md-6 col-lg-4 col-xxl-3 px-5 px-md-0">
        <DrinksItem />
      </div>
    </div>
  </div>
</template>

<script>
import DrinksItem from '@/components/DrinksItem.vue';
import TextBoxMultipleOutline from "vue-material-design-icons/TextBoxMultipleOutline.vue";

export default {
    name: "DrinksView",
    components: { DrinksItem, TextBoxMultipleOutline }
}
</script>
