/**
 * Anecdotes data organised by date (YYYY-MM-DD) and category.
 * Categories: animaux | espace | histoire | science
 */
const anecdotes = [
  {
    id: 1,
    date: "2026-04-05",
    category: "animaux",
    title: "Les pieuvres ont trois cœurs",
    body: "La pieuvre possède trois cœurs : deux pompent le sang vers les branchies, tandis que le troisième l\u2019envoie vers le reste du corps. Fait surprenant : lorsqu\u2019elle nage, le cœur principal s\u2019arrête, ce qui explique pourquoi elle préfère ramper plutôt que nager.",
    source: "National Geographic",
  },
  {
    id: 2,
    date: "2026-04-05",
    category: "espace",
    title: "La Grande Tache Rouge rétrécit",
    body: "La Grande Tache Rouge de Jupiter — une tempête qui fait rage depuis au moins 350 ans — a rétréci de moitié depuis les observations du XIXe siècle. Les scientifiques ne comprennent toujours pas exactement pourquoi cette tempête gigantesque persiste aussi longtemps.",
    source: "NASA JPL",
  },
  {
    id: 3,
    date: "2026-04-05",
    category: "histoire",
    title: "Le fax a précédé le téléphone",
    body: "Le premier fac-similé commercial a été breveté en 1843 par Alexander Bain, soit plus de 30 ans avant l\u2019invention du téléphone par Bell en 1876. Il utilisait des pendules synchronisées pour transmettre des images ligne par ligne via le télégraphe.",
    source: "Encyclopædia Britannica",
  },
  {
    id: 4,
    date: "2026-04-04",
    category: "animaux",
    title: "Les éléphants s\u2019auto-reconnaissent",
    body: "Les éléphants sont l\u2019une des rares espèces à passer le test du miroir : ils se reconnaissent dans leur reflet, signe d\u2019une conscience de soi. Cette capacité n\u2019est partagée que par les grands singes, les dauphins, et quelques oiseaux tels que la pie.",
    source: "PNAS (2006)",
  },
  {
    id: 5,
    date: "2026-04-04",
    category: "espace",
    title: "Saturne flotterait sur l\u2019eau",
    body: "La densité moyenne de Saturne est de 0,687 g/cm³, soit inférieure à celle de l\u2019eau (1 g/cm³). En théorie, si vous disposiez d\u2019un océan suffisamment grand, Saturne flotterait à sa surface — c\u2019est la seule planète du système solaire à avoir cette propriété.",
    source: "NASA",
  },
  {
    id: 6,
    date: "2026-04-04",
    category: "histoire",
    title: "Cléopâtre était plus proche de nous que des pyramides",
    body: "Cléopâtre VII (69–30 av. J.-C.) vivait environ 2 500 ans après la construction des grandes pyramides de Gizeh (vers 2560 av. J.-C.). Elle est donc temporellement plus proche de nous aujourd\u2019hui que des bâtisseurs des pyramides.",
    source: "Smithsonian Magazine",
  },
  {
    id: 7,
    date: "2026-04-03",
    category: "animaux",
    title: "Les flamants roses naissent gris",
    body: "Les flamants roses naissent avec un plumage blanc-grisâtre. Leur couleur rose caractéristique provient entièrement de leur alimentation, riche en pigments caroténoïdes présents dans les algues et les crustacés. En captivité, ils pâlissent si leur régime n\u2019est pas adapté.",
    source: "Audubon Society",
  },
  {
    id: 8,
    date: "2026-04-03",
    category: "espace",
    title: "Le soleil met 8 minutes pour nous éclairer",
    body: "La lumière émise par le Soleil met environ 8 minutes et 20 secondes pour atteindre la Terre, parcourant 150 millions de kilomètres. Cela signifie que nous voyons le Soleil tel qu\u2019il était il y a plus de 8 minutes — nous l\u2019observons toujours dans le passé.",
    source: "ESA",
  },
  {
    id: 9,
    date: "2026-04-03",
    category: "histoire",
    title: "L\u2019Oxford English Dictionary a mis 70 ans à être complété",
    body: "Commencé en 1857, le premier Oxford English Dictionary complet n\u2019a été achevé qu\u2019en 1928, soit 71 ans plus tard. L\u2019éditeur initial estimait que le projet prendrait deux ans. Il contient aujourd\u2019hui plus de 600 000 mots et définitions.",
    source: "Oxford University Press",
  },
  {
    id: 10,
    date: "2026-04-02",
    category: "animaux",
    title: "Les dauphins appellent leurs congénères par leur nom",
    body: "Les dauphins utilisent des sifflements uniques, semblables à des prénoms, pour se nommer les uns les autres. Ces \"prénoms\" sont appris dès leur naissance et maintenus tout au long de leur vie, ce qui constitue l\u2019une des rares formes de nomination volontaire dans le règne animal.",
    source: "PNAS (2013)",
  },
  {
    id: 11,
    date: "2026-04-02",
    category: "espace",
    title: "Il existe plus d\u2019étoiles que de grains de sable sur Terre",
    body: "L\u2019univers observable contient environ 2 000 milliards de galaxies, chacune hébergeant des centaines de milliards d\u2019étoiles. Le nombre total d\u2019étoiles estimé dépasse 10²⁴, ce qui surpasse largement le nombre de grains de sable de toutes les plages et déserts terrestres.",
    source: "ESA / Hubble",
  },
  {
    id: 12,
    date: "2026-04-02",
    category: "histoire",
    title: "Les Vikings ont atteint l\u2019Amérique 500 ans avant Colomb",
    body: "Vers l\u2019an 1000, le navigateur nordique Leif Erikson a établi une colonie à L\u2019Anse aux Meadows (Terre-Neuve, Canada). C\u2019est à ce jour le seul site viking confirmé en Amérique du Nord, découvert archéologiquement en 1960, soit cinq siècles avant l\u2019arrivée de Christophe Colomb.",
    source: "UNESCO",
  },
];

export default anecdotes;
