<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-lg-8">
      <img src="../assets/logo.png" class="mx-auto d-block" alt="DeviceZ Logo">
      <h1 class="text-center mb-sm-4">{{ information.organisationName }}</h1>

      <div class="card">
        <div class="card-header">
          <b>Register</b>
        </div>
        <div class="card-body">
          <form class="form" @submit.prevent="register">
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <div class="input-group">
                <span class="input-group-text" id="namePrepend"><font-awesome-icon icon="user"/></span>
                <input v-model="name" type="text" class="form-control" name="name"
                       aria-describedby="namePrepend" required>
              </div>
            </div>
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
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <div class="input-group">
                <span class="input-group-text" id="confirmPasswordPrepend"><font-awesome-icon icon="key"/></span>
                <input v-model="confirmPassword" type="password" class="form-control" name="confirmPassword"
                       aria-describedby="confirmPasswordPrepend" required>
              </div>
            </div>

            <div class="btn-group" role="group">
              <button class="btn btn-primary">
                Register
              </button>
              <router-link v-if="information.registration" to="/login" class="btn btn-danger">
                Already have an account?
              </router-link>
            </div>
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
      information: {
        organisationName: '',
        registration: false
      },
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  created() {
    this.$axios.get('/')
        .then(response => {
          if (!response.data.registration) {
            this.$router.push('/login')
            return;
          }

          this.information = response.data
        })
  },
  methods: {
    async register() {
      this.$axios.post('/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        if (response.data.success) {
          // TODO registration was successful
        }
      });
    }
  }
}
</script>