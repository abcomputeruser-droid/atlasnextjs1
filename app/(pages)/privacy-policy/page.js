import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'

export const metadata = {
  title: 'Privacy Policy | Atlas Hardware – atlascomparts.com',
  description: "Read Atlas Hardware's privacy policy. Learn how we collect, use, and protect your personal data on atlascomparts.com.",
  alternates: { canonical: 'https://www.atlascomparts.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | Atlas Hardware – atlascomparts.com',
    description: "Read Atlas Hardware's privacy policy. Learn how we collect, use, and protect your personal data on atlascomparts.com.",
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Atlas Hardware – atlascomparts.com',
    description: "Read Atlas Hardware's privacy policy. Learn how we collect, use, and protect your personal data on atlascomparts.com.",
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <MotionBg />
      <Nav tagline="Privacy Policy" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className="hero hero-single">
          <div className="container hero-single-inner">
            <div className="hero-text">
              <p className="eyebrow">Privacy Policy</p>
              <h1>We protect your data and respect your privacy.</h1>
              <p>Last Updated: April 13, 2026</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card">
              <p>At ATLAS, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or use our services.</p>
              <p>By accessing or using the ATLAS website, you agree to the terms of this Privacy Policy.</p>

              <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <p><strong>a) Personal Information</strong></p>
              <p>When you contact us, place an order, or fill out a form, we may collect:</p>
              <ul className="company-list">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Shipping or billing address</li>
              </ul>

              <p><strong>b) Non-Personal Information</strong></p>
              <p>We may automatically collect:</p>
              <ul className="company-list">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on our website</li>
              </ul>
              <p>This data helps us improve website performance and user experience.</p>

              <h3>2. How We Use Your Information</h3>
              <p>We use collected information to:</p>
              <ul className="company-list">
                <li>Process inquiries and orders</li>
                <li>Provide customer support</li>
                <li>Improve products, services, and website usability</li>
                <li>Communicate updates, offers, or important notices</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p>ATLAS does not sell, trade, or rent your personal data to third parties.</p>

              <h3>3. Cookies &amp; Tracking Technologies</h3>
              <p>Our website may use cookies to:</p>
              <ul className="company-list">
                <li>Remember user preferences</li>
                <li>Analyze website traffic</li>
                <li>Improve loading speed and functionality</li>
              </ul>
              <p>You can disable cookies through your browser settings, but some features may not function properly.</p>

              <h3>4. Data Security</h3>
              <p>We take appropriate technical and organizational measures to protect your information against:</p>
              <ul className="company-list">
                <li>Unauthorized access</li>
                <li>Data loss</li>
                <li>Misuse or alteration</li>
              </ul>
              <p>However, no online data transmission is 100% secure. We continuously work to improve our security practices.</p>

              <h3>5. Third-Party Services</h3>
              <p>Our website may include links to third-party websites (such as payment gateways or social platforms). ATLAS is not responsible for the privacy practices or content of those external sites.</p>
              <p>We encourage users to read their privacy policies separately.</p>

              <h3>6. Data Retention</h3>
              <p>We retain personal data only as long as necessary:</p>
              <ul className="company-list">
                <li>To fulfill business purposes</li>
                <li>To comply with legal and regulatory requirements</li>
              </ul>
              <p>Once no longer required, data is securely deleted or anonymized.</p>

              <h3>7. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="company-list">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent for data usage</li>
              </ul>
              <p>To exercise these rights, please contact us using the details below.</p>

              <h3>8. Children&apos;s Privacy</h3>
              <p>ATLAS does not knowingly collect personal information from individuals under the age of 13. If such data is discovered, it will be deleted immediately.</p>

              <h3>9. Changes to This Policy</h3>
              <p>ATLAS may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              <p>We encourage users to review this page periodically.</p>
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
