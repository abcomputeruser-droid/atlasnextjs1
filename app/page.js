import HomeClient from './HomeClient'

export const metadata = {
  title: 'Atlas – Motherboards & Monitors for Real Workloads | Bangladesh',
  description: 'Discover Atlas hardware in Bangladesh. RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 17-24 inch monitors with HDMI and VGA on every display. 1 to 3 year warranty.',
  keywords: 'Atlas motherboard Bangladesh, Atlas monitor Bangladesh, buy motherboard Bangladesh, buy monitor Bangladesh, PC hardware Bangladesh, computer components Bangladesh, affordable motherboard, Intel AMD motherboard',
  alternates: { canonical: 'https://www.atlascomparts.com/' },
  openGraph: {
    title: 'Atlas – Motherboards & Monitors for Real Workloads | Bangladesh',
    description: 'Discover Atlas hardware in Bangladesh. RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 17-24 inch monitors with HDMI and VGA on every display. 1 to 3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas – Motherboards & Monitors for Real Workloads | Bangladesh',
    description: 'Discover Atlas hardware in Bangladesh. RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 17-24 inch monitors with HDMI and VGA on every display. 1 to 3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function HomePage() {
  return <HomeClient />
}
