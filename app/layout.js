import "../styles.css"

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ab-computer-bd-53afe-default-rtdb.asia-southeast1.firebasedatabase.app" />
      </head>
      <body>{children}</body>
    </html>
  )
}
