<template>
  <LMap :center="[47, 12.0]" :zoom="4" style="width: 400px; height: 400px">
    <l-tile-layer
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    ></l-tile-layer>

    <LMarker
      v-for="(plkIcon, index) in PLKIcons"
      :key="index"
      :lat-lng="[plkIcon.latitude, plkIcon.longitude]"
      :icon="createIcon(plkIcon)"
    />
  </LMap>
</template>

<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet"; // Import Leaflet library
import PLKIcons from "./JsonMarkers/plkMarkers.json";

const iconPath = "league-icons/plk";

function createIcon(plkIcon) {
  console.log(`${iconPath}/${plkIcon.icon}.png`);
  // Tworzenie obiektu ikony z użyciem L.Icon
  return L.icon({
    iconUrl: `${iconPath}/${plkIcon.icon}.png`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}
</script>
