import React from 'react'

export default function PageProd() {
  return (
    <div>page</div>
  )
}


// "use client"

// import { Button } from "@/components/ui/button"
// import { ShoppingCart } from "lucide-react"
// import Link from "next/link"
// import { useParams } from "next/navigation"

// const booksData: Record<
//   string,
//   {
//     id: string
//     title: string
//     author: string
//     year: string
//     price: number
//     description: string
//     image: string
//   }
// > = {
//   "1": {
//     id: "1",
//     title: "El Despertar Cósmico",
//     author: "Luna Serena",
//     year: "2023",
//     price: 29.99,
//     description:
//       "Sumérgete en un viaje transformador que te llevará más allá de los límites de la consciencia ordinaria. Este libro te ofrece prácticas sagradas para conectar con las energías cósmicas y despertar tu potencial divino. A través de meditaciones guiadas, ejercicios energéticos y enseñanzas ancestrales, aprenderás a canalizar la sabiduría universal y a manifestar tu verdadera esencia. Perfecto para aquellos que buscan expandir su consciencia y reconectar con el cosmos.",
//     image: "/mystical-cosmic-book-purple-gold-spiritual.jpg",
//   },
//   "2": {
//     id: "2",
//     title: "Chakras en Equilibrio",
//     author: "Maestro Kai",
//     year: "2022",
//     price: 24.99,
//     description:
//       "Una guía completa para comprender y armonizar tus siete centros energéticos. Descubre técnicas milenarias de sanación, meditaciones específicas para cada chakra y ejercicios prácticos que te ayudarán a desbloquear tu energía vital. Este libro es tu compañero perfecto en el camino hacia el equilibrio físico, emocional y espiritual.",
//     image: "/chakra-energy-healing-mandala-spiritual.jpg",
//   },
//   "3": {
//     id: "3",
//     title: "Cristales del Alma",
//     author: "Amara Stone",
//     year: "2023",
//     price: 27.99,
//     description:
//       "Explora el fascinante mundo de los cristales y su poder curativo. Aprende a seleccionar, limpiar y programar tus cristales, y descubre cómo cada piedra preciosa puede transformar diferentes aspectos de tu vida. Incluye guías detalladas sobre más de 50 cristales y sus propiedades únicas.",
//     image: "/healing-crystals-gems-spiritual-energy.jpg",
//   },
//   "4": {
//     id: "4",
//     title: "Meditación Trascendental",
//     author: "Swami Ananda",
//     year: "2021",
//     price: 32.99,
//     description:
//       "Adéntrate en las profundidades de tu ser a través de prácticas meditativas ancestrales. Este libro te enseña técnicas avanzadas de meditación que han sido transmitidas de maestro a discípulo durante milenios. Alcanza estados de consciencia expandida y encuentra la paz interior que siempre has buscado.",
//     image: "/meditation-lotus-zen-peaceful-spiritual.jpg",
//   },
//   "5": {
//     id: "5",
//     title: "La Alquimia del Ser",
//     author: "Elena Mística",
//     year: "2024",
//     price: 34.99,
//     description:
//       "Descubre los secretos de la transformación personal a través de la alquimia espiritual moderna. Este libro combina sabiduría antigua con técnicas contemporáneas para ayudarte a manifestar la vida de tus sueños y convertir el plomo de tus limitaciones en el oro de tu máximo potencial.",
//     image: "/alchemy-transformation-golden-spiritual-magic.jpg",
//   },
// }

// const recommendations = [
//   { id: "2", title: "Chakras en Equilibrio", image: "/chakra.jpg" },
//   { id: "3", title: "Cristales del Alma", image: "/crystals.jpg" },
//   { id: "4", title: "Meditación Trascendental", image: "/peaceful-meditation.png" },
// ]


// export default function ProductPage() {
//   const params = useParams()
//   const id = Array.isArray(params.id) ? params.id[0] : params.id
//   const book = id ? booksData[id] : undefined

//   if (!book) {
//     return (
//       <main className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-serif mb-4">Libro no encontrado</h1>
//           <Link href="/manual">
//             <Button>Volver al Manual</Button>
//           </Link>
//         </div>
//       </main>
//     )
//   }

//   const handleAddToCart = () => {
//     alert('añadido')
//     // addToCart({
//     //   id: book.id,
//     //   title: book.title,
//     //   price: book.price,
//     //   image: book.image,
//     //   quantity: 1,
//     // })
//   }

//   return (
//     <div className="py-20 px-4">
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-8">
//           <Link href="/manual" className="text-muted-foreground hover:text-foreground transition-colors">
//             ← Volver al Manual
//           </Link>
//         </div>

//         <div className="grid gap-12 md:grid-cols-2">
//           <div>
//             <div className="sticky top-24">
//               <div className="overflow-hidden rounded-lg shadow-2xl">
//                 <img
//                   src={book.image || "/placeholder.svg"}
//                   alt={book.title}
//                   className="h-[600px] w-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div>
//               <h1 className="mb-2 font-serif text-4xl font-light text-foreground md:text-5xl">{book.title}</h1>
//               <p className="text-lg text-muted-foreground">por {book.author}</p>
//               <p className="text-sm text-muted-foreground">{book.year}</p>
//             </div>

//             <div className="border-y border-border py-6">
//               <p className="text-3xl font-light">${book.price.toFixed(2)}</p>
//             </div>

//             <Button size="lg" className="w-full rounded-full py-6 text-lg" onClick={handleAddToCart}>
//               <ShoppingCart className="mr-2 h-5 w-5" />
//               Añadir al carrito
//             </Button>

//             <div className="space-y-4">
//               <h2 className="font-serif text-2xl font-light">Descripción</h2>
//               <p className="text-muted-foreground leading-relaxed">{book.description}</p>
//             </div>
//           </div>
//         </div>

//         {/* Recommendations */}
//         <div className="mt-20">
//           <h2 className="mb-8 text-center font-serif text-3xl font-light">También te podría interesar</h2>
//           <div className="grid gap-6 md:grid-cols-3">
//             {recommendations
//               .filter((rec) => rec.id !== id)
//               .slice(0, 3)
//               .map((rec) => (
//                 <Link key={rec.id} href={`/manual/${rec.id}`}>
//                   <div className="group overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
//                     <img
//                       src={rec.image || "/placeholder.svg"}
//                       alt={rec.title}
//                       className="h-[300px] w-full object-cover"
//                     />
//                     <div className="bg-card p-4">
//                       <h3 className="font-serif text-lg">{rec.title}</h3>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
