export default function GrocaMusicalPage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light tracking-wide text-foreground md:text-7xl">
            GRoCa Musical
          </h1>
          <p className="text-xl text-muted-foreground italic">Una experiencia narrativa sonora</p>
        </div>

        {/* Musical/Narrative Version */}
        <div className="space-y-8">
          <div className="rounded-lg border border-border bg-linear-to-br from-primary/5 to-accent/5 p-8 backdrop-blur-sm">
            <p className="mb-6 font-serif text-2xl font-light leading-relaxed text-foreground italic">
              En el susurro del viento, en el latido del universo...
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Como notas que danzan en el pentagrama del cosmos, tres energías se entrelazan: la Gratitud que fluye como
              un río de luz dorada, el Respeto que se eleva como montañas ancestrales, y el Cariño que envuelve todo ser
              en un abrazo infinito.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              GRoCa no es solo un concepto, es una sinfonía viviente. Cada sílaba vibra con la frecuencia del amor
              universal, cada letra resuena en las cuerdas del alma. Es la melodía que siempre ha existido, esperando
              ser recordada.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              En este espacio donde el sonido y el silencio se encuentran, donde la palabra se convierte en música y la
              música en consciencia, GRoCa se revela como el lenguaje primordial del corazón despierto.
            </p>
          </div>

          {/* Musical elements placeholder */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎵</div>
              <h3 className="mb-2 font-serif text-xl">Gratitud</h3>
              <p className="text-sm text-muted-foreground">La nota que abre el corazón</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎶</div>
              <h3 className="mb-2 font-serif text-xl">Respeto</h3>
              <p className="text-sm text-muted-foreground">La armonía del equilibrio</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-6 text-center">
              <div className="mb-4 text-4xl">🎼</div>
              <h3 className="mb-2 font-serif text-xl">Cariño</h3>
              <p className="text-sm text-muted-foreground">La melodía eterna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
