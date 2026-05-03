import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Atlas</h4>
          <p>Hardware built for dependable performance.</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/company">Company</Link>
          <Link href="/about">About Atlas</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link href="/support">Support</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Atlas. All Rights Reserved.</div>
    </footer>
  )
}
