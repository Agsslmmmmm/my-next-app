'use client'
import NavbarPage from './components/NavbarPage';
import React from 'react';

const Page = () => {
  return (
    <main>
      <NavbarPage />

      
      <div class=" bg-gray-100 py-10 pt-12 flex flex-col justify-center relative overflow-hidden lg:py-12 items-center">
        <div class="relative w-full px-6 py-12 bg-white shadow-2xl mt-12 rounded-3xl md:rounded-3xl md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28 pt-8 max-w-lg">
          <article class="prose lg:prose-xl">
            <header class="mb-6">
              <h1 class="text-2xl font-bold text-gray-600">BAB 1. KONSEP DASAR SISTEM</h1>
            </header>

            <div class="prose">
              <h1 class="font-bold text-2xl text-gray-600 ml-2">1.1 Konsep Dasar Sistem</h1>
              <div className="mt-4">
                <span class="font-bold text-2xl text-gray-600 ml-3 pt-8">A. Definisi Sistem</span>
                <p class="text-lg text-gray-600 mt-4 ml-10">
                  Sistem adalah suatu kumpulan atau himpunan dari kegiatan, komponen, unsur, elemen atau variabel yang
                  terorganisir, saling berinteraksi dan saling berhubungan satu sama lain melakukan kerjasama dengan
                  cara-cara tertentu secara harmonis sehingga membentuk kesatuan untuk melaksanakan suatu fungsi untuk
                  mencapai tujuan yang telah ditetapkan. </p>
              </div>
            </div>

            <div class="prose mt-6">
              <p class="text-lg text-gray-600 mt-4 ml-10">
                Berikut definisi dan pengertian sistem dari beberapa sumber buku:</p>
            </div>

            <div class="prose mt-4">
              <p class="text-lg text-gray-600 mt-4 ml-10">
                <b>Menurut Djahir dan Pratita (2015)</b>, sistem adalah kumpulan/grup dari
                subsistem/bagian/komponen
                apapun, baik fisik ataupun nonfisik yang saling berhubungan satu sama
                lain dan bekerja sama
                secara
                harmonis untuk mencapai satu tujuan tertentu.
              </p>
            </div>

            <div class="prose mt-4">
              <p class="text-lg text-gray-600 mt-4 ml-10">
                <b>Menurut Hutahaean (2015)</b>, sistem adalah suatu jaringan kerja dari
                prosedur-prosedur yang
                saling
                berhubungan, berkumpul bersama-sama untuk melakukan kegiatan atau untuk
                melakukan sasaran yang
                tertentu.
              </p>
            </div>
            <div class="prose mt-4">
              <p class="text-lg text-gray-600 mt-4 ml-10">
                <b>Menurut Sutabri (2012)</b>, sistem adalah suatu kumpulan atau himpunan dari unsur, komponen, atau variabel yang terorganisir, saling berinteraksi, saling tergantung satu sama lain dan terpadu.
              </p>
            </div>
            <div class="prose mt-4">
              <p class="text-lg text-gray-600 mt-4 ml-10">
                <b>Menurut Mulyani (2016)</b>, sistem adalah sekumpulan subsistem, komponen ataupun element yang saling bekerja sama dengan tujuan yang sama untuk menghasilkan output yang sudah ditentukan sebelumnya.
                tertentu.
              </p>
            </div>
            <div className="prose mt-4">
              <p className="text-lg text-gray-600 mt-4 ml-10">
                <b>Menurut Sutanta (2003)</b>,  sistem adalah sekumpulan hal atau kegiatan atau elemen atau subsistem yang saling bekerja sama atau yang dihubungkan dengan cara-cara tertentu sehingga membentuk satu kesatuan untuk melaksanakan suatu fungsi guna mencapai suatu tujuan.
              </p>
            </div>


          </article>
        </div>
      </div>

    </main>
  );
};

export default Page;
