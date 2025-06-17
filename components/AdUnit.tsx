'use client'
import { useEffect } from 'react';

export default function AdUnit() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const adSlot = process.env.AD_SLOT;
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
