import React from 'react'
import { useIntl } from 'react-intl'

export const Home = () => {
  const { formatMessage, locale } = useIntl()
  console.log(locale)
  return <div>{formatMessage({ id: 'Home' })} Page</div>
}
