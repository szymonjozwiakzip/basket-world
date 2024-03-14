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
      <button @click="showResults">Results</button>
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
      <div v-else-if="activeTab === 'results'">
        <p>Results content goes here.</p>
      </div>
      <div v-else-if="activeTab === 'map'">
        <p>Map component goes here.</p>
        <LeafletMap />
      </div>
    </div>
  </div>
</template>

<script>
import plkData from "../../plk_data.json";
import "../style.scss";
import LeafletMap from "../components/LeafletMap.vue";

export default {
  name: "PLKView",
  data() {
    return {
      plkData: plkData,
      activeTab: "standings",
    };
  },
  methods: {
    showStandings() {
      this.activeTab = "standings";
    },
    showResults() {
      this.activeTab = "results";
    },
    showMap() {
      this.activeTab = "map";
    },
  },
  components: {
    LeafletMap,
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
