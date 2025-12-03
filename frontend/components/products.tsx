"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { Product } from "@/types";
import { STRAPI_BASE_URL } from "@/lib/strapi";

export default function Productos({ books }: { books: Product[] }) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const observers = sectionRefs.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-12");
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="space-y-24">
      {books?.map((book, index) => (
        <section
          key={book.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className="opacity-0 translate-y-12 transition-all duration-700 ease-out"
        >
          <div
            className={`flex flex-col gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-2/5">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={book.image?.url  ? `${STRAPI_BASE_URL}${book.image.url}` : "/placeholder.svg"}
                  alt={book.image?.alternativeText}
                  className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            <div className="w-full md:w-3/5 space-y-4">
              <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
                {book.name}
              </h2>
              <p className="text-sm text-muted-foreground">{book.subname}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{book.description}</p>
              <Link href={`/el-manual/${book.slug}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full bg-transparent"
                >
                  Descubre más
                </Button>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
