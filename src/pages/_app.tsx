import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider >
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  )
}
