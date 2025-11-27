"use client"

import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/manual", label: "El Manual" },
  { href: "/nosotros", label: "Nosotros" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-md backdrop-blur supports-backdrop-filter:bg-background/80"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4" aria-label="Navegación principal">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-serif text-2xl font-light tracking-wide">Mística</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-light transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}

          <Link href="/carrito">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label={`Carrito de compras, items`}
            >
              <ShoppingCart className="h-5 w-5" />

            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/carrito">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label={`Carrito de compras,  items`}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-hidden={!isOpen}>
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-light transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-6">
                  <Link href="/carrito" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                      <ShoppingCart className="h-5 w-5" />
                      Carrito 
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
