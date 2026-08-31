/* ============================================================
   Main interactions
   ============================================================ */

(() => {
  /* ---- Header scroll state ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  }
  document.querySelectorAll(".mobile-nav a").forEach(a => {
    a.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  /* ---- Scroll reveals via IntersectionObserver ----
     Only activates if the page is actually being rendered.
     requestAnimationFrame only fires for visible pages — so a
     hidden/throttled iframe stays in the default "everything
     visible" state instead of being trapped at opacity:0.
  */
  requestAnimationFrame(() => {
    document.body.classList.add("js-anim");
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };
    // Immediate: mark in-viewport reveals
    const toObserve = [];
    reveals.forEach(el => {
      if (inView(el)) el.classList.add("in");
      else toObserve.push(el);
    });
    if ("IntersectionObserver" in window && toObserve.length) {
      const io = new IntersectionObserver((entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });
      toObserve.forEach(el => io.observe(el));
    } else {
      toObserve.forEach(el => el.classList.add("in"));
    }
    // Safety net — anything still not "in" after 4s
    setTimeout(() => reveals.forEach(el => el.classList.add("in")), 4000);
  });

  /* ---- Light parallax for hero photo ---- */
  const heroPhoto = document.querySelector(".hero-photo");
  if (heroPhoto && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let raf;
    window.addEventListener("scroll", () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700);
        heroPhoto.style.transform = `scale(1.05) translateY(${y * 0.08}px)`;
        raf = null;
      });
    }, { passive: true });
  }

  /* ---- Number counter animation ---- */
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const io2 = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1600;
        const start = performance.now();
        const animate = (t) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target).toLocaleString("pt-BR");
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        io2.unobserve(el);
      }
    }, { threshold: 0.4 });
    counters.forEach(c => io2.observe(c));
  }

  /* ---- Active nav link ---- */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a => {
    if (a.dataset.nav === path.replace(".html","")) a.classList.add("active");
  });
})();


/* ============================================================
   Camada mobile: barra de ação, progresso, numeração do menu
   ============================================================ */
(() => {
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

  /* Numeração do menu mobile */
  document.querySelectorAll(".mobile-nav a:not(.mobile-cta)").forEach((a, i) => {
    a.setAttribute("data-num", String(i + 1).padStart(2, "0"));
  });

  /* Barra de progresso de leitura */
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const wa = document.querySelector('a[href*="wa.me"]');
  const waHref = wa ? wa.getAttribute("href") : "#";
  const tel = document.querySelector('a[href^="tel:"]');
  const telHref = tel ? tel.getAttribute("href") : "tel:+5511999999999";

  /* Barra de ação inferior (mobile) */
  const ab = document.createElement("div");
  ab.className = "action-bar";
  ab.innerHTML =
    '<a class="ab-main" href="' + waHref + '" target="_blank" rel="noopener">Agendar consulta</a>' +
    '<a class="ab-icon tel" href="' + telHref + '" aria-label="Ligar">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>' +
    '</a>' +
    '<a class="ab-icon wa" href="' + waHref + '" target="_blank" rel="noopener" aria-label="WhatsApp">' +
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.54 4.14 1.58 5.94L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9C23.94 5.34 18.6 0 12.05 0Zm5.42 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.7.23 1.35.2 1.86.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.28.18-1.4-.08-.13-.28-.2-.57-.35Z"/></svg>' +
    '</a>';
  document.body.appendChild(ab);

  let lastY = window.scrollY;
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    if (isMobile()) {
      const y = window.scrollY;
      const goingUp = y < lastY;
      ab.classList.toggle("up", y > 320 && (goingUp || y - lastY < 4));
      lastY = y;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* Dica de swipe nos trilhos horizontais (mobile) */
(() => {
  if (!window.matchMedia("(max-width: 768px)").matches) return;
  const labels = { pillars: "Arraste para ver os 4 pilares", "treatments-grid": "Arraste para ver todos os tratamentos", "blog-grid": "Arraste para ver mais artigos", testimonials: "Arraste para ler mais depoimentos" };
  Object.keys(labels).forEach(cls => {
    document.querySelectorAll("." + cls).forEach(el => {
      const hint = document.createElement("div");
      hint.className = "swipe-hint";
      hint.textContent = labels[cls];
      el.insertAdjacentElement("afterend", hint);
    });
  });
})();
