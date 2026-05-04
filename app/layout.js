import "../styles.css"
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL("https://www.atlascomparts.com"),
  icons: { icon: "/favicon.ico" },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f131c",
}

const FONT_URL = "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Oxanium:wght@400;500;600;700&display=swap"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ab-computer-bd-53afe-default-rtdb.asia-southeast1.firebasedatabase.app" />
        <link rel="preload" as="style" href={FONT_URL} />
        <noscript><link rel="stylesheet" href={FONT_URL} /></noscript>
      </head>
      <body>
        {/* Inline: make body visible after 2 rAFs (before site.js/hydration) + load fonts async */}
        <script dangerouslySetInnerHTML={{__html:`(function(){var r=requestAnimationFrame;r(function(){r(function(){document.body.classList.add('page-loaded');})});var l=document.createElement('link');l.rel='stylesheet';l.href='${FONT_URL}';document.head.appendChild(l);})();`}} />
        {children}
        <Script src="/sw-register.js" strategy="afterInteractive" />
        <Script src="/indexnow.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
