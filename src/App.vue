<template>
  <Navbar v-if="!this.$route.meta.hideNavbar"/>
  <div class="container px-4 mt-4">
    <Suspense>
      <router-view></router-view>
    </Suspense>
  </div>
  <Footer/>
</template>

<script>
import AppHeader from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar, Footer, AppHeader}
}
</script>