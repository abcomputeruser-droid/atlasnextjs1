import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MotionBg from '../components/MotionBg'

export const metadata = {
  title: 'Atlas - Page Not Found',
  description: 'The page you requested could not be found on Atlas.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <MotionBg />
      <Nav tagline="Comparts" navType="site" btnText="Back Home" btnHref="/" brandHref="/" />
      <main>
        <section className="section error-shell">
          <div className="container error-grid">
            <div className="error-panel">
              <div className="error-copy">
                <span className="error-badge">404 Error</span>
                <div className="error-code">404</div>
                <h1>The page you requested is off the map.</h1>
                <p className="error-note">The link may be outdated, the page may have moved, or the URL may have been entered incorrectly. Use the routes below to get back to the current Atlas catalog.</p>
                <div className="error-actions">
                  <Link className="cta" href="/">Go to Products</Link>
                  <Link className="cta ghost" href="/all-products">Browse All Products</Link>
                </div>
              </div>
            </div>

            <aside className="error-links" aria-labelledby="helpful-links-title">
              <p className="eyebrow">Helpful Routes</p>
              <h2 id="helpful-links-title">Quick ways back in.</h2>
              <p>These links match the current UI and product navigation.</p>
              <ul>
                <li>
                  <Link href="/motherboards">
                    <strong>Motherboards</strong>
                    Compare Atlas board options and specs.
                  </Link>
                </li>
                <li>
                  <Link href="/monitors">
                    <strong>Monitors</strong>
                    Review monitor lines, pricing, and detail pages.
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <strong>Support</strong>
                    Reach Atlas support and service information.
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
