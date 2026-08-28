(function () {
  'use strict';

  var measurementId = 'G-N46CEK4ZCT';
  var consentKey = 'sdx_analytics_consent';

  function updateConsent(value) {
    window.gtag('consent', 'update', {
      analytics_storage: value,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }

  function rememberConsent(value) {
    try { window.localStorage.setItem(consentKey, value); } catch (_) {}
    updateConsent(value === 'granted' ? 'granted' : 'denied');
    var banner = document.getElementById('sdx-cookie-banner');
    if (banner) banner.remove();
  }

  function showConsentBanner() {
    var style = document.createElement('style');
    style.textContent = '#sdx-cookie-banner{position:fixed;z-index:99999;left:18px;right:18px;bottom:18px;max-width:720px;margin:auto;padding:16px 18px;border:1px solid rgba(255,255,255,.18);border-radius:16px;background:#071736;color:#fff;box-shadow:0 18px 60px rgba(0,0,0,.28);font:13px/1.5 Inter,Arial,sans-serif;display:flex;gap:18px;align-items:center}#sdx-cookie-banner p{margin:0;flex:1}#sdx-cookie-banner a{color:#8feaff}#sdx-cookie-banner .sdx-cookie-actions{display:flex;gap:8px;flex-shrink:0}#sdx-cookie-banner button{border:1px solid rgba(255,255,255,.35);border-radius:10px;padding:9px 13px;font:700 12px Inter,Arial,sans-serif;cursor:pointer}#sdx-cookie-reject{color:#fff;background:transparent}#sdx-cookie-accept{color:#071736;background:#67e8f9;border-color:#67e8f9}@media(max-width:620px){#sdx-cookie-banner{left:10px;right:10px;bottom:10px;align-items:stretch;flex-direction:column}.sdx-cookie-actions{width:100%}.sdx-cookie-actions button{flex:1}}';
    document.head.appendChild(style);

    var banner = document.createElement('aside');
    banner.id = 'sdx-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferências de privacidade');
    banner.innerHTML = '<p>Usamos métricas anônimas para entender o desempenho do site e melhorar nossas campanhas. Nenhum dado preenchido nos formulários é enviado ao Google. <a href="privacy-policy.html">Política de privacidade</a>.</p><div class="sdx-cookie-actions"><button id="sdx-cookie-reject" type="button">Recusar</button><button id="sdx-cookie-accept" type="button">Aceitar métricas</button></div>';
    document.body.appendChild(banner);
    document.getElementById('sdx-cookie-reject').addEventListener('click', function () { rememberConsent('denied'); });
    document.getElementById('sdx-cookie-accept').addEventListener('click', function () { rememberConsent('granted'); });
  }

  function trackWhatsApp(source) {
    window.gtag('event', 'generate_lead', {
      method: 'whatsapp',
      lead_source: source || 'link',
      page_path: window.location.pathname
    });
    window.gtag('event', 'whatsapp_click', {
      link_location: source || 'link',
      page_path: window.location.pathname
    });
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href*="wa.me"],a[href*="whatsapp.com"]');
    if (link) trackWhatsApp((link.textContent || 'whatsapp_link').trim().slice(0, 80));
  }, true);

  document.addEventListener('submit', function (event) {
    if (event.target && event.target.id === 'lead-form') trackWhatsApp('diagnostic_form');
  }, true);

  var storedConsent = null;
  try { storedConsent = window.localStorage.getItem(consentKey); } catch (_) {}
  if (storedConsent === 'granted') updateConsent('granted');
  else if (storedConsent !== 'denied') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', showConsentBanner);
    else showConsentBanner();
  }
})();
