<template>
  <section
    id="profil"
    class="bg-[#F5E9DC] container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
  >
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1
        class="text-5xl font-bold text-gray-800 mb-4 animate-slide-in-left"
        style="animation-delay: 200ms;"
      >
        Halo
      </h1>

      <p
        class="text-xl text-gray-700 mb-8 animate-slide-in-left"
        style="animation-delay: 400ms;"
      >
        Saya mahasiswa Informatika di Universitas Amikom Yogyakarta. Website ini saya buat sebagai portofolio pribadi untuk menampilkan informasi, pengalaman, dan proyek yang telah saya kerjakan.
      </p>

      <a
        href="#kontak"
        class="bg-white text-[#A9746E] border border-[#A9746E] font-bold py-3 px-6 rounded-lg hover:bg-[#A9746E] hover:text-white transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms;"
      >
        Kontak Saya
      </a>
    </div>

    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img :src="kina" alt="Foto Profil" class="w-80 h-80 rounded-full object-cover shadow-lg" />
    </div>
  </section>
</template>

<script setup>
import kina from '@/assets/kinah.jpg'
</script>
