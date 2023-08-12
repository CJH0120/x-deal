import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='kr'>
      <Head>
        {(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview') && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script data-project-id="vPVOlitGO5mnZ8Wg8Fd7kiDI1OfkvNw3QyQlzyAV" src="https://snippet.meticulous.ai/v1/meticulous.js" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
