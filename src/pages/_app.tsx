import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import * as gtag from '../../lib/gtag';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* GA 설정 시작 */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" async src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `
        }}
      />

      {/* GA 설정 끝 */}
      <SWRConfig>
        <NextUIProvider >
          <Component {...pageProps} />
          <Analytics />
        </NextUIProvider>
      </SWRConfig>
    </>

  )
}
