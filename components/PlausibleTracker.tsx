'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function PlausibleTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track pageviews on route changes
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    window.plausible?.('pageview', { u: url })
  }, [pathname, searchParams])

  if (!siteMetadata.analytics?.plausibleAnalytics?.plausibleDataDomain) {
    return null
  }

  return (
    <Script
      strategy="afterInteractive"
      data-domain={siteMetadata.analytics.plausibleAnalytics.plausibleDataDomain}
      src="https://plausible.sorakobra.com/js/script.js"
    />
  )
}