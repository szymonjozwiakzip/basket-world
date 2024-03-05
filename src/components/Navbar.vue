<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Leagues
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">A1 Ethniki</a></li>
              <li><a class="dropdown-item" href="#">ABA</a></li>
              <li><a class="dropdown-item" href="#">ACB</a></li>
              <li>
                <a class="dropdown-item" href="#">Nemzeti Bajnokság I/A</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Basketbol Super Ligi</a>
              </li>
              <li><a class="dropdown-item" href="#">BBL</a></li>
              <li><a class="dropdown-item" href="#">BNXT</a></li>
              <li>
                <a class="dropdown-item" href="#">British Basket League</a>
              </li>
              <li><a class="dropdown-item" href="#">Divizia A</a></li>
              <li>
                <a class="dropdown-item" href="#">Estonian-Latvian League</a>
              </li>
              <li><a class="dropdown-item" href="#">Israel Super League</a></li>
              <li><a class="dropdown-item" href="#">Lega Basket A</a></li>
              <li><a class="dropdown-item" href="#">LKL</a></li>
              <li><a class="dropdown-item" href="#">Nike SBL</a></li>
              <li>
                <router-link class="nav-link" to="/plk"
                  ><a class="dropdown-item">PLK</a></router-link
                >
              </li>

              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">EuroLeague</a></li>
              <li><a class="dropdown-item" href="#">EuroCup</a></li>
              <li>
                <a class="dropdown-item" href="#"
                  >FIBA Basketball Champions League</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import router from "../router/index.js";
export default {
  name: "NavigationNavbar",
  router: router,
};
</script>

<style scoped>
/* Add your styles here */
</style>
