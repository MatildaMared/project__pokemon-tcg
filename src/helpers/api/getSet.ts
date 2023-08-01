import { config } from "@/utils/config";
import { PagedResponse } from "@/types/PagedResponse";
import { PokemonSet } from "@/types/PokemonSet";

async function getSet(id: string) {
  const res = await fetch(`https://api.pokemontcg.io/v2/sets/${id}`, {
    headers: {
      "X-Api-Key": config.tcgApiKey,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data as PagedResponse<PokemonSet>;
}

export default getSet;
