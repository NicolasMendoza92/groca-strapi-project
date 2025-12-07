import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-center">
          {/* Logo + Mission */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-light">GRoCa</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Iluminando caminos hacia la consciencia superior a través del
              conocimiento ancestral y contemporáneo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-light">Navegación</h3>
            <nav
              className="flex flex-col gap-2 items-center md:items-center"
              aria-label="Enlaces rápidos del footer"
            >
              <Link
                href="/groca"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GRoCa
              </Link>
              <Link
                href="/manual"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                El Manual
              </Link>
              <Link
                href="/sobre-mi"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sobre Mí
              </Link>
              <Link
                href="/carrito"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Carrito
              </Link>
            </nav>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-light">Contacto</h3>

            <div className="flex items-center gap-4 justify-center md:justify-center">
              {/* Instagram */}
              <Link
                href="https://instagram.com/tu_cuenta"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                Insta
              </Link>

              {/* Facebook */}
              <Link
                href="https://facebook.com/tu_pagina"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
