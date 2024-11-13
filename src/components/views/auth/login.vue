<template>
  <div class="container my-5 pt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h3 class="text-center">Login</h3>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                />
              </div>
              <button
                type="submit"
                class="btn btn-primary w-100"
                :disabled="loading"
              >
                Login
              </button>
              <div v-if="errorMessage" class="alert alert-danger mt-3">
                {{ errorMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMessage = ref(null);
const loading = ref(false);
const router = useRouter();

const handleSubmit = async () => {
  errorMessage.value = null;
  loading.value = true;

  try {
    const response = await axios.post("http://artify.test/api/login", {
      email: email.value,
      password: password.value,
    });

    if (response.status === 200) {
      // Simpan token atau informasi login lainnya jika perlu
      // Misalnya,
      localStorage.setItem("token", response.data.token);

      // Arahkan ke halaman lain setelah login berhasil
      router.push({ name: "Dashboard" });
    }
  } catch (error) {
    if (error.response && error.response.data) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Login failed. Please try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
