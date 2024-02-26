<template>
  <Navbar/>
  <div class="lg:px-60 py-0.5 sm:px-0 bg-cinza-claro pb-10" id="content">  
  <section class="text-white">
    <div class="pt-10 md:pt-20 lg:pt-32 flex justify-around flex-col lg:flex-row items-center bg-azul-claro md:bg-cinza-claro">
      <div class="max-w-lg w-full px-4 md:px-0">
        <div class="grid gap-4">
          <span class="text-red-500 font-bold text-center md:text-left">Texto exemplo muito legal</span>
          <span class="font-bold text-4xl text-left md:text-3xl lg:text-6xl">Psicopedagodia muito boa!</span>
          <div>
            <span class="text-purple-40 text-center lg:text-left">
              Temos o melhor atendimento da regiao serio mesmo
            </span>
          </div>
        </div>
        <div class="flex items-center justify-center md:justify-start space-x-6 pt-10">
          <a href="https://api.whatsapp.com/send?phone=554796679337" class="px-4 py-2.5 rounded-md bg-laranja-suave text-white hover:text-cinza-claro transition-all duration-150 ease-in-out transform">Descubra Mais</a>
        </div>
      </div>
      <div class="max-w-lg w-full px-4 md:w-90 lg:w-full">
        <!-- Contêiner separado para a imagem -->
        <div class="flex justify-center">
          <!-- Apenas a imagem será justificada à esquerda em telas médias e grandes -->
          <img src="../assets/professional.png" id="professional">
        </div>
      </div>
    </div>
    <div class="hidden md:block absolute bottom--10 left-0 w-full overflow-hidden">
    </div>
  </section>
  </div>
  <div class="md:hidden absolute top-50 left-0 w-full overflow-hidden">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="relative block fill-cinza-claro"></path>
    </svg>
  </div>
  <div class="flex justify-center mt-10">
    <img src="../assets/logo-nav.png" alt="Logo" class="lg:w-40 md:w-10">
  </div>
  <div class="lg:px-64 py-0.5 sm:px-0 md:bg-black bg-cinza" id="content-card">
  <section class="" id="home">
    <div class="pt-1 mt-10 flex justify-around items-center bg-emerald-100 md:cinza-claro">
      <div class="w-full px-4 md:px-0 text-center">
        <div class="grid gap-4">
          <span class="font-bold text-2xl md:text-3xl lg:text-4xl">Seu filho se encontra com algum dos pontos abaixo?</span>
          <span class="font-semibold text-2xl">Eu posso ajuda-lo!</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:flex-row justify-items-center lg:justify-items-end  md:space-x-6 pt-4">
      <Card 
        v-for="product in products"
        :key="product.color"
        :product="product"
      />
    </div>
  </section>
  </div>
  <div class="lg:px-60 py-0.5 sm:px-0" id="card-content">
    <section class="m-10 border-0 rounded-lg bg-azul-escuro">
      <div class="max-w-lg w-full px-4 md:px-10 p-10">
          <div class="grid gap-4">
            <span class="text-red-500 font-bold text-left">Texto exemplo muito legal</span>
            <span class="font-bold text-4xl text-left text-verde-agua md:text-3xl">Psicopedagodia muito boa!</span>
            <div>
              <span class="text-purple-40 text-left">
                Temos o melhor atendimento da regiao serio mesmo
              </span>
            </div>
          </div>
          <div class="flex items-center justify-center md:justify-start space-x-6 pt-10">
            <a href="https://api.whatsapp.com/send?phone=554796679337" class="px-4 py-2.5 rounded-md bg-azul text-white hover:text-cinza-claro transition-all duration-150 ease-in-out transform">Agendar consulta</a>
          </div>
      </div>
    </section>
  </div>
  <Footbar/>
</template>



<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Navbar from '../components/Navbar.vue';
import Footbar from '../components/Footbar.vue';
import Card from '../components/Card.vue';
import adhd from '../assets/adhd.jpg'
import anxiety from '../assets/anxiety.jpg'
import hiperativo from '../assets/hiperativo.jpg'
import autonomia from '../assets/autonomia.jpeg'
import alfabeto from '../assets/alfabeto.jpg'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footbar,
    Card
  },
  data() {
  return {
    products: [
      {
        title: 'É desatento',
        color: 'green',
        bgText: 'DESATENTO',
        description: 'Pode ser um sinal de Transtorno do déficit de atenção.',
        src: adhd
      },
      {
        title: 'Tem ansiedade',
        color: 'blue',
        bgText: 'ANSIEDADE',
        description: 'Estuda, mas não tem bons resultados na escola.',
        src: anxiety
      },
      {
        title: 'Hiperativo',
        color: 'red',
        bgText: 'HIPERATIVO',
        description: 'Está sempre muito agitado.',
        src: hiperativo
      },
      {
        title: 'Não é alfabetizado',
        color: 'red',
        bgText: 'ALFABETIZADO',
        description: '',
        src: alfabeto
      },
      {
        title: 'Não tem autonomia',
        color: 'green',
        bgText: 'AUTONOMIA',
        description: '',
        src: autonomia
      },
      {
        title: 'Diversão',
        color: 'blue',
        bgText: 'DIVERSÃO',
        description: '',
        src: hiperativo
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
@media screen and (min-width: 1024px) and (max-width:  1300px) {
    #professional {
        width: 50%; /* Reduz a largura da imagem para 50% da largura da tela */
    }
    .lg\:px-60 {
        padding-left: 11rem/* 240px */;
        padding-right: 11rem/* 240px */;
    }
    .lg\:text-6xl {
        font-size: 40px;
        line-height: 1;
    }
}

@media screen and (min-width: 1024px) and (max-width:  1570px) {
    .lg\:px-64 {
        padding-left: 8rem/* 256px */;
        padding-right: 8rem/* 256px */;
    }
}

@media screen and (min-width: 1024px) and (max-width:  1150px) {
  #card-content{
    padding-left: 3rem/* 240px */;
    padding-right: 3rem/* 240px */;
  }
    .lg\:px-64 {
        padding-left: 1rem/* 256px */;
        padding-right: 1rem/* 256px */;
    }
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
