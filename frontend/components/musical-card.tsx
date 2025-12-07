"use client";


import Link from "next/link";
import { Button } from "./ui/button";
import { MusicalCardType } from "@/types";

export function MusicalCard({ musicalCardData }: { musicalCardData: MusicalCardType }) {

    console.log("button_link:", musicalCardData.button_link);
  return (
    <div className="mb-16 rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm">
      <h2 className="mb-4 font-serif text-3xl font-light text-foreground">
        {musicalCardData.title}
      </h2>
      <p className="mb-6 text-muted-foreground">
        {musicalCardData.description }
      </p>
      <Link href={musicalCardData.button_link?.url || "/groca/musical"} >
        <Button size="lg" className="rounded-full cursor-pointer">
         {musicalCardData.button_link?.label }
        </Button>
      </Link>
    </div>
  );
}
