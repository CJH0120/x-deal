import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import * as gtag from '../../lib/gtag';
import { useRouter } from 'next/router';
import Script from 'next/script';

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
  useEffect(() => {
    const naverPublic = document.getElementById("naver_public");
    const script2 = document.createElement('script');
    script2.text = `
     if (!wcs_add) var wcs_add = {};
     wcs_add["wa"] = "197dc11c6790ed0";
     if (!_nasa) var _nasa = {};
     if (window.wcs) { wcs.inflow();         
     wcs_do(_nasa); } var _nasa = {}; // 초기화 구문
     `;
  }, [router.events])
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
      <NextUIProvider >
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </>

  )
}
