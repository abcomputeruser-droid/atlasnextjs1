import Link from 'next/link'
import Script from 'next/script'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import MotionBg from '../../../components/MotionBg'

export const metadata = {
  title: 'Terms & Conditions | Atlas Hardware – atlascomparts.com',
  description: "Review the terms and conditions for using Atlas Hardware's website, products, and services at atlascomparts.com.",
  alternates: { canonical: 'https://www.atlascomparts.com/terms' },
  openGraph: {
    title: 'Terms & Conditions | Atlas Hardware – atlascomparts.com',
    description: "Review the terms and conditions for using Atlas Hardware's website, products, and services at atlascomparts.com.",
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Atlas Hardware – atlascomparts.com',
    description: "Review the terms and conditions for using Atlas Hardware's website, products, and services at atlascomparts.com.",
    images: ['/assets/images/products/raven-b450m-frost-main.png'],
  },
}

export default function TermsConditionsPage() {
  return (
    <>
      <MotionBg />
      <Nav tagline="Terms &amp; Conditions" navType="site" btnText="Home" btnHref="/" />
      <main>
        <section className="hero hero-single">
          <div className="container hero-single-inner">
            <div className="hero-text">
              <p className="eyebrow">Terms &amp; Conditions</p>
              <h1>Clear terms for using Atlas products and services.</h1>
              <p>Last Updated: April 13, 2026</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="card">
              <p>Welcome to ATLAS. By accessing or using our website, products, or services, you agree to be bound by the following Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use the ATLAS website.</p>

              <h3>1. About ATLAS</h3>
              <p>ATLAS is a brand focused on providing reliable computer hardware and related technology products. All information, products, and services on this website are provided for general use and business purposes.</p>

              <h3>2. Website Use</h3>
              <p>By using this website, you agree that:</p>
              <ul className="company-list">
                <li>You will use the website only for lawful purposes</li>
                <li>You will not attempt to damage, hack, or disrupt the website</li>
                <li>You will not misuse content, images, or branding</li>
              </ul>
              <p>Unauthorized use of this website may give rise to legal action.</p>

              <h3>3. Product Information</h3>
              <ul className="company-list">
                <li>Product images are for illustration purposes only</li>
                <li>Specifications, availability, and pricing may change without prior notice</li>
                <li>ATLAS reserves the right to correct any errors or inaccuracies</li>
              </ul>
              <p>We strive to keep all information accurate and updated, but we do not guarantee complete accuracy at all times.</p>

              <h3>4. Pricing &amp; Availability</h3>
              <ul className="company-list">
                <li>All prices are subject to change without notice</li>
                <li>Product availability may vary by region or distributor</li>
                <li>Bulk or corporate pricing may require separate confirmation</li>
              </ul>
              <p>ATLAS reserves the right to cancel or refuse any order if required.</p>

              <h3>5. Orders &amp; Payments</h3>
              <ul className="company-list">
                <li>Orders are subject to confirmation and availability</li>
                <li>Payment methods and terms may vary depending on region or partner</li>
                <li>ATLAS is not responsible for payment delays caused by third-party gateways</li>
                <li>Once an order is confirmed, cancellation or modification may not be possible</li>
              </ul>

              <h3>6. Warranty &amp; Support</h3>
              <ul className="company-list">
                <li>Warranty terms vary by product — 1 to 3 years depending on the item</li>
                <li>Warranty does not cover physical damage, misuse, or unauthorized repairs</li>
                <li>Proof of purchase is required for warranty claims</li>
                <li>For service or warranty support, customers must follow ATLAS&apos;s official service process</li>
              </ul>
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
