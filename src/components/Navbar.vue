<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top"
               alt="">
          DeviceZ
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobileToggle"
                aria-controls="navbarMobileToggle" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMobileToggle">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="Submenu-Dropdown" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-tachometer-alt"></i> Admin
              </a>
              <ul class="dropdown-menu rounded-3" aria-labelledby="Submenu-Dropdown">
                <li><a class="dropdown-item" href="test"><i
                    class="fas fa-users"></i> Test</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="login"><i
                class="fas fa-sign-in-alt"></i> Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>