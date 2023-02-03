import AlwaysHead from '@/components/AlwaysHead'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AlwaysHead />
      <Component {...pageProps} />
    </>
  )
}
