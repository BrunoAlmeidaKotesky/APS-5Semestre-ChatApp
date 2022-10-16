## APS Unip - 5 Semestre (Chat-App)

* Repositório: https://github.com/BrunoAlmeidaKotesky/APS-5Semestre-ChatApp

### Tecnologias Utilizadas:

- Servidor:
    - Python 3.9
- Cliente:
    - Aplicação em [React](https://pt-br.reactjs.org/) `17.0.2` gerada atráves do [Vite](https://vitejs.dev/)
    - Utilizando [Typescript](https://www.typescriptlang.org/) `4.6.2`
    - [NodeJS](https://nodejs.org/pt-br/) na versão `14.15.5`

### Requisitos pra rodar:

- Servidor: Rodar script `server.py` 

- Cliente:
    - NodeJS a partir da versão ^14.18.0
    - `npm` ou `yarn instalado`
    - `npm install` ou `yarn install` dentro da pasta `Client/Aps - Client` para gerar os NODE_MODULES
    - `vite` instalado globalmente (`npm i vite -g`)
    - Na pasta `APS_5Semestre\Client\Aps - Client` rodar `npm run dev` ou `yarn dev`
    - Mudar se necessário a constante `WEBSOCKET_URL` em `Client\Aps - Client\src\constants.ts` se necessário, para conectar-se corretamente ao servidor.