import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'
import { PRODUCTS } from '../../../lib/products-data'

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = PRODUCTS[slug]
  if (!p) return {}
  return {
    title: p.meta.title,
    description: p.meta.description,
    keywords: p.meta.keywords,
    alternates: { canonical: p.meta.canonical },
    openGraph: {
      title: p.meta.title,
      description: p.meta.description,
      images: [p.meta.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: p.meta.title,
      description: p.meta.description,
      images: [p.meta.image],
    },
  }
}

export default async function ProductPage({ params }) {
  const { slug } = await params
  const p = PRODUCTS[slug]
  if (!p) notFound()

  return (
    <>
      <MotionBg />
      <Nav
        tagline={p.eyebrow}
        navType="product"
        btnText={p.navBtnText}
        btnHref={p.navBtnHref}
      />
      <main>
        <section className="hero product-hero" id="top">
          <div className="container product-hero-grid">
            <div className="product-hero-content">
              <p className="eyebrow">{p.eyebrow}</p>
              <h1>{p.title}</h1>
              <p>{p.subtitle}</p>
              <div className="hero-chips">
                {p.chips.map((chip, i) => (
                  <div key={i} className="chip">
                    <span className="chip-value">{chip.value}</span>
                    <span className="chip-label">{chip.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-actions">
                <a className="cta" href="#overview">Explore Overview</a>
                <a className="cta ghost" href="#specs">Full Specs</a>
              </div>
            </div>
            <div className="product-hero-media">
              <div className="product-hero-card">
                <img
                  src={p.image}
                  alt={p.title}
                  title={p.title}
                />
                <div className="hero-float">
                  {p.heroFloat.map((f, i) => (
                    <span key={i}>{f}</span>
                  ))}
                </div>
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
                <p>{p.overviewBody}</p>
              </div>
              <div className="overview-stats">
                {p.overviewStats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cards">
              {p.overviewCards.map((card, i) => (
                <div key={i} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-gallery" id="gallery">
          <div className="container">
            <div className="section-title">Gallery</div>
            <div className="gallery-grid">
              {p.gallery.map((item, i) => (
                <figure key={i} className={`gallery-item${item.cls ? ` ${item.cls}` : ''}`}>
                  <img src={item.src} alt={item.alt} title={item.alt} loading="lazy" />
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section product-specs" id="specs">
          <div className="container">
            <div className="section-title">Specifications</div>
            <div className="specs-grid">
              {p.specCards.map((card, i) => (
                <div key={i} className="spec-card">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="specs-table">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {p.specTable.map(([feature, details], i) => (
                    <tr key={i}>
                      <td>{feature}</td>
                      <td>{details}</td>
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
