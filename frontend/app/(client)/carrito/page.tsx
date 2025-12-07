"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CarritoPage() {
  const items = [
    {
      id: "1",
      title: "El Despertar Cósmico",
      quantity: 2,
      price: 29.99,
      image: "/mystical-cosmic-book-purple-gold-spiritual.jpg",
    },
  ];

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="font-serif text-4xl font-light">
            Tu carrito está vacío
          </h1>
          <p className="text-muted-foreground">
            Explora nuestra colección de libros místicos
          </p>
          <Link href="/manual">
            <Button size="lg" className="rounded-full">
              Explorar El Manual
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-12 text-center font-serif text-5xl font-light">
          Tu Carrito
        </h1>

        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="h-32 w-24 shrink-0 overflow-hidden rounded">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-light">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-lg text-muted-foreground">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full bg-transparent"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full bg-transparent"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    aria-label="Eliminar del carrito"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 rounded-lg border border-border bg-card p-8">
          <div className="flex justify-between text-xl">
            <span className="font-serif font-light">Subtotal</span>
            <span className="font-light">$60</span>
          </div>

          <Button size="lg" className="w-full rounded-full py-6 text-lg">
            Proceder al Pago
          </Button>

          <Link href="/el-manual">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full bg-transparent"
            >
              Continuar Explorando
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
