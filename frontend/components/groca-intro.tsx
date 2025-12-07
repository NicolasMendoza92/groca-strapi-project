"use client";

import { Paragraph } from "@/types";

interface GrocaIntroProps {
  title: string;
  subtitle: string;
  description: string;
  intro_paragraphs: Paragraph[];
}

export function GrocaIntro({
  title,
  subtitle,
  description,
  intro_paragraphs,
}: GrocaIntroProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl">
          {title}
        </h1>
        <p className="mb-4 text-xl text-muted-foreground italic">
          {subtitle}
        </p>
        <p className="mb-12 text-md text-muted-foreground italic">
          {description}
        </p>
      </div>
      
      <div className="mb-16 space-y-6 text-lg leading-relaxed text-muted-foreground">
        {intro_paragraphs?.map((paragraph) => (
          <p key={paragraph.id}>
            {paragraph.content}
          </p>
        ))}
      </div>
    </div>
  );
}
