<template>
  <div id="mapContainer">
    <LMap :center="[47, 12.0]" :zoom="4" style="width: 794px; height: 495px">
      <!--<l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      ></l-tile-layer>-->
      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
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
        :key="'aba_' + index"
        :lat-lng="[abaIcon.latitude, abaIcon.longitude]"
        :icon="createIcon(abaIcon)"
      />

      <LMarker
        v-for="(aleaguehungaryIcon, index) in aleaguehungaryIcons"
        :key="'aleaguehungary_' + index"
        :lat-lng="[aleaguehungaryIcon.latitude, aleaguehungaryIcon.longitude]"
        :icon="createIcon(aleaguehungaryIcon)"
      />

      <LMarker
        v-for="(basketbolsuperligiIcon, index) in basketbolsuperligiIcons"
        :key="'basketbolsuperligi_' + index"
        :lat-lng="[
          basketbolsuperligiIcon.latitude,
          basketbolsuperligiIcon.longitude,
        ]"
        :icon="createIcon(basketbolsuperligiIcon)"
      />

      <LMarker
        v-for="(bblIcon, index) in bblIcons"
        :key="'bbl_' + index"
        :lat-lng="[bblIcon.latitude, bblIcon.longitude]"
        :icon="createIcon(bblIcon)"
      />

      <LMarker
        v-for="(bnxtIcon, index) in bnxtIcons"
        :key="'bnxt_' + index"
        :lat-lng="[bnxtIcon.latitude, bnxtIcon.longitude]"
        :icon="createIcon(bnxtIcon)"
      />

      <LMarker
        v-for="(britishblIcon, index) in britishblIcons"
        :key="'britishbl_' + index"
        :lat-lng="[britishblIcon.latitude, britishblIcon.longitude]"
        :icon="createIcon(britishblIcon)"
      />

      <LMarker
        v-for="(diviziaaromaniaIcon, index) in diviziaaromaniaIcons"
        :key="'diviziaaromania_' + index"
        :lat-lng="[diviziaaromaniaIcon.latitude, diviziaaromaniaIcon.longitude]"
        :icon="createIcon(diviziaaromaniaIcon)"
      />

      <LMarker
        v-for="(fpbIcon, index) in fpbIcons"
        :key="'fpb_' + index"
        :lat-lng="[fpbIcon.latitude, fpbIcon.longitude]"
        :icon="createIcon(fpbIcon)"
      />

      <LMarker
        v-for="(israelsuperleagueIcon, index) in israelsuperleagueIcons"
        :key="'israelsuperleague_' + index"
        :lat-lng="[
          israelsuperleagueIcon.latitude,
          israelsuperleagueIcon.longitude,
        ]"
        :icon="createIcon(israelsuperleagueIcon)"
      />

      <LMarker
        v-for="(legabasketaIcon, index) in legabasketaIcons"
        :key="'legabasketa_' + index"
        :lat-lng="[legabasketaIcon.latitude, legabasketaIcon.longitude]"
        :icon="createIcon(legabasketaIcon)"
      />

      <LMarker
        v-for="(lkllietuvaIcon, index) in lkllietuvaIcons"
        :key="'lkllietuva_' + index"
        :lat-lng="[lkllietuvaIcon.latitude, lkllietuvaIcon.longitude]"
        :icon="createIcon(lkllietuvaIcon)"
      />

      <LMarker
        v-for="(nblczechIcon, index) in nblczechIcons"
        :key="'nblczech_' + index"
        :lat-lng="[nblczechIcon.latitude, nblczechIcon.longitude]"
        :icon="createIcon(nblczechIcon)"
      />

      <LMarker
        v-for="(nikesblIcon, index) in nikesblIcons"
        :key="'nikesbl_' + index"
        :lat-lng="[nikesblIcon.latitude, nikesblIcon.longitude]"
        :icon="createIcon(nikesblIcon)"
      />
      <LMarker
        v-for="(lnbIcon, index) in lnbIcons"
        :key="'lnb_' + index"
        :lat-lng="[lnbIcon.latitude, lnbIcon.longitude]"
        :icon="createIcon(lnbIcon)"
      />
    </LMap>
  </div>
</template>

<script setup>
import "../style.scss";
import "leaflet/dist/leaflet.css";
import "../App.vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet"; // Import Leaflet library
import PLKIcons from "./JsonMarkers/plkMarkers.json";
import a1ethnikiIcons from "./JsonMarkers/a1ethnikiMarkers.json";
import estlatIcons from "./JsonMarkers/est-latMarkers.json";
import acbIcons from "./JsonMarkers/acbMarkers.json";
import abaIcons from "./JsonMarkers/abaMarkers.json";
import aleaguehungaryIcons from "./JsonMarkers/aleaguehungaryMarkers.json";
import basketbolsuperligiIcons from "./JsonMarkers/basketbolsuperligiMarkers.json";
import bblIcons from "./JsonMarkers/bblMarkers.json";
import bnxtIcons from "./JsonMarkers/bnxtMarkers.json";
import britishblIcons from "./JsonMarkers/britishblMarkers.json";
import diviziaaromaniaIcons from "./JsonMarkers/israelsuperleagueMarkers.json";
import fpbIcons from "./JsonMarkers/fpbMarkers.json";
import israelsuperleagueIcons from "./JsonMarkers/bblMarkers.json";
import legabasketaIcons from "./JsonMarkers/legabasketaMarkers.json";
import lkllietuvaIcons from "./JsonMarkers/lkllietuvaMarkers.json";
import nblczechIcons from "./JsonMarkers/nblczechMarkers.json";
import nikesblIcons from "./JsonMarkers/nikesblMarkers.json";
import lnbIcons from "./JsonMarkers/lnbMarkers.json";

const iconPath = "league-icons";

function createIcon(leagueIcon) {
  console.log(
    `${iconPath}/${leagueIcon.league.toLowerCase()}/${leagueIcon.icon}.${
      leagueIcon.league.toLowerCase() === "lkllietuva" ? "svg" : "png"
    }`
  );

  return L.icon({
    iconUrl: `${iconPath}/${leagueIcon.league.toLowerCase()}/${
      leagueIcon.icon
    }.${leagueIcon.league.toLowerCase() === "lkllietuva" ? "svg" : "png"}`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}
</script>
