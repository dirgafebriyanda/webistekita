<template>
  <div v-cloak>
    <div class="py-5 jumbotron-gradient">
      <div class="container mt-3">
        <div class="row gy-4">
          <!-- Bagian Teks -->
          <div
            class="col-md-6 order-2 order-lg-1 lead fw-bold mb-0"
            data-aos="zoom-out"
          >
            <h1 class="display-4 text-light fw-bold">
              Website Modern dan Responsif
            </h1>
            <div class="text-dark">
              Jadikan bisnis Anda terlihat profesional dengan website modern
              yang cepat dan responsif. Kami siap membantu Anda memaksimalkan
              potensi online dengan desain yang menarik dan fungsionalitas yang
              luar biasa.
            </div>
            <a
              class="btn btn-dark btn-lg px-4 rounded-5 mt-3"
              href="#paket-terbaik"
            >
              Mulai Sekarang <i class="fas fa-arrow-right ps-3"></i>
            </a>
          </div>
          <!-- Bagian Gambar -->
          <div
            class="col-md-6 order-1 order-lg-2"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <img
              src="/images/website.png"
              class="img-fluid"
              alt="Pembuatan Website"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5" data-aos="fade-down">
      <Swiper
        :modules="modules"
        :slides-per-view="auto"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          320: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 120,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 120,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/laravel-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/bootstrap-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/vue-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/php-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/html-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/css-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img src="/images/js-logo.png" alt="image" class="img-fluid" />
        </SwiperSlide>
      </Swiper>
    </div>

    <section class="gradient-up-down" id="paket-web">
      <div class="container my-5">
        <div class="row text-center">
          <h3 class="fw-bold mb-4" data-aos="fade-down">
            Temukan Paket Ideal untuk Website Anda
          </h3>

          <!-- Paket Landing Page -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-success border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-success text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">Landing Page</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Halaman promosi singkat yang dirancang untuk mengarahkan
                  pengunjung ke aksi tertentu.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Desain Responsif</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Formulir Kontak</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 350.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Landing%20Page,%20Harga%20Rp.%202.500.000"
                  class="btn btn-success d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Company Profile -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-primary border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-primary text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Company Profile
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Website yang memperkenalkan perusahaan dengan informasi
                  tentang layanan, tim, dan kontak.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Halaman Tentang Kami</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Daftar Layanan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Formulir Kontak</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 2.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Company%20Profile,%20Harga%20Rp.%202.500.000"
                  class="btn btn-primary d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket E-commerce -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-warning border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-warning text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">E-commerce</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Website untuk menjual produk atau jasa secara online dengan
                  fitur seperti keranjang belanja dan pembayaran.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Keranjang Belanja</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Gateway Pembayaran</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 7.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20E-commerce,%20Harga%20Rp.%207.500.000"
                  class="btn btn-warning d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Portal Berita -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-info border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-info text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Portal Berita
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Platform untuk menerbitkan dan mengelola berita dan artikel
                  dengan kategori dan arsip berita.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Kategori Berita</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Fitur Pencarian</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Arsip Berita</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 4.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Portal%20Berita,%20Harga%20Rp.%204.500.000"
                  class="btn btn-info d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Sistem Manajemen -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-dark border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-dark text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Sistem Manajemen
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Website yang berfungsi sebagai sistem manajemen internal,
                  seperti manajemen proyek atau CRM.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Proyek</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Dashboard Kustom</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Fitur Pelaporan</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 8.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Sistem%20Manajemen,%20Harga%20Rp.%208.500.000"
                  class="btn btn-dark d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Blog -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-secondary border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-secondary text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">Blog</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Situs web pribadi atau profesional yang sering diperbarui
                  dengan artikel dan konten berbasis teks.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Desain Responsif</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Kategori & Tag</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Fitur Komentar</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 1.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Blog,%20Harga%20Rp.%201.000.000"
                  class="btn btn-secondary d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Forum -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-danger border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-danger text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">Forum</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Platform untuk diskusi dan interaksi antar pengguna dengan
                  thread dan topik.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Struktur Thread</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Fitur Pencarian</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Moderasi Konten</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 7.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Forum,%20Harga%20Rp.%207.000.000"
                  class="btn btn-danger d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Portofolio -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-light border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-light text-dark fw-bold rounded-top-5"
              >
                <h4 class="text-dark card-title fw-bold mb-0">Portofolio</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Website untuk menampilkan karya atau proyek pribadi, sering
                  digunakan oleh freelancer atau agen kreatif.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Galeri Karya</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Halaman Tentang</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 2.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Portofolio,%20Harga%20Rp.%202.000.000"
                  class="btn btn-light d-block fw-bold text-dark rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Website Pendidikan -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-success border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-success text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Website Pendidikan
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Platform untuk kursus online, materi pembelajaran, dan
                  manajemen siswa.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Kursus Online</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Siswa</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 7.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Pendidikan,%20Harga%20Rp.%207.500.000"
                  class="btn btn-success d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Situs Keanggotaan -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-primary border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-primary text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Situs Keanggotaan
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Website dengan area anggota eksklusif, sering digunakan untuk
                  konten premium atau komunitas berbayar.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Akses Anggota Terbatas</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Konten Premium</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 11.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Situs%20Keanggotaan,%20Harga%20Rp.%2011.000.000"
                  class="btn btn-primary d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Website Acara -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-warning border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-warning text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Website Acara
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Situs web untuk mempromosikan acara, termasuk agenda,
                  pendaftaran, dan informasi acara lainnya.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Agenda Acara</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Pendaftaran Online</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 7.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Acara,%20Harga%20Rp.%207.500.000"
                  class="btn btn-warning d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Website Nirlaba -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-dark border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-dark text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Website Nirlaba
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Situs web untuk organisasi nirlaba dengan misi, program, dan
                  cara untuk mendukung atau berkontribusi.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Halaman Misi</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Program & Kegiatan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Donasi Online</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 6.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Website%20Nirlaba,%20Harga%20Rp.%206.500.000"
                  class="btn btn-dark d-block fw-bold text-light rounded-5"
                  target="_blank"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Beranda",

  // Menambahkan components di sini
  components: {
    Swiper,
    SwiperSlide,
  },

  // Watch untuk mengubah title ketika rute berubah
  watch: {
    $route(to) {
      document.title = to.meta.title || "Default Title";
    },
  },

  // Mengatur title ketika komponen di-mount
  mounted() {
    document.title = this.$route.meta.title || "Default Title";
  },

  setup() {
    // Menginisialisasi AOS ketika komponen di-mount
    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });

    // Mengembalikan modul Swiper untuk digunakan di template
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.jumbotron-gradient {
  background: linear-gradient(
    to bottom,
    rgb(13, 202, 240) 45%,
    rgba(13, 202, 240, 0) 100%
  );
}

.gradient-up-down {
  background: linear-gradient(
    to bottom,
    rgba(13, 202, 240, 0) 0%,
    rgba(13, 202, 240, 0.568) 25%,
    rgb(13, 202, 240) 50%,
    rgba(13, 202, 240, 0.568) 75%,
    rgba(13, 202, 240, 0) 100%
  );
}

.gradient-up {
  background: linear-gradient(
    to bottom,
    rgba(13, 202, 240, 0) 0%,
    rgba(13, 202, 240, 0.568) 25%,
    rgb(13, 202, 240) 100%,
    rgba(13, 202, 240, 0.568) 75%,
    rgba(13, 202, 240, 0) 0%
  );
}

.gradient-down {
  background: linear-gradient(
    to bottom,
    rgb(13, 202, 240) 70%,
    rgba(13, 202, 240, 0) 100%
  );
}

.rounded-top-5 {
  border-top-left-radius: 1.7rem !important;
  border-top-right-radius: 1.7rem !important;
}

.floating-effect {
  animation: floating 10s ease-in-out infinite;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-25px);
  }

  100% {
    transform: translateY(0);
  }
}

.rotating {
  animation: flip 9s infinite linear;
}

@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
</style>
