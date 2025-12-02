import { Button } from "./ui/button";
import Link from "next/link";
import { HomeData } from "@/types";
import { STRAPI_BASE_URL } from "@/lib/strapi";

export function HeroSection({ data }: { data: HomeData }) {
  const {title ,description ,sections} = data || {};
  const heroSection = sections && sections.length > 0 ? sections[0] : null;
  const linkLabel = heroSection?.link?.label ;
  const linkHref = heroSection?.link?.url || "/el-manual"
  const imageSrc = heroSection?.image?.url
  const heading = heroSection?.heading 
  const subheading = heroSection?.subheading 

  return (
    <>
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
           src={imageSrc ? `${STRAPI_BASE_URL}${imageSrc}` : "/mystical-cosmic-energy-ethereal-purple-nebula-star.jpg" }
            alt="Fondo místico"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl text-balance">
            {title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            {description}
          </p>
          <Link href={linkHref}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg transition-all hover:scale-105"
            >
              {linkLabel}
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-serif text-3xl font-light text-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {subheading}
          </p>
        </div>
      </section>
    </>
  );
}
