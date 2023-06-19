<template>
  <div class="container px-4 mt-4">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, AppHeader}
}
</script>