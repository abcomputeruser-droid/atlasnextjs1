import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import monitorData from '../../../public/monitor.json'

export const metadata = {
  title: 'Atlas Monitors – Displays Built for Daily Use | atlascomparts.com',
  description: 'Nine Atlas monitor models from 17 to 24 inches with HDMI and VGA on every display. IPS and VA panels, 60–100Hz refresh rates, 1–3 year warranty. Available in Bangladesh.',
  keywords: 'Atlas monitors Bangladesh, 24 inch IPS monitor, 100Hz monitor Bangladesh, Full HD monitor, HDMI VGA monitor Bangladesh, buy monitor Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/monitors' },
  openGraph: {
    title: 'Atlas Monitors – Displays Built for Daily Use | atlascomparts.com',
    description: 'Nine Atlas monitor models from 17 to 24 inches with HDMI and VGA on every display. IPS and VA panels, 60–100Hz refresh rates.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Monitors – Displays Built for Daily Use | atlascomparts.com',
    description: 'Nine Atlas monitor models from 17 to 24 inches with HDMI and VGA on every display. IPS and VA panels, 60–100Hz refresh rates.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function MonitorsPage() {
  const { hero, overview, productsTitle, products, specs } = monitorData

  return (
    <>
      <MotionBg />
      <Nav tagline="Monitors" navType="site" btnText="All Products" btnHref="/all-products" />
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
                <a className="cta" href="#products">View Monitors</a>
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
                      <span className="product-card-tag">Monitor</span>
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
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  )
}
