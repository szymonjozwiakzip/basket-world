<template>
  <div id="appDiv">
    <NavigationNavbar />

    <leaflet-map />
    <div id="hoop"></div>
  </div>
</template>

<script>
import LeafletMap from "./components/LeafletMap.vue";
import NavigationNavbar from "./components/Navbar.vue";
import "./style.scss";
export default {
  name: "App",
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
