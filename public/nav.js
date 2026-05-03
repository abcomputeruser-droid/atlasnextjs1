/**
 * nav.js — Edit this file to update navigation on every page at once.
 *
 * How it works: each page's <header class="site-header"> carries data
 * attributes that describe what to render. This script reads those
 * attributes and builds the header HTML, so you never touch individual
 * pages just to change a nav link.
 *
 * data-nav          "site" (default) | "home" | "product"
 * data-tagline      Text shown under the Atlas logo  (e.g. "Monitors")
 * data-btn-text     CTA button label                 (e.g. "All Products")
 * data-btn-href     CTA button destination           (e.g. "all-products.html")
 * data-brand-href   Brand logo link                  (default: "index.html")
 *
 * Optional — only needed on monitor.html / motherboard.html so that
 * monitor.js / motherboard.js can find these elements by ID:
 * data-brand-name-id     id placed on the <p class="brand-name">
 * data-brand-tagline-id  id placed on the <p class="brand-tagline">
 * data-nav-id            id placed on the <nav class="nav">
 */

(function () {
  'use strict';

  function toRouteHref(value) {
    if (!value || value === '#') return value || '#';
    if (/^(https?:)?\/\//i.test(value) || value.startsWith('#')) return value;
    if (value === 'index.html') return '/';
    if (value === 'all-products.html') return '/all-products';
    if (value === 'motherboard.html') return '/motherboards';
    if (value === 'monitor.html') return '/monitors';
    if (value === 'company.html') return '/company';
    if (value === 'support.html') return '/support';
    if (value === 'about-atlas.html') return '/about';
    if (value === 'privacy-policy.html') return '/privacy-policy';
    if (value === 'terms-conditions.html') return '/terms-conditions';
    if (/\.html$/i.test(value)) return '/' + value.replace(/\.html$/i, '');
    return value;
  }

  // ── SITE NAV ─────────────────────────────────────────────────────────
  // Edit these entries to change links shown on every page.
  var SITE_NAV = [
    { label: 'All Products', href: '/all-products' },
    { label: 'Motherboards', href: '/motherboards' },
    { label: 'Monitors',     href: '/monitors'     },
    { label: 'Company',      href: '/company'      },
    { label: 'About',        href: '/about'        },
    { label: 'Support',      href: '/support'      },
  ];

  // ── PRODUCT PAGE NAV ─────────────────────────────────────────────────
  // Used on individual product detail pages (data-nav="product").
  var PRODUCT_NAV = [
    { label: 'Overview', href: '#overview' },
    { label: 'Gallery',  href: '#gallery'  },
    { label: 'Specs',    href: '#specs'    },
  ];

  // ── Build & inject ────────────────────────────────────────────────────
  function buildNav(header) {
    var type      = header.dataset.nav       || 'site';
    var tagline   = header.dataset.tagline   || '';
    var btnText   = header.dataset.btnText   || 'All Products';
    var btnHref   = toRouteHref(header.dataset.btnHref   || '/all-products');
    var brandHref = toRouteHref(header.dataset.brandHref || '/');

    var nameId    = header.dataset.brandNameId    ? ' id="' + header.dataset.brandNameId    + '"' : '';
    var taglineId = header.dataset.brandTaglineId ? ' id="' + header.dataset.brandTaglineId + '"' : '';
    var navId     = header.dataset.navId          ? ' id="' + header.dataset.navId          + '"' : '';

    var items = type === 'product' ? PRODUCT_NAV : type === 'site' ? SITE_NAV : [];
    var links = items.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    var innerClass = 'header-inner' + (type === 'home' ? ' header-inner--home' : '');

    header.innerHTML =
      '<div class="container ' + innerClass + '">' +
        '<a class="brand" href="' + brandHref + '">' +
          '<span class="brand-mark">' +
            '<img src="/assets/images/brand/atlas-logo.svg" alt="Atlas logo" title="Atlas logo" />' +
          '</span>' +
          '<div>' +
            '<p class="brand-name"' + nameId + '>Atlas</p>' +
            '<p class="brand-tagline"' + taglineId + '>' + tagline + '</p>' +
          '</div>' +
        '</a>' +
        (links ? '<nav class="nav"' + navId + '>' + links + '</nav>' : '') +
        '<a class="menu-btn" href="' + btnHref + '">' + btnText + '</a>' +
      '</div>';
  }

  var header = document.querySelector('.site-header');
  if (header) buildNav(header);
}());
