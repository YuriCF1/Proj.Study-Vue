<script lang="ts">
import Banner from './components/Banner.vue';
import ComponentePrincipal from './components/ComponentePrincipal.vue';

export default {
  // components: { Banner: Banner }
  components: { Banner, ComponentePrincipal }
}
</script>

<template>
  <Banner />
  <ComponentePrincipal />
</template>


<!-- PARA MAIS FEATURES DO CSS NO VUE: https://vuejs.org/api/sfc-css-features.html -->
<style scoped>
/* .titulo {
  color: red;
} */
</style>
