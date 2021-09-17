import React from 'react'
import ReactDOM from 'react-dom'
import { initialize, set } from 'react-ga'
import { isMobile } from 'react-device-detect'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app'
import { BrowserLocalesProvider } from './providers'
import './index.less'

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  initialize(GOOGLE_ANALYTICS_ID, {
    gaOptions: {
      storage: 'none',
      storeGac: false,
    },
  })
  set({
    anonymizeIp: true,
    customBrowserType: !isMobile
      ? 'desktop'
      : 'web3' in window || 'ethereum' in window
      ? 'mobileWeb3'
      : 'mobileRegular',
  })
} else {
  initialize('test', { testMode: true, debug: true })
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserLocalesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BrowserLocalesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
