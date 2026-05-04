import SupportClient from './SupportClient'

export const metadata = {
  title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
  description: 'Contact Atlas support in Bangladesh. Warranty claims, RMA, and Dhaka service center for RAVEN motherboards and monitors. 6-hour response, 1–3 year warranty.',
  keywords: 'Atlas support Bangladesh, Atlas customer support Bangladesh, Atlas contact Bangladesh, Atlas helpdesk Bangladesh, Atlas support center Bangladesh, contact Atlas hardware Bangladesh, Atlas support email Bangladesh, Atlas support phone Bangladesh, Atlas 24/7 support Bangladesh, Atlas ticket support Bangladesh, Atlas warranty Bangladesh, Atlas warranty claim Bangladesh, Atlas 1 year warranty Bangladesh, Atlas 3 year warranty Bangladesh, Atlas monitor warranty Bangladesh, Atlas motherboard warranty Bangladesh, Atlas manufacturer warranty claim, hardware warranty Bangladesh, monitor warranty claim Bangladesh, motherboard warranty claim Bangladesh, Atlas RMA Bangladesh, Atlas RMA process Bangladesh, Atlas repair service Bangladesh, Atlas hardware repair Dhaka, monitor repair Bangladesh, motherboard repair Bangladesh, RMA motherboard Bangladesh, RMA monitor Bangladesh, Atlas defective product return Bangladesh, Atlas Dhaka service center, Atlas service center Bangladesh, Atlas hardware service Dhaka, PC hardware service center Dhaka, computer hardware repair Dhaka, monitor service center Bangladesh, motherboard service center Bangladesh, Atlas 6 hour response Bangladesh, Atlas fast support Bangladesh, Atlas support response time, Atlas after sales service Bangladesh, Atlas post purchase support, Atlas RAVEN motherboard support, Atlas LED monitor support, Atlas IPS monitor support, Atlas ATS24IFB100 support, Atlas B450M motherboard support, Atlas H311 motherboard support, AB Computer Atlas support Bangladesh, Atlas authorized support Bangladesh, Atlas comparts support Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/support' },
  openGraph: {
    title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
    description: 'Contact Atlas support in Bangladesh. Warranty claims, RMA, and Dhaka service center for RAVEN motherboards and monitors. 6-hour response, 1–3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
    description: 'Contact Atlas support in Bangladesh. Warranty claims, RMA, and Dhaka service center for RAVEN motherboards and monitors. 6-hour response, 1–3 year warranty.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function SupportPage() {
  return <SupportClient />
}
