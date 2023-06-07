'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5'
  }
}

const fonts ={
  fonts: {
    body: 'Tahoma',
    heading: "Georgia, serif, Courier New",
    mono: "Menlo, monospace",
  }
}


const theme = extendTheme({ colors, fonts, })

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}