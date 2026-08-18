function AddressScene() {
  const { StarField, RevealText, Badge } = window.RuaSaturnoDesignSystem_46e477;
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-6)", overflow: "hidden", background: "var(--bg-surface)" }}>
      <StarField density={50} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 620 }}>
        <Badge tone="marigold">onde ela mora</Badge>
        <RevealText as="h2" text="Rua Saturno, 637." speed={44} style={{ font: "var(--text-h1)", color: "var(--text-primary)", margin: "var(--space-4) 0 var(--space-3)" }} />
        <p style={{ font: "var(--text-body)", color: "var(--text-secondary)", margin: 0 }}>
          Sim, o nome é esse mesmo. E não, não foi coincidência escolher esse tema pra essa página.
        </p>
        <div style={{ marginTop: "var(--space-7)", display: "flex", justifyContent: "center", gap: "var(--space-5)" }}>
          {["Mercúrio", "Vênus", "Terra", "Saturno"].map((p, i) => (
            <div key={p} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{
                width: i === 3 ? 26 : 12, height: i === 3 ? 26 : 12, borderRadius: "50%",
                background: i === 3 ? "var(--gradient-warm)" : "var(--bg-inset)",
                boxShadow: i === 3 ? "var(--shadow-glow)" : "none",
                border: i === 3 ? "3px solid var(--night-2)" : "none",
                outline: i === 3 ? "1px solid var(--marigold-dim)" : "none",
              }} />
              <span style={{ font: "var(--text-2xs,12px)/1 var(--font-body)", color: i === 3 ? "var(--marigold)" : "var(--text-secondary)", fontSize: 12 }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
