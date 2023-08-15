import getCardById from "@/helpers/api/getCardById";
import Image from "next/image";
import BreadCrumbs from "@/components/BreadCrumbs";
import Crumb from "@/components/BreadCrumbs/Crumb";
import React from "react";
import getSeriesSlug from "@/utils/getSeriesSlug";
import CardDetails from "@/components/CardDetails/CardDetails";

interface CardPageProps {
  params: {
    cardId: string;
  };
}

export default async function CardPage({ params }: CardPageProps) {
  const cardId = params.cardId;
  const card = await getCardById(cardId);
  const seriesSlug = getSeriesSlug(card.set.series);

  return (
    <main className="h-full">
      <h1>Card details page</h1>
      <BreadCrumbs>
        <Crumb href="/series">Series</Crumb>
        <Crumb href={`/series/${seriesSlug}`}>{card.set.series}</Crumb>
        <Crumb href={`/cards/${cardId}`} isCurrentPage>
          {card.name}
        </Crumb>
      </BreadCrumbs>
      <CardDetails card={card} />
    </main>
  );
}
