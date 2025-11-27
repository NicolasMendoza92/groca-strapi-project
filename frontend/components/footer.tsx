import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo + Mission */}
          <div className="space-y-4">
            <div className="font-serif text-2xl font-light">Mística</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Iluminando caminos hacia la consciencia superior a través del
              conocimiento ancestral y contemporáneo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-light">Navegación</h3>
            <nav
              className="flex flex-col gap-2"
              aria-label="Enlaces rápidos del footer"
            >
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Inicio
              </Link>
              <Link
                href="/manual"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                El Manual
              </Link>
              <Link
                href="/nosotros"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Nosotros
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

            <div className="flex items-center gap-4">
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
