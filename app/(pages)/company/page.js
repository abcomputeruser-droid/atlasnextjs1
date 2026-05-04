import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import styles from '../../../styles/pages/company.module.css'

export const metadata = {
  title: 'Atlas Company – PC Hardware Manufacturer & Distributor | Bangladesh',
  description: 'Atlas designs and distributes reliable motherboards and monitors across Bangladesh. Manufacturing-grade quality control, retail & corporate distribution, and Dhaka service center.',
  keywords: 'Atlas hardware company Bangladesh, Atlas PC hardware brand Bangladesh, Atlas manufacturer Bangladesh, Atlas hardware distributor Bangladesh, Atlas comparts Bangladesh, Atlas company Dhaka, Atlas brand Bangladesh 2020, Atlas hardware Bangladesh founded 2020, Atlas technology Bangladesh, Atlas computer hardware Bangladesh, Atlas motherboard monitor brand Bangladesh, Atlas RAVEN motherboard manufacturer, Atlas LED monitor manufacturer Bangladesh, PC hardware manufacturer Bangladesh, computer monitor brand Bangladesh, motherboard brand Bangladesh, hardware company Bangladesh Dhaka, Atlas authorized distributor Bangladesh, AB Computer Atlas distributor Bangladesh, Atlas retail Bangladesh, Atlas corporate supply Bangladesh, buy Atlas hardware Bangladesh, Atlas hardware shop Bangladesh, Atlas hardware dealer Bangladesh, computer hardware dealer Dhaka, PC parts distributor Bangladesh, Atlas hardware warranty Bangladesh, 1 year warranty monitor Bangladesh, 3 year warranty motherboard Bangladesh, quality PC hardware Bangladesh, reliable computer hardware Bangladesh, hardware quality control Bangladesh, Atlas service center Bangladesh, Atlas warranty service Dhaka, Atlas after-sales support Bangladesh, office PC hardware Bangladesh, student PC hardware Bangladesh, school computer hardware Bangladesh, CCTV setup monitor Bangladesh, small business PC hardware Bangladesh, affordable PC hardware Bangladesh, budget hardware brand Bangladesh, hardware for offices Bangladesh, hardware for shops Bangladesh, computer setup Bangladesh, best budget monitor brand Bangladesh, best budget motherboard brand Bangladesh, reliable hardware brand Bangladesh, trusted PC hardware brand Bangladesh, Atlas IPS monitor brand Bangladesh, Atlas AM4 motherboard brand Bangladesh, Atlas Intel motherboard Bangladesh, Atlas AMD motherboard Bangladesh, local hardware brand Bangladesh, Bangladesh PC hardware manufacturer',
  alternates: { canonical: 'https://www.atlascomparts.com/company' },
  openGraph: {
    title: 'Atlas Company – PC Hardware Manufacturer & Distributor | Bangladesh',
    description: 'Atlas designs and distributes reliable motherboards and monitors across Bangladesh. Manufacturing-grade quality control, retail & corporate distribution, and Dhaka service center.',
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Company – PC Hardware Manufacturer & Distributor | Bangladesh',
    description: 'Atlas designs and distributes reliable motherboards and monitors across Bangladesh. Manufacturing-grade quality control, retail & corporate distribution, and Dhaka service center.',
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
  },
}

export default function CompanyPage() {
  return (
    <>
      <MotionBg />
      <Nav tagline="Company" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className="hero hero-single" id="company-hero">
          <div className="container hero-single-inner">
            <div className="hero-text">
              <p className="eyebrow">Company · Founded 2020</p>
              <h1>Built on Precision.</h1>
              <p>Motherboards and monitors built for real workloads. Intel 2nd&ndash;9th gen, AMD Ryzen 1000&ndash;5600, displays 17&ndash;24 inches. Warranty included.</p>
              <div className="hero-actions">
                <a className="cta" href="#story">Our Story</a>
                <Link className="cta ghost" href="/support">Support Center</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={`section company-section ${styles.storySection}`} id="story">
          <div className={styles.storyLines} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop1}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop2}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop3}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop4}`} aria-hidden="true"></div>
          <div className={`${styles.storyDrop} ${styles.storyDrop5}`} aria-hidden="true"></div>
          <div className="container">
            <div className="company-content">
              <p className="eyebrow">Brand Story</p>
              <h2>Born from a simple need. Built for the real world.</h2>
              <p>Atlas didn&apos;t start with grand ambitions. It started with a question: why should getting reliable hardware be this complicated? The answer became the brand.</p>
              <div className={styles.storySplit}>
                <div className={styles.storyBlock}>
                  <p>Monitors from 17 to 24 inches now sit on desks in schools, shops, and server rooms across Bangladesh, with IPS and VA panels built for daily use and HDMI and VGA on every display.</p>
                  <ul className="company-list">
                    <li>IPS and VA panels across the monitor range</li>
                    <li>HDMI and VGA connectivity on every display</li>
                    <li>60&ndash;100Hz refresh rate options</li>
                  </ul>
                </div>
                <div className={styles.storyBlock}>
                  <p>The RAVEN motherboard series covers the builds that actually exist in the real world: Intel 2nd through 9th gen, and AMD Ryzen all the way from the 1000 series to the 5600. Four boards, two ecosystems, years of platform support.</p>
                  <ul className="company-list">
                    <li>Intel 2nd&ndash;9th gen: H61 V3, H81 V3, H311 V1</li>
                    <li>AMD Ryzen 1000&ndash;5600: B450M Frost</li>
                    <li>LGA and AM4 socket support</li>
                  </ul>
                </div>
              </div>
              <p className={styles.storyFooter}>1 to 3 year warranty on all products.</p>
            </div>
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="container">
            <div className="section-title">Atlas at a Glance</div>
            <div className="overview-stats">
              <div className="stat-card">
                <span className="stat-value">Intel 2nd&ndash;9th</span>
                <span className="stat-label">Core Gen Coverage</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">Ryzen 1000&ndash;5600</span>
                <span className="stat-label">AMD AM4 Coverage</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">17&ndash;24&quot;</span>
                <span className="stat-label">Monitor Range</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">1&ndash;3 Year</span>
                <span className="stat-label">Manufacturer Warranty</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">4 Boards</span>
                <span className="stat-label">H61 V3 &middot; H81 V3 &middot; H311 V1 &middot; B450M Frost</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="offerings">
          <div className="container">
            <div className="section-title">What We Build</div>
            <div className="cards">
              <div className="card">
                <h3>RAVEN Motherboards</h3>
                <p>Four board models covering Intel 2nd through 9th gen and AMD Ryzen 1000 through 5600. H61 V3 and H81 V3 handle budget Intel builds on LGA1155. H311 V1 extends support to Intel 6th&ndash;9th gen with DDR4 and M.2. B450M Frost brings full AM4 support for the entire Ryzen lineup up to the 5600.</p>
                <p className="muted">H61 V3 &middot; H81 V3 &middot; H311 V1 &middot; B450M Frost. LGA1155, LGA1150, AM4.</p>
              </div>
              <div className="card">
                <h3>Monitors</h3>
                <p>LED displays from 17 to 24 inches built for daily use in offices, classrooms, shops, and CCTV setups. IPS panels for colour accuracy and VA for contrast-heavy environments. Every display ships with both HDMI and VGA so it connects to anything.</p>
                <p className="muted">60&ndash;100Hz. IPS and VA. HDMI and VGA standard.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section company-section" id="quality">
          <div className="container">
            <div className="company-content">
              <p className="eyebrow">Quality and Manufacturing</p>
              <h2>Controlled production, verified results.</h2>
              <p>Atlas hardware is manufactured under controlled production standards with batch-level traceability from assembly through shipment. Every board and display goes through a structured process before it leaves the facility.</p>
              <p>Motherboards are tested for POST stability, slot integrity, and thermal behaviour under load. Monitors go through panel calibration, backlight uniformity checks, and port verification before packaging.</p>
              <ul className="company-list">
                <li>Multi-stage assembly and inspection checkpoints</li>
                <li>POST and slot integrity testing on every motherboard</li>
                <li>Panel calibration and backlight checks on every monitor</li>
                <li>Final QC sign-off before packaging and shipment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`section build ${styles.distribution}`} id="distribution">
          <div className={`${styles.distOrb} ${styles.distOrbA}`} aria-hidden="true"></div>
          <div className={`${styles.distOrb} ${styles.distOrbB}`} aria-hidden="true"></div>
          <div className="container build-grid">
            <div>
              <h2>Distribution and Availability</h2>
              <p>Atlas products are available through authorized retailers and distribution partners across Bangladesh. AB Computer has been the official distributor since 2020, handling retail stock, warranty processing, and corporate supply.</p>
              <p>Corporate and institutional buyers can place bulk orders directly through the distribution channel. Walk-in customers can find Atlas hardware at authorized retail outlets across Dhaka and beyond.</p>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="value">AB Computer</div>
                <div className="label">Official distributor since 2020</div>
              </div>
              <div className="stat">
                <div className="value">Corporate</div>
                <div className="label">Bulk and institutional orders</div>
              </div>
              <div className="stat">
                <div className="value">Dhaka</div>
                <div className="label">Primary service and retail hub</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="principles">
          <div className="container">
            <div className="section-title">Our Principles</div>
            <div className="cards">
              <div className="card">
                <p className="eyebrow">No Compromise on Access</p>
                <h3>Every setup deserves hardware that works.</h3>
                <p>Atlas products are built for the student setting up their first desk, the shop owner running a CCTV rack, the school lab replacing ageing machines, and the small office that just needs displays that turn on every morning without drama. Real buyers with real workloads.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Honesty Over Hype</p>
                <h3>We say what it does. Nothing more.</h3>
                <p>No gaming branding on a 60Hz office panel. No inflated specs on a budget chipset. Atlas product listings state panel type, ports, socket, supported generations, refresh rate, and warranty. Buyers know what they are getting before the box is opened.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Built to Last Daily Use</p>
                <h3>Reliability is the only feature that matters.</h3>
                <p>Eight hours a day, five days a week, year after year. Stable thermals on the RAVEN boards, solid port construction on every display, and panels calibrated for consistent output over time. Atlas hardware is bought once and expected to last.</p>
              </div>
              <div className="card">
                <p className="eyebrow">Backed After the Sale</p>
                <h3>The warranty is a real promise.</h3>
                <p>Every Atlas product carries a 1 to 3 year manufacturer warranty processed through the official distribution channel. Service requests are handled through AB Computer and the Atlas support process. The warranty covers the unit, not just the paperwork.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="next">
          <div className="container">
            <div className="section-title">Next Steps</div>
            <div className="cards">
              <div className="card">
                <h3>Support and Warranty</h3>
                <p>Submit a service request, check warranty eligibility, or get help with diagnostics for any Atlas product.</p>
                <Link className="cta" href="/support">Support Center</Link>
              </div>
              <div className="card">
                <h3>Explore Products</h3>
                <p>Browse the full RAVEN motherboard lineup and the complete monitor range, with specs and compatibility details.</p>
                <Link className="cta ghost" href="/all-products">All Products</Link>
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
