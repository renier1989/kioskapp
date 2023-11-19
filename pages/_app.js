
import { KioskProvider } from '@/context/KioskProvider'
import '@/styles/globals.css'
import "../styles/animations.css"

export default function App({ Component, pageProps }) {
  return <KioskProvider>
    <Component {...pageProps} />
  </KioskProvider>
}
