import '../styles/app.css'
import React, { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ManagedUIContext } from '@v2matjari/ui'
import I18nProvider from 'next-translate/I18nProvider'
import useTranslation from 'next-translate/useTranslation'
import '../styles/app.css'

// Import English common.json
import commonEN from '../locales/en/common.json'

function CustomApp({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation()

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head>
        <title>web seller</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <I18nProvider lang={lang} namespaces={{ commonEN }}>
        <ManagedUIContext>
          <Component {...pageProps} />
        </ManagedUIContext>
      </I18nProvider>
    </>
  )
}

export default CustomApp
