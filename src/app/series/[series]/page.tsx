import getSetsInSeries from "@/helpers/api/getSetsInSeries";
import SetList from "@/components/SetList";

export default async function SeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const series = decodeURIComponent(params.series);
  const { data } = await getSetsInSeries(series);
  return (
    <main>
      <h1 className="text-2xl mb-4">{series}</h1>
      <SetList sets={data} />
    </main>
  );
}
