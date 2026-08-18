function HeroScene() {
  const { StarField, RevealText, Planet } = window.RuaSaturnoDesignSystem_46e477;
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-6)", overflow: "hidden" }}>
      <StarField density={140} meteors={5} />
      <Planet size={200} tilt={-16} style={{ position: "absolute", top: "4%", right: "3%", opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <RevealText as="h1" text="Oi." speed={90} style={{ font: "var(--text-display)", color: "var(--text-primary)", margin: 0 }} />
        <RevealText as="h2" text="Essa é a Amanda Lohany." speed={38} startDelay={900} style={{ font: "var(--text-h1)", color: "var(--text-secondary)", margin: "var(--space-3) 0 0" }} />
        <RevealText as="p" text="Desde que eu, João Marcos, a vi, meu mundo mudou." speed={34} startDelay={1800} style={{ font: "var(--text-body)", color: "var(--text-secondary)", opacity: 0.85, margin: "var(--space-4) 0 0" }} />
        <p style={{ font: "var(--text-body)", color: "var(--text-secondary)", opacity: 0.75, marginTop: "var(--space-6)" }}>role pra baixo ↓</p>
      </div>
    </section>
  );
}
