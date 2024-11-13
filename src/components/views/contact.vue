<template>
  <div class="container my-5 py-5">
    <div class="card p-3">
      <h3 class="text-center mb-4 fw-semibold">Hubungi Kami</h3>
      <form @submit.prevent="sendMessageToWhatsApp" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="name" class="form-label">Nama</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" required>
          <div class="invalid-feedback">
            Silakan masukkan nama Anda.
          </div>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
          <div class="invalid-feedback">
            Silakan masukkan alamat email yang valid.
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Pesan</label>
          <textarea class="form-control" id="message" v-model="formData.message" rows="5" required></textarea>
          <div class="invalid-feedback">
            Silakan masukkan pesan Anda.
          </div>
        </div>

        <button type="submit" class="btn btn-dark w-100">Kirim Pesan</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const sendMessageToWhatsApp = () => {
  const phoneNumber = '6285709033274';  // Nomor WhatsApp tujuan
  const url = `https://wa.me/${phoneNumber}?text=Nama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;

  // Buka WhatsApp dengan data yang sudah diisi
  window.open(url, '_blank');
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>