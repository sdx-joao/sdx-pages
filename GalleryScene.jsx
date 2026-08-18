const photos = [
  { src: "assets/photos/amanda-01-varanda.jpg", tag: "atenta", tone: "marigold", rotate: -3, caption: "Aquele jeito de olhar sério que na verdade é só concentração." },
  { src: "assets/photos/amanda-02-parede.jpg", tag: "leveza", tone: "rose", rotate: 2, caption: "Qualquer luz vira boa foto quando é ela." },
  { src: "assets/photos/amanda-03-mcdonalds.jpg", tag: "esforçada", tone: "marigold", rotate: -2, caption: "De boné do McDonald's e ainda assim linda. Talento raro." },
  { src: "assets/photos/amanda-06-drink-b.jpg", tag: "curte a vida", tone: "rose", rotate: 3, caption: "Sabe aproveitar um fim de tarde como poucas." },
  { src: "assets/photos/amanda-07-chocolates.jpg", tag: "doce", tone: "marigold", rotate: -1, caption: "Combina mais com a vitrine de chocolates do que ela imagina." },
  { src: "assets/photos/amanda-04-rio.jpg", tag: "aventura", tone: "rose", rotate: 1, caption: "Rio de Janeiro, um dos dias bons da lista." },
];

function GalleryScene() {
  const { RevealText, PhotoCard, Badge } = window.RuaSaturnoDesignSystem_46e477;
  return (
    <section style={{ minHeight: "100vh", padding: "var(--space-9) var(--space-6)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <RevealText as="h2" text="Olha como ela é." speed={40} style={{ font: "var(--text-h1)", color: "var(--text-primary)", margin: "0 0 var(--space-8)", textAlign: "center" }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", justifyContent: "center", maxWidth: "var(--container-max)" }}>
        {photos.map((p) => <PhotoCard key={p.src} {...p} />)}
      </div>
      <div style={{ marginTop: "var(--space-8)", textAlign: "center", maxWidth: 480 }}>
        <Badge tone="cream">curiosidade</Badge>
        <p style={{ font: "var(--text-body)", color: "var(--text-secondary)", margin: "var(--space-3) 0 0" }}>
          E, sim, a main dela em League of Legends é a Soraka — a curandeira que manda estrela do céu. Combinou direto com o tema.
        </p>
      </div>
    </section>
  );
}
