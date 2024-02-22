<template>
  <div class="lg:px-64 py-0.5 sm:px-0">
    <Navbar/>
    <router-view/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
