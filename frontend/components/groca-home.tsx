"use client";

import { getStrapiMedia } from "@/lib/strapi";
import { HomeData } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function GrocaIconHome({ data }: { data: HomeData }) {
  const { description, background, logo } = data || {};
  const backgroundUrl = getStrapiMedia(background?.url);
  const logoUrl = getStrapiMedia(logo?.url);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Fondo de imagen full-screen con opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("${backgroundUrl}")`,
        }}
      />

      {/* Mystical animated background (mantiene efectos existentes) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/30 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
          style={{
            animationDelay: "1s",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Large clickable logo */}
      <Link
        href="/groca"
        className="group relative z-10 cursor-pointer transition-transform duration-700 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative flex flex-col items-center gap-8">
          {/* Mystical glow effect */}
          <div
            className={`absolute inset-0 -m-20 rounded-full bg-primary/20 blur-3xl transition-opacity duration-1000 ${
              isHovered ? "opacity-100" : "opacity-60"
            }`}
          />

          {/* Logo placeholder with mystical styling */}
          <div
            className="relative flex h-80 w-80 items-center justify-center overflow-hidden rounded-full transition-all duration-700 group-hover:shadow-primary/30"
          >
            <img
              src={logoUrl || "/logo.png"}
              alt="GRoCa Logo"
              className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:shadow-2xl"
            />
            {/* Rotating border effect */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-linear-to-r from-primary/50 
            via-accent/50 to-primary/50 bg-clip-border opacity-0 transition-all duration-700 group-hover:animate-spin group-hover:opacity-30" />
          </div>

          {/* Mystical particles effect */}
          <div
            className={`absolute inset-0 -m-32 rounded-full bg-primary/20 blur-3xl transition-opacity duration-1000 ${
              isHovered ? "opacity-100" : "opacity-60"
            }`}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute h-2 w-2 animate-pulse rounded-full bg-primary/40"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-200px)`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>

          {/* Subtitle hint */}
          <p
            className={`font-serif text-xl tracking-wider text-muted-foreground transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-60"
            }`}
          >
            {description}
          </p>
        </div>
      </Link>
    </main>
  );
}
