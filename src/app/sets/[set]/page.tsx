import getCardsInSet from "@/helpers/api/getCardsInSet";
import getSet from "@/helpers/api/getSet";
import Link from "next/link";
import CardList from "@/components/CardList/CardList";

interface SetPageProps {
  params: {
    set: string;
  };
}

export default async function SetPage({ params }: SetPageProps) {
  const setId = params.set;
  const { data: cards } = await getCardsInSet(setId);
  const { data: set } = await getSet(setId);

  return (
    <main>
      <h1 className="text-2xl">{set.name}</h1>
      <Link href={`/series/${set.series}`}>Go Back</Link>
      <CardList cards={cards} />
    </main>
  );
}
