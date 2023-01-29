<template>
  <span class="text-muted fs-4 d-inline-flex align-items-center gap-3">
    <ClockOutline v-if="type === 'time'" :size="32" />
    <DeleteVariant v-if="type === 'ingredients'" :size="32" />
    <Speedometer v-if="type === 'level'" :size="32" />
    <GlassCocktail v-if="type === 'glass'" :size="32" />
    {{ value }}
  </span>
</template>

<script>
import ClockOutline from "vue-material-design-icons/ClockOutline.vue";
import DeleteVariant from "vue-material-design-icons/DeleteVariant.vue";
import Speedometer from "vue-material-design-icons/Speedometer.vue";
import GlassCocktail from "vue-material-design-icons/GlassCocktail.vue";

export default {
  name: "DrinkStat",
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  components: {
    ClockOutline,
    DeleteVariant,
    Speedometer,
    GlassCocktail
  }
}
</script>

<style lang="scss" scoped>

</style>