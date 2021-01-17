import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"


export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.dark.backgroundColor};

    @media(perfers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor}
    }
  }
`