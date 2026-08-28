(function () {
  'use strict';

  const LANGUAGES = [
    { code: 'pt', short: 'PT', label: 'Português', flag: 'assets/flags/br.png' },
    { code: 'en', short: 'EN', label: 'English', flag: 'assets/flags/gb.png' },
    { code: 'es', short: 'ES', label: 'Español', flag: 'assets/flags/es.png' },
    { code: 'fr', short: 'FR', label: 'Français', flag: 'assets/flags/fr.png' },
    { code: 'de', short: 'DE', label: 'Deutsch', flag: 'assets/flags/de.png' },
    { code: 'it', short: 'IT', label: 'Italiano', flag: 'assets/flags/it.png' },
    { code: 'zh-TW', short: '繁中', label: '繁體中文', flag: 'assets/flags/tw.png' },
  ];
  const STORAGE_KEY = 'sdx-site-language';

  function currentLanguage() {
    const requested = new URLSearchParams(window.location.search).get('lang');
    if (LANGUAGES.some((language) => language.code === requested)) return requested;
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.some((language) => language.code === stored) ? stored : 'pt';
  }

  function setTranslationCookie(code) {
    const value = code === 'pt' ? '/pt/pt' : `/pt/${code}`;
    const maxAge = code === 'pt' ? 0 : 31536000;
    document.cookie = `googtrans=${value};path=/;max-age=${maxAge};SameSite=Lax`;
    document.cookie = `googtrans=${value};path=/;domain=.scandexplus.com.br;max-age=${maxAge};SameSite=Lax`;
  }

  function selectLanguage(code) {
    localStorage.setItem(STORAGE_KEY, code);
    setTranslationCookie(code);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', code);
    window.location.assign(url.toString());
  }

  function preserveLanguageOnLinks(active) {
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (!link || active === 'pt') return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || !/\.html$|\/$/.test(url.pathname)) return;
      url.searchParams.set('lang', active);
      link.href = url.toString();
    }, true);
  }

  function updateMetadata(active) {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const titles = {
      'index.html': {
        en: 'Scandex+ — Software and digital management', es: 'Scandex+ — Software y gestión digital', fr: 'Scandex+ — Logiciels et gestion numérique', de: 'Scandex+ — Software und digitales Management', it: 'Scandex+ — Software e gestione digitale', 'zh-TW': 'Scandex+ — 軟體與數位管理',
      },
      'servus.html': {
        en: 'Servus — Work orders and inventory app | Scandex+', es: 'Servus — App de órdenes de servicio e inventario | Scandex+', fr: 'Servus — Application de bons de service et inventaire | Scandex+', de: 'Servus — App für Serviceaufträge und Inventar | Scandex+', it: 'Servus — App per ordini di servizio e inventario | Scandex+', 'zh-TW': 'Servus — 服務單與庫存應用程式 | Scandex+',
      },
      'prontus.html': {
        en: 'Prontus — Digital medical records app | Scandex+', es: 'Prontus — App de historias clínicas digitales | Scandex+', fr: 'Prontus — Application de dossiers médicaux numériques | Scandex+', de: 'Prontus — App für digitale Patientenakten | Scandex+', it: 'Prontus — App per cartelle cliniche digitali | Scandex+', 'zh-TW': 'Prontus — 數位病歷應用程式 | Scandex+',
      },
      'operacoes.html': {
        en: 'SDX Operations — Work orders, inventory and assets', es: 'SDX Operaciones — Órdenes de servicio, inventario y activos', fr: 'SDX Opérations — Bons de service, inventaire et actifs', de: 'SDX Operations — Serviceaufträge, Inventar und Anlagen', it: 'SDX Operazioni — Ordini di servizio, inventario e beni', 'zh-TW': 'SDX 營運 — 服務單、庫存與資產',
      },
    };
    if (titles[page] && titles[page][active]) document.title = titles[page][active];
    LANGUAGES.forEach((language) => {
      const alternate = document.createElement('link');
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language.code);
      alternate.rel = 'alternate';
      alternate.hreflang = language.code === 'pt' ? 'pt-BR' : language.code;
      alternate.href = url.toString();
      document.head.appendChild(alternate);
    });
  }

  function makeSelector() {
    if (document.querySelector('.sdx-language')) return true;
    const slot = document.getElementById('sdx-language-slot');
    if (document.getElementById('root') && !slot) return false;

    const activeCode = currentLanguage();
    const active = LANGUAGES.find((language) => language.code === activeCode) || LANGUAGES[0];
    const wrapper = document.createElement('div');
    wrapper.className = 'sdx-language notranslate';
    wrapper.setAttribute('translate', 'no');
    wrapper.innerHTML = `
      <button class="sdx-language__trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Selecionar idioma">
        <img class="sdx-language__flag" src="${active.flag}" alt="${active.short}" />
        <span class="sdx-language__chevron" aria-hidden="true">⌄</span>
      </button>
      <div class="sdx-language__menu" role="listbox" aria-label="Idiomas">
        <div class="sdx-language__title">Idioma · Language</div>
        ${LANGUAGES.map((language) => `
          <button class="sdx-language__option${language.code === activeCode ? ' is-active' : ''}" type="button" role="option" aria-selected="${language.code === activeCode}" data-language="${language.code}">
            <img class="sdx-language__option-flag" src="${language.flag}" alt="" />
            <span class="sdx-language__option-label">${language.label}</span>
            <span class="sdx-language__option-code">${language.short}</span>
          </button>
        `).join('')}
      </div>
    `;

    if (slot) slot.appendChild(wrapper);
    else {
      wrapper.classList.add('is-floating');
      document.body.appendChild(wrapper);
    }

    const trigger = wrapper.querySelector('.sdx-language__trigger');
    const close = () => {
      wrapper.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    };
    trigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = wrapper.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(open));
    });
    wrapper.querySelectorAll('[data-language]').forEach((option) => {
      option.addEventListener('click', () => selectLanguage(option.dataset.language));
    });
    document.addEventListener('click', close);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
    return true;
  }

  window.googleTranslateElementInit = function () {
    new window.google.translate.TranslateElement({
      pageLanguage: 'pt',
      includedLanguages: 'pt,en,es,fr,de,it,zh-TW',
      autoDisplay: false,
    }, 'sdx-google-translate');
  };

  function boot() {
    const host = document.createElement('div');
    host.id = 'sdx-google-translate';
    host.setAttribute('aria-hidden', 'true');
    document.body.appendChild(host);

    const active = currentLanguage();
    document.documentElement.lang = active === 'pt' ? 'pt-BR' : active;
    localStorage.setItem(STORAGE_KEY, active);
    setTranslationCookie(active);
    preserveLanguageOnLinks(active);
    updateMetadata(active);
    if (!makeSelector()) {
      const root = document.getElementById('root');
      const observer = new MutationObserver(() => {
        if (makeSelector()) observer.disconnect();
      });
      observer.observe(root, { childList: true, subtree: true });
    }

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
