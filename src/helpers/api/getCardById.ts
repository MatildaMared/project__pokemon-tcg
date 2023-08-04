import { config } from "@/utils/config";
import { PokemonCard } from "@/types/PokemonCard";

async function getCardById(id: string) {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
    headers: {
      "X-Api-Key": config.tcgApiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  return response.data as PokemonCard;
}

export default getCardById;
