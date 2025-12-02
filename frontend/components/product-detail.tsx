"use client";

import { Button } from "@/components/ui/button";
import { STRAPI_BASE_URL } from "@/lib/strapi";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetail({
  productDetail,
}: {
  productDetail: Product;
}) {
   const [isExpanded, setIsExpanded] = useState(false)

  if (!productDetail) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Libro no encontrado</h1>
          <Link href="/manual">
            <Button>Volver al Manual</Button>
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    alert("añadido al carrito");
  };

   const description = productDetail.detail?.resume || ""
  const shortDescription = description.slice(0, 250)

  return (
    <div className=" py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <Link
            href="/el-manual"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Volver al Manual
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={
                    productDetail.image?.url
                      ? `${STRAPI_BASE_URL}${productDetail.image.url}`
                      : "/placeholder.svg"
                  }
                  alt={productDetail.image?.alternativeText}
                  className="h-[600px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="mb-2 font-serif text-4xl font-light text-foreground md:text-5xl">
                {productDetail.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {productDetail.subname}
              </p>
            </div>

            <div className="border-y border-border py-6">
              <p className="text-3xl font-light">
                ${productDetail.price.toFixed(2)}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full rounded-full py-6 text-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Añadir al carrito
            </Button>
            <Button size="lg" className="w-full rounded-full py-6 text-lg">
              Leer adelanto
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-12">
          <h2 className="font-serif text-2xl font-light">Descripción</h2>

          <p className="text-muted-foreground leading-relaxed transition-all duration-300">
            {isExpanded ? description : shortDescription}

            {!isExpanded && description.length > 250 && "…"}
          </p>

          {description.length > 250 && (
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Leer menos" : "Seguir leyendo"}
            </Button>
          )}
        </div>
    </div>
  );
}
