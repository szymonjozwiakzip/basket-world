<template>
  <div id="appDiv">
    <NavigationNavbar />
    <router-view />
  </div>
</template>

<script>
import NavigationNavbar from "./components/Navbar.vue";
import "./style.scss";

export default {
  name: "App",
  components: {
    NavigationNavbar,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style></style>
