import SetList from "@/components/SetList";
import getSetsInSeries from "@/helpers/api/getSetsInSeries";

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
