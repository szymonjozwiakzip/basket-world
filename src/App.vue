<template>
  <body>
    <div id="background">
      <div id="mapContainer"></div>
    </div>
  </body>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { iconsplk } from "./components/plk_icons.js";
import { iconsestlat } from "./components/est-lat_icons.js";
export default {
  name: "LeafletMap",
  mounted() {
    this.map = L.map("mapContainer").setView([52, 20.0], 5);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    L.marker([53.01774180895404, 18.58839335478321], {
      icon: iconsplk.TwardePierniki,
    }).addTo(this.map);
    L.marker([52.64215483247922, 19.078747325737066], {
      icon: iconsplk.AnwilWloclawek,
    }).addTo(this.map);
    L.marker([54.54292641115558, 18.54417246038183], {
      icon: iconsplk.ArkaGdynia,
    }).addTo(this.map);
    L.marker([54.461642671632156, 17.006887432312496], {
      icon: iconsplk.CzarniSlupsk,
    }).addTo(this.map);
    L.marker([52.238015007025666, 20.99557172767503], {
      icon: iconsplk.DzikiWarszawa,
    }).addTo(this.map);
    L.marker([50.31765467295531, 18.586837473671697], {
      icon: iconsplk.GTKGliwice,
    }).addTo(this.map);
    L.marker([53.42430031750733, 14.51145715295809], {
      icon: iconsplk.KingSzczecin,
    }).addTo(this.map);
    L.marker([52.221471243279986, 21.040755797067394], {
      icon: iconsplk.LegiaWarszawa,
    }).addTo(this.map);
    L.marker([50.320775925817244, 19.190338625797928], {
      icon: iconsplk.MKSDaborwaGornicza,
    }).addTo(this.map);
    L.marker([51.651218460455596, 17.82835671639664], {
      icon: iconsplk.OstrowWielkopolski,
    }).addTo(this.map);
    L.marker([51.117513428017105, 17.024087983512466], {
      icon: iconsplk.SlaskWroclaw,
    }).addTo(this.map);
    L.marker([50.064204330219866, 22.23648169510024], {
      icon: iconsplk.SokolLancut,
    }).addTo(this.map);
    L.marker([53.341376128423434, 15.021300268295226], {
      icon: iconsplk.SpojniaStargard,
    }).addTo(this.map);
    L.marker([51.24872255923075, 22.59797619701333], {
      icon: iconsplk.StartLublin,
    }).addTo(this.map);
    L.marker([51.928456869282975, 15.488111254721973], {
      icon: iconsplk.StelmetZielonaGora,
    }).addTo(this.map);
    L.marker([54.426661018998786, 18.58049322300126], {
      icon: iconsplk.TreflSopot,
    }).addTo(this.map);
    L.marker([56.825619547953394, 24.61128078230789], {
      icon: iconsestlat.BKOgre,
    }).addTo(this.map);
    L.marker([57.38651956880989, 21.571677577218253], {
      icon: iconsestlat.BKVentspils,
    }).addTo(this.map);
    L.marker([59.42623503223387, 24.647443839821253], {
      icon: iconsestlat.KalevCramo,
    }).addTo(this.map);
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
  height: 600px;
  align-items: center;
  margin: 0 auto;
  display: flex;
}
#background {
  align-items: center;
  width: 100%;
  height: 100%;
}

html,
body {
  height: 100%; /* Ustaw wysokość body i html na 100% */
  margin: 0;
  padding: 0;
  background-color: #000000;
  background-image: url("./assets/background.jpg"); /*Dodaj ścieżkę do Twojego obrazu tła */
  background-size: cover; /*  Dopasuj obraz tła do rozmiaru kontenera */
  background-position: center; /*  Wyśrodkuj obraz tła */
}
</style>
