import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import styles from '../../../styles/pages/about.module.css'

export const metadata = {
  title: 'About Atlas – Monitors & Motherboards for Bangladesh',
  description: 'Learn about Atlas, a Bangladesh hardware brand building RAVEN motherboards and 17 to 24 inch monitors for offices, shops, schools, and daily-use systems.',
  keywords: 'Atlas monitor Bangladesh, Atlas LED display, Atlas RAVEN motherboard, affordable monitor Bangladesh, Atlas 24 inch monitor, Atlas HDMI monitor, budget monitor Bangladesh, 100Hz monitor Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/about' },
  openGraph: {
    title: 'About Atlas – Monitors & Motherboards for Bangladesh',
    description: 'Learn about Atlas, a Bangladesh hardware brand building RAVEN motherboards and 17 to 24 inch monitors for offices, shops, schools, and daily-use systems.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Atlas – Monitors & Motherboards for Bangladesh',
    description: 'Learn about Atlas, a Bangladesh hardware brand building RAVEN motherboards and 17 to 24 inch monitors for offices, shops, schools, and daily-use systems.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <MotionBg />
      <Nav tagline="About Atlas" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className={`hero hero-single ${styles.aboutHero}`} id="about-hero">
          <div className={`${styles.heroOrb} ${styles.heroOrbA}`} aria-hidden="true"></div>
          <div className={`${styles.heroOrb} ${styles.heroOrbB}`} aria-hidden="true"></div>
          <div className={`${styles.heroOrb} ${styles.heroOrbC}`} aria-hidden="true"></div>
          <div className="container hero-single-inner">
            <div className="hero-text">
              <p className="eyebrow">About Atlas</p>
              <h1>Designed for the setups people actually use.</h1>
              <p>Atlas specializes in 17 to 24 inch monitors and RAVEN series motherboards for offices, student setups, CCTV stations, and daily-use systems across Bangladesh.</p>
            </div>
          </div>
        </section>

        <section className="section" id="numbers">
          <div className="container">
            <div className="section-title">Atlas in Numbers</div>
            <div className="overview-stats">
              <div className="stat-card">
                <span className="stat-value">17-24&quot;</span>
                <span className="stat-label">Display Range</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">1&ndash;3 Year</span>
                <span className="stat-label">Warranty</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">60&ndash;100Hz</span>
                <span className="stat-label">Refresh Rate</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">9</span>
                <span className="stat-label">Monitor Models</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">4</span>
                <span className="stat-label">Motherboard Models</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">Bangladesh</span>
                <span className="stat-label">Primary Market</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.storySection}`} id="story">
          <div className={styles.storyLines} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop1}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop2}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop3}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop4}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop5}`} aria-hidden="true"></div>
          <div className="container company-grid">
            <div className="company-content">
              <p className="eyebrow">Our Story</p>
              <h2>Born from a simple need. Built for the real world.</h2>
              <p>Atlas didn&apos;t start with grand ambitions. It started with a question — why should a student, a small office, or a CCTV setup have to overpay just to get a screen that works? The answer became the brand.</p>
              <p>From that single idea, Atlas grew into a focused hardware lineup for real-world setups across Bangladesh. Monitors ranging from 17 to 24 inches now sit on desks in schools, shops, and server rooms, while the RAVEN motherboard series covers Intel 2nd through 9th gen and AMD Ryzen 1000 through 5600.</p>
              <p>Atlas is doing something more grounded — putting hardware that genuinely works, backed by a warranty people can rely on, within reach of anyone across Bangladesh.</p>
              <ul className="company-list">
                <li>IPS and VA panels across the monitor range</li>
                <li>HDMI and VGA connectivity on every display</li>
                <li>RAVEN series covering Intel and AMD platforms</li>
                <li>1 to 3 year warranty on all products</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="container">
            <div className="section-title">Atlas Principles</div>
            <div className="cards">
              <div className="card">
                <p className="eyebrow">Honesty Over Hype</p>
                <h3>We say what it does. Nothing more.</h3>
                <p>No gaming branding slapped on a 60Hz office panel. No inflated specs. Atlas lists what matters — panel type, ports, size, refresh rate — and lets the hardware speak. Buyers know exactly what they are getting before they open the box.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Built to Last Daily Use</p>
                <h3>Reliability is the only feature that matters.</h3>
                <p>Atlas hardware is not built for benchmarks. It is built for eight hours a day, five days a week, year after year. Stable thermals, solid port construction, and panels that hold up — because the people who buy Atlas cannot afford for it to fail.</p>
              </div>
              <div className="card">
                <p className="eyebrow">No Compromise on Access</p>
                <h3>Price should never block a working setup.</h3>
                <p>Every Atlas product is priced with the real buyer in mind — the student setting up their first desk, the shop owner running a CCTV rack, the small office that just needs screens that turn on every morning without drama.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Backed After the Sale</p>
                <h3>The warranty is a real promise.</h3>
                <p>A 1 to 3 year manufacturer warranty is not a footnote. It is the guarantee that Atlas stands behind what it sells — through the retailers, through the service process, and through every unit that leaves the shelf.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.qualitySection}`} id="quality">
          <div className={`${styles.qualityOrb} ${styles.qualityOrbA}`} aria-hidden="true"></div>
          <div className={`${styles.qualityOrb} ${styles.qualityOrbB}`} aria-hidden="true"></div>
          <div className={`${styles.qualityOrb} ${styles.qualityOrbC}`} aria-hidden="true"></div>
          <div className="container">
            <p className="eyebrow">Quality Chain</p>
            <h2>Every unit passes a clear checklist.</h2>
            <p>Atlas monitors and motherboards go through controlled production steps with inspection checkpoints before reaching retailers.</p>
            <p>Each product is verified for panel performance, port functionality, and visual consistency before packaging.</p>
            <ul className="company-list">
              <li>Panel and backlight inspection</li>
              <li>Port and connectivity checks</li>
<li>Final QA review before shipment</li>
            </ul>
          </div>
        </section>

        <section className="section build" id="motherboards">
          <div className="container build-grid">
            <div>
              <p className="eyebrow">Atlas RAVEN Series</p>
              <h2>Motherboards for Intel and AMD.</h2>
              <p>The Atlas RAVEN lineup covers both platforms — from budget H61/H81 entry boards to capable H311 and B450M mid-range options. Every board is built for stable daily use and straightforward processor compatibility.</p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="value">4</div>
                <div className="label">Models Available</div>
              </div>
              <div className="stat">
                <div className="value">Intel &amp; AMD</div>
                <div className="label">Platforms Covered</div>
              </div>
              <div className="stat">
                <div className="value">H61 &ndash; B450M</div>
                <div className="label">Chipset Range</div>
              </div>
              <div className="stat">
                <div className="value">AM4 / LGA</div>
                <div className="label">Socket Support</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="promise">
          <div className="container">
            <div className="section-title">The Atlas Promise</div>
            <div className="specs-table">
              <table>
                <thead>
                  <tr>
                    <th>What Atlas Commits To</th>
                    <th>What That Means in Practice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hardware you can actually afford</td>
                    <td>LED monitors from 17 to 24 inches priced for students, offices, and small businesses — built for real daily-use setups.</td>
                  </tr>
                  <tr>
                    <td>Specs listed without spin</td>
                    <td>IPS and VA panels. HDMI and VGA ports. 60 to 100Hz refresh rates. Printed clearly. No asterisks, no marketing math.</td>
                  </tr>
                  <tr>
                    <td>Motherboards that just work</td>
                    <td>The RAVEN series covers Intel and AMD platforms from H61 to B450M — chosen for compatibility and stability, not to chase spec sheet headlines.</td>
                  </tr>
                  <tr>
                    <td>A warranty that means something</td>
                    <td>Every Atlas product carries a 1 to 3 year manufacturer warranty. If it fails, the process is clear and the coverage is real.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section" id="next">
          <div className="container">
            <div className="section-title">Next Steps</div>
            <div className="cards">
              <div className="card">
                <h3>Explore Products</h3>
                <p>Browse the full lineup of Atlas monitors and motherboards.</p>
                <Link className="cta" href="/all-products">All Products</Link>
              </div>
              <div className="card">
                <h3>Need Support?</h3>
                <p>Talk to Atlas service teams for warranty and setup help.</p>
                <Link className="cta ghost" href="/support">Support Center</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="/seo.js" strategy="afterInteractive" />
      <Script src="/image-optimizer.js" strategy="afterInteractive" />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  )
}
