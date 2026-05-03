import SupportClient from './SupportClient'

export const metadata = {
  title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
  description: 'Contact Atlas support in Bangladesh — phone, email, and Dhaka service center. 1 to 3 year warranty, 6-hour response, RMA process, and 24/7 ticket intake for motherboards and monitors.',
  keywords: 'Atlas support Bangladesh, Atlas warranty service, Atlas RMA Bangladesh, Atlas Dhaka service center, Atlas hardware support, motherboard warranty Bangladesh, monitor warranty Bangladesh',
  alternates: { canonical: 'https://www.atlascomparts.com/support' },
  openGraph: {
    title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
    description: 'Contact Atlas support in Bangladesh — phone, email, and Dhaka service center. 1 to 3 year warranty, 6-hour response, RMA process.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Support – Warranty, RMA & Contact | Dhaka Service Center',
    description: 'Contact Atlas support in Bangladesh — phone, email, and Dhaka service center. 1 to 3 year warranty, 6-hour response, RMA process.',
    images: ['/assets/images/products/ats22ifw100-main.png'],
  },
}

export default function SupportPage() {
  return <SupportClient />
}
