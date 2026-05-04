import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import motherboardData from '../../../public/motherboard.json'

export const metadata = {
  title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
  description: 'Shop Atlas RAVEN motherboards in Bangladesh. H61, H81, H311 for Intel 2nd–9th Gen & B450M for Ryzen 1000–5600. DDR3/DDR4, M.2 NVMe, budget to mid-range.',
  keywords: 'Atlas RAVEN motherboards Bangladesh, Atlas motherboard category Bangladesh, Atlas motherboard lineup Bangladesh, Atlas RAVEN series Bangladesh, Atlas motherboard brand Bangladesh, Atlas hardware motherboard Bangladesh, buy Atlas motherboard Bangladesh, Intel motherboard Bangladesh, Intel LGA1151 motherboard Bangladesh, Intel LGA1150 motherboard Bangladesh, Intel LGA1155 motherboard Bangladesh, Intel 2nd gen motherboard Bangladesh, Intel 3rd gen motherboard Bangladesh, Intel 4th gen motherboard Bangladesh, Intel 6th gen motherboard Bangladesh, Intel 9th gen motherboard Bangladesh, Intel Micro-ATX motherboard Bangladesh, Intel ATX motherboard Bangladesh, H61 motherboard Bangladesh, H81 motherboard Bangladesh, H311 motherboard Bangladesh, AMD AM4 motherboard Bangladesh, AMD Ryzen motherboard Bangladesh, Ryzen 1000 motherboard Bangladesh, Ryzen 3000 motherboard Bangladesh, Ryzen 5600 motherboard Bangladesh, B450M motherboard Bangladesh, AM4 socket motherboard Bangladesh, Micro-ATX AM4 motherboard Bangladesh, DDR3 motherboard Bangladesh, DDR4 motherboard Bangladesh, DDR4 2666MHz motherboard Bangladesh, DDR4 3200MHz OC motherboard Bangladesh, M.2 NVMe motherboard Bangladesh, SATA III motherboard Bangladesh, motherboard with M.2 slot Bangladesh, Gigabit LAN motherboard Bangladesh, USB 3.0 motherboard Bangladesh, HDMI VGA motherboard Bangladesh, HD audio motherboard Bangladesh, PCIe motherboard Bangladesh, budget motherboard Bangladesh, affordable motherboard Bangladesh, office motherboard Bangladesh, student PC motherboard Bangladesh, PC build Bangladesh motherboard, best budget motherboard Bangladesh, entry level motherboard Bangladesh, reliable motherboard Bangladesh, computer shop motherboard Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/motherboards' },
  openGraph: {
    title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
    description: 'Shop Atlas RAVEN motherboards in Bangladesh. H61, H81, H311 for Intel 2nd–9th Gen & B450M for Ryzen 1000–5600. DDR3/DDR4, M.2 NVMe, budget to mid-range.',
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
    description: 'Shop Atlas RAVEN motherboards in Bangladesh. H61, H81, H311 for Intel 2nd–9th Gen & B450M for Ryzen 1000–5600. DDR3/DDR4, M.2 NVMe, budget to mid-range.',
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
  },
}

export default function MotherboardsPage() {
  const { hero, overview, productsTitle, products, specs } = motherboardData

  return (
    <>
      <MotionBg />
      <Nav tagline="Motherboards" navType="site" btnText="All Products" btnHref="/all-products" />
      <main>
        <section className="hero product-category-hero">
          <div className="container product-category-hero-inner">
            <div className="product-category-hero-content">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.title}</h1>
              <p>{hero.subtitle}</p>
              <div className="hero-chips">
                {hero.chips.map((chip, i) => (
                  <div className="chip" key={i}>
                    <span className="chip-value">{chip.value}</span>
                    <span className="chip-label">{chip.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-badges">
                {hero.badges.map((badge, i) => (
                  <span className="hero-badge" key={i}>{badge}</span>
                ))}
              </div>
              <div className="hero-actions">
                <a className="cta" href="#products">View Boards</a>
                <a className="cta ghost" href="#specs">Compare Models</a>
              </div>
            </div>
          </div>
          <div className="hero-gradient" aria-hidden="true"></div>
        </section>

        <section className="section" id="overview">
          <div className="container">
            <div className="section-title">Overview</div>
            <div className="overview-header">
              <div>
                <h2>{overview.title}</h2>
                <p>{overview.body}</p>
              </div>
              <div className="overview-stats">
                {overview.stats.map((stat, i) => (
                  <div className="stat-card" key={i}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cards">
              {overview.cards.map((card, i) => (
                <div className="card" key={i}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-title">{productsTitle}</div>
            <div className="product-grid">
              {products.map((product, i) => {
                const slug = product.url.replace('.html', '')
                return (
                  <article className="product-card" key={i}>
                    <div className="product-card-media">
                      <img
                        src={`/${product.image}`}
                        alt={product.title}
                        title={product.title}
                      />
                      <span className="product-card-tag">Motherboard</span>
                    </div>
                    <div className="product-card-body">
                      <h3>{product.title}</h3>
                      <p className="product-card-summary">{product.subtitle}</p>
                      <ul className="product-card-specs">
                        {product.features.map((f, j) => (
                          <li key={j}>{f}</li>
                        ))}
                      </ul>
                      <div className="product-card-views"></div>
                      <Link className="cta stretched-link" href={`/products/${slug}`}>
                        View Details
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section product-specs" id="specs">
          <div className="container">
            <div className="section-title">{specs.title}</div>
            <div className="specs-table">
              <table>
                <thead>
                  <tr>
                    {specs.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
