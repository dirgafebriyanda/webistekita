<template>
  <div class="py-5 jumbotron-gradient">
    <div class="container mt-3">
      <div class="row gy-4">
        <!-- Text Section -->
        <div
          class="col-md-6 order-2 order-lg-1 lead fw-bold mb-0"
          data-aos="zoom-out"
        >
          <h1 class="display-4 text-light fw-bold">Desain Grafis Kreatif</h1>
          <div class="text-dark">
            Jadikan bisnis Anda menonjol dengan desain grafis yang mencerminkan
            identitas dan keunggulan Anda. Kami siap membantu Anda menciptakan
            visual yang menarik dan profesional untuk berbagai kebutuhan bisnis.
          </div>
          <a
            class="btn btn-dark btn-lg px-4 rounded-5 mt-3"
            href="#paket-terbaik"
          >
            Mulai Sekarang <i class="fas fa-arrow-right ps-3"></i>
          </a>
        </div>
        <!-- Image Section -->
        <div
          class="col-md-6 order-1 order-lg-2"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <img
            src="/images/desain-grafis.png"
            class="img-fluid"
            alt="Desain Grafis Kreatif"
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
        <img src="/images/photoshop-logo.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/corel-logo.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/illustrator-logo.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/figma-logo.png" alt="image" class="img-fluid" />
      </SwiperSlide>
    </Swiper>
  </div>

  <section id="paket-terbaik">
    <div class="container my-5">
      <div class="row text-center">
        <h3 class="fw-bold mb-4" data-aos="fade-down">
          Temukan Paket Desain Grafis Ideal untuk Bisnis Anda
        </h3>

        <!-- Paket Desain Logo -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-success border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-success text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Logo
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Ciptakan identitas visual yang kuat dengan desain logo
                profesional.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>3 Konsep Desain Logo</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Revisi Tanpa Batas</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>File Vector dan PNG</span>
                </div>
              </div>
              <p class="fw-bold">IDR 250.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Logo,%20Harga%20Rp.%20250.000"
                class="btn btn-success d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Desain Media Sosial -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-primary border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-primary text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Media Sosial
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Desain konten menarik untuk meningkatkan engagement di media
                sosial Anda.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Postingan & Story</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Cover & Banner</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>File dalam Format JPEG & PNG</span>
                </div>
                <div class="d-flex align-items-start mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>12 Desain dalam 1 bulan</span>
                </div>
              </div>
              <p class="fw-bold">IDR 1.000.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Media%20Sosial,%20Harga%20Rp.%201.000.000"
                class="btn btn-primary d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Desain Stationery -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-warning border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-warning text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Stationery
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Lengkapi branding perusahaan Anda dengan desain alat tulis yang
                profesional.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Kartu Nama</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Kop Surat & Amplop</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Notepad</span>
                </div>
              </div>
              <p class="fw-bold">IDR 500.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Stationery,%20Harga%20Rp.%20500.000"
                class="btn btn-warning d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Desain Kemasan -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-danger border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-danger text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Kemasan
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Desain kemasan produk yang menarik dan fungsional untuk
                meningkatkan daya tarik di pasar.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Label Produk</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Kotak/Kemasan</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>File Siap Cetak (PDF)</span>
                </div>
              </div>
              <p class="fw-bold">IDR 900.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Kemasan,%20Harga%20Rp.%20900.000"
                class="btn btn-danger d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Desain Promosi -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-info border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-info text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Promosi
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Tingkatkan kesadaran merek Anda dengan berbagai desain promosi
                yang menarik.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Brosur</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Flyer</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Poster</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>28 Desain dalam 1 Bulan</span>
                </div>
              </div>
              <p class="fw-bold">IDR 1.500.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Promosi,%20Harga%20Rp.%201.500.000"
                class="btn btn-info d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Desain Undangan -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-secondary border-4"
            style="height: 27rem"
          >
            <div
              class="card-header py-3 bg-secondary text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Desain Undangan
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Desain undangan yang elegan dan menarik untuk acara spesial
                Anda.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Undangan Pernikahan</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Desain Undangan Acara</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>File Siap Cetak (PDF)</span>
                </div>
              </div>
              <p class="fw-bold">IDR 150.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Desain%20Undangan,%20Harga%20Rp.%20150.000"
                class="btn btn-secondary d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
