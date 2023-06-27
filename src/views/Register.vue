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
          <div class="alert alert-danger" v-if="error && !success">
            {{ error }}
          </div>
          <div class="alert alert-success" v-if="success">
            <b>Success!</b> We've sent a confirmation message to the given address.<br>
            Please confirm your registration by following the link in this message!<br><br>

            <router-link to="/login">(... return to login page)</router-link>
          </div>

          <div class="alert alert-info" v-if="confirm && confirmSuccess === null">
            <b>Loading...</b> Confirmation is pending!<br>
          </div>

          <div class="alert alert-success" v-if="confirm && confirmSuccess">
            <b>Success!</b> Your registration has been confirmed.<br/>
            <router-link to="/login">You may now log-in!</router-link>
            <br>
          </div>

          <div class="alert alert-danger" v-if="confirm && !confirmSuccess">
            <b>Error!</b> Your account couldn't be confirmed. Please check the verification link for completeness and
            try
            again.<br/><br/>
            Maybe you already verified your account?
            <router-link to="/login">Try logging in!</router-link>
            <br>
          </div>

          <form class="form" @submit.prevent="register" v-if="!success && !confirm">
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

<script setup>
import InformationService from "@/services/information";

const information = await InformationService.getServerInformation();
</script>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import AuthenticationService from "@/services/authentication";

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      success: false,
      confirm: false,
      confirmSuccess: null
    }
  },
  async created() {
    const id = this.$route.query.id
    if (id) {
      this.confirm = true;
      this.confirmSuccess = await AuthenticationService.confirm(id)
    }
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.error = 'PASSWORD_MISMATCH'
        return
      }

      const result = await AuthenticationService.register(this.name, this.email, this.password)
      if (result.success) {
        this.success = true
        return
      }

      this.error = result.error
    }
  }
}
</script>