function ClosingScene() {
  const { StarField, RevealText, Button } = window.RuaSaturnoDesignSystem_46e477;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "var(--space-6)", overflow: "hidden", background: "var(--bg-surface)" }}>
      <StarField density={110} />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 560 }}>
        <RevealText as="h2" text="Só isso mesmo." speed={40} style={{ font: "var(--text-h1)", color: "var(--text-primary)", margin: "0 0 var(--space-3)" }} />
        <p style={{ font: "var(--text-body)", color: "var(--text-secondary)", margin: "0 0 var(--space-7)" }}>
          Um site inteiro só pra dizer que a rua onde você mora tem nome de planeta e você é melhor que ele. Com carinho, João Marcos.
        </p>
        <Button variant="primary" onClick={() => setSent(true)} disabled={sent}>
          {sent ? "recebido ✓" : "gostou amanda? me fala aqui"}
        </Button>
        <p style={{ font: "var(--text-small)", color: "var(--text-secondary)", opacity: 0.6, marginTop: "var(--space-6)" }}>feito com amor e carinho por João Marcos (kim cardmaster)</p>
      </div>
    </section>
  );
}
