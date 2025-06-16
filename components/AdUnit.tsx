'use client'
import { useEffect } from 'react'

export default function AdUnit({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      // Trigger rendering of the ad unit
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('AdSense failed to render ad unit:', e)
    }
  }, [slot])

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={process.env.AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}