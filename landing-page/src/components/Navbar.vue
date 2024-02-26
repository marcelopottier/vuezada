<template>
  <div class="flex items-center justify-center lg:justify-between lg:px-40 py-4 bg-cinza-claro text-white">
    <div class="hidden lg:block">
      <!-- Logo será visível apenas em telas maiores que o tamanho "sm" -->
      <img src="../assets/logo-nav.png" alt="Logo" class="lg:w-40 md:w-10">
    </div>
    <div class="flex items-center lg:space-x-8 gap-10 sm:space-x-6">
      <!-- Links da navbar -->
      <a href="/" class="font-semibold">Home</a>
      <a href="/about" class="font-semibold">Sobre</a>
      <a href="/contact" class="font-semibold">Contato</a>
      <a href="https://api.whatsapp.com/send?phone=554796679337" class="md:px-4 text-[13px] py-2.5 rounded-md bg-laranja-suave text-white hover:text-cinza-claro transition-all duration-150 ease-in-out transform font-semibold">Entrar em contato</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
