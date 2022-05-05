## APS Unip - 5 Semestre (Chat-App)

Grupo e aplicação ainda sem nome no momento.
Docuentação ainda será adicionada.

* Repositório: https://github.com/BrunoAlmeidaKotesky/APS-5Semestre-ChatApp

### Tecnologias Utilizadas:

- Servidor:
    - C# 10, .NET Core 6.0
    - Visual Studio 2022
    - Técnologia de Websockets nativas do .Net
- Cliente:
    - Aplicação em [React](https://pt-br.reactjs.org/) `17.0.2` gerada atráves do [Vite](https://vitejs.dev/)
    - Utilizando [Typescript](https://www.typescriptlang.org/) `4.6.2`
    - [NodeJS](https://nodejs.org/pt-br/) na versão `14.15.5`

### Requisitos pra rodar:

- Servidor:
    - Necessário Visual Studio 2022
    - .NET SDK instalado.
    - Executar e compilar o programa pelo Visual Studio 2022 ou executando diretamente o executável em `Server\APS ChatApp\APS ChatApp\bin\Debug\net6.0\APS ChatApp.exe`
    - O executável inicia na porta `5001`
- Cliente:
    - NodeJS a partir da versão ^12.18.3
    - `npm` ou `yarn instalado`
    - `npm install` ou `yarn install` para criar os NODE_MODULES
    - `vite` instalado globalmente (npm i vite -g)
    - Na pasta `APS_5Semestre\Client\Aps - Client` rodar `npm run dev` ou `yarn dev`
    - Mudar se necessário a constante `WEBSOCKET_URL` em `Client\Aps - Client\src\constants.ts` se necessário, para conectar-se corretamente ao servidor.