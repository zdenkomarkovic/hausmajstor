export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  extraImages: string[];
  features: string[];
  faq: ServiceFaq[];
  color: string;
  bg: string;
  border: string;
}

export const services: Service[] = [
  {
    slug: "vodoinstalaterski-radovi",
    title: "Vodoinstalaterski radovi",
    shortDesc:
      "Popravka i ugradnja vodovoda i odvoda, slavina, bojlera, toaleta. Otklanjanje curenja i začepljenja.",
    longDesc: `Naš iskusni vodoinstalater Beograd obavlja sve vrste vodoinstalaterskih radova brzo i kvalitetno. Bilo da se radi o hitnoj intervenciji zbog puknutog creva ili planiranoj ugradnji novog vodovoda, tu smo za vas 0-24h.

Nudimo kompletnu uslugu od dijagnostike do popravke: zamena dotrajalih cevi, ugradnja novih slavina i baterija, otklanjanje začepljenja odvoda, popravka i ugradnja toaleta, te servis i ugradnja bojlera. Posebno smo specijalizovani za hitnu vodoinstalatersku intervenciju kada svaki minut ima značaj.

Radimo na objektima u Pančevu i Beogradu, stambenim i poslovnim. Koristimo kvalitetan materijal i dajemo garanciju na sve izvedene radove. Popravke u kući i stanu — naša je specijalnost.`,
    image: "/2150721537.jpg",
    extraImages: ["/2150721537.jpg"],
    features: [
      "Popravka i zamena cevi (PVC, bakar, PPR)",
      "Ugradnja slavina, baterija i tuševa",
      "Otklanjanje začepljenja odvoda",
      "Popravka i ugradnja WC školjki i rezervoara",
      "Ugradnja i servis bojlera",
      "Hitna vodoinstalaterska intervencija 0-24h",
      "Detekcija i sanacija curenja",
      "Ugradnja vodomera i filtera",
    ],
    faq: [
      {
        question: "Koliko košta vodoinstalaterska usluga?",
        answer:
          "Cena vodoinstalaterskih radova zavisi od vrste posla i broja sati utrošenih za konkretan posao. Pozovite nas radi otklanjanja problema i procene.",
      },
      {
        question: "Da li radite hitne intervencije noću?",
        answer:
          "Da, dostupni smo 0-24h, 7 dana u nedelji. Hitna vodoinstalaterska intervencija je naš prioritet.",
      },
      {
        question: "Da li dajete garanciju na vodoinstalaterske radove?",
        answer:
          "Da, na sve izvedene radove dajemo garanciju. Koristimo kvalitetan materijal proverenih proizvođača.",
      },
    ],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    slug: "elektroinstalaterski-radovi",
    title: "Elektroinstalaterski radovi",
    shortDesc:
      "Ugradnja utičnica, prekidača, osigurača. Popravka električne instalacije i razvodnih ormara.",
    longDesc: `Stručni elektricar Pančevo i Beograd — bezbedno, stručno i prema svim propisima. Naša ekipa obavlja sve elektroinstalaterske radove u stambenim i poslovnim objektima.

Specijalizovani smo za zamenu starih instalacija, ugradnju novih utičnica i prekidača, postavljanje i popravku razvodnih ormara, ugradnju rasvete i lustera, te dijagnostiku svih vrsta kvarova u elektroinstalaciji.

Sve radove obavljamo u skladu sa važećim standardima i propisima. Radimo brzo kako bismo minimizirali vreme bez struje u vašem domu ili firmi. Bez obzira na složenost posla — tu smo za sve popravke u kući i stanu.`,
    image: "/2204.jpg",
    extraImages: ["/2204.jpg"],
    features: [
      "Ugradnja utičnica i prekidača",
      "Popravka i zamena osigurača",
      "Postavljanje i servis razvodnih ormara",
      "Ugradnja lustera i rasvete",
      "Dijagnostika kvarova u instalaciji",
      "Zamena starih elektroinstalacija",
      "Ugradnja termostata i dimmera",
      "Hitne intervencije 0-24h",
    ],
    faq: [
      {
        question: "Koliko dugo traje zamena elektroinstalacije?",
        answer:
          "Zavisi od veličine objekta. Zamena instalacije u jednosobnom stanu traje 1-2 dana. Pozovite nas za besplatan pregled.",
      },
      {
        question: "Da li ste licencirani elektricar?",
        answer:
          "Da, svi naši radovi se obavljaju po važećim propisima i standardima. Dajemo garanciju na izvedene radove.",
      },
      {
        question: "Šta da radim ako nestane struja u stanu?",
        answer:
          "Pozovite nas odmah — dostupni smo 0-24h. Prethodno proverite da li su osigurači isključeni u razvodnom ormaru.",
      },
    ],
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
  },
  {
    slug: "servis-bojlera",
    title: "Servis bojlera",
    shortDesc:
      "Pregled, čišćenje i popravka svih vrsta bojlera. Zamena grejnih elemenata i termostata.",
    longDesc: `Servis bojlera Pančevo — produžite vek svog bojlera i smanjite račune za struju redovnim održavanjem. Naš servis obuhvata sve marke bojlera: Ariston, Gorenje, Beko, Vaillant i druge.

Preporučujemo godišnji servis bojlera koji uključuje čišćenje od kamenca, proveru grejnog elementa i magnezijumske anode, kalibraciju termostata i kontrolu sigurnosnog ventila. Pravilno servisiran bojler troši do 30% manje struje.

Dostupni za hitne popravke bojlera u Pančevu i Beogradu — bez tople vode nećete ostati dugo. Brz dolazak i stručna popravka u kući i stanu.`,
    image: "/2149334231.jpg",
    extraImages: ["/2149334231.jpg"],
    features: [
      "Servis i čišćenje svih vrsta bojlera",
      "Zamena grejnog elementa",
      "Zamena magnezijumske anode",
      "Popravka i zamena termostata",
      "Čišćenje od kamenca",
      "Provera sigurnosnog ventila",
      "Ugradnja novog bojlera",
      "Garancija na sve radove",
    ],
    faq: [
      {
        question: "Koliko često treba servisirati bojler?",
        answer:
          "Preporučujemo servis jednom godišnje. Redovnim servisom bojler troši manje struje i traje duže.",
      },
      {
        question: "Koji znaci upozorenja govore da bojler treba popravku?",
        answer:
          "Mlaka voda, buka iz bojlera, curenje vode i povišeni računi za struju su znaci da bojler treba servis.",
      },
      {
        question: "Da li popravljate sve marke bojlera?",
        answer:
          "Da, servisiramo sve marke — Ariston, Gorenje, Beko, Vaillant, Electrolux i ostale.",
      },
    ],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    slug: "servis-grejnih-tela",
    title: "Servis tea peći i grejnih tela",
    shortDesc: "Popravka i servisiranje tea peći, radijatora i svih vrsta grejnih tela.",
    longDesc: `Stručni servis grejnih tela Pančevo i Beograd. Popravljamo i servisiramo tea peći, električno i vodno grejanje, radijatore, podno grejanje i sve ostale sisteme grejanja.

Naš tim ima višegodišnje iskustvo u servisiranju svih vrsta grejnih tela. Dijagnostikujemo kvar brzo i precizno, koristimo originalne rezervne delove i dajemo garanciju na sve izvedene radove.

Pre zimske sezone preporučujemo servis sistema grejanja kako biste izbegli neprijatna iznenađenja u hladnim mesecima. Sve popravke u kući i stanu — brzo i povoljno.`,
    image: "/tapec.jpg",
    extraImages: ["/tapec.jpg"],
    features: [
      "Servis i popravka tea peći",
      "Popravka radijatora i grejnih tela",
      "Servis sistema podnog grejanja",
      "Dijagnostika kvarova sistema grejanja",
      "Zamena termostatskih glava",
      "Odzračivanje instalacije grejanja",
      "Priprema sistema za zimsku sezonu",
      "Ugradnja novih grejnih tela",
    ],
    faq: [
      {
        question: "Zašto moja tea peć ne greje?",
        answer:
          "Najčešći uzroci su kvar grejnog elementa, termostata ili termičke zaštite. Pozovite nas za besplatnu dijagnostiku.",
      },
      {
        question: "Kada treba servisirati sistem grejanja?",
        answer:
          "Preporučujemo servis sistema grejanja pre zimske sezone, obično u septembru ili oktobru.",
      },
      {
        question: "Da li popravljate podno grejanje?",
        answer: "Da, servisiramo i popravljamo sisteme podnog grejanja — električno i vodno.",
      },
    ],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    slug: "servis-sporeta",
    title: "Servis šporeta i ugradnih ploča",
    shortDesc: "Popravka električnih i gas šporeta, ugradnih ploča i svih kućnih aparata.",
    longDesc: `Popravka šporeta Pančevo i Beograd — vaš šporet u rukama iskusnih majstora. Popravljamo sve vrste šporeta i ugradnih ploča: električne, gas i kombinovane.

Naš servis uključuje zamenu grejnih elemenata, popravku termostata i regulatora temperature, servis pećnice, popravku paljenja na gas šporetima, te zamenu staklokeramičkih ploča.

Dolazimo sa svim potrebnim alatom i rezervnim delovima za najčešće kvarove, što znači da vaš šporet u većini slučajeva može biti popravljen pri prvoj poseti. Brze i povoljne popravke u kući i stanu.`,
    image: "/2149176716.jpg",
    extraImages: ["/2149176716.jpg"],
    features: [
      "Popravka električnih šporeta i ploča",
      "Servis gas šporeta i ugradnih ploča",
      "Zamena grejnih elemenata",
      "Popravka termostata i regulatora",
      "Servis i popravka pećnice",
      "Zamena staklokeramičkih ploča",
      "Popravka paljenja na gas šporetima",
      "Servis ugradnih rerni",
    ],
    faq: [
      {
        question: "Da li se isplati popravljati stari šporet?",
        answer:
          "U većini slučajeva da — popravka košta znatno manje od novog šporeta. Pozovite nas za procenu isplativosti popravke.",
      },
      {
        question: "Koliko dugo traje popravka šporeta?",
        answer: "Najčešće kvarove popravljamo pri prvoj poseti, u roku od 1-2 sata.",
      },
      {
        question: "Popravljate li i ugradne rerne i ploče?",
        answer: "Da, servisiramo ugradne rerne, staklokeramičke i indukcione ploče svih marki.",
      },
    ],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    slug: "montaza-namestaja",
    title: "Montaža nameštaja",
    shortDesc:
      "Profesionalna montaža svih vrsta nameštaja — od jednostavnih polica do kompleksnih sistema.",
    longDesc: `Montaža nameštaja Beograd i Pančevo — brzo, precizno i bez stresa. Naš tim montira sve vrste nameštaja: IKEA, Jysk, domaće i uvozne marke.

Specijalizovani smo za montažu kuhinja, garderobera, ormana, kreveta, polica, TV komoda i kancelarijskog nameštaja. Posle montaže nameštaj je stabilan, uravnat i estetski savršen.

Nudimo uslugu odvoza i odlaganja ambalaže, što vam štedi vreme i trud. Pozovite nas kada dobijete dostavu — organizujemo dolazak po vašem rasporedu. Sve popravke u stanu i kući su naša specijalnost.`,
    image: "/24857.jpg",
    extraImages: ["/24857.jpg"],
    features: [
      "Montaža svih vrsta nameštaja",
      "IKEA, Jysk i ostale marke",
      "Montaža kuhinja i garderobera",
      "Ugradnja ormana i polica",
      "Montaža kreveta i tapaciranog nameštaja",
      "Kancelarijski nameštaj i stolice",
      "Odvoz i odlaganje ambalaže",
      "Dolazimo po vašem rasporedu",
    ],
    faq: [
      {
        question: "Koliko košta montaža IKEA nameštaja?",
        answer:
          "Cena montaže IKEA nameštaja zavisi od broja i vrste komada. Pozovite nas za besplatnu procenu.",
      },
      {
        question: "Da li možete da montirate nameštaj istog dana?",
        answer:
          "U zavisnosti od naše raspoloživosti, često možemo organizovati dolazak isti dan ili sutradan.",
      },
      {
        question: "Da li odnosite ambalažu posle montaže?",
        answer: "Da, nudimo odvoz kartona i ambalaže uz naknadu. Pitajte nas pri zakazivanju.",
      },
    ],
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
