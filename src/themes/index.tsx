import React, { useMemo } from 'react'
import { ThemeProvider as Provider, DefaultTheme, useTheme } from 'styled-components'

export type Props = {
  children?: React.ReactNode
}

export const defaultTheme = {
  borderRadius: '4px',
  color: {
    primary: '#CA3211',
    white: '#fff',
    black: '#000',
    warning: '#f8d12f',
    error: '#CC0033',
    background: '#fff',
    text: {
      primary: '#333',
      disabled: '#999',
    },
  },
  size: {
    micro: 4,
    tiny: 8,
    small: 12,
    reduced: 14,
    normal: 16,
    increased: 22,
    large: 32,
    huge: 40,
    giant: 80,
  },

  radius: {
    reduced: 4,
    normal: 8,
    increased: 16,
  },

  shadow: {
    box: {
      normal: '0px 0px 16px rgba(51, 51, 51, 0.04)',
      increased: '0px 0px 16px rgba(51, 51, 51, 0.24)',
    },
  },

  zIndexes: {
    normal: 0,
    tooltips: 600,
    modals: 500,
    drawers: 400,
  },
}

export const ThemeProvider = ({ children }: Props) => {
  const parentTheme = useTheme() as DefaultTheme
  const theme = useMemo(
    () => ({
      ...parentTheme,
      ...defaultTheme,
    }),
    [parentTheme],
  )
  return <Provider theme={theme}>{children}</Provider>
}
