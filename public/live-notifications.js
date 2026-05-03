(function () {
  var DB_URL   = 'https://ab-computer-bd-53afe-default-rtdb.asia-southeast1.firebasedatabase.app';
  var DB_PATH  = '/atlas-views/events';
  var FRESH_MS = 30000;

  var SESSION_ID = Math.random().toString(36).slice(2) + Date.now().toString(36);

  function normalizeProductPath(value) {
    if (!value) return '';
    var nextValue = value;
    if (/^https?:\/\//i.test(nextValue)) {
      nextValue = new URL(nextValue, window.location.origin).pathname;
    }
    nextValue = nextValue.split('#')[0].split('?')[0];
    nextValue = nextValue.replace(/\/+$/, '');
    nextValue = nextValue.split('/').pop() || '';
    return nextValue.replace(/\.html$/i, '');
  }

  var PRODUCT_NAMES = {
    'atlas-raven-h311-v1-motherboard-with-ddr4-m-2-for-intel-6th-9th-gen':
      'Atlas Raven H311 V1',
    'atlas-raven-b450m-frost-micro-atx-am4-motherboard-with-ryzen-1000-5600-support':
      'Atlas Raven B450M Frost',
    'atlas-raven-h61-v3-motherboard-with-ddr3-hdmi-m-2-nvme-slot':
      'Atlas Raven H61 V3',
    'atlas-raven-h81-v3-reliable-atx-motherboard-for-4th-gen-intel-cpus':
      'Atlas Raven H81 V3',
    'atlas-22-hd-led-monitor-1610-aspect-ratio-vga-hdmi-input':
      'Atlas 22" HD LED Monitor',
    'atlas-19-full-hd-led-monitor-with-hdmi-vga-ports':
      'Atlas 19" Full HD Monitor',
    'atlas-17-inch-square-led-monitor-hdmi-vga-anti-glare-5ms-response':
      'Atlas 17" Square LED Monitor',
    'atlas-ats22vfb100-22-inch-full-hd-100hz-monitor-for-editors-pros':
      'Atlas ATS22VFB100',
    'atlas-ats22ifw100-pro-series-21-5-ips-100hz-led-monitor-in-white-crisp-visuals':
      'Atlas ATS22IFW100 Pro',
    'atlas-ats22vfw100-gamers-edition-21-5-100hz-fast-response-gaming-led-monitor':
      'Atlas ATS22VFW100 Gamer',
    'atlas-ats24ifb100-23-8-inch-ips-fhd-100hz-monitor':
      'Atlas ATS24IFB100',
    'atlas-21-5-full-hd-led-monitor-1920x1080-60hz-hdmi-vga-5ms-white':
      'Atlas 21.5" Full HD Monitor',
    'atlas-ats22vfw100e-elite-series-21-5-100hz-full-hd-led-monitor':
      'Atlas ATS22VFW100E Elite'
  };

  // ── Popup DOM ──────────────────────────────────────────────────────────────

  var popup     = null;
  var hideTimer = null;

  function buildPopup() {
    var el = document.createElement('div');
    el.className = 'ln-popup';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    el.innerHTML =
      '<span class="ln-dot" aria-hidden="true"></span>' +
      '<div class="ln-body">' +
        '<div class="ln-top">Someone just viewed</div>' +
        '<div class="ln-product"></div>' +
        '<div class="ln-time">just now</div>' +
      '</div>' +
      '<button class="ln-close" aria-label="Dismiss">&times;</button>';
    el.querySelector('.ln-close').addEventListener('click', dismiss);
    document.body.appendChild(el);
    return el;
  }

  function show(productName) {
    if (!popup) popup = buildPopup();
    clearTimeout(hideTimer);
    popup.querySelector('.ln-product').textContent = productName;
    popup.classList.remove('ln-popup--out');
    void popup.offsetWidth;
    popup.classList.add('ln-popup--in');
    hideTimer = setTimeout(dismiss, 6000);
  }

  function dismiss() {
    if (!popup) return;
    popup.classList.remove('ln-popup--in');
    popup.classList.add('ln-popup--out');
  }

  // ── Publish a view event ───────────────────────────────────────────────────

  function publishView(identifier) {
    var slug = normalizeProductPath(identifier);
    var name = PRODUCT_NAMES[slug];
    if (!name) return;
    fetch(DB_URL + DB_PATH + '.json', {
      method:    'POST',
      keepalive: true,
      headers:   { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: name,
        url:     '/' + slug,
        slug:    slug,
        session: SESSION_ID,
        ts:      { '.sv': 'timestamp' }
      })
    }).catch(function () {});
  }

  // ── Event deduplication ────────────────────────────────────────────────────

  var lastSeenKey = '';
  var sseReady    = false;

  function handleNewEvent(key, data) {
    if (!data || !data.product) return;
    if (key <= lastSeenKey) return;
    lastSeenKey = key;
    if (data.ts && (Date.now() - data.ts > FRESH_MS)) return;
    show(data.product);
  }

  // ── SSE — primary real-time channel ───────────────────────────────────────

  function listenSSE() {
    if (!('EventSource' in window)) return;

    var source = new EventSource(DB_URL + DB_PATH + '.json');

    source.addEventListener('put', function (e) {
      var payload;
      try { payload = JSON.parse(e.data); } catch (err) { return; }

      if (payload.path === '/') {
        if (payload.data) {
          var keys = Object.keys(payload.data).sort();
          keys.forEach(function (key) {
            handleNewEvent(key, payload.data[key]);
          });
        }
        sseReady = true;
        return;
      }

      if (!sseReady) return;
      var key = payload.path.replace(/^\//, '');
      handleNewEvent(key, payload.data);
    });

    source.addEventListener('patch', function (e) {
      if (!sseReady) return;
      var payload;
      try { payload = JSON.parse(e.data); } catch (err) { return; }
      if (!payload.data) return;
      Object.keys(payload.data).forEach(function (key) {
        handleNewEvent(key, payload.data[key]);
      });
    });

    source.onerror = function () {
      source.close();
      sseReady = false;
      setTimeout(listenSSE, 10000);
    };
  }

  // ── Polling — universal fallback ───────────────────────────────────────────

  function pollLatest() {
    var url = DB_URL + DB_PATH + '.json'
            + '?orderBy=%22%24key%22&limitToLast=1';

    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data || typeof data !== 'object') return;
        var key = Object.keys(data)[0];
        if (!key) return;
        handleNewEvent(key, data[key]);
      })
      .catch(function () {});
  }

  // ── Click listener ─────────────────────────────────────────────────────────

  function attachClickListeners() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (PRODUCT_NAMES[normalizeProductPath(href)]) publishView(href);
    }, true);
  }

  // ── Route-change handler (re-runs on every SPA navigation) ────────────────

  var lastTrackedPath = '';

  function onRouteChange() {
    var currentPath = window.location.pathname;
    if (currentPath === lastTrackedPath) return;
    lastTrackedPath = currentPath;
    var slug = normalizeProductPath(currentPath);
    if (PRODUCT_NAMES[slug]) publishView(slug);
  }

  // ── Prune events older than 48 h ───────────────────────────────────────────

  function pruneOldEntries() {
    var cutoff = Date.now() - 48 * 60 * 60 * 1000;
    var url    = DB_URL + DB_PATH + '.json'
               + '?orderBy=%22%24key%22&limitToFirst=50';

    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data || typeof data !== 'object') return;
        Object.keys(data).forEach(function (key) {
          var entry = data[key];
          if (entry && entry.ts && entry.ts < cutoff) {
            fetch(DB_URL + DB_PATH + '/' + key + '.json', { method: 'DELETE' })
              .catch(function () {});
          }
        });
      })
      .catch(function () {});
  }

  // ── Boot ──────────────────────────────────────────────────────────────────

  var booted = false;

  function bootLiveNotifications() {
    if (booted) return;
    booted = true;

    listenSSE();
    pollLatest();
    setInterval(pollLatest, 8000);
    attachClickListeners();

    // Patch history.pushState so Next.js client-side navigations are detected
    var _push = history.pushState.bind(history);
    history.pushState = function (state, title, url) {
      _push(state, title, url);
      setTimeout(onRouteChange, 50);
    };
    window.addEventListener('popstate', function () { setTimeout(onRouteChange, 50); });

    // Run immediately for the current page
    onRouteChange();

    setTimeout(pruneOldEntries, 10000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootLiveNotifications, { once: true });
  } else {
    bootLiveNotifications();
  }

})();
