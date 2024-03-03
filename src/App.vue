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
import { iconslnb } from "./components/lnb_icons.js";
import { iconsacb } from "./components/acb_icons.js";
import { iconsfpb } from "./components/fpb_icons.js";
import { iconslegabasketa } from "./components/legabasketa_icons.js";
import { iconsaba } from "./components/aba_icons.js";
import { iconsa1ethniki } from "./components/a1ethniki_icons.js";

export default {
  name: "LeafletMap",
  mounted() {
    this.map = L.map("mapContainer").setView([47, 12.0], 4);

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
    L.marker([52.50633227689836, 13.443810216375322], {
      icon: iconsbbl.AlbaBerlin,
    }).addTo(this.map);
    L.marker([49.88458306807112, 10.924411911944555], {
      icon: iconsbbl.BambergBaskets,
    }).addTo(this.map);
    L.marker([48.12611873910997, 11.52549554262775], {
      icon: iconsbbl.BayernMunchen,
    }).addTo(this.map);
    L.marker([51.54210157826229, 9.92139340545021], {
      icon: iconsbbl.BGGottingen,
    }).addTo(this.map);
    L.marker([52.27596151985068, 10.51633687566982], {
      icon: iconsbbl.Braunschweig,
    }).addTo(this.map);
    L.marker([53.1442558703358, 8.23531440153021], {
      icon: iconsbbl.EWEOldenburg,
    }).addTo(this.map);
    L.marker([49.140947235984896, 10.078468013008495], {
      icon: iconsbbl.HAKROMerlins,
    }).addTo(this.map);
    L.marker([53.49568635462597, 10.002788547574804], {
      icon: iconsbbl.HamburgTowers,
    }).addTo(this.map);
    L.marker([48.89212715105839, 9.18359966458041], {
      icon: iconsbbl.MHPRiesen,
    }).addTo(this.map);
    L.marker([49.40563561514922, 8.68749836089941], {
      icon: iconsbbl.MLPAcademics,
    }).addTo(this.map);
    L.marker([50.81325387152095, 12.913729330896558], {
      icon: iconsbbl.NINERSChemnitz,
    }).addTo(this.map);
    L.marker([52.733787320816866, 8.261826037895101], {
      icon: iconsbbl.RastaVechta,
    }).addTo(this.map);
    L.marker([48.38273877272157, 10.006518965479223], {
      icon: iconsbbl.RatiopharmUlm,
    }).addTo(this.map);
    L.marker([54.09315890632362, 12.144284740102428], {
      icon: iconsbbl.RostockSeawolves,
    }).addTo(this.map);
    L.marker([51.20172420651504, 11.957080563360316], {
      icon: iconsbbl.SyntainicsMBC,
    }).addTo(this.map);
    L.marker([50.70513198744374, 7.060389893488712], {
      icon: iconsbbl.TelekomBaskets,
    }).addTo(this.map);
    L.marker([48.51110204807759, 9.04212355723048], {
      icon: iconsbbl.TigersTubingen,
    }).addTo(this.map);
    L.marker([49.773417528978314, 9.941378772555929], {
      icon: iconsbbl.WurzburgBaskets,
    }).addTo(this.map);
    //lnb
    L.marker([47.60147519087981, 1.3291299434366033], {
      icon: iconslnb.Blois,
    }).addTo(this.map);
    L.marker([46.186876889329746, 5.248483719462745], {
      icon: iconslnb.Bourg,
    }).addTo(this.map);
    L.marker([46.78700442508851, 4.86497107429036], {
      icon: iconslnb.Chalon,
    }).addTo(this.map);
    L.marker([47.05770098081191, -0.8965368489831228], {
      icon: iconslnb.Cholet,
    }).addTo(this.map);
    L.marker([47.33260542793946, 5.056183758967851], {
      icon: iconslnb.Dijon,
    }).addTo(this.map);
    L.marker([50.9986485006889, 2.122533641918873], {
      icon: iconslnb.Dunquerque,
    }).addTo(this.map);
    L.marker([47.95607658600512, 0.22665291481283276], {
      icon: iconslnb.LeMans,
    }).addTo(this.map);
    L.marker([50.71714118478925, 1.5845475792215813], {
      icon: iconslnb.LePortel,
    }).addTo(this.map);
    L.marker([45.82790699320342, 1.2601750254623518], {
      icon: iconslnb.Limoges,
    }).addTo(this.map);
    L.marker([45.76652272498766, 4.907785822132507], {
      icon: iconslnb.LyonVilleurbanne,
    }).addTo(this.map);
    L.marker([48.89609265892796, 2.278006212998819], {
      icon: iconslnb.Metropolitans,
    }).addTo(this.map);
    L.marker([43.727798463463785, 7.415245716506386], {
      icon: iconslnb.Monaco,
    }).addTo(this.map);
    L.marker([48.699513177722736, 6.139059126912494], {
      icon: iconslnb.Nancy,
    }).addTo(this.map);
    L.marker([48.89205773718268, 2.2118121123357595], {
      icon: iconslnb.Nanterre,
    }).addTo(this.map);
    L.marker([48.89932972715457, 2.36000504819353], {
      icon: iconslnb.Paris,
    }).addTo(this.map);
    L.marker([46.03107102443696, 4.051598424530872], {
      icon: iconslnb.Roanne,
    }).addTo(this.map);
    L.marker([49.84879888939587, 3.294151362767722], {
      icon: iconslnb.SaintQuentin,
    }).addTo(this.map);
    L.marker([48.60006076845759, 7.765248335733138], {
      icon: iconslnb.Strasbourg,
    }).addTo(this.map);
    //acb
    L.marker([42.50496032319114, 1.5164761072100315], {
      icon: iconsacb.Andorra,
    }).addTo(this.map);
    L.marker([41.38004589366775, 2.120142626216099], {
      icon: iconsacb.Barcelona,
    }).addTo(this.map);
    L.marker([42.86404008756398, -2.6415723007180025], {
      icon: iconsacb.Baskonia,
    }).addTo(this.map);
    L.marker([41.72546505172374, 1.8103602206747105], {
      icon: iconsacb.BAXIManresa,
    }).addTo(this.map);
    L.marker([43.252211599647175, -2.926025114196951], {
      icon: iconsacb.BilbaoBasket,
    }).addTo(this.map);
    L.marker([41.63544627115347, -0.86633891371511], {
      icon: iconsacb.CasademontZaragoza,
    }).addTo(this.map);
    L.marker([41.99068962464731, 2.810563536028106], {
      icon: iconsacb.Girona,
    }).addTo(this.map);
    L.marker([37.15353102753301, -3.5939345990540694], {
      icon: iconsacb.Granada,
    }).addTo(this.map);
    L.marker([28.102908756184718, -15.456918260667482], {
      icon: iconsacb.GranCanaria,
    }).addTo(this.map);
    L.marker([41.44222215635477, 2.2325182495020193], {
      icon: iconsacb.JuventutBadalona,
    }).addTo(this.map);
    L.marker([28.45851202506214, -16.296843486780517], {
      icon: iconsacb.LenovoTenerife,
    }).addTo(this.map);
    L.marker([42.876212208669585, -8.53086357928449], {
      icon: iconsacb.Obradoiro,
    }).addTo(this.map);
    L.marker([40.42380590145738, -3.671736030443485], {
      icon: iconsacb.RealMadrid,
    }).addTo(this.map);
    L.marker([43.38498342963564, -8.402141930583442], {
      icon: iconsacb.RioBreogan,
    }).addTo(this.map);
    L.marker([37.99407548206215, -1.1128028199234994], {
      icon: iconsacb.UCAMMurcia,
    }).addTo(this.map);
    L.marker([36.68848775835027, -4.450053280952326], {
      icon: iconsacb.Unicaja,
    }).addTo(this.map);
    L.marker([39.45171907848461, -0.3660734132521466], {
      icon: iconsacb.Valencia,
    }).addTo(this.map);
    L.marker([42.014850554997174, -4.54058279424828], {
      icon: iconsacb.ZunderPalencia,
    }).addTo(this.map);
    //fpb
    L.marker([32.642725145253074, -16.832418256549268], {
      icon: iconsfpb.ADGalomar,
    }).addTo(this.map);
    L.marker([40.640389453755816, -8.653253975576126], {
      icon: iconsfpb.AveiroOli,
    }).addTo(this.map);
    L.marker([38.73148568865632, -9.140682065436538], {
      icon: iconsfpb.Benfica,
    }).addTo(this.map);
    L.marker([41.38667992171695, -8.772252431455275], {
      icon: iconsfpb.CDPovoa,
    }).addTo(this.map);
    L.marker([37.086925596741175, -8.256454502609065], {
      icon: iconsfpb.Imortal,
    }).addTo(this.map);
    L.marker([37.13015050404671, -8.595018510996516], {
      icon: iconsfpb.Lusitania,
    }).addTo(this.map);
    L.marker([40.83114146451275, -8.48515964681719], {
      icon: iconsfpb.Oliveirense,
    }).addTo(this.map);
    L.marker([40.87642626845812, -8.633420608188667], {
      icon: iconsfpb.Ovarense,
    }).addTo(this.map);
    L.marker([37.13770648679167, -8.535131610571376], {
      icon: iconsfpb.Portimonense,
    }).addTo(this.map);
    L.marker([41.16257676262095, -8.581663629612168], {
      icon: iconsfpb.Porto,
    }).addTo(this.map);
    L.marker([38.76372429987048, -9.158418716197973], {
      icon: iconsfpb.Sporting,
    }).addTo(this.map);
    L.marker([41.4481151179245, -8.280064725901143], {
      icon: iconsfpb.Vitoria,
    }).addTo(this.map);
    //lega basket a
    L.marker([45.151506148918166, 10.033989173059261], {
      icon: iconslegabasketa.BasketCremona,
    }).addTo(this.map);
    L.marker([45.52930109962681, 10.176807829097593], {
      icon: iconslegabasketa.Brescia,
    }).addTo(this.map);
    L.marker([40.717085825806734, 8.583153316402663], {
      icon: iconslegabasketa.DinamoSassari,
    }).addTo(this.map);
    L.marker([45.401449836426195, 9.14226251101499], {
      icon: iconslegabasketa.EAMilano,
    }).addTo(this.map);
    L.marker([40.61426788347855, 17.946716486103814], {
      icon: iconslegabasketa.HappyCasaBrindisi,
    }).addTo(this.map);
    L.marker([40.82238340384062, 14.179210872227081], {
      icon: iconslegabasketa.Napoli,
    }).addTo(this.map);
    L.marker([43.90315155258487, 12.86711784773697], {
      icon: iconslegabasketa.Pesaro,
    }).addTo(this.map);
    L.marker([43.931253330684214, 10.940439856991322], {
      icon: iconslegabasketa.Pistoia,
    }).addTo(this.map);
    L.marker([44.69914300936736, 10.624717630033905], {
      icon: iconslegabasketa.ReggioEmilia,
    }).addTo(this.map);
    L.marker([40.76329739278071, 14.517930889688], {
      icon: iconslegabasketa.Scafati,
    }).addTo(this.map);
    L.marker([45.12439133053979, 8.46150661655685], {
      icon: iconslegabasketa.Tortona,
    }).addTo(this.map);
    L.marker([46.041817343325064, 11.122784238329407], {
      icon: iconslegabasketa.Trentino,
    }).addTo(this.map);
    L.marker([45.724035581450394, 12.262514609176275], {
      icon: iconslegabasketa.Treviso,
    }).addTo(this.map);
    L.marker([45.83614494418462, 8.8023419171209], {
      icon: iconslegabasketa.Varese,
    }).addTo(this.map);
    L.marker([45.48854715684501, 12.278712685883693], {
      icon: iconslegabasketa.Venezia,
    }).addTo(this.map);
    L.marker([44.48592839613759, 11.248183180295117], {
      icon: iconslegabasketa.VirtusBologna,
    }).addTo(this.map);
    //aba
    L.marker([42.43807428388677, 19.253949729953654], {
      icon: iconsaba.Buducnost,
    }).addTo(this.map);
    L.marker([46.0813735938495, 14.521596285905751], {
      icon: iconsaba.CedevitaOlimpija,
    }).addTo(this.map);
    L.marker([45.8026248886426, 15.963487428223672], {
      icon: iconsaba.CibonaZagreb,
    }).addTo(this.map);
    L.marker([44.814200191949176, 20.421388616545475], {
      icon: iconsaba.CrvenaZvezda,
    }).addTo(this.map);
    L.marker([44.73129745212163, 20.376700943430087], {
      icon: iconsaba.FMPSoccerbet,
    }).addTo(this.map);
    L.marker([44.90742551099624, 17.308192364967073], {
      icon: iconsaba.Igokea,
    }).addTo(this.map);
    L.marker([43.89752441199157, 20.352605370482607], {
      icon: iconsaba.KKBorac,
    }).addTo(this.map);
    L.marker([43.52383254390198, 16.434200712797715], {
      icon: iconsaba.KKSplit,
    }).addTo(this.map);
    L.marker([44.119515895358404, 15.245616483445332], {
      icon: iconsaba.KKZadar,
    }).addTo(this.map);
    L.marker([45.80097685800342, 15.170576960335739], {
      icon: iconsaba.Krka,
    }).addTo(this.map);
    L.marker([44.82766648017078, 20.40632053797916], {
      icon: iconsaba.MEGAMis,
    }).addTo(this.map);
    L.marker([42.10319819279943, 19.09416469555419], {
      icon: iconsaba.Mornar,
    }).addTo(this.map);
    L.marker([44.81418496995902, 20.42108820914276], {
      icon: iconsaba.Partizan,
    }).addTo(this.map);
    L.marker([42.4380822018432, 19.253971187625275], {
      icon: iconsaba.SCDerby,
    }).addTo(this.map);
    //a1ethniki
    L.marker([38.03783972302466, 23.783965503361536], {
      icon: iconsa1ethniki.AEK,
    }).addTo(this.map);
    L.marker([38.20868232038584, 21.764142613892865], {
      icon: iconsa1ethniki.Apollon,
    }).addTo(this.map);
    L.marker([40.62687322823856, 22.957393741534062], {
      icon: iconsa1ethniki.Aris,
    }).addTo(this.map);
    L.marker([39.35929667905996, 21.904889020597455], {
      icon: iconsa1ethniki.Karditsas,
    }).addTo(this.map);
    L.marker([36.448154825638255, 28.224828791133554], {
      icon: iconsa1ethniki.Kolossos,
    }).addTo(this.map);
    L.marker([37.716629354952396, 24.050125180067997], {
      icon: iconsa1ethniki.Lavrio,
    }).addTo(this.map);
    L.marker([38.040736098569624, 23.799304070278065], {
      icon: iconsa1ethniki.Maroussi,
    }).addTo(this.map);
    L.marker([37.94287441449622, 23.66730611446267], {
      icon: iconsa1ethniki.Olympiacos,
    }).addTo(this.map);
    L.marker([38.03784924251713, 23.784950529743842], {
      icon: iconsa1ethniki.Panathinaikos,
    }).addTo(this.map);
    L.marker([40.56553942399688, 22.981374110845543], {
      icon: iconsa1ethniki.PAOK,
    }).addTo(this.map);
    L.marker([38.028239886056646, 23.67887361076415], {
      icon: iconsa1ethniki.Peristeri,
    }).addTo(this.map);
    L.marker([38.28397563358128, 21.773586387488226], {
      icon: iconsa1ethniki.Promitheas,
    }).addTo(this.map);
    //a league hungary
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
