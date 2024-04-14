<template>
  <div>
    <h1>Season 2023/2024</h1>
    <label for="season">Choose season:</label>
    <select id="season">
      <option value="2023-2024">2023/2024</option>
    </select>

    <!-- Menu -->
    <div class="menu">
      <button @click="showStandings">Standings</button>
      <button @click="showMap">Map</button>
    </div>

    <!-- Content Area -->
    <div class="content">
      <table v-if="activeTab === 'standings'">
        <!-- Standings Table -->
        <thead>
          <tr>
            <th>Miejsce</th>
            <th>Drużyna</th>
            <th>Punkty</th>
            <th>Mecze</th>
            <th>Zwycięstwa-Porażki</th>
            <th>Dom</th>
            <th>Wyjazd</th>
            <th>Punkty zdobyte - Punkty stracone</th>
            <th>Różnica</th>
            <th>Stosunek</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in plkData" :key="index">
            <td>{{ row[0] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
            <td>{{ row[4] }}</td>
            <td>{{ row[5] }}</td>
            <td>{{ row[6] }}</td>
            <td>{{ row[7] }}</td>
            <td>{{ row[8] }}</td>
            <td>{{ row[9] }}</td>
            <td>{{ row[10] }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else-if="activeTab === 'map'">
        <div>
          <LMap
            :center="[52, 19.0]"
            :zoom="5.5"
            style="
              width: 800px;
              height: 500px;
              margin-top: 80px;
              border: 3px solid #000;
              border-radius: 7px;
              margin: 0 auto;
            "
          >
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
          </LMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plkData from "../../plk_data.json";
import "../style.scss";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import PLKIcons from "../components/JsonMarkers/plkMarkers.json";
import L from "leaflet";
const iconPath = "league-icons";

export default {
  name: "PLKView",
  data() {
    return {
      plkData: plkData,
      activeTab: "standings",
      PLKIcons: PLKIcons,
    };
  },
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  methods: {
    showStandings() {
      this.activeTab = "standings";
    },
    showMap() {
      this.activeTab = "map";
    },
    createIcon(leagueIcon) {
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
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

.menu {
  margin-bottom: 20px;
}

.menu button {
  margin-right: 10px;
}
</style>
