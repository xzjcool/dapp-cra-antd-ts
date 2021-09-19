import React, { useMemo } from 'react'
import { IntlProvider } from 'react-intl'

import { translations } from '../translations'
import { useLanguage } from '../hooks'
import { Routes } from './routes'

export const App = () => {
  const language = useLanguage()
  const messages = useMemo(() => ({ ...translations[language] }), [language])

  return (
    <IntlProvider locale={language} messages={messages}>
      <Routes />
    </IntlProvider>
  )
}
