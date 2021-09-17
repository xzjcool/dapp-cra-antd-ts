import React, { useMemo } from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import { Home } from '../pages'
import { translations } from '../translations'
import { useLanguage } from '../hooks'

export const App = () => {
  const language = useLanguage()
  const messages = useMemo(() => ({ ...translations[language] }), [language])

  return (
    <IntlProvider locale={language} messages={messages}>
      <Switch>
        <Route exact path={`/`} component={Home} />
      </Switch>
    </IntlProvider>
  )
}
