import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import motherboardData from '../../../public/motherboard.json'

export const metadata = {
  title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
  description: 'Four Atlas RAVEN motherboards covering Intel 2nd–9th Gen and AMD Ryzen 1000–5600 (AM4). DDR3/DDR4, M.2 NVMe, Micro-ATX and ATX. Available in Bangladesh.',
  keywords: 'Atlas Raven motherboard Bangladesh, H311 DDR4 motherboard, B450M AM4 motherboard, H61 DDR3 motherboard, H81 ATX motherboard, Intel Ryzen motherboard Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/motherboards' },
  openGraph: {
    title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
    description: 'Four Atlas RAVEN motherboards covering Intel 2nd–9th Gen and AMD Ryzen 1000–5600 (AM4). DDR3/DDR4, M.2 NVMe.',
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas RAVEN Motherboards – Intel & AMD AM4 | atlascomparts.com',
    description: 'Four Atlas RAVEN motherboards covering Intel 2nd–9th Gen and AMD Ryzen 1000–5600 (AM4). DDR3/DDR4, M.2 NVMe.',
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
            <div className="product-category-hero-media">
              <img
                src={`/${hero.image}`}
                alt="Atlas RAVEN Motherboard"
                title="Atlas RAVEN Motherboard"
              />
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
