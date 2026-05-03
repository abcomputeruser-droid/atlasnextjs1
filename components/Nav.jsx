import Link from 'next/link'

const SITE_NAV = [
  { label: 'All Products', href: '/all-products' },
  { label: 'Motherboards', href: '/motherboards' },
  { label: 'Monitors', href: '/monitors' },
  { label: 'Company', href: '/company' },
  { label: 'About', href: '/about' },
  { label: 'Support', href: '/support' },
]

const PRODUCT_NAV = [
  { label: 'Overview', href: '#overview' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specs', href: '#specs' },
]

export default function Nav({ tagline = '', navType = 'site', btnText = 'All Products', btnHref = '/all-products', brandHref = '/' }) {
  const items = navType === 'product' ? PRODUCT_NAV : navType === 'site' ? SITE_NAV : []
  const innerClass = `header-inner${navType === 'home' ? ' header-inner--home' : ''}`
  return (
    <header className="site-header">
      <div className={`container ${innerClass}`}>
        <Link className="brand" href={brandHref}>
          <span className="brand-mark">
            <img src="/assets/images/brand/atlas-logo.svg" alt="Atlas logo" title="Atlas logo" />
          </span>
          <div>
            <p className="brand-name">Atlas</p>
            <p className="brand-tagline">{tagline}</p>
          </div>
        </Link>
        {items.length > 0 && (
          <nav className="nav">
            {items.map(item => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        )}
        <Link className="menu-btn" href={btnHref}>{btnText}</Link>
      </div>
    </header>
  )
}
