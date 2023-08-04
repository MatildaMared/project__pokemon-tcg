import { series } from "@/types/Series";

export default function getSeriesName(seriesSlug: string): string {
  return series.find((series) => series.slug === seriesSlug)?.name || "";
}
