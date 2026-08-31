/* ============================================================
   Tweaks integration
   Variations exposed via the toolbar Tweaks toggle.
   ============================================================ */
(() => {
  const DEFAULTS = /*EDITMODE-BEGIN*/{
    "tema": "claro",
    "acento": "bronze",
    "intensidadeAnim": "medio"
  }/*EDITMODE-END*/;

  const STATE = { ...DEFAULTS };
  const root = document.documentElement;

  const apply = () => {
    // theme
    if (STATE.tema === "escuro") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    // accent
    root.setAttribute("data-accent", STATE.acento === "azul" ? "deep" : "bronze");
    // animation intensity
    root.setAttribute("data-anim", STATE.intensidadeAnim);
  };

  let panel = null;
  const buildPanel = () => {
    if (panel) return panel;
    panel = document.createElement("div");
    panel.id = "tweaks-panel";
    panel.innerHTML = `
      <style>
        #tweaks-panel {
          position: fixed; right: 24px; bottom: 110px; z-index: 100;
          width: 320px; max-height: calc(100vh - 160px);
          background: #fff; color: #1E232D;
          border: 1px solid rgba(30,35,45,0.12);
          border-radius: 16px;
          box-shadow: 0 20px 60px -10px rgba(0,0,0,0.25);
          font-family: "Lato", system-ui, sans-serif;
          padding: 24px;
          overflow: auto;
        }
        #tweaks-panel .tweaks-head {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 20px;
        }
        #tweaks-panel h4 {
          font-family: "Cherona", serif;
          font-size: 22px; margin: 0;
        }
        #tweaks-panel .tweaks-close {
          width: 32px; height: 32px; border-radius: 999px;
          border: 1px solid rgba(30,35,45,0.12);
          display: flex; align-items: center; justify-content: center;
          background: #fff; cursor: pointer; font-size: 18px;
        }
        #tweaks-panel .group { margin-bottom: 20px; }
        #tweaks-panel .group:last-child { margin-bottom: 0; }
        #tweaks-panel label.lbl {
          display: block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #4A5260; margin-bottom: 10px;
        }
        #tweaks-panel .seg {
          display: flex; gap: 4px; padding: 4px;
          background: #F4F1EC; border-radius: 8px;
        }
        #tweaks-panel .seg button {
          flex: 1; padding: 10px; font-size: 13px;
          font-weight: 700; letter-spacing: 0.04em;
          border-radius: 6px; background: transparent;
          color: #1E232D; cursor: pointer;
          transition: all 0.2s ease;
        }
        #tweaks-panel .seg button.on {
          background: #1E232D; color: #fff;
        }
        #tweaks-panel .note {
          font-size: 12px; color: #4A5260; margin-top: 4px; line-height: 1.4;
        }
      </style>
      <div class="tweaks-head">
        <h4>Tweaks</h4>
        <button class="tweaks-close" aria-label="Fechar">×</button>
      </div>
      <div class="group">
        <label class="lbl">Tema</label>
        <div class="seg" data-key="tema">
          <button data-val="claro">Claro</button>
          <button data-val="escuro">Escuro</button>
        </div>
        <div class="note">Claro: editorial sóbrio. Escuro: premium imersivo.</div>
      </div>
      <div class="group">
        <label class="lbl">Cor de acento</label>
        <div class="seg" data-key="acento">
          <button data-val="bronze">Bronze</button>
          <button data-val="azul">Azul</button>
        </div>
        <div class="note">Castanho médio (calor) vs azul profundo (técnico).</div>
      </div>
      <div class="group">
        <label class="lbl">Animações</label>
        <div class="seg" data-key="intensidadeAnim">
          <button data-val="sutil">Sutil</button>
          <button data-val="medio">Médio</button>
          <button data-val="ousado">Ousado</button>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    panel.querySelector(".tweaks-close").addEventListener("click", () => {
      panel.style.display = "none";
      window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
    });

    panel.querySelectorAll(".seg").forEach(seg => {
      const key = seg.dataset.key;
      const sync = () => {
        seg.querySelectorAll("button").forEach(b => {
          b.classList.toggle("on", b.dataset.val === STATE[key]);
        });
      };
      sync();
      seg.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        STATE[key] = b.dataset.val;
        sync();
        apply();
        window.parent.postMessage({
          type: "__edit_mode_set_keys",
          edits: { [key]: b.dataset.val }
        }, "*");
      });
    });
    return panel;
  };

  window.addEventListener("message", (e) => {
    if (!e.data || typeof e.data !== "object") return;
    if (e.data.type === "__activate_edit_mode") {
      const p = buildPanel();
      p.style.display = "block";
    } else if (e.data.type === "__deactivate_edit_mode") {
      if (panel) panel.style.display = "none";
    }
  });

  apply();
  window.parent.postMessage({ type: "__edit_mode_available" }, "*");
})();
