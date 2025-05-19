'use client'

import { usePathname, useSearchParams } from 'next/navigation' // Add this import
import { Suspense, useEffect } from 'react'
import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    window.plausible?.('pageview', { u: url })
  }, [pathname, searchParams])

  return null
}

export default function PlausibleTracker() {
  if (!siteMetadata.analytics?.plausibleAnalytics?.plausibleDataDomain) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        data-domain={siteMetadata.analytics.plausibleAnalytics.plausibleDataDomain}
        src="https://plausible.sorakobra.com/js/script.js"
      />
      <Suspense fallback={null}>
        <Tracker />
      </Suspense>
    </>
  )
}