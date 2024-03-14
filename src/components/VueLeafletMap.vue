<template>
  <div id="mapContainer">
    <LMap :center="[47, 12.0]" :zoom="4" style="width: 800px; height: 500px">
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      ></l-tile-layer>
      <!--L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:-->
      <LMarker
        v-for="(plkIcon, index) in PLKIcons"
        :key="'plk_' + index"
        :lat-lng="[plkIcon.latitude, plkIcon.longitude]"
        :icon="createIcon(plkIcon)"
      />

      <LMarker
        v-for="(a1ethnikiIcon, index) in a1ethnikiIcons"
        :key="'a1ethniki_' + index"
        :lat-lng="[a1ethnikiIcon.latitude, a1ethnikiIcon.longitude]"
        :icon="createIcon(a1ethnikiIcon)"
      />

      <LMarker
        v-for="(estlatIcon, index) in estlatIcons"
        :key="'estlat_' + index"
        :lat-lng="[estlatIcon.latitude, estlatIcon.longitude]"
        :icon="createIcon(estlatIcon)"
      />

      <LMarker
        v-for="(acbIcon, index) in acbIcons"
        :key="'acb_' + index"
        :lat-lng="[acbIcon.latitude, acbIcon.longitude]"
        :icon="createIcon(acbIcon)"
      />

      <LMarker
        v-for="(abaIcon, index) in abaIcons"
        :key="'acb_' + index"
        :lat-lng="[abaIcon.latitude, abaIcon.longitude]"
        :icon="createIcon(abaIcon)"
      />

      <LMarker
        v-for="(aleaguehungaryIcon, index) in aleaguehungaryIcons"
        :key="'acb_' + index"
        :lat-lng="[aleaguehungaryIcon.latitude, aleaguehungaryIcon.longitude]"
        :icon="createIcon(aleaguehungaryIcon)"
      />
    </LMap>
  </div>
</template>

<script setup>
import "../style.scss";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet"; // Import Leaflet library
import PLKIcons from "./JsonMarkers/plkMarkers.json";
import a1ethnikiIcons from "./JsonMarkers/a1ethnikiMarkers.json";
import estlatIcons from "./JsonMarkers/est-latMarkers.json";
import acbIcons from "./JsonMarkers/acbMarkers.json";
import abaIcons from "./JsonMarkers/abaMarkers.json";
import aleaguehungaryIcons from "./JsonMarkers/aleaguehungaryMarkers.json";

const iconPath = "league-icons";

function createIcon(leagueIcon) {
  console.log(
    `${iconPath}/${leagueIcon.league.toLowerCase()}/${leagueIcon.icon}.png`
  );

  return L.icon({
    iconUrl: `${iconPath}/${leagueIcon.league.toLowerCase()}/${
      leagueIcon.icon
    }.png`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}
</script>
