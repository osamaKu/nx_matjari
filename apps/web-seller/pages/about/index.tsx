import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { WebLayoutsWeb as Layout } from '@v2matjari/web/layouts/web'
import i18nConfig from '../../i18n.js'
import Link from 'next/link'
export function About() {
  const { lang, t } = useTranslation()
  const { locales } = i18nConfig
  const aboutPage = t('about:about_page')

  return (
    <Layout>
      {locales.map((lng) => {
        if (lang === lng) return null
        return (
          <Link href={'/'} locale={lng} key={lng}>
            <a>{lng}</a>
          </Link>
        )
      })}
      <div>{t('common:hello')}</div>
      <div>{aboutPage}</div>
    </Layout>
  )
}

export default About
