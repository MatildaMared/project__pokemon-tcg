import getCardsInSet from "@/helpers/api/getCardsInSet";
import getSet from "@/helpers/api/getSet";
import Image from "next/image";

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
      <div
        className={
          "grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-4 place-items-center"
        }
      >
        {cards.map((card) => (
          <div key={card.id} className={"border-2 w-full"}>
            <Image
              src={card.images.small}
              alt={card.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
