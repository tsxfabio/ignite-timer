# Rocketseat - Trilha Ignite

Nome: Projeto 02.  
Descrição: Aplicação de timer com opção de consultar histórico.

## Biblioetcas e Ferramentas e Métodos utilizados:

- [Vite](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router e React Router Dom](https://v5.reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Hook Form Resolvers](https://react-hook-form.com/api/useform/#resolver)
- [Zod](https://zod.dev/)
- [Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [Contexts]()

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

### Hooks

#### useState:

#### useEffect:

#### useContext:

#### useReducer:
