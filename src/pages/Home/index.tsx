import React from 'react'
import { Button } from 'antd'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'

const Home = () => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <Button type="primary">{formatMessage({ id: 'Home' })} Page</Button>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
