import SetList from "@/components/SetList";
import getSetsInSeries from "@/helpers/api/getSetsInSeries";

export default async function SeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const series = decodeURIComponent(params.series);
  const { data } = await getSetsInSeries(series);
  return (
    <>
      <h1>{series}</h1>
      <SetList sets={data} />
    </>
  );
}
