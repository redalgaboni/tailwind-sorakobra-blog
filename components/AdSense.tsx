'use client'
import Script from 'next/script'

export default function AdSense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const scriptSrc = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;

return (
    <Script 
      strategy="afterInteractive" 
      src={scriptSrc}
      onError={(e) => console.error('AdSense failed to load', e)}
      crossOrigin="anonymous" 
    />
  )
}