<template>
  <div class="flex items-center justify-center lg:justify-between lg:px-4 py-4">
    <div class="hidden sm:block">
      <!-- Logo será visível apenas em telas maiores que o tamanho "sm" -->
      <img src="../assets/Screenshot_1.png" alt="Logo" class="lg:w-40 md:w-10">
    </div>
    <div class="flex items-center lg:space-x-8 gap-10 sm:space-x-6">
      <!-- Links da navbar -->
      <a href="/" class="font-semibold">Home</a>
      <a href="/about" class="font-semibold">Sobre</a>
      <a href="/contact" class="font-semibold">Contato</a>
      <a href="" class="border px-4 py-1.5 rounded-md border-black font-semibold">SAS</a>
    </div>
  </div>
  <hr class="w-full border-t border-gray-200">
</template>


<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
