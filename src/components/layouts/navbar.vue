<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// Referensi navbar dan collapse element
const navbar = ref(null);
const navbarCollapse = ref(null);
const navbarToggler = ref(null);

const handleScroll = () => {
  if (window.scrollY > 40) {
    navbar.value.classList.add("navbar-transparent");
  } else {
    navbar.value.classList.remove("navbar-transparent");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  const router = useRouter();

  // Menutup navbar ketika beralih halaman
  router.afterEach(() => {
    if (navbarCollapse.value.classList.contains("show")) {
      navbarToggler.value.click(); // Trigger klik untuk menutup navbar
    }
  });
});
</script>

<template>
  <nav ref="navbar" class="navbar navbar-expand-lg bg-info navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand lead fw-semibold text-light" href="#"><img src="/images/logo/artify-favicon-white.png"
          alt="" class="img-fluid" style="width: 1.8rem" />
        <span class="text-danger"> Webis</span>Tekita</a>
      <button ref="navbarToggler" class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div ref="navbarCollapse" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Beranda' }" class="nav-link" aria-current="page">Beranda</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Layanan</a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <router-link :to="{ name: 'DesainGrafis' }" class="dropdown-item">Desain Grafis</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Website' }" class="dropdown-item">Website</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'Periklanan' }" class="dropdown-item">Periklanan</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Tentang' }" class="nav-link">Tentang</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Kontak' }" class="nav-link">Kontak</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Ketentuan' }" class="nav-link">Ketentuan</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  transition: background-color 0.3s ease;
}

.navbar-transparent {
  background-color: rgba(13, 202, 240, 0.829) !important;
}

.nav-link {
  color: rgba(255, 255, 255) !important;
}

.nav-link:hover {
  color: rgb(79, 0, 116) !important;
}
</style>
