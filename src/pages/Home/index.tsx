import { Button } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'

export const Home = () => {
  const { formatMessage, locale } = useIntl()
  console.log(locale)
  return (
    <div>
      <Button type="primary">{formatMessage({ id: 'Home' })} Page</Button>
    </div>
  )
}
