<template>
    <footer class="relative" id="contact-section">
        <div class="top-0 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="relative block fill-white"></path>
            </svg>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-20 pt-0 text-[18px]" id="grid">
            <div class="flex flex-col gap-5">
                <h2 class="text-3xl mt-7">Adapte Apendizagem</h2>
                <p>Somos uma clínica de atendimento especializado em Psicopedagodia, etc etc.</p>
            </div>
            <div class="flex flex-col gap-5">
                <ul>
                    <li class="my-4 list-none text-[22px] font-semibold text-white py-2 uppercase">Endereço</li>
                    <li class="my-4 list-none text-cinza">Rua Paulo Malschitzki - Zona Industrial Norte, Joinville - SC, 89219-710</li>
                    <li class="my-4 list-none text-cinza">Coworking Univille - Sala 2</li>
                </ul>
            </div>
            <div class="flex flex-col gap-5">
                <ul>
                    <li class="my-4 list-none text-[22px] font-semibold text-white py-2 uppercase">Horários</li>
                    <li class="my-4 list-none text-cinza">Segunda à Sexta:</li>
                    <li class="my-4 list-none text-cinza">das 08:00 às 18:00</li>
                </ul>
            </div>
            <div class="flex flex-col gap-2">
                <ul>
                    <li class="my-4 list-none text-[22px] font-semibold text-cinza py-2 uppercase">Contatos e Redes</li>
                    <li class="my-4 list-none text-cinza">Email: adapteaprendizagem@gmail.com</li>
                    <li class="my-4 list-none text-cinza">WhatsApp: (47) 9667-9337</li>
                </ul>
                <div class="flex">
                    <a class="text-white hover:text-laranja-suave transition-all duration-150 ease-in-out transform hover:scale-150" href="">  
                        <div class="w-6 m-0 p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <h6 class="text-center">
            Desenvolvido por
            <a class="text-semibold" href="https://github.com/marcelopottier">Marcelo Pottier</a>
        </h6>
    </footer>
  </template>
  
  
  <script>
  export default {
    name: 'Footbar'
  }
  </script>
  
  <style scoped>
    @media screen and (min-width: 1024px) and (max-width:  1200px) {
        #grid{
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
    #contact-section{
        background: rgb(47,78,252);
        background: linear-gradient(0deg, rgba(47,78,252,1) 0%, rgba(144,203,230,1) 61%, rgba(219,233,238,1) 100%);
  }
  </style>
  