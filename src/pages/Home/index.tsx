import React from 'react'
import { Button } from 'antd'
import { useIntl } from 'react-intl'

export const Home = () => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <Button type="primary">{formatMessage({ id: 'Home' })} Page</Button>
    </div>
  )
}
