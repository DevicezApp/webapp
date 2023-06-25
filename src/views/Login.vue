<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-lg-8">
      <img src="../assets/logo.png" class="mx-auto d-block" alt="DeviceZ Logo">
      <h1 class="text-center mb-sm-4">{{ information.organisationName }}</h1>

      <div class="card">
        <div class="card-header">
          <b>Login</b>
        </div>
        <div class="card-body">
          <div class="alert alert-danger" v-if="error">
            {{ error }}
          </div>

          <form class="form" @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">E-Mail</label>
              <div class="input-group">
                <span class="input-group-text" id="emailPrepend"><font-awesome-icon icon="envelope"/></span>
                <input v-model="email" type="email" class="form-control" name="email"
                       aria-describedby="emailPrepend" required>
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <div class="input-group">
                <span class="input-group-text" id="passwordPrepend"><font-awesome-icon icon="key"/></span>
                <input v-model="password" type="password" class="form-control" name="password"
                       aria-describedby="passwordPrepend" required>
              </div>
            </div>

            <div class="btn-group" role="group">
              <button class="btn btn-primary">
                Login
              </button>
              <router-link v-if="information.registration" to="/register" class="btn btn-success">
                Create an account
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InformationService from "@/services/information";

const information = await InformationService.getServerInformation();
</script>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AuthenticationService from "@/services/authentication";

export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      const result = await AuthenticationService.login(this.email, this.password);
      if (result.success) {
        localStorage.setItem('token', result.token)
        this.$router.push({
          path: this.$route.query.redirect ? this.$route.query.redirect : '/'
        })
      } else {
        this.error = result.error
      }
    }
  }
}
</script>