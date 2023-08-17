import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='kr'>
      <Head>
        {(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script data-project-id="vPVOlitGO5mnZ8Wg8Fd7kiDI1OfkvNw3QyQlzyAV" src="https://snippet.meticulous.ai/v1/meticulous.js" />
        )}
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', 'GTM-NF8BBQ69');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF8BBQ69"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
      </body>
    </Html>
  )
}
