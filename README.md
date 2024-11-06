## Avaí Stats

Este projeto é uma aplicação web que recupera estatísticas em tempo real de partidas do Avaí Futebol Clube utilizando a API do `Sofascore`. Ele foi construído com React no frontend e Node.js no backend.

### O Aplicativo está rodando para visualização no link: [Avai-stats](https://herikr0drigues.github.io/avai-stats/)


## 🚀 Funcionalidades

- Exibe estatísticas atualizadas da temporada do Avaí Futebol Clube na Série B de 2024.
- Conecta-se à API do Sofascore para recuperar dados detalhados das partidas.
- Permite visualizar informações como tabela da Série B de 2024, estatisticas do time e jogadores.
  
## ⚙️ Tecnologias

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: Sofascore API
- **Hospedagem**: GitHub Pages (Frontend), Backend hospedado no Railway.

## 🛠️ Como rodar o projeto localmente

### Requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/HerikR0drigues/avai-stats
    ```

2. Acesse o /frontend e instale as dependências e inicie o servidor
    ```bash
    npm install
    npm run dev
    ```

3. O backend está rodando ao vivo e não precisa de incicialização, mas caso queria rodar basta seguir os passos abaixo:

- Acessar o backend e instale as dependências e inicie o servidor:
    ```bash
    npm install
    npm start
    ```
- No arquivo `server.js` tem as configurações, por padrão está a porta `5000`.

4. Acessar frontend/src/components e modificar a URL dentro de useEffect dos arquivos:

   - **AvaiPlayers.jsx**
   - **StatsTemporada.jsx**
   - **TabelaBrasileirao.jsx**

5. Exemplo para ajuste (IP e PORTA ficam a seu critério nas configurações do server.js)
    - De: "https://avai-stats-production.up.railway.app/api/players" para "http://localhost:5000/api/players"
    - De: "https://avai-stats-production.up.railway.app/api/statistics" para "http://localhost:5000/api/statistics"
    - De: "https://avai-stats-production.up.railway.app/api/standings" para "http://localhost:5000/api/standings"

## 🧠 Lógica do Projeto

O projeto é dividido em duas partes principais:

### Backend

1. **API do Sofascore**:
    O backend realiza uma solicitação para a API pública do Sofascore, que fornece informações detalhadas sobre partidas de futebol, incluindo dados do Avaí Futebol Clube. A API retorna dados como:
   - Resultados de jogos;
   - Estatísticas individuais de jogadores;
   - Desempenho geral do time.

2. **Processamento de Dados**:
   Após a obtenção dos dados da API, o backend processa essas informações. Ele formata os dados para um formato mais amigável para o frontend e realiza qualquer transformação necessária. Esses dados são então enviados para o frontend em formato JSON.

3. **Servidor Node.js**:
   O servidor backend foi construído utilizando Node.js e Express. Ele escuta as requisições feitas pelo frontend e responde com as estatísticas do Avaí em tempo real. O backend também gerencia o roteamento das requisições e a comunicação com a API externa.

### Frontend

1. **React**:
   O frontend foi desenvolvido utilizando React e Vite. Ele consome as APIs fornecidas pelo backend e exibe as estatísticas em tempo real de maneira dinâmica. A interface foi projetada para ser simples e fácil de navegar, destacando as informações mais importantes sobre as partidas e jogadores.

2. **Tailwind CSS**:
   A estilização foi implementada utilizando o Tailwind CSS, um framework utilitário que facilita a criação de layouts responsivos e visualmente atraentes. O uso do Tailwind permite uma personalização rápida e eficiente da interface, mantendo o código CSS enxuto e organizado.

3. **Integração com o Backend**:
   O frontend se comunica com o backend para obter as informações das partidas e jogadores. Ele utiliza requisições HTTP (via Axios) para buscar os dados e exibi-los ao usuário, atualizando a interface sempre que novas informações são recebidas.
