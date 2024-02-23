<template>
  <div class="lg:px-64 py-0.5 sm:px-0 bg-emerald-400">
    <Navbar/>   
  <section>
    <div class="pt-10 md:pt-40 flex justify-around items-center bg-emerald-400 md:bg-white">
      <div class="max-w-lg w-full px-4 md:px-0">
        <div class="grid gap-4">
          <span class="text-red-500 font-bold text-center md:text-left">Texto exemplo muito legal</span>
          <span class="font-bold text-4xl text-center md:text-left md:text-6xl">Psicopedagodia muito boa!</span>
          <div>
            <span class="text-purple-40 md:text-left">
              Temos o melhor atendimento da regiao serio mesmo
            </span>
          </div>
        </div>
        <div class="flex items-center justify-center md:justify-start space-x-6 pt-4">
          <a href="#" class="px-4 py-2.5 rounded-md bg-yellow-300 text-white">Descubra Mais</a>
          <a href="#" class="md:hidden px-4 py-2.5 rounded-md bg-yellow-300 text-white">Descubra Mais</a>
        </div>
      </div>
      <div class="hidden md:block max-w-lg w-full px-4 md:px-0 md:justify-end">
        <!-- Contêiner separado para a imagem -->
        <div>
          <!-- Apenas a imagem será justificada à esquerda em telas médias e grandes -->
          <img src="../assets/professional.jfif" class="md:justify-start">
        </div>
      </div>
    </div>
    <!-- Div movida para estar abaixo da seção que contém a imagem -->
    <div class=" md:hidden custom-shape-divider-top-1708643060">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="hidden md:block custom-shape-divider-top-1708699010">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
  </div>
  <div class="lg:px-64 py-0.5 sm:px-0 md:bg-black">
    <section>
    <div class="md:pt-40 pt-28 flex justify-around items-center bg-emerald-100 md:bg-white">
      <div class="max-w-lg w-full px-4 md:px-0 text-center">
        <div class="grid gap-4">
          <span class="text-red-500 font-bold text-center md:text-center">Texto exemplo muito legal</span>
          <span class="font-bold text-4xl text-center md:text-center md:text-6xl">Psicopedagodia muito boa!</span>
          <div>
            <span class="text-purple-40 md:text-left">
              Temos o melhor atendimento da regiao serio mesmo
            </span>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-6 pt-4">
          {{ product.title }}
        </div>
      </div>
    </div>
  </section>
  </div>
</template>



<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Home',
  components: {
    Navbar
  },
data() {
  return {
    products: [
      {
        title: 'Diversão',
        color: 'green',
        bgText 'DIVERSÃO',
        src: require('./')
      },
      {
        title: 'Diversão',
        color: 'blue',
        bgText 'DIVERSÃO',
        src: require('./')
      },
      {
        title: 'Diversão',
        color: 'red',
        bgText 'DIVERSÃO',
        src: require('./')
      }
    ]
  }
}
}
</script>
  
<style scoped>

@media (min-width: 768px) {
  .custom-shape-divider-top-1708699010 {
        margin-top: 49rem/* 384px */;
    }
    .custom-shape-divider-top-1708699010 {
        margin-bottom: -6rem/* 384px */;
    }
}
.custom-shape-divider-top-1708699010 {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}
.custom-shape-divider-top-1708699010 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 191px;
}

.custom-shape-divider-top-1708699010 .shape-fill {
    fill: #34d399;
}
.custom-shape-divider-top-1708643060 {
    position: absolute;
    top: 359px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-top-1708643060 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 101px;
}
.custom-shape-divider-top-1708643060 .shape-fill {
    fill: #34d399;
}
</style>
