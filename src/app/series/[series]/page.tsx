import getSetsInSeries from "@/helpers/api/getSetsInSeries";
import SetList from "@/components/SetList";
import { series } from "@/types/Series";

export default async function SeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const seriesSlug = decodeURIComponent(params.series);
  const seriesName = series.find((s) => s.slug === seriesSlug)?.name || "";
  const { data } = await getSetsInSeries(seriesName);
  return (
    <main>
      <h1 className="text-2xl mb-4">{seriesName}</h1>
      <SetList sets={data} />
    </main>
  );
}
