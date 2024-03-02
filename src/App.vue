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
import { iconslkllietuva } from "./components/lkllietuva_icons.js";
import { iconsbbl } from "./components/bbl_icons.js";
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
    //EST-LAT
    L.marker([56.825619547953394, 24.61128078230789], {
      icon: iconsestlat.BKOgre,
    }).addTo(this.map);
    L.marker([57.38651956880989, 21.571677577218253], {
      icon: iconsestlat.BKVentspils,
    }).addTo(this.map);
    L.marker([59.42623503223387, 24.647443839821253], {
      icon: iconsestlat.KalevCramo,
    }).addTo(this.map);
    L.marker([59.31090909278638, 24.41524792725715], {
      icon: iconsestlat.KeilaCoolbet,
    }).addTo(this.map);
    L.marker([56.95075314668964, 24.116696709942264], {
      icon: iconsestlat.LatvijasUniversitate,
    }).addTo(this.map);
    L.marker([56.52383702235258, 21.028500124402147], {
      icon: iconsestlat.Liepaja,
    }).addTo(this.map);
    L.marker([58.376659050163504, 24.532794894943272], {
      icon: iconsestlat.ParnuSadam,
    }).addTo(this.map);
    L.marker([48.538067306787454, 35.08009117401352], {
      icon: iconsestlat.Prometey,
    }).addTo(this.map);
    L.marker([56.94967325277611, 24.105203635539233], {
      icon: iconsestlat.RigasZelli,
    }).addTo(this.map);
    L.marker([59.42771371133274, 24.76053210167751], {
      icon: iconsestlat.TallinnKalev,
    }).addTo(this.map);
    L.marker([59.39365857888024, 24.67948570372652], {
      icon: iconsestlat.TalTech,
    }).addTo(this.map);
    L.marker([58.38109194962398, 26.719824741126974], {
      icon: iconsestlat.TartuUlikool,
    }).addTo(this.map);
    L.marker([58.99602368674895, 24.80149796341459], {
      icon: iconsestlat.UTILITASRapla,
    }).addTo(this.map);
    L.marker([57.52812437790353, 25.38903124233461], {
      icon: iconsestlat.ValmieraGlass,
    }).addTo(this.map);
    L.marker([56.971520913909664, 24.157465360027565], {
      icon: iconsestlat.VEFRiga,
    }).addTo(this.map);
    L.marker([59.51012210813956, 24.82858143945512], {
      icon: iconsestlat.Viimsi,
    }).addTo(this.map);
    //lkllietuva
    L.marker([55.076782003202474, 24.273524480179873], {
      icon: iconslkllietuva.Jonava,
    }).addTo(this.map);
    L.marker([55.73323356497018, 24.339455464493884], {
      icon: iconslkllietuva.Lietkabelis,
    }).addTo(this.map);
    L.marker([56.30107333209395, 22.331789308531462], {
      icon: iconslkllietuva.Mazeikiu,
    }).addTo(this.map);
    L.marker([55.69238786908371, 21.155167447669523], {
      icon: iconslkllietuva.NeptunasKlaipeda,
    }).addTo(this.map);
    L.marker([55.29478195671947, 23.982798987678844], {
      icon: iconslkllietuva.Nevezis,
    }).addTo(this.map);
    L.marker([56.06160790685852, 24.41362966346387], {
      icon: iconslkllietuva.Pasvalio,
    }).addTo(this.map);
    L.marker([54.71899363827523, 25.28798560637417], {
      icon: iconslkllietuva.Rytas,
    }).addTo(this.map);
    L.marker([55.922855834298424, 23.285268597591905], {
      icon: iconslkllietuva.Siauliai,
    }).addTo(this.map);
    L.marker([55.50394289676067, 25.593068517236453], {
      icon: iconslkllietuva.UtenosJuventus,
    }).addTo(this.map);
    L.marker([54.68713260550191, 25.27930796912465], {
      icon: iconslkllietuva.VilniausWolves,
    }).addTo(this.map);
    L.marker([54.89163710342457, 23.913454631417682], {
      icon: iconslkllietuva.Zalgris,
    }).addTo(this.map);
    //bbl
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
</style>
