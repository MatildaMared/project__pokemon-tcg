import getCardsInSet from "@/helpers/api/getCardsInSet";
import getSet from "@/helpers/api/getSet";
import CardList from "@/components/CardList";
import getSeriesSlug from "@/utils/getSeriesSlug";
import React from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import Crumb from "@/components/BreadCrumbs/Crumb";

interface SetPageProps {
  params: {
    set: string;
  };
}

export default async function SetPage({ params }: SetPageProps) {
  const setId = params.set;
  const { data: cards } = await getCardsInSet(setId);
  const { data: set } = await getSet(setId);
  const seriesSlug = getSeriesSlug(set.series);

  return (
    <main>
      <h1 className="text-2xl">{set.name}</h1>
      <BreadCrumbs>
        <Crumb href="/series">Series</Crumb>
        <Crumb href={`/series/${seriesSlug}`} isCurrentPage>
          {set.series}
        </Crumb>
      </BreadCrumbs>
      <CardList cards={cards} />
    </main>
  );
}
