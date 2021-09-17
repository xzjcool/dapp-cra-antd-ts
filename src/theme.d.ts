// styled.d.ts
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    color: {
      primary: string
      white: string
      black: string
      warning: string
      error: string
      background: string
      text: {
        primary: string
        disabled: string
      }
    }

    size: {
      micro: number
      tiny: number
      small: number
      reduced: number
      normal: number
      increased: number
      large: number
      huge: number
      giant: number
    }

    radius: {
      reduced: number
      normal: number
      increased: number
    }

    shadow: {
      box: {
        normal: string
        increased: string
      }
    }

    zIndexes: {
      normal: number
      tooltips: number
      modals: number
      drawers: number
    }
  }
}
