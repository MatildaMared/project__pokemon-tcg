import getSetsInSeries from "@/helpers/api/getSetsInSeries";
import SetList from "@/components/SetList";
import getSeriesName from "@/utils/getSeriesName";

interface SeriesPageProps {
  params: {
    series: string;
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const seriesSlug = params.series;
  const seriesName = getSeriesName(seriesSlug);
  const { data } = await getSetsInSeries(seriesName);
  return (
    <main>
      <h1 className="text-2xl mb-4">{seriesName}</h1>
      <SetList sets={data} />
    </main>
  );
}
