import { GrocaContentData } from "@/types";
import { GrocaIntro } from "./groca-intro";
import { MusicalCard } from "./musical-card";
import { HeroGrocaSection } from "./hero-section";

export default async function GrocaContent({
  grocaData,
}: {
  grocaData: GrocaContentData;
}) {
  console.log("Groca Data in GrocaContent:", grocaData);
  return (
    <>
      {/* Section A: Significado de GRoCa */}
      <section className="relative px-4 py-10">
        <GrocaIntro
          title={grocaData.title!}
          subtitle={grocaData.subtitle!}
          description={grocaData.description!}
          intro_paragraphs={grocaData.intro_paragraphs || []}
        />
      </section>
      {/* Section B: Versión Musical */}
      <section className="relative px-4 py-10">
        <MusicalCard musicalCardData={grocaData.musical_card || {}}/>
      </section>
      {/* Section C: Has cruzado el umbral - appears with fade on scroll */}
      <section className="relative px-4 py-10">
        <HeroGrocaSection 
          hero_section={grocaData.hero_section!}
          symbols={grocaData.symbols || []}
        />
      </section>
    </>
  );
}
