<template>
  <div>
    <h1>Wyszukiwarka Teamów</h1>
    <input type="text" v-model="searchQuery" placeholder="Wyszukaj..." />
    <ul>
      <li v-for="team in filteredTeams" :key="team.name">
        <img :src="team.icon" alt="Team Icon" />
        <span>{{ team.name }}</span>
        <span>{{ team.league }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// Importowanie pliku JSON
import teamsData from "./a1ethnikiMarkerss.json";
import AEKIcon from "./aek.png";

export default {
  name: "TeamSearch",
  data() {
    return {
      // Przypisanie danych z zaimportowanego pliku JSON
      teams: teamsData,
      searchQuery: "",
    };
  },
  computed: {
    // Aktualizacja danych każdego zespołu, aby zawierały ikonę AEK
    filteredTeams() {
      return this.teams.map((team) => ({
        ...team,
        // Ustawienie ścieżki do ikony AEK dla każdego zespołu
        icon: AEKIcon,
      }));
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

span {
  margin-right: 10px;
}

img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
</style>
