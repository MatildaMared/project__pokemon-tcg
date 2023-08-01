import { config } from "@/utils/config";
import { PagedResponse } from "@/types/PagedResponse";
import { PokemonCard } from "@/types/PokemonCard";

async function getCardsInSet(id: string) {
  const res = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${id}&select=name,id,images`,
    {
      headers: {
        "X-Api-Key": config.tcgApiKey,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data as PagedResponse<PokemonCard[]>;
}

export default getCardsInSet;
