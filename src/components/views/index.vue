<template>
  <div v-cloak>
    <div class="py-5 jumbotron-gradient">
      <div class="container mt-3">
        <div class="row gy-4">
          <div class="col-md-6 lead fw-bold mb-0" data-aos="zoom-out">
            <h1 class="display-4 text-light fw-bold">
              Onlinekan Bisnis Anda Sekarang
            </h1>
            <div>
              Tampilkan bisnis Anda seperti perusahaan maju. Dengan website yang
              canggih, desain grafis yang menarik, dan periklanan yang efektif.
            </div>
            <a
              class="btn btn-dark btn-lg px-4 rounded-5 mt-3"
              href="#paket-terbaik"
            >
              Mulai Sekarang <i class="fas fa-arrow-right ps-3"></i>
            </a>
          </div>
          <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
            <img
              src="/images/image-jumbotron.png"
              class="img-fluid floating-effect"
              alt="Sample Image"
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 120,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 120,
          },
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-1.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-2.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-3.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-4.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-5.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-6.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-7.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
        <SwiperSlide class="d-flex justify-content-center align-items-center">
          <img
            src="/images/clients/client-8.png"
            alt="image"
            class="img-fluid"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="container my-5">
      <div class="row">
        <h3 class="fw-bold text-center mb-3" data-aos="fade-down">
          Solusi Digital Terbaik untuk UMKM
        </h3>
        <p class="text-center" data-aos="fade-down">
          Kami menawarkan berbagai layanan untuk membantu bisnis Anda tumbuh
          melalui desain grafis yang menarik, strategi periklanan yang efektif,
          dan pembuatan website yang elegan.
        </p>
        <!-- Layanan Utama -->
        <div
          class="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1 mt-3"
        >
          <div class="content px-xl-5" data-aos="fade-right">
            <!-- Jasa Pembuatan Website -->
            <div class="service-item mb-4">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="fas fa-laptop-code fa-2x"></i>
                </div>
                <div>
                  <h5>Jasa Pembuatan Website</h5>
                  <p class="mb-0">
                    Kami menyediakan layanan pembuatan website yang profesional,
                    mulai dari website perusahaan, e-commerce, hingga landing
                    page.
                  </p>
                </div>
              </div>
            </div>

            <!-- Jasa Desain Grafis -->
            <div class="service-item mb-4">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="fas fa-palette fa-2x"></i>
                </div>
                <div>
                  <h5>Jasa Desain Grafis</h5>
                  <p class="mb-0">
                    Kami menyediakan layanan desain grafis seperti pembuatan
                    logo, branding, desain media sosial, dan banyak lagi.
                  </p>
                </div>
              </div>
            </div>

            <!-- Jasa Advertising -->
            <div class="service-item mb-4">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <i class="fas fa-bullhorn fa-2x"></i>
                </div>
                <div>
                  <h5>Jasa Periklanan</h5>
                  <p class="mb-0">
                    Kami menawarkan layanan iklan termasuk Google Ads, Facebook
                    Ads, TikTok Ads, iklan media sosial, dan kampanye iklan
                    lainnya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-md-6 order-1 order-lg-2 d-flex justify-content-center align-items-center mt-3"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src="/images/about.png"
            class="img-fluid rotating"
            alt=""
            style="width: 70%"
          />
        </div>
      </div>
    </div>

    <section class="gradient-up" id="paket-terbaik">
      <div class="container mt-5">
        <div class="row text-center">
          <h3 class="fw-bold mb-4" data-aos="fade-down">
            Temukan Paket Ideal untuk Bisnis Anda
          </h3>

          <!-- Paket Dasar -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-success border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-success text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">Paket Dasar</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Solusi awal untuk bisnis yang baru memulai dengan kehadiran
                  online.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Landing Page</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Desain Logo Dasar</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Pemasaran Media Sosial Dasar</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 750.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Dasar,%20Harga%20Rp.%20750.000"
                  class="btn btn-success d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Menengah -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-primary border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-primary text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Menengah
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Solusi lengkap dengan fitur tambahan untuk bisnis yang
                  berkembang.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Website Responsif</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Desain Logo Kustom</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Branding & Media Sosial</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Google Ads Kampanye Dasar</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 2.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Menengah,%20Harga%20Rp.%202.500.000"
                  class="btn btn-primary d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Premium -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm rounded-5 border border-warning border-4"
              style="height: 27rem"
            >
              <div
                class="card-header py-3 bg-warning text-white fw-bold rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Premium
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text">
                  Solusi lengkap dengan semua fitur premium untuk memaksimalkan
                  potensi bisnis Anda.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Website E-Commerce</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Desain Branding Menyeluruh</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Kampanye Media Sosial Lanjut</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Google Ads & Facebook Ads</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Analisis & Laporan Bulanan</span>
                  </div>
                </div>
                <p class="fw-bold">IDR 7.500.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Premium,%20Harga%20Rp.%207.500.000"
                  class="btn btn-warning d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="gradient-down">
      <div class="container mb-5">
        <div class="row text-center">
          <h3 class="fw-bold mb-4 mt-5" data-aos="fade-down">
            Solusi Sistem Inovatif untuk Setiap Tahap Bisnis
          </h3>

          <!-- Paket Starter -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-secondary border-4"
              style="height: 26rem"
            >
              <div
                class="card-header py-3 text-center bg-secondary rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Starter
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem dasar untuk memulai bisnis Anda.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk Sederhana</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan Dasar</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Laporan Dasar</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 3.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Starter,%20Harga%20Rp.%203.000.000"
                  class="btn btn-secondary d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Basic -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-dark border-4"
              style="height: 26rem"
            >
              <div class="card-header py-3 text-center bg-dark rounded-top-5">
                <h4 class="text-light card-title fw-bold mb-0">Paket Basic</h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem untuk bisnis kecil dengan kebutuhan yang mulai
                  berkembang.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk & Stok</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Laporan Penjualan</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 5.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Basic,%20Harga%20Rp.%205.000.000"
                  class="btn btn-dark d-block fw-bold text-light rounded-5"
                  >Pesan Sekarang</a
                >
              </div>
            </div>
          </div>

          <!-- Paket Standard -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-success border-4"
              style="height: 26rem"
            >
              <div
                class="card-header py-3 text-center bg-success rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Standard
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem untuk bisnis yang sedang berkembang dengan
                  kebutuhan yang lebih kompleks.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk, Stok, & Pembelian</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan & Pelanggan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Laporan Penjualan & Pembelian</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 7.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Standard,%20Harga%20Rp.%207.000.000"
                  class="btn btn-success d-block fw-bold text-light rounded-5"
                  target="_blank"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>

          <!-- Paket Professional -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-primary border-4"
              style="height: 35rem"
            >
              <div
                class="card-header py-3 text-center bg-primary rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Professional
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem untuk bisnis besar dengan kebutuhan yang lebih
                  kompleks dan terintegrasi.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk, Stok, Pembelian, & Penjualan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan & Pelanggan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Akuntansi</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Laporan Lengkap & Terintegrasi</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 12.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Professional,%20Harga%20Rp.%2012.000.000"
                  class="btn btn-primary d-block fw-bold text-light rounded-5"
                  target="_blank"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>

          <!-- Paket Advanced -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-danger border-4"
              style="height: 35rem"
            >
              <div class="card-header py-3 text-center bg-danger rounded-top-5">
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Advanced
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem dengan fitur yang lebih lengkap dan canggih
                  untuk bisnis Anda.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk, Stok, Pembelian, & Penjualan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan & Pelanggan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Akuntansi Lanjut</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Laporan Lengkap, Terintegrasi, & Khusus</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 15.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Advanced,%20Harga%20Rp.%2015.000.000"
                  class="btn btn-danger d-block fw-bold text-light rounded-5"
                  target="_blank"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>

          <!-- Paket Enterprise -->
          <div class="col-md-4 mb-4" data-aos="zoom-out">
            <div
              class="card shadow-sm text-start rounded-5 border border-warning border-4"
              style="height: 35rem"
            >
              <div
                class="card-header py-3 text-center bg-warning rounded-top-5"
              >
                <h4 class="text-light card-title fw-bold mb-0">
                  Paket Enterprise
                </h4>
              </div>
              <div class="card-body p-4">
                <p class="card-text text-center">
                  Solusi sistem untuk perusahaan besar dengan kebutuhan yang
                  kompleks, terintegrasi, dan tingkat lanjut.
                </p>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Produk, Stok, Pembelian, & Penjualan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pesanan & Pelanggan</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Akuntansi Tingkat Lanjut</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Manajemen Pelanggan & CRM Lanjut</span>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Integrasi & Analitik Penuh</span>
                  </div>
                </div>
                <p class="fw-bold text-center">IDR 20.000.000</p>
                <a
                  href="https://wa.me/6285709033274?text=Saya%20ingin%20memesan%20Paket%20Enterprise,%20Harga%20Rp.%2020.000.000"
                  class="btn btn-warning d-block fw-bold text-light rounded-5"
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

    <div class="container mt-5 text-center" data-aos="fade-up">
      <h3 class="fw-bold">Testimoni</h3>
      <p>
        Kepuasan pelanggan adalah prioritas kami dalam memberikan layanan
        terbaik.
      </p>
    </div>

    <div class="container mb-5" data-aos="fade-up" data-aos-delay="100">
      <swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :slidesPerView="auto"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="d-flex justify-content-center align-items-center my-4"
        >
          <div class="testimonial-item text-center">
            <img
              src="/images/testimonials/testimonials-1.jpg"
              class="img-fluid rounded-circle mb-3"
              alt="Budi Santoso"
              style="width: 10%"
            />
            <h3>Budi Santoso</h3>
            <h4>CEO &amp; Founder</h4>
            <div class="mb-3">
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
            </div>
            <p>
              <i class="fa fa-quote-left"></i>
              <span>
                Layanan pembuatan website dari tim ini sangat memuaskan.
                Prosesnya cepat, hasilnya profesional, dan tampilan webnya
                sangat sesuai dengan kebutuhan bisnis kami.
              </span>
              <i class="fa fa-quote-right"></i>
            </p>
          </div>
        </swiper-slide>

        <swiper-slide
          class="d-flex justify-content-center align-items-center my-4"
        >
          <div class="testimonial-item text-center">
            <img
              src="/images/testimonials/testimonials-2.jpg"
              class="img-fluid rounded-circle mb-3"
              alt="Dewi Lestari"
              style="width: 10%"
            />
            <h3>Dewi Lestari</h3>
            <h4>Desainer Grafis</h4>
            <div class="mb-3">
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
            </div>
            <p>
              <i class="fa fa-quote-left"></i>
              <span>
                Tim ini sangat profesional. Hasil pekerjaan mereka, baik dari
                segi desain website maupun pembuatan website, sangat
                berkualitas. Saya sangat puas dengan hasil akhirnya.
              </span>
              <i class="fa fa-quote-right"></i>
            </p>
          </div>
        </swiper-slide>

        <swiper-slide
          class="d-flex justify-content-center align-items-center my-4"
        >
          <div class="testimonial-item text-center">
            <img
              src="/images/testimonials/testimonials-3.jpg"
              class="img-fluid rounded-circle mb-3"
              alt="Rina Apriani"
              style="width: 10%"
            />
            <h3>Rina Apriani</h3>
            <h4>Pemilik Usaha</h4>
            <div class="mb-3">
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
            </div>
            <p>
              <i class="fa fa-quote-left"></i>
              <span>
                Iklan yang dibuat oleh tim ini benar-benar efektif. Penjualan
                kami meningkat signifikan sejak menggunakan jasa mereka. Sangat
                direkomendasikan!
              </span>
              <i class="fa fa-quote-right"></i>
            </p>
          </div>
        </swiper-slide>

        <swiper-slide
          class="d-flex justify-content-center align-items-center my-4"
        >
          <div class="testimonial-item text-center">
            <img
              src="/images/testimonials/testimonials-4.jpg"
              class="img-fluid rounded-circle mb-3"
              alt="Andi Sudirman"
              style="width: 10%"
            />
            <h3>Andi Sudirman</h3>
            <h4>Freelancer</h4>
            <div class="mb-3">
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
            </div>
            <p>
              <i class="fa fa-quote-left"></i>
              <span>
                Saya sangat terbantu dengan jasa pembuatan website mereka.
                Prosesnya cepat dan hasilnya sangat memuaskan. Kini, saya bisa
                lebih fokus mengembangkan bisnis online saya.
              </span>
              <i class="fa fa-quote-right"></i>
            </p>
          </div>
        </swiper-slide>

        <swiper-slide
          class="d-flex justify-content-center align-items-center my-4"
        >
          <div class="testimonial-item text-center">
            <img
              src="/images/testimonials/testimonials-5.jpg"
              class="img-fluid rounded-circle mb-3"
              alt="Arli Primagara"
              style="width: 10%"
            />
            <h3>Arli Primagara</h3>
            <h4>Wirausahawan</h4>
            <div class="mb-3">
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
              <i class="fa fa-star text-warning"></i>
            </div>
            <p>
              <i class="fa fa-quote-left"></i>
              <span
                >Hasil desain grafis yang diberikan sangat kreatif dan sesuai
                dengan konsep yang saya inginkan. Mereka benar-benar paham
                bagaimana mewujudkan ide menjadi visual yang menarik.
              </span>
              <i class="fa fa-quote-right"></i>
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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
