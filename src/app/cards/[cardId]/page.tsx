import getCardById from "@/helpers/api/getCardById";
import Image from "next/image";

interface CardPageProps {
  params: {
    cardId: string;
  };
}

export default async function CardPage({ params }: CardPageProps) {
  const cardId = params.cardId;
  const card = await getCardById(cardId);
  return (
    <main className="h-full">
      <h1>Card details page</h1>
      <div className="w-auto h-3/6 relative">
        <Image
          fill={true}
          src={card.images.large}
          alt={card.name}
          className={"object-contain"}
          sizes="100%"
        />
      </div>
      <h2>{card.name}</h2>
      <p>Set: {card.set.name}</p>
      <p>hp: {card.hp}</p>
      <h2>Types</h2>
      <ul>
        {card.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </main>
  );
}
