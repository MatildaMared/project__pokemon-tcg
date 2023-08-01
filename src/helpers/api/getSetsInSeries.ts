import { config } from "@/utils/config";
import { PagedResponse } from "@/types/PagedResponse";
import { PokemonSet } from "@/types/PokemonSet";
import React from "react";

const getSetsInSeries = React.cache(async (seriesName: string) => {
  const res = await fetch(
    `https://api.pokemontcg.io/v2/sets?q=series:${decodeURIComponent(
      seriesName
    )}&orderBy=-releaseDate`,
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
  return data as PagedResponse<PokemonSet[]>;
});

export default getSetsInSeries;
