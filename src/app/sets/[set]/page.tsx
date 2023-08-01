import getCardsInSet from "@/helpers/api/getCardsInSet";

interface SetPageProps {
  params: {
    set: string;
  };
}

export default async function SetPage({ params }: SetPageProps) {
  const data = await getCardsInSet(params.set);
  return (
    <main>
      <h1>Set Page {params.set}</h1>
    </main>
  );
}
