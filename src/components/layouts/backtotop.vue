<template>
  <button
    v-if="showButton"
    class="btn btn-dark back-to-top rounded-3"
    @click="scrollToTop"
    aria-label="Back to top"
  >
    <i class="fa fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  transition: opacity 0.3s ease;
  opacity: 0.7;
}
</style>
