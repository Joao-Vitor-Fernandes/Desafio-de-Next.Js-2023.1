// a raiz do projeto
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '@/styles/theme'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // para pegar o theme da pasta styles
    <ChakraProvider  resetCSS theme={theme}> 
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
