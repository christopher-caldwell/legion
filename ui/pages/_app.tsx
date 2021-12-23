import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeOptions } from '@mui/material'
import { ToolkitProvider, WhichThemeProvider, ThemeProvider, Footer, HeaderProps } from '@caldwell619/component-toolkit'
import { RecoilRoot } from 'recoil'

import '../styles/index.css'
import { defaultSeo } from '../constants/seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToolkitProvider headerConfig={headerConfig} tenantName='Jim' seoConfig={defaultSeo}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='favicon.png' />
        <link rel='dns-prefetch' href='//fonts.googleapis.com'></link>
        <link rel='dns-prefetch' href='//www.google.com'></link>
      </Head>
      <WhichThemeProvider>
        {/* TODO: Build coloring and passing a custom theme */}
        <ThemeProvider options={themeOptions}>
          <RecoilRoot>
            <Component {...pageProps} />
            <Footer links={[]} />
          </RecoilRoot>
        </ThemeProvider>
      </WhichThemeProvider>
    </ToolkitProvider>
  )
}
export default MyApp

const url = require('../assets/images/logo.png')
// console.log('url', url)
const headerConfig: HeaderProps = {
  logo: {
    url,
    alt: 'Jim Logo',
  },
  drawerConfig: {
    DrawerContent: <div>Hello</div>,
  },
}

const themeOptions: ThemeOptions = {
  components: {
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '10px',
        },
      },
    },
  },
}
