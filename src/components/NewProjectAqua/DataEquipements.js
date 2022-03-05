import aquarium from "../../images/aquariumsetup.png";
import doseuse from "../../images/doseuse.png";
import brassage from "../../images/brassage.png";
import ecumeur from "../../images/ecumeur.png";
import eclairage from "../../images/eclairage.png";
import remonte from "../../images/remonte.png";
import sterilisateur from "../../images/sterilisateur.png";
import chauffage from "../../images/chauffage.png";
import osmoseur from "../../images/osmoseur.png";
import roches from "../../images/roches.png";
import refractometre from "../../images/refractometre.png";
import groupe from "../../images/groupe-froid.png";
import sel from "../../images/sel.png";
import test from "../../images/test.png";
import ventilateur from "../../images/ventilateur.png";
import osmolateur from "../../images/osmolateur.png";

import { v4 as uuidv4 } from 'uuid';

export const listOfImageEquipements = [
    {
      title: "Aquarium",
      id: uuidv4(),
      src: aquarium,
      alt: "example aquarium",
    },
    {
      title: "Pompe doseuse",
      id: uuidv4(),
      src: doseuse,
      alt: "exemple pompe doseuse",
    },
    {
      title: "Brassage",
    
      id: 3,
      src: brassage,
      alt: "exemple pompe de brassage",
    },
    {
      title: "Ecumeurs",
     
      id: 4,
      src: ecumeur,
      alt: "exemple ecumeur",
    },
    {
      title: "Rampe Led",
    
      id: 5,
      src: eclairage,
      alt: "exemple rampe led",
    },
    {
      title: "Pompe de remontées",
     
      id: 6,
      src: remonte,
      alt: "exemple pompe de remontées",
    },
    {
      title: "Sterilisateur",
      
      id: 7,
      src: sterilisateur,
      alt: "exemple sterilisateur",
    },
    {
      title: "Osmoseur",
   
      id: 8,
      src: osmoseur,
      alt: "exemple d'osmoseur",
    },
    {
      title: "Chauffage",
   
      id: 9,
      src: chauffage,
      alt: "exemple de chauffage",
    },
    {
      title: "Roches",
     
      id: 10,
      src: roches,
      alt: "exemple de roches",
    },
    {
      title: "Réfractomètre",
      id: 11,
      src: refractometre,
      alt: "exemple de réfractometre",
    },
    {
      title: "groupe-froid",
      id: 12,
      src: groupe,
      alt: "exemple de groupe-froid",
    },
    {
      title: "osmolateur",
      id: 13,
      src: osmolateur,
      alt: "exemple de osmolateur",
    },
    {
      title: "sel marin",
      id: 14,
      src: sel,
      alt: "exemple de sel marin",
    },
    {
      title: "test",
  
      id: 15,
      src: test,
      alt: "exemple de test",
    },
    {
      title: "ventilateur",
  
      id: 16,
      src: ventilateur,
      alt: "exemple de ventilateur",
    },
  ];
  