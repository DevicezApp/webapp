<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-lg-8">
      <router-link to="/">
        <img src="../assets/logo.png" class="mx-auto d-block" alt="DeviceZ Logo">
      </router-link>

      <div class="alert alert-danger">
        {{ this.$route.query.message }}
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  }
}
</script>