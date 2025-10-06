'use client'
import Script from 'next/script'

export default function AdSense() {
  return (
    <Script 
      strategy="afterInteractive"
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      onError={(e) => console.error('AdSense failed to load', e)}
    />
  )
}