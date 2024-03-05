<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { iconsplk } from "./LeagueMarkers/plk_icons.js";
import { iconsestlat } from "./LeagueMarkers/est-lat_icons.js";
import { iconslkllietuva } from "./LeagueMarkers/lkllietuva_icons.js";
import { iconsbbl } from "./LeagueMarkers/bbl_icons.js";
import { iconslnb } from "./LeagueMarkers/lnb_icons.js";
import { iconsacb } from "./LeagueMarkers/acb_icons.js";
import { iconsfpb } from "./LeagueMarkers/fpb_icons.js";
import { iconslegabasketa } from "./LeagueMarkers/legabasketa_icons.js";
import { iconsaba } from "./LeagueMarkers/aba_icons.js";
import { iconsa1ethniki } from "./LeagueMarkers/a1ethniki_icons.js";
import { iconsaleaguehungary } from "./LeagueMarkers/aleaguehungary_icons.js";
import { iconsbasketbolsuperligi } from "./LeagueMarkers/basketbolsuperligi_icons.js";
import { iconsisraelsuperleague } from "./LeagueMarkers/israelsuperleague_icons.js";
import { iconsdiviziaaromania } from "./LeagueMarkers/diviziaaromania_icons.js";
import { iconsbritishbl } from "./LeagueMarkers/britishbl_icons.js";
import { iconsbnxt } from "./LeagueMarkers/bnxt_icons.js";
import { iconsnblczech } from "./LeagueMarkers/nblczech_icons.js";
import { iconsnikesbl } from "./LeagueMarkers/nikesbl_icons.js";

export default {
  name: "LeafletMap",
  mounted() {
    this.map = L.map("mapContainer").setView([47, 12.0], 4);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.addMarkers();
  },
  methods: {
    addMarkers() {
      this.addPLKMarkers();
      this.addA1ethnikiMarkers();
      this.addABAMarkers();
      this.addACBMarkers();
      this.addALeagueHungaryMarkers();
      this.addBasketbolSuperLigiMarkers();
      this.addBBLMarkers();
      this.addBritishBLMarkers();
      this.addDiviziaARomaniaMarkers();
      this.addEstLatMarkers();
      this.addFPBMarkers();
      this.addIsraelSuperLeagueMarkers();
      this.addLegaBasketAMarkers();
      this.addLKLLietuvaMarkers();
      this.addLNBMarkers();
      this.addNblCzechMarkers();
      this.addNikeSblMarkers();
      this.addBNXTMarkers();
    },
    //plk
    addPLKMarkers() {
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
    },
    //EST-LAT
    addEstLatMarkers() {
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
    },
    //lkllietuva
    addLKLLietuvaMarkers() {
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
    },
    //bbl
    addBBLMarkers() {
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
    },
    //lnb
    addLNBMarkers() {
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
    },
    //acb
    addACBMarkers() {
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
    },
    //fpb
    addFPBMarkers() {
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
    },
    //lega basket a
    addLegaBasketAMarkers() {
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
    },
    //aba
    addABAMarkers() {
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
    },
    //a1ethniki
    addA1ethnikiMarkers() {
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
    },
    //a league hungary
    addALeagueHungaryMarkers() {
      L.marker([47.19134650000981, 18.419580299121318], {
        icon: iconsaleaguehungary.AlbaFehervar,
      }).addTo(this.map);
      L.marker([46.61702660978278, 18.83638926839855], {
        icon: iconsaleaguehungary.Atomeromu,
      }).addTo(this.map);
      L.marker([47.48265973447064, 19.09241571027051], {
        icon: iconsaleaguehungary.BudapestHonved,
      }).addTo(this.map);
      L.marker([47.55044339090622, 21.634313953102442], {
        icon: iconsaleaguehungary.DEAC,
      }).addTo(this.map);
      L.marker([46.90125460169502, 19.674278991683394], {
        icon: iconsaleaguehungary.DunaAszfalt,
      }).addTo(this.map);
      L.marker([47.014560903892004, 16.594364147427598], {
        icon: iconsaleaguehungary.EgisKormend,
      }).addTo(this.map);
      L.marker([47.24329494050044, 16.619249124249386], {
        icon: iconsaleaguehungary.FalcoSzombathely,
      }).addTo(this.map);
      L.marker([46.36950024218537, 17.794025237693198], {
        icon: iconsaleaguehungary.KaposvariKK,
      }).addTo(this.map);
      L.marker([46.05347361314222, 18.211859656733896], {
        icon: iconsaleaguehungary.NKAPecs,
      }).addTo(this.map);
      L.marker([47.48648727425309, 18.316735456810115], {
        icon: iconsaleaguehungary.OSELions,
      }).addTo(this.map);
      L.marker([47.69245443625958, 16.582921499148263], {
        icon: iconsaleaguehungary.SopronKC,
      }).addTo(this.map);
      L.marker([47.169269340342375, 20.197454768428006], {
        icon: iconsaleaguehungary.SzolnokiOlajbanyasz,
      }).addTo(this.map);
      L.marker([46.244582250556846, 20.163081366523173], {
        icon: iconsaleaguehungary.SZTESzedak,
      }).addTo(this.map);
      L.marker([47.33507621323904, 17.47190560098458], {
        icon: iconsaleaguehungary.Zalakeramia,
      }).addTo(this.map);
    },
    //Basketbol Super Ligi
    addBasketbolSuperLigiMarkers() {
      L.marker([40.988705561179984, 28.853853466533785], {
        icon: iconsbasketbolsuperligi.AnadoluEfes,
      }).addTo(this.map);
      L.marker([39.79831662856119, 30.43688207390633], {
        icon: iconsbasketbolsuperligi.Bahcesehir,
      }).addTo(this.map);
      L.marker([41.08697024426911, 29.02309781257313], {
        icon: iconsbasketbolsuperligi.Besiktas,
      }).addTo(this.map);
      L.marker([40.2273985108079, 28.971982545085687], {
        icon: iconsbasketbolsuperligi.Bursaspor,
      }).addTo(this.map);
      L.marker([41.026904583656204, 28.591223399079837], {
        icon: iconsbasketbolsuperligi.Buyukcekmece,
      }).addTo(this.map);
      L.marker([41.12633224997248, 29.029171494863178], {
        icon: iconsbasketbolsuperligi.Darussafaka,
      }).addTo(this.map);
      L.marker([40.992998335793445, 29.10486214140579], {
        icon: iconsbasketbolsuperligi.Fenerbahce,
      }).addTo(this.map);
      L.marker([40.988567885812756, 28.85369253398917], {
        icon: iconsbasketbolsuperligi.Galatasaray,
      }).addTo(this.map);
      L.marker([37.02319773394598, 37.35249792437553], {
        icon: iconsbasketbolsuperligi.Gaziantep,
      }).addTo(this.map);
      L.marker([38.47447227072278, 27.076205639460113], {
        icon: iconsbasketbolsuperligi.Karsiyaka,
      }).addTo(this.map);
      L.marker([37.92156196066834, 32.496601422241476], {
        icon: iconsbasketbolsuperligi.Konyaspor,
      }).addTo(this.map);
      L.marker([38.649955488032134, 27.34647282679318], {
        icon: iconsbasketbolsuperligi.Manisa,
      }).addTo(this.map);
      L.marker([37.73930336285629, 29.094442512452304], {
        icon: iconsbasketbolsuperligi.Merkezefendi,
      }).addTo(this.map);
      L.marker([38.79492872382227, 26.965416879944737], {
        icon: iconsbasketbolsuperligi.Petkim,
      }).addTo(this.map);
      L.marker([40.22749680669392, 28.97170359534168], {
        icon: iconsbasketbolsuperligi.TofasBursa,
      }).addTo(this.map);
      L.marker([39.93769524526624, 32.84393418976874], {
        icon: iconsbasketbolsuperligi.TurkTelekom,
      }).addTo(this.map);
    },
    //Israel Super League
    addIsraelSuperLeagueMarkers() {
      L.marker([32.62639936834863, 35.31972962392421], {
        icon: iconsisraelsuperleague.HapoelAfula,
      }).addTo(this.map);
      L.marker([31.271829363266715, 34.77789455828343], {
        icon: iconsisraelsuperleague.HapoelBeerSheva,
      }).addTo(this.map);
      L.marker([29.558967213902637, 34.952260295231355], {
        icon: iconsisraelsuperleague.HapoelEilat,
      }).addTo(this.map);
      L.marker([33.172561382637774, 35.60797572876204], {
        icon: iconsisraelsuperleague.HapoelGalil,
      }).addTo(this.map);
      L.marker([32.7877570541221, 34.997086025783204], {
        icon: iconsisraelsuperleague.HapoelHaifa,
      }).addTo(this.map);
      L.marker([32.00232596239066, 34.79747769692353], {
        icon: iconsisraelsuperleague.HapoelHolon,
      }).addTo(this.map);
      L.marker([32.109275924798155, 34.810733239253935], {
        icon: iconsisraelsuperleague.HapoelSholmo,
      }).addTo(this.map);
      L.marker([31.75124498880938, 35.19414283924372], {
        icon: iconsisraelsuperleague.HapoelYerusalem,
      }).addTo(this.map);
      L.marker([32.1736604239271, 34.83326342391082], {
        icon: iconsisraelsuperleague.Herzeliya,
      }).addTo(this.map);
      L.marker([32.04688038886558, 34.81451761041604], {
        icon: iconsisraelsuperleague.Ironi,
      }).addTo(this.map);
      L.marker([32.80739553384244, 35.11030811618479], {
        icon: iconsisraelsuperleague.IroniKiryat,
      }).addTo(this.map);
      L.marker([31.93138742037242, 34.811498174159645], {
        icon: iconsisraelsuperleague.IroniNessZiona,
      }).addTo(this.map);
      L.marker([32.06111549167566, 34.79139299665407], {
        icon: iconsisraelsuperleague.Maccabi,
      }).addTo(this.map);
    },
    //Divizia A Romania
    addDiviziaARomaniaMarkers() {
      L.marker([44.83959406284955, 24.89388943970213], {
        icon: iconsdiviziaaromania.ArgesPitesti,
      }).addTo(this.map);
      L.marker([45.66030017258059, 25.617986482063216], {
        icon: iconsdiviziaaromania.Brasov,
      }).addTo(this.map);
      L.marker([44.18436804612257, 28.653378966369417], {
        icon: iconsdiviziaaromania.Constanta,
      }).addTo(this.map);
      L.marker([47.04610043895392, 21.913765487683772], {
        icon: iconsdiviziaaromania.CSMOradea,
      }).addTo(this.map);
      L.marker([44.45399839593747, 26.104109224341368], {
        icon: iconsdiviziaaromania.DinamoBucharest,
      }).addTo(this.map);
      L.marker([44.45674390272354, 26.055703496529084], {
        icon: iconsdiviziaaromania.RapidBucuresti,
      }).addTo(this.map);
      L.marker([45.797091821187564, 24.144985348557462], {
        icon: iconsdiviziaaromania.Sibiu,
      }).addTo(this.map);
      L.marker([46.53420251396902, 24.55374490389455], {
        icon: iconsdiviziaaromania.TarguMures,
      }).addTo(this.map);
      L.marker([44.512486022496944, 26.14065125593377], {
        icon: iconsdiviziaaromania.Voluntari,
      }).addTo(this.map);
      L.marker([46.767261408662925, 23.570278826291123], {
        icon: iconsdiviziaaromania.ClujNapoca,
      }).addTo(this.map);
    },
    //British BL
    addBritishBLMarkers() {
      L.marker([51.51241383530992, -2.555012954028108], {
        icon: iconsbritishbl.BristolFlyers,
      }).addTo(this.map);
      L.marker([55.78125767375908, -4.173169488642522], {
        icon: iconsbritishbl.CaledoniaGladiators,
      }).addTo(this.map);
      L.marker([53.2662653242798, -2.8934253697097105], {
        icon: iconsbritishbl.Cheshire,
      }).addTo(this.map);
      L.marker([52.643816364078866, -1.1307026390484625], {
        icon: iconsbritishbl.LeicesterRiders,
      }).addTo(this.map);
      L.marker([51.54433373362909, -0.020161923242150916], {
        icon: iconsbritishbl.LondonLions,
      }).addTo(this.map);
      L.marker([53.460066523394964, -2.191188073408877], {
        icon: iconsbritishbl.ManchesterGiants,
      }).addTo(this.map);
      L.marker([54.96364071342209, -1.6374035156643814], {
        icon: iconsbritishbl.NewcastleEagles,
      }).addTo(this.map);
      L.marker([50.36843665120712, -4.1502485023879085], {
        icon: iconsbritishbl.Patriots,
      }).addTo(this.map);
      L.marker([51.23534267719627, -0.6071534311849138], {
        icon: iconsbritishbl.Scorchers,
      }).addTo(this.map);
      L.marker([53.3946250198886, -1.42559952923043], {
        icon: iconsbritishbl.SheffieldSharks,
      }).addTo(this.map);
    },
    //BNXT
    addBNXTMarkers() {
      L.marker([50.45031901809368, 3.875464205815603], {
        icon: iconsbnxt.Belfius,
      }).addTo(this.map);
      L.marker([50.89258714166866, 4.376819397635821], {
        icon: iconsbnxt.BrusselsBasketball,
      }).addTo(this.map);
      L.marker([51.21746587175197, 2.8878980860136485], {
        icon: iconsbnxt.FilouOostende,
      }).addTo(this.map);
      L.marker([51.23723200258558, 4.440459239978861], {
        icon: iconsbnxt.GiantsAntwerp,
      }).addTo(this.map);
      L.marker([51.03119074511298, 4.46574860135037], {
        icon: iconsbnxt.KangoeroesMechelen,
      }).addTo(this.map);
      L.marker([50.91103530309252, 4.712930221175686], {
        icon: iconsbnxt.LeuvenBears,
      }).addTo(this.map);
      L.marker([50.57745380572556, 5.550969570639341], {
        icon: iconsbnxt.LiegeBasket,
      }).addTo(this.map);
      L.marker([50.93894165018119, 5.320526357164662], {
        icon: iconsbnxt.LimburgUnited,
      }).addTo(this.map);
      L.marker([50.93988129920526, 4.054730412983153], {
        icon: iconsbnxt.Okapiaalst,
      }).addTo(this.map);
      L.marker([50.44669399053546, 4.43922970688638], {
        icon: iconsbnxt.SpirouBasket,
      }).addTo(this.map);
      L.marker([50.806255231905865, 3.300692514831252], {
        icon: iconsbnxt.TalentsSpurs,
      }).addTo(this.map);
      L.marker([53.20266964230319, 6.5553969689063285], {
        icon: iconsbnxt.DonarGronningen,
      }).addTo(this.map);
      L.marker([51.89395962357702, 4.526298740009007], {
        icon: iconsbnxt.Feyenoord,
      }).addTo(this.map);
      L.marker([52.94504285213182, 4.76705098423948], {
        icon: iconsbnxt.HelderSuns,
      }).addTo(this.map);
      L.marker([51.72270162569572, 5.315588930730357], {
        icon: iconsbnxt.HeroesDenBosch,
      }).addTo(this.map);
      L.marker([52.52217630821236, 6.12243230934771], {
        icon: iconsbnxt.LandstedeHammers,
      }).addTo(this.map);
      L.marker([51.25731787079635, 5.692557487869663], {
        icon: iconsbnxt.Limburg,
      }).addTo(this.map);
      L.marker([53.211372572253296, 5.8254166670526155], {
        icon: iconsbnxt.LWDBasket,
      }).addTo(this.map);
      L.marker([52.16659974434661, 4.510949805003543], {
        icon: iconsbnxt.YoastUnited,
      }).addTo(this.map);
      L.marker([52.15010082044637, 4.475391699547663], {
        icon: iconsbnxt.ZZLeiden,
      }).addTo(this.map);
    },
    //NBL Czech
    addNblCzechMarkers() {
      L.marker([49.19401761189462, 16.609169364735404], {
        icon: iconsnblczech.BasketBrno,
      }).addTo(this.map);
      L.marker([50.02136125571996, 15.20871014287493], {
        icon: iconsnblczech.BCKolin,
      }).addTo(this.map);
      L.marker([50.78151854708998, 14.21684780926773], {
        icon: iconsnblczech.BKDecin,
      }).addTo(this.map);
      L.marker([49.48457778132458, 17.104150128263097], {
        icon: iconsnblczech.BKOlomoucko,
      }).addTo(this.map);
      L.marker([49.949634935706825, 17.884483517158753], {
        icon: iconsnblczech.BKOpava,
      }).addTo(this.map);
      L.marker([50.17864101845799, 15.0611813734873], {
        icon: iconsnblczech.EraNymburk,
      }).addTo(this.map);
      L.marker([49.833745009201216, 18.281014085951202], {
        icon: iconsnblczech.NHOstrava,
      }).addTo(this.map);
      L.marker([50.0402915773839, 15.76938793807058], {
        icon: iconsnblczech.Pardubice,
      }).addTo(this.map);
      L.marker([50.068681928788806, 14.477555565053958], {
        icon: iconsnblczech.SlaviaPraha,
      }).addTo(this.map);
      L.marker([49.31035509331072, 14.149707628255273], {
        icon: iconsnblczech.Srsni,
      }).addTo(this.map);
      L.marker([50.06699095115539, 14.432129431364048], {
        icon: iconsnblczech.USKPraha,
      }).addTo(this.map);
      L.marker([50.6649937762732, 14.012745420899304], {
        icon: iconsnblczech.UstiNadLabem,
      }).addTo(this.map);
    },
    //nikesbl
    addNikeSblMarkers() {
      L.marker([48.72982115196431, 18.76987087578125], {
        icon: iconsnikesbl.BanikHandlova,
      }).addTo(this.map);
      L.marker([47.76247084401153, 18.124112476259974], {
        icon: iconsnikesbl.BCKomarno,
      }).addTo(this.map);
      L.marker([48.33068306984282, 19.669046541703366], {
        icon: iconsnikesbl.BKMLucenec,
      }).addTo(this.map);
      L.marker([48.162371740359816, 17.141334041696098], {
        icon: iconsnikesbl.InterBratislava,
      }).addTo(this.map);
      L.marker([49.056552848192496, 20.20015589940769], {
        icon: iconsnikesbl.IskraSvit,
      }).addTo(this.map);
      L.marker([48.2205439712563, 18.59739009751701], {
        icon: iconsnikesbl.PatriotiLevice,
      }).addTo(this.map);
      L.marker([48.77362748215197, 18.623992535870276], {
        icon: iconsnikesbl.Prievidza,
      }).addTo(this.map);
      L.marker([48.30877965527305, 18.078254250876896], {
        icon: iconsnikesbl.SlaviaNitra,
      }).addTo(this.map);
      L.marker([48.944007785007, 20.56129373200692], {
        icon: iconsnikesbl.SpisskiRytieri,
      }).addTo(this.map);
    },
  },
  onBeforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
</style>
