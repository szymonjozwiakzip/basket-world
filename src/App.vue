<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { icons } from "./components/plk_icons.js";
export default {
  name: "LeafletMap",
  mounted() {
    this.map = L.map("mapContainer").setView([52, 20.0], 5);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([53.01774180895404, 18.58839335478321], {
      icon: icons.TwardePierniki,
    }).addTo(this.map);
    icons;
    L.marker([53, 20], { icon: icons.AnwilWloclawek }).addTo(this.map);
    L.marker([49.5, 19.5], { icon: icons.SlaskWroclaw }).addTo(this.map);
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
#mapContainer {
  width: 800px;
  height: 800px;
  align-items: center;
  margin: 0 auto;
}
</style>
./components/plk_icons.js
