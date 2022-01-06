import gobie from "../images/photo-poissons/Gobiodon-okinawae-Richard-Zerke.jpg";
import clown from "../images/photo-poissons/Amphiprion-ocellaris-Pamilacan-Philippines.jpg";
import cardinal from "../images/photo-poissons/Pterapogon-kauderni-Bali-Indonesia.jpg";
import serran from "../images/photo-poissons/Gramma-loreto-Akumal-Mexico.jpg";
import blennie from "../images/photo-poissons/Starry-Blenny-Salarias-ramosus.jpg";
import becasse from "../images/photo-poissons/becasse.jpg";
import chirurgien from "../images/photo-poissons/chirurgien.jpg";
import { v4 as uuidv4 } from "uuid";

export const listOfPopulation = [
  {
    id: uuidv4(),
    name: "Le gobie jaune",
    latin: "Gobiodon okinawae",
    description:
      '"Ce gobie nain est un excellent pensionnaire pour un aquarium récifal. C’est un tout petit poisson qui ne dépasse pas les 4 cm. Dans la nature, il passe son temps posé sur les coraux du genre Acropora en se nourrissant des petits crustacés venant trouver refuge parmi les branches des coraux.Même s’il est très paisible et sociable, il n’en reste pas moins territorial, il est bon de ne pas maintenir plus d’un couple formé dans un aquarium d’eau moins 100 litres.Il s’alimente de nourriture vivante ou congelée, principalement de micro-crustacés (copépodes, mysis, gammares, artémias).",',
    volume: 50,
    size: 4,
    photo: gobie,
    longevity: "entre 5 et 8 ans",
    recifal: true,
    alt: "Le gobie jaune",
  },

  {
    id: uuidv4(),
    name: "poisson-clown",
    latin: "Amphiprion ocellaris",
    description:
      "Le poisson-clown est un choix intéressant pour débuter un aquarium récifal. Ce petit poisson rencontré dans le centre du bassin Indo-pacifique est très paisible et peut être maintenu dans un volume relativement faible.Attention aux relations intra-spécifiques, dans un bac de 140 litres il est conseillé de maintenir au maximum un couple.Astuce : Pour être sûr d’avoir un couple, vous pouvez introduire dans l’aquarium deux individus de taille différente.",
    volume: 140,
    size: 8,
    photo: clown,
    longevity: "plus de 12 ans",
    recifal: true,
    alt: "poisson-clown",
  },

  {
    id: uuidv4(),
    name: "Le poisson-cardinal de Banggai",
    latin: "Pterapogon kauderni",
    description:
      "Ce poisson star de l’aquariophilie récifale est très facile à maintenir en captivité. Il est résistant aux maladies et au stress. Toutefois, il convient de le maintenir en présences d’espèces au tempérament calme.Ses relations inter-spécifiques sont excellentes, les autres poissons sont ignorés. Par contre il est extrêmement territorial avec ses congénères. Il est déconseillé de maintenir plus d’un individu dans un aquarium de moins de 200 litres.Il acceptera tout type de nourriture fraiche ou congelée du genre artemia, mysis ou krill.",
    volume: 150,
    size: 9,
    photo: cardinal,
    longevity: "autour de 5 ans",
    recifal: true,
    alt: "Le poisson-cardinal de Banggai",
  },

  {
    id: uuidv4(),
    name: "Le serran royal",
    latin: "Gramma loreto",
    description:
      "Ce poisson des caraïbes d’environs 8 cm est un hôte recommandé pour un aquarium récifal de taille modeste. C’est un poisson robuste et pacifique avec la plupart des autres poissons, il faut toutefois être prudent quant à sa cohabitation avec des espèces présentant une robe similaire.Les relations intra-spécifiques sont très mauvaises. Il faudra disposer d’un bac d’au moins 500 litres et fournir de nombreuses cachettes si vous souhaitez maintenir plusieurs spécimens. ",
    volume: 150,
    size: 8,
    photo: serran,
    longevity: "autour de 5 ans",
    recifal: true,
    alt: "Le serran royal",
  },

  {
    id: uuidv4(),
    name: "Les blennies du genre",
    latin: "Salarias",
    description:
      "Ces blennies sont toutes exclusivement herbivores. Les colorations varient en fonction des espèces. Ces poissons curieux sont particulièrement intéressants à observer.Généralement territoriaux, ils n’hésitent pas à attaquer leurs congénères. Ils sont pacifiques avec les autres poissons et invertébrés. Ils peuvent même se montrer craintifs en cas d’agitation. Comme pour le Gramma loreto, il est préférable de les associer à des voisins calmes.",
    volume: 150,
    size: 6,
    photo: blennie,
    longevity: "entre 4 et 8 ans",
    recifal: true,
    alt: "Les blennies du genre",
  },

  {
    id: uuidv4(),
    name: "Le poisson-bécasse à carreaux",
    latin: "Oxycirrhites typus",
    description:
      "Le poissson-bécasse à carreaux tire son nom de sa bouche allongée et pointue rappelant le bec de la bécasse. Dans la nature, il passe son temps perché sur les gorgones camouflé par sa robe quadrillée.En aquarium, il acceptera volontiers la nourriture congelée comme des artémias, des mysis ou encore des moules. Pour maintenir plusieurs spécimens ensemble, il faudra envisager un aquarium de taille conséquente pour que chacun puisse occuper son territoire. Les relations inter-spécifiques sont bonnes. Une fois habitué à son environnement, il présente un comportement très familier, n’hésitant pas à venir réclamer la nourriture lorsqu’on s’approche du bac.",
    volume: 450,
    size: 12,
    photo: becasse,
    longevity: "autour de 6 ans",
    recifal: true,
    alt: "Le poisson-bécasse à carreaux",
  },
  {
    id: uuidv4(),
    name: "Le poisson-chirurgien",
    latin: "Ctenochaetus flavicauda",
    description:
      "Ce poisson-chirurgien est l’un des plus à l’aise dans le cadre d’une maintenance. Il est robuste, d’une taille modeste (12 cm), et contrairement aux Acanthurus et Paracanthurus, ce n’est pas un nageur en pleine eau.C’est également un excellent alguivore qui passe son temps à brouter dans l’aquarium. Dans un aquarium de plus de 800 L, il peut être maintenu en petit groupe de 3-4 individus. Même si des petites joutes peuvent éclater de temps en temps, il est plutôt pacifique.",
    volume: 300,
    size: 13,
    photo: chirurgien,
    longevity: "Plus de 20 ans",
    recifal: true,
    alt: "Le poisson-chirurgien",
  },
];
