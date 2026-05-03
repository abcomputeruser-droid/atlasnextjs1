"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MotionBg from '../components/MotionBg'

export default function HomeClient() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const N = 3
  const INTERVAL = 4500

  function goTo(idx) {
    setCurrent(((idx % N) + N) % N)
  }
  function next() { goTo(current + 1) }
  function prev() { goTo(current - 1) }

  function resetTimer() {
    clearInterval(timerRef.current)
    if (!paused) timerRef.current = setInterval(next, INTERVAL)
  }

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => setCurrent(c => (c + 1) % N), INTERVAL)
    }
    return () => clearInterval(timerRef.current)
  }, [paused])

  const slides = [
    {
      href: '/products/atlas-ats24ifb100-23-8-inch-ips-fhd-100hz-monitor',
      badge: 'New Arrival',
      name: 'ATLAS ATS24IFB100',
      specs: ['23.8"', 'IPS A+', 'FHD 1080p', '100Hz', '5ms'],
      hiIdx: 3,
      desc: 'Premium IPS A+ Grade panel with accurate colour, fast 5ms response, and a slim borderless build — made for daily work and creative use.',
      img: '/assets/images/products/ats24ifb100-main.png',
      alt: 'ATLAS ATS24IFB100 23.8-Inch IPS FHD 100Hz Monitor',
    },
    {
      href: '/products/atlas-21-5-full-hd-led-monitor-1920x1080-60hz-hdmi-vga-5ms-white',
      badge: 'New Arrival',
      name: 'ATLAS 21.5" Full HD LED Monitor',
      specs: ['21.5"', 'LED', 'FHD 1080p', '60Hz', '5ms'],
      hiIdx: -1,
      desc: '21.5-inch Full HD display with anti-glare screen, slim white design, and both HDMI and VGA — clean, quiet, and dependable.',
      img: '/assets/images/products/ats22fw060-main.png',
      alt: 'ATLAS 21.5 Inch Full HD LED Monitor',
    },
    {
      href: '/products/atlas-ats22vfw100e-elite-series-21-5-100hz-full-hd-led-monitor',
      badge: 'New Arrival',
      name: 'ATLAS ATS22VFW100E Elite',
      specs: ['21.5"', 'LED', 'FHD 1080p', '100Hz', '3000:1'],
      hiIdx: 3,
      desc: 'Elite Series with dynamic LED backlight, 3000:1 contrast ratio, and 100Hz refresh — built for vivid, smooth visuals every day.',
      img: '/assets/images/products/ats22vfw100e-main.png',
      alt: 'ATLAS ATS22VFW100E Elite Series Monitor',
    },
  ]

  function pad(n) { return n < 10 ? '0' + n : '' + n }

  return (
    <>
      <MotionBg />
      <Nav tagline="Comparts" navType="home" btnText="All Products" btnHref="/all-products" brandHref="/" />
      <main>
        <section className="hero product-hero product-hero--video" id="top">
          <video className="product-hero-video" autoPlay muted loop playsInline preload="auto" disablePictureInPicture disableRemotePlayback data-playback-rate="0.9">
            <source src="/assets/videos/home-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="container product-hero-grid">
            <div className="product-hero-content">
              <p className="eyebrow">Atlas | Founded 2020</p>
              <h1>Motherboards and monitors built for real workloads.</h1>
              <p>Explore RAVEN boards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 17-24 inch displays with HDMI and VGA on every model.</p>
              <div className="hero-actions">
                <Link className="cta" href="/motherboards">Explore Motherboards</Link>
                <Link className="cta ghost" href="/monitors">View Monitors</Link>
              </div>
            </div>
          </div>
          <div className="hero-gradient" aria-hidden="true"></div>
        </section>

        <section
          className="na-slider"
          aria-label="New Arrivals"
          tabIndex={0}
          onMouseEnter={() => { setPaused(true); clearInterval(timerRef.current) }}
          onMouseLeave={() => { setPaused(false) }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { goTo(current - 1) }
            if (e.key === 'ArrowRight') { goTo(current + 1) }
          }}
        >
          <div className="na-bg-lines" aria-hidden="true"></div>
          <div className="na-drop na-drop-1" aria-hidden="true"></div>
          <div className="na-drop na-drop-2" aria-hidden="true"></div>
          <div className="na-drop na-drop-3" aria-hidden="true"></div>
          <div className="na-drop na-drop-4" aria-hidden="true"></div>
          <div className="na-drop na-drop-5" aria-hidden="true"></div>

          <div className="na-header">
            <div className="container na-header-inner">
              <div className="na-header-left">
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>New Arrivals</p>
                <h2 className="na-title">Just Landed</h2>
              </div>
              <span className="na-count" aria-live="polite">{pad(current + 1)} / {pad(N)}</span>
            </div>
          </div>

          <div className="na-track-wrap">
            <div className="na-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {slides.map((slide, i) => (
                <Link
                  key={i}
                  className={`na-slide${i === current ? ' na-slide--active' : ''}`}
                  href={slide.href}
                >
                  <div className="container na-grid">
                    <div className="na-text">
                      <span className="na-badge">{slide.badge}</span>
                      <h3 className="na-product-name">{slide.name}</h3>
                      <div className="na-specs">
                        {slide.specs.map((s, j) => (
                          <span key={j} className={`na-spec${j === slide.hiIdx ? ' na-spec--hi' : ''}`}>{s}</span>
                        ))}
                      </div>
                      <p>{slide.desc}</p>
                    </div>
                    <div className="na-img-wrap">
                      <img src={slide.img} alt={slide.alt} loading="lazy" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <button className="na-arrow na-arrow--prev" onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(current - 1) }} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 3.5L5.5 9L11 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="na-arrow na-arrow--next" onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(current + 1) }} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 3.5L12.5 9L7 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div className="na-footer">
            <div className="container na-footer-inner">
              <div className="hero-slider-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-dot${i === current ? ' is-active' : ''}`}
                    aria-label={`Slide ${i + 1}`}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(i) }}
                  />
                ))}
              </div>
              <div className="na-progress-track">
                <div className={`na-progress-fill${!paused ? ' is-running' : ''}`} key={current}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="categories">
          <div className="container">
            <div className="section-title">Browse Categories</div>
            <p>Explore our full product lineup by category.</p>
            <div className="home-category-grid">
              <Link className="home-category-card" href="/motherboards">
                <div className="home-category-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                    <rect x="10" y="10" width="8" height="8" rx="1" fill="currentColor" opacity="0.7" />
                    <rect x="22" y="10" width="8" height="8" rx="1" fill="currentColor" opacity="0.7" />
                    <rect x="10" y="22" width="8" height="8" rx="1" fill="currentColor" opacity="0.4" />
                    <rect x="22" y="22" width="8" height="8" rx="1" fill="currentColor" opacity="0.4" />
                    <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                    <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                  </svg>
                </div>
                <div className="home-category-body">
                  <p className="eyebrow">Category</p>
                  <h3>Motherboards</h3>
                  <p>ATX and Micro-ATX platforms for Intel 2nd-9th gen and Ryzen 1000-5600. 4 models.</p>
                  <span className="home-category-link">Browse Motherboards &rarr;</span>
                </div>
              </Link>
              <Link className="home-category-card" href="/monitors">
                <div className="home-category-icon home-category-icon--monitor">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="6" width="34" height="22" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                    <line x1="20" y1="28" x2="20" y2="34" stroke="currentColor" strokeWidth="2" />
                    <line x1="13" y1="34" x2="27" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <rect x="8" y="11" width="24" height="12" rx="1.5" fill="currentColor" opacity="0.15" />
                    <circle cx="20" cy="32" r="1" fill="currentColor" opacity="0.5" />
                  </svg>
                </div>
                <div className="home-category-body">
                  <p className="eyebrow">Category</p>
                  <h3>Monitors</h3>
                  <p>17-24 inch IPS and VA panels with HDMI and VGA on every display. 9 models.</p>
                  <span className="home-category-link">Browse Monitors &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="container">
            <div className="home-feature-banner">
              <div className="home-feature-banner-text">
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>Featured</p>
                <h2>Raven B450M Frost — Ryzen 1000-5600 Ready</h2>
                <p>AM4 motherboard built for Ryzen 1000 through 5600 systems, with 3200 MHz (OC) memory support, M.2 NVMe storage, and stable daily-use performance.</p>
              </div>
              <div className="home-feature-banner-actions">
                <Link className="cta" href="/products/atlas-raven-b450m-frost-micro-atx-am4-motherboard-with-ryzen-1000-5600-support">Shop Now</Link>
                <Link className="cta ghost" href="/motherboards">All Motherboards</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="container">
            <div className="home-dual-banner">
              <Link className="home-dual-banner-card home-dual-banner-card--mb" href="/motherboards">
                <p className="eyebrow" style={{ color: 'var(--accent-2)' }}>Motherboards</p>
                <h3>Build your Intel &amp; AMD platform</h3>
                <p>4 models covering Intel 2nd-9th gen and Ryzen 1000-5600, with DDR3, DDR4, M.2 NVMe, and Gigabit LAN across the range.</p>
                <span className="home-banner-link">Shop Motherboards &rarr;</span>
              </Link>
              <Link className="home-dual-banner-card home-dual-banner-card--mon" href="/monitors">
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>Monitors</p>
                <h3>See it sharper at 100Hz</h3>
                <p>9 models from 17&quot; to 24&quot; - IPS and VA panels with HDMI and VGA on every display.</p>
                <span className="home-banner-link">Shop Monitors &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section build build-gradient">
          <div className="build-orb build-orb-a" aria-hidden="true"></div>
          <div className="build-orb build-orb-b" aria-hidden="true"></div>
          <div className="container build-grid">
            <div>
              <h2>Built for desks, shops, labs, and offices.</h2>
              <p>Atlas hardware is designed for everyday systems that need stable compatibility, straightforward support, and 1 to 3 year warranty coverage.</p>
              <div className="hero-actions" style={{ marginTop: '20px' }}>
                <Link className="cta" href="/motherboards">Motherboards</Link>
                <Link className="cta ghost" href="/monitors">Monitors</Link>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="value">2020</div>
                <div className="label">Founded</div>
              </div>
              <div className="stat">
                <div className="value">17-24&quot;</div>
                <div className="label">Monitor Range</div>
              </div>
              <div className="stat">
                <div className="value">Intel 2nd-9th</div>
                <div className="label">RAVEN Coverage</div>
              </div>
              <div className="stat">
                <div className="value">Ryzen 1000-5600</div>
                <div className="label">AM4 Coverage</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="distributor">
          <div className="container">
            <div className="section-title">
              <svg className="auth-badge" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M7 9.5L8.5 11L11 7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="auth-label">Authorized Distributor</span>
            </div>
            <div className="home-feature-banner">
              <div className="home-feature-banner-text">
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>Since 2020</p>
                <h2>AB Computer — Official Atlas Distributor</h2>
                <p>AB Computer has been the official Atlas distributor in Bangladesh since 2020, handling retail availability, warranty processing, and corporate supply. Visit <a href="https://abcomputer.com.bd" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>abcomputer.com.bd</a> for purchase and support details.</p>
              </div>
              <div className="home-feature-banner-actions">
                <a className="cta" href="https://abcomputer.com.bd" target="_blank" rel="noopener noreferrer">Visit AB Computer</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="/seo.js" strategy="afterInteractive" />
      <Script src="/image-optimizer.js" strategy="afterInteractive" />
      <Script src="/live-notifications.js" strategy="afterInteractive" />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  )
}
