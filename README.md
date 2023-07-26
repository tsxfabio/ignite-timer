# Timer

Projeto de número 02 da trilha Ignite da Rocketseat. 
A aplicação tem como objetivo cumprir a função de um timer/pomodoro, entretanto é possível nomear as tarefas e ver um resumo das que já foram executadas, interrompidas e em execução. Como diferencial, a aplicação apresenta o timer em tempo real no título da aba do navegador, podendo assim navegar em outras páginas enquanto o timer é executado.  

## Solução  

### Como Rodar a Aplicação:  
- Possuir o NodeJS instalado
- Instalar as dependências utilizando `npm install`
- Executar a aplicação através do comento `npm run dev`  

### Especificações Técnicas:
- Tecnologias Utilizadas:
  - [Vite](https://vitejs.dev/)
  - [ReactJS](https://react.dev/)
  - [Styled Components](https://styled-components.com/)
  - [React Router e React Router Dom](https://v5.reactrouter.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)

### To-Do:  

Páginas:
- [x] Home
- [x] Historic

Componentes:
- [x] Header
- [x] Countdown
- [x] NewCycleForm

 ### Requisitos Funcionais:
 - [x] Todas as páginas devem possuir o menu com a logo da aplicação e os botões que direcionam para a home ou histórico.
 - [x] A home deve conter um input onde o usuário deverá preencher o nome da tarefa e o tempo de duração.
 - [x] A home deve possuir um contador com o tempo de duração da tarefa.
 - [x] A home deve possuir um botão que deverá estar desativado quando os inputs não estiverem preenchidos, ativado e nomeado como 'começar' quando os inputs estiverem preenchidos corretamente e ativado e nomeado como 'interromper' quando o timer estiver em execução.
 - [x] Uma tarefa nunca poderá ser pausada, apenas interrompida antes do tempo.
 - [x] A pagina de histórico deve possuir uma tabela contendo 'Nome', 'Duração', 'Hora de Início' e 'Status'.
 - [x] Os status das tarefas devem ser 'Finalizado' ou 'Interrompido' ou 'Em Execução'.
 - [x] A aba do navegador deverá apresentar o timer em tempo real, mesmo quando o usuário estiver navegando em outra aba ou com o navegador minimizado.

### Evidências:
