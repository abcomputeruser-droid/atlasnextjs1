"use client"
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import styles from '../../../styles/pages/all-products.module.css'

const MOTHERBOARDS = [
  {
    img: '/assets/images/products/raven-h311-v1-main.png',
    alt: 'ATLAS RAVEN H311 V1 Motherboard',
    title: 'ATLAS RAVEN H311 V1',
    summary: 'H311 chipset · Micro-ATX · DDR4',
    specs: ['Intel 6th–9th Gen CPU support', 'Dual-channel DDR4 up to 32 GB / 2666 MHz'],
    href: '/products/atlas-raven-h311-v1-motherboard-with-ddr4-m-2-for-intel-6th-9th-gen',
  },
  {
    img: '/assets/images/products/raven-b450m-frost-main.png',
    alt: 'ATLAS RAVEN B450M Frost Motherboard',
    title: 'ATLAS RAVEN B450M Frost',
    summary: 'B450 chipset · Micro-ATX · AM4',
    specs: ['AMD Ryzen 1st–5th Gen on AM4 socket', 'Dual DDR4 up to 32 GB / 3200 MHz (OC)'],
    href: '/products/atlas-raven-b450m-frost-micro-atx-am4-motherboard-with-ryzen-1000-5600-support',
  },
  {
    img: '/assets/images/products/raven-h61-v3-main.png',
    alt: 'ATLAS RAVEN H61 V3 Motherboard',
    title: 'ATLAS RAVEN H61 V3',
    summary: 'H61 chipset · DDR3 · HDMI & M.2',
    specs: ['Intel 2nd & 3rd Gen Core / Pentium / Celeron', 'Up to 16 GB DDR3 / 1600 MHz'],
    href: '/products/atlas-raven-h61-v3-motherboard-with-ddr3-hdmi-m-2-nvme-slot',
  },
  {
    img: '/assets/images/products/raven-h81-v3-main.png',
    alt: 'ATLAS RAVEN H81 V3 Motherboard',
    title: 'ATLAS RAVEN H81 V3',
    summary: 'H81 chipset · ATX · 4th Gen Intel',
    specs: ['Intel 4th Gen Core i7/i5/i3 / Pentium / Celeron', 'Up to 16 GB DDR3 (1066/1333/1600 MHz)'],
    href: '/products/atlas-raven-h81-v3-reliable-atx-motherboard-for-4th-gen-intel-cpus',
  },
]

const MONITORS = [
  {
    img: '/assets/images/products/ats24ifb100-main.png',
    alt: 'ATLAS ATS24IFB100 23.8" IPS FHD 100Hz Monitor',
    title: 'ATLAS ATS24IFB100',
    summary: '23.8-inch · IPS A+ · 100Hz · FHD',
    specs: ['IPS A+ Grade, Full HD 1920×1080 @ 100Hz', '178° viewing angles, HDMI & VGA, 3-yr warranty'],
    href: '/products/atlas-ats24ifb100-23-8-inch-ips-fhd-100hz-monitor',
  },
  {
    img: '/assets/images/products/ats22fw060-main.png',
    alt: 'ATLAS 21.5" Full HD LED Monitor 1920x1080 60Hz White',
    title: 'ATLAS 21.5" Full HD LED Monitor',
    summary: '21.5-inch · Full HD · 60Hz · White',
    specs: ['1920×1080 Full HD, 16:9, anti-glare screen', '5ms response, HDMI & VGA, slim frameless design'],
    href: '/products/atlas-21-5-full-hd-led-monitor-1920x1080-60hz-hdmi-vga-5ms-white',
  },
  {
    img: '/assets/images/products/ats22vfw100e-main.png',
    alt: 'ATLAS ATS22VFW100E Elite Series 21.5" 100Hz Full HD LED Monitor',
    title: 'ATLAS ATS22VFW100E Elite',
    summary: '21.5-inch · 100Hz · Elite Series · 3000:1',
    specs: ['Full HD 1920×1080, 100Hz, 3000:1 contrast ratio', 'Dynamic LED backlight, anti-glare, HDMI & VGA'],
    href: '/products/atlas-ats22vfw100e-elite-series-21-5-100hz-full-hd-led-monitor',
  },
  {
    img: '/assets/images/products/monitor-22-hd-main.png',
    alt: 'ATLAS 22" HD LED Monitor 16:10 Aspect Ratio',
    title: 'ATLAS 22" HD LED Monitor',
    summary: '22-inch · 16:10 · VGA & HDMI',
    specs: ['1680×1050 resolution, 16:10 aspect ratio', '5ms response time for smooth performance'],
    href: '/products/atlas-22-hd-led-monitor-1610-aspect-ratio-vga-hdmi-input',
  },
  {
    img: '/assets/images/products/monitor-19-main.png',
    alt: 'ATLAS 19" Full HD LED Monitor with HDMI & VGA Ports',
    title: 'ATLAS 19" Full HD LED Monitor',
    summary: '19-inch · 16:10 · Full HD',
    specs: ['1440×900 resolution, wide 16:10 display', '5ms response, HDMI & VGA ports'],
    href: '/products/atlas-19-full-hd-led-monitor-with-hdmi-vga-ports',
  },
  {
    img: '/assets/images/products/monitor-17-square-main.png',
    alt: 'ATLAS 17 Inch Square LED Monitor HDMI & VGA Support',
    title: 'ATLAS 17" Square LED Monitor',
    summary: '17-inch · 4:3 · Anti-Glare',
    specs: ['1280×1024 HD resolution, 4:3 format', '5ms response, HDMI & VGA support'],
    href: '/products/atlas-17-inch-square-led-monitor-hdmi-vga-anti-glare-5ms-response',
  },
  {
    img: '/assets/images/products/ats22vfb100-main.png',
    alt: 'ATLAS ATS22VFB100 22 Inch Full HD 100Hz Monitor for Editors & Pros',
    title: 'ATLAS ATS22VFB100',
    summary: '22-inch · 100Hz · Pro Series',
    specs: ['Full HD 1920×1080, smooth 100Hz refresh', 'Ideal for editors and professionals'],
    href: '/products/atlas-ats22vfb100-22-inch-full-hd-100hz-monitor-for-editors-pros',
  },
  {
    img: '/assets/images/products/ats22ifw100-main.png',
    alt: 'ATLAS ATS22IFW100 Pro Series 21.5" IPS 100Hz LED Monitor',
    title: 'ATLAS ATS22IFW100 Pro',
    summary: '21.5-inch · IPS · 100Hz · White',
    specs: ['IPS panel, Full HD 1920×1080 @ 100Hz', 'Crisp colors and wide viewing angles'],
    href: '/products/atlas-ats22ifw100-pro-series-21-5-ips-100hz-led-monitor-in-white-crisp-visuals',
  },
  {
    img: '/assets/images/products/ats22vfw100-main.png',
    alt: "ATLAS ATS22VFW100 Gamer's Edition 21.5\" 100Hz Gaming LED Monitor",
    title: 'ATLAS ATS22VFW100 Gamer',
    summary: '21.5-inch · 100Hz · Gaming',
    specs: ['Full HD 1920×1080, 100Hz gaming refresh', 'Fast response, smooth motion for esports'],
    href: '/products/atlas-ats22vfw100-gamers-edition-21-5-100hz-fast-response-gaming-led-monitor',
  },
]

export default function AllProductsClient() {
  const [filter, setFilter] = useState('all')

  const showMB = filter === 'all' || filter === 'motherboard'
  const showMon = filter === 'all' || filter === 'monitor'
  const visibleCount = (showMB ? MOTHERBOARDS.length : 0) + (showMon ? MONITORS.length : 0)

  return (
    <>
      <MotionBg />
      <Nav tagline="All Products" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className={styles.apHero}>
          <div className="container">
            <div className={styles.apHeroInner}>
              <p className="eyebrow" style={{ color: 'var(--accent)' }}>Atlas Hardware</p>
              <h1>Every product.<br />One place.</h1>
              <p>Browse our complete lineup of motherboards and monitors — built for reliable everyday performance.</p>
              <div className={styles.apHeroBadges}>
                <span className={styles.apHeroBadge}>13 Products</span>
                <span className={styles.apHeroBadge}>Motherboards</span>
                <span className={styles.apHeroBadge}>Monitors</span>
                <span className={styles.apHeroBadge}>Intel &amp; AMD</span>
              </div>
              <div className="hero-actions" style={{ marginTop: '8px' }}>
                <a className="cta" href="#motherboards">Motherboards</a>
                <a className="cta ghost" href="#monitors">Monitors</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '40px', paddingBottom: '0' }}>
          <div className="container">
            <div className={styles.statsBar}>
              <div className={styles.statsBarItem}>
                <span className={styles.val}>4</span>
                <span className={styles.lbl}>Motherboards</span>
              </div>
              <div className={styles.statsBarItem}>
                <span className={styles.val}>9</span>
                <span className={styles.lbl}>Monitors</span>
              </div>
              <div className={styles.statsBarItem}>
                <span className={styles.val}>100Hz</span>
                <span className={styles.lbl}>Max Refresh</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: '32px', paddingBottom: '0' }}>
          <div className="container">
            <div className={styles.filterBar}>
              <button className={`${styles.filterBtn}${filter === 'all' ? ' ' + styles.filterBtnActive : ''}`} onClick={() => setFilter('all')}>All Products</button>
              <button className={`${styles.filterBtn}${filter === 'motherboard' ? ' ' + styles.filterBtnActive : ''}`} onClick={() => setFilter('motherboard')}>Motherboards</button>
              <button className={`${styles.filterBtn}${filter === 'monitor' ? ' ' + styles.filterBtnActive : ''}`} onClick={() => setFilter('monitor')}>Monitors</button>
              <span className={styles.filterCount}>{visibleCount} product{visibleCount !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </section>

        {showMB && (
          <section className="section" id="motherboards" style={{ paddingTop: '40px' }}>
            <div className="container">
              <div className={styles.apSectionHead}>
                <h2>Motherboards</h2>
                <span className="count-pill">4 models</span>
                <Link className={styles.viewAll} href="/motherboards">View all &rarr;</Link>
              </div>
              <div className={`product-grid ${styles.productGrid}`}>
                {MOTHERBOARDS.map((p, i) => (
                  <article className="product-card" key={i} data-category="motherboard">
                    <div className="product-card-media">
                      <img src={p.img} alt={p.alt} title={p.alt} />
                      <span className="product-card-tag">Motherboard</span>
                    </div>
                    <div className="product-card-body">
                      <h3>{p.title}</h3>
                      <p className="product-card-summary">{p.summary}</p>
                      <ul className="product-card-specs">
                        {p.specs.map((s, j) => <li key={j}>{s}</li>)}
                      </ul>
                      <Link className="cta stretched-link" href={p.href}>View Details</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="container">
            <div className={styles.featureBanner}>
              <div className={styles.featureBannerText}>
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>New Arrival</p>
                <h2>Raven B450M Frost — AMD Ryzen Ready</h2>
                <p>Supports Ryzen 1st through 5th Gen processors on the AM4 platform with 3200 MHz (OC) memory and fast M.2 NVMe storage.</p>
              </div>
              <div className={styles.featureBannerActions}>
                <Link className="cta stretched-link" href="/products/atlas-raven-b450m-frost-micro-atx-am4-motherboard-with-ryzen-1000-5600-support">Shop Now</Link>
                <Link className="cta ghost" href="/motherboards">All Motherboards</Link>
              </div>
            </div>
          </div>
        </section>

        {showMon && (
          <section className="section" id="monitors" style={{ paddingTop: '40px' }}>
            <div className="container">
              <div className={styles.apSectionHead}>
                <h2>Monitors</h2>
                <span className="count-pill">9 models</span>
                <Link className={styles.viewAll} href="/monitors">View all &rarr;</Link>
              </div>
              <div className={`product-grid ${styles.productGrid}`}>
                {MONITORS.map((p, i) => (
                  <article className="product-card" key={i} data-category="monitor">
                    <div className="product-card-media">
                      <img src={p.img} alt={p.alt} title={p.alt} />
                      <span className="product-card-tag">Monitor</span>
                    </div>
                    <div className="product-card-body">
                      <h3>{p.title}</h3>
                      <p className="product-card-summary">{p.summary}</p>
                      <ul className="product-card-specs">
                        {p.specs.map((s, j) => <li key={j}>{s}</li>)}
                      </ul>
                      <Link className="cta stretched-link" href={p.href}>View Details</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
          <div className="container">
            <div className={styles.dualBanner}>
              <Link className={`${styles.dualBannerCard} ${styles.dualBannerCardMb}`} href="/motherboards">
                <p className="eyebrow" style={{ color: 'var(--accent-2)' }}>Motherboards</p>
                <h3>Build your Intel &amp; AMD platform</h3>
                <p>4 models covering Intel 2nd-9th gen and Ryzen 1000-5600, with DDR3, DDR4, M.2 NVMe, and Gigabit LAN across the range.</p>
                <span className={styles.bannerLink}>Shop Motherboards &rarr;</span>
              </Link>
              <Link className={`${styles.dualBannerCard} ${styles.dualBannerCardMon}`} href="/monitors">
                <p className="eyebrow" style={{ color: 'var(--accent)' }}>Monitors</p>
                <h3>See it sharper at 100Hz</h3>
                <p>9 models from 17&quot; to 24&quot; - IPS and VA panels with HDMI and VGA on every display.</p>
                <span className={`${styles.bannerLink} ${styles.bannerLinkMon}`}>Shop Monitors &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section build">
          <div className="container build-grid">
            <div>
              <h2>Pick your build path</h2>
              <p>Every Atlas product is built for real-world dependability — whether you&apos;re running office workloads, creative software, or daily-use setups.</p>
              <div className="hero-actions" style={{ marginTop: '20px' }}>
                <Link className="cta" href="/motherboards">Motherboards</Link>
                <Link className="cta ghost" href="/monitors">Monitors</Link>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="value">4</div>
                <div className="label">Motherboards</div>
              </div>
              <div className="stat">
                <div className="value">9</div>
                <div className="label">Monitors</div>
              </div>
              <div className="stat">
                <div className="value">Intel</div>
                <div className="label">&amp; AMD</div>
              </div>
              <div className="stat">
                <div className="value">100Hz</div>
                <div className="label">Max Refresh</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="/seo.js" strategy="afterInteractive" />
      <Script src="/image-optimizer.js" strategy="afterInteractive" />
      <Script src="/view-counter.js" strategy="afterInteractive" />
      <Script src="/live-notifications.js" strategy="afterInteractive" />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  )
}
