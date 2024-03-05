<template>
  <div id="appDiv">
    <NavigationNavbar />
    <LeafletMap />
  </div>
</template>

<script>
import LeafletMap from "../components/LeafletMap.vue";
import NavigationNavbar from "../components/Navbar.vue";
import "../style.scss";

export default {
  name: "MainPage",
  components: {
    LeafletMap,
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
