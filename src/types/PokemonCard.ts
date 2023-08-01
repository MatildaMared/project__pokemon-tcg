import { PokemonSet } from "@/types/PokemonSet";

export type PokemonCard = {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo: string[];
  rules: string[];
  attacks: [
    {
      name: string;
      cost: string[];
      convertedEnergyCost: number;
      damage: string;
      text: string;
    },
  ];
  weaknesses: [
    {
      type: string;
      value: string;
    },
  ];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: PokemonSet;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: {
    unlimited: string;
    expanded: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
};
