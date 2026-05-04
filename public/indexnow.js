(function () {
  var KEY     = '8fb3a2c1d4e7960f5e2b1c3a4d6e8f0b';
  var HOST    = 'www.atlascomparts.com';
  var SITEMAP = 'https://www.atlascomparts.com/sitemap.xml';

  var url = (window.location.href || '').split('#')[0].split('?')[0];
  if (!url) return;

  var storageKey = 'ix:' + url;

  try {
    if (localStorage.getItem(storageKey)) return;
    localStorage.setItem(storageKey, '1');
  } catch (e) {
    return;
  }

  // Ping IndexNow — notifies Bing, Yandex, and other participating engines
  fetch(
    'https://api.indexnow.org/indexnow' +
    '?url=' + encodeURIComponent(url) +
    '&key=' + KEY +
    '&keyLocation=https://' + HOST + '/' + KEY + '.txt'
  ).catch(function () {});

  // Ping Google's sitemap endpoint once per session
  try {
    if (!sessionStorage.getItem('sitemap-pinged')) {
      sessionStorage.setItem('sitemap-pinged', '1');
      fetch('https://www.google.com/ping?sitemap=' + encodeURIComponent(SITEMAP))
        .catch(function () {});
    }
  } catch (e) {}
})();
