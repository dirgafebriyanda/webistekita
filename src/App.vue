<template>
  <div>
    <!-- Preloader kustom -->
    <div v-if="loading" class="preloader">
      <div class="circle">
        <div v-for="i in 12" :key="i" :class="'bar bar-' + i"></div>
      </div>
    </div>

    <!-- Navbar dan Footer hanya ditampilkan jika bukan di halaman login -->
    <Navbar />

    <div class="mt-5">
      <router-view></router-view>
    </div>

    <Footer />

    <!-- BackToTop tetap ditampilkan di semua halaman -->
    <BackToTop />
  </div>
</template>

<script>
import Navbar from "./components/layouts/navbar.vue";
import Footer from "./components/layouts/footer.vue";
import BackToTop from "./components/layouts/backtotop.vue";

export default {
  components: {
    Navbar,
    Footer,
    BackToTop,
  },
  data() {
    return {
      loading: true,
    };
  },
  watch: {
    // Memantau perubahan route untuk mengupdate loading state jika diperlukan
    $route(to, from) {
      // Reset loading saat navigasi ke halaman baru
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },

};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}

@media (max-width: 768px) {
  * {
    overflow: hidden;

  }
}

/* Tampilan preloader kustom */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Container lingkaran */
.circle {
  position: relative;
  width: 7px;
  /* Ukuran lingkaran lebih besar */
  height: 7px;
}

/* Garis lurus yang tersusun menjadi lingkaran */
.bar {
  position: absolute;
  width: 3.5px;
  /* Lebar garis */
  height: 15px;
  /* Tinggi garis */
  background-color: #0dcaf0;
  transform-origin: bottom center;
  animation: fade 1.2s linear infinite;
}

/* Menyusun garis lurus dalam lingkaran dengan jarak lebih longgar */
.bar-1 {
  transform: rotate(0deg) translate(0, -20px);
  animation-delay: -1.1s;
}

.bar-2 {
  transform: rotate(30deg) translate(0, -20px);
  animation-delay: -1s;
}

.bar-3 {
  transform: rotate(60deg) translate(0, -20px);
  animation-delay: -0.9s;
}

.bar-4 {
  transform: rotate(90deg) translate(0, -20px);
  animation-delay: -0.8s;
}

.bar-5 {
  transform: rotate(120deg) translate(0, -20px);
  animation-delay: -0.7s;
}

.bar-6 {
  transform: rotate(150deg) translate(0, -20px);
  animation-delay: -0.6s;
}

.bar-7 {
  transform: rotate(180deg) translate(0, -20px);
  animation-delay: -0.5s;
}

.bar-8 {
  transform: rotate(210deg) translate(0, -20px);
  animation-delay: -0.4s;
}

.bar-9 {
  transform: rotate(240deg) translate(0, -20px);
  animation-delay: -0.3s;
}

.bar-10 {
  transform: rotate(270deg) translate(0, -20px);
  animation-delay: -0.2s;
}

.bar-11 {
  transform: rotate(300deg) translate(0, -20px);
  animation-delay: -0.1s;
}

.bar-12 {
  transform: rotate(330deg) translate(0, -20px);
  animation-delay: 0s;
}

/* Animasi fade in/out untuk garis lurus */
@keyframes fade {

  0%,
  39%,
  100% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }
}

.fixed-top {
  z-index: 1;
}
</style>
