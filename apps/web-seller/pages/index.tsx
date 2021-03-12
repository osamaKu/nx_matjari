import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { WebLayoutsWeb as Layout } from '@v2matjari/web/layouts/web'
import i18nConfig from '../i18n.js'
import Link from 'next/link'
export function Index() {
  const { lang, t } = useTranslation()
  const { locales } = i18nConfig

  return (
    <Layout>
      {locales.map((lng) => {
        if (lang === lng) return null
        return (
          <Link href={'about'} locale={lng} key={lng}>
            <a>{lng}</a>
          </Link>
        )
      })}
    </Layout>
  )
}

export default Index
