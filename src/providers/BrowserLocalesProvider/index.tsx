import React, { createContext } from 'react'

export const BrowserLocalesContext = createContext(['en'])

export const BrowserLocalesProvider = (props: { children: React.ReactNode }) => {
  const browserLocales = [...window.navigator.languages]

  return <BrowserLocalesContext.Provider value={browserLocales}>{props.children}</BrowserLocalesContext.Provider>
}
