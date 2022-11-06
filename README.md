# Rocketseat - Trilha Ignite

Nome: Projeto 02.  
Descrição: Aplicação de timer com opção de consultar histórico.

## Temas Abordados:

### Criação do Projeto ReactJS Utilizando Vite

[Guia](https://vitejs.dev/guide/)

```
npm create vite@latest
```

### Styled Components

[Documentação](https://styled-components.com/docs)  
[NPM](https://www.npmjs.com/package/styled-components)

```
npm install styled-components
```

a biblioteca styled-components tem suporte completo para o uso de temas, através
da propriedade `<ThemeProviders>`

```
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
```
