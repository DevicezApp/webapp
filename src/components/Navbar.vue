<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top"
               alt="">
          DeviceZ
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobileToggle"
                aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMobileToggle">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :class="($route.name === 'devices')?'nav-link active':'nav-link'" to="devices">
                <font-awesome-icon icon="computer"></font-awesome-icon>
                Devices
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="($route.name === 'groups')?'nav-link active':'nav-link'" to="groups">
                <font-awesome-icon icon="layer-group"></font-awesome-icon>
                Groups
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :class="($route.name === 'users')?'nav-link active':'nav-link'" to="users">
                <font-awesome-icon icon="users"></font-awesome-icon>
                Users
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon icon="user"></font-awesome-icon>
                {{ user.name }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" v-on:click="logout">
                    <font-awesome-icon icon="sign-out-alt"></font-awesome-icon>
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import AuthenticationService from "@/services/authentication";

const user = await AuthenticationService.whoami();
</script>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>