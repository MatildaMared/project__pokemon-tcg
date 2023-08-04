import { series } from "@/types/Series";

export default function getSeriesSlug(seriesName: string): string {
  return series.find((series) => series.name === seriesName)?.slug || "";
}
