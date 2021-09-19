import React from 'react'
import { Button } from 'antd'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'

const About = () => {
  const { formatMessage } = useIntl()

  return (
    <div>
      <Button type="primary">{formatMessage({ id: 'About' })} Page</Button>
      <Link to="/">Home</Link>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default About
