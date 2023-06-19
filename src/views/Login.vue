<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-lg-8">
      <img src="../assets/logo.png" class="mx-auto d-block" alt="DeviceZ Logo">
      <h1 class="text-center mb-5">DeviceZ</h1>

      <div class="card">
        <div class="card-header">
          <b>Login</b>
        </div>
        <div class="card-body">
          <form class="form" @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <div class="input-group">
                <span class="input-group-text" id="usernamePrepend"><font-awesome-icon icon="user"/></span>
                <input v-model="username" type="text" class="form-control" name="username"
                       aria-describedby="usernamePrepend" required>
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
            <button class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const loginResponse = await this.$axios.get('/login');
      console.log(this.username, this.password)
    }
  }
}
</script>