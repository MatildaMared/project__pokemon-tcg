import { config } from "@/utils/config";
import { PagedResponse } from "@/types/PagedResponse";
import { PokemonSet } from "@/types/PokemonSet";
import SetList from "@/components/SetList";

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
      <SetList sets={data} />
    </>
  );
}
