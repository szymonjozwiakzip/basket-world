<template>
  <div id="appDiv">
    <NavigationNavbar />
    <!-- <LeafletMap /> -->
    <VueLeafletMap />
  </div>
</template>

<script>
// import LeafletMap from "../components/LeafletMap.vue";
import NavigationNavbar from "../components/Navbar.vue";
import "../style.scss";
import VueLeafletMap from "@/components/VueLeafletMap.vue";

export default {
  name: "MainPage",
  components: {
    // LeafletMap,
    NavigationNavbar,
    VueLeafletMap,
  },
  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>

<style></style>
