<template>
  <div class="py-5 jumbotron-gradient">
    <div class="container mt-3">
      <div class="row gy-4">
        <!-- Bagian Teks -->
        <div
          class="col-md-6 order-2 order-lg-1 lead fw-bold mb-0"
          data-aos="zoom-out"
        >
          <h1 class="display-4 text-light fw-bold">
            Strategi Periklanan Cerdas
          </h1>
          <div>
            Perluas jangkauan bisnis Anda dengan strategi periklanan yang
            efektif dan terukur. Kami membantu Anda mencapai audiens yang tepat
            dan meningkatkan konversi dengan kampanye yang cerdas dan kreatif.
          </div>
          <a
            class="btn btn-dark btn-lg px-4 rounded-5 mt-3"
            href="#paket-terbaik"
          >
            Pesan Sekarang <i class="fas fa-arrow-right ps-3"></i>
          </a>
        </div>
        <!-- Bagian Gambar -->
        <div
          class="col-md-6 order-1 order-lg-2"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <img
            src="/images/periklanan.png"
            class="img-fluid"
            alt="Strategi Periklanan Cerdas"
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
        <img src="/images/google-ads.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/facebook-ads.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/instagram-ads.png" alt="image" class="img-fluid" />
      </SwiperSlide>
      <SwiperSlide class="d-flex justify-content-center align-items-center">
        <img src="/images/tiktok-ads.png" alt="image" class="img-fluid" />
      </SwiperSlide>
    </Swiper>
  </div>

  <section id="paket-terbaik">
    <div class="container mt-5">
      <div class="row text-center">
        <h3 class="fw-bold mb-4" data-aos="fade-down">
          Temukan Paket Iklan Ideal untuk Bisnis Anda
        </h3>

        <!-- Paket Google Ads -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-primary border-4"
            style="height: 30rem"
          >
            <div
              class="card-header py-3 bg-primary text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Google Ads
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Optimalisasi iklan di Google untuk mencapai target audiens yang
                lebih luas.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Penargetan Kata Kunci</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Iklan Pencarian & Display</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Optimasi Anggaran</span>
                </div>
              </div>
              <p class="fw-bold">IDR 3.000.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Google%20Ads,%20Harga%20Rp.%203.000.000"
                class="btn btn-primary d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Facebook Ads -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-info border-4"
            style="height: 30rem"
          >
            <div
              class="card-header py-3 bg-info text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Facebook Ads
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Jangkau audiens yang lebih luas melalui iklan di Facebook dengan
                strategi yang tepat.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Penargetan Demografis</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Penempatan Iklan Optimal</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Konten Visual Menarik</span>
                </div>
              </div>
              <p class="fw-bold">IDR 2.500.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Facebook%20Ads,%20Harga%20Rp.%202.500.000"
                class="btn btn-info d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket Instagram Ads -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-danger border-4"
            style="height: 30rem"
          >
            <div
              class="card-header py-3 bg-danger text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket Instagram Ads
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Buat brand Anda menonjol di Instagram dengan kampanye iklan yang
                efektif.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Konten Visual Kreatif</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Iklan Story & Feed</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Target Audiens Khusus</span>
                </div>
              </div>
              <p class="fw-bold">IDR 3.500.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Instagram%20Ads,%20Harga%20Rp.%203.500.000"
                class="btn btn-danger d-block fw-bold text-light rounded-5"
                >Pesan Sekarang</a
              >
            </div>
          </div>
        </div>

        <!-- Paket TikTok Ads -->
        <div class="col-md-4 mb-4" data-aos="zoom-out">
          <div
            class="card shadow-sm rounded-5 border border-dark border-4"
            style="height: 30rem"
          >
            <div
              class="card-header py-3 bg-dark text-white fw-bold rounded-top-5"
            >
              <h4 class="text-light card-title fw-bold mb-0">
                Paket TikTok Ads
              </h4>
            </div>
            <div class="card-body p-4">
              <p class="card-text">
                Manfaatkan popularitas TikTok untuk menjangkau audiens muda dan
                dinamis.
              </p>
              <div class="d-flex flex-column">
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Kampanye Iklan Video</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Penargetan Berdasarkan Minat</span>
                </div>
                <div class="d-flex align-items-center mb-2">
                  <i class="fas fa-check-circle text-success me-2"></i>
                  <span>Optimasi Hasil & Engagement</span>
                </div>
              </div>
              <p class="fw-bold">IDR 3.000.000</p>
              <a
                href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20TikTok%20Ads,%20Harga%20Rp.%203.000.000"
                class="btn btn-dark d-block fw-bold text-light rounded-5"
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
