import { config } from "@/utils/config";
import { PagedResponse } from "@/types/PagedResponse";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";

async function getSetsInSeries(seriesName: string) {
  const res = await fetch(
    `https://api.pokemontcg.io/v2/sets?q=series:${decodeURIComponent(
      seriesName
    )}`,
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
  return data as PagedResponse<PokemonSet>;
}

export default async function SeriesPage({
  params,
}: {
  params: { seriesName: string };
}) {
  const seriesName = decodeURIComponent(params.seriesName);
  const { data } = await getSetsInSeries(seriesName);
  return (
    <>
      <h1>{seriesName}</h1>
      <ul>
        {data.map((set) => (
          <li key={set.id}>
            <h2>{set.name}</h2>
            <Image
              src={set.images.logo}
              alt={set.name + " logo"}
              width={"100"}
              height={"100"}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
