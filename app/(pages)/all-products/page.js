import AllProductsClient from './AllProductsClient'

export const metadata = {
  title: 'All Atlas Products – Motherboards & Monitors | Shop Online Bangladesh',
  description: 'Shop all Atlas hardware in Bangladesh - 4 RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 9 monitors from 17 to 24 inches with HDMI and VGA. 1 to 3 year warranty.',
  keywords: 'Atlas products Bangladesh, buy PC hardware Bangladesh, motherboard monitor Bangladesh, Atlas hardware shop, computer components Bangladesh, Intel AMD motherboard, Full HD monitor 100Hz',
  alternates: { canonical: 'https://www.atlascomparts.com/all-products' },
  openGraph: {
    title: 'All Atlas Products – Motherboards & Monitors | Shop Online Bangladesh',
    description: 'Shop all Atlas hardware in Bangladesh - 4 RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 9 monitors from 17 to 24 inches with HDMI and VGA. 1 to 3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Atlas Products – Motherboards & Monitors | Shop Online Bangladesh',
    description: 'Shop all Atlas hardware in Bangladesh - 4 RAVEN motherboards for Intel 2nd-9th gen and Ryzen 1000-5600, plus 9 monitors from 17 to 24 inches with HDMI and VGA. 1 to 3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function AllProductsPage() {
  return <AllProductsClient />
}
