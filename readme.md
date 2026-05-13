# api-front-angular-15

<p align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" width="120"/>
</p>

Este é o projeto api-front-angular-15, uma interface web desenvolvida em Angular 15 com Bootstrap 5. Para fins de desenvolvimento e testes rápidos, o back-end foi abstraído utilizando o JSON Server para simular uma API REST completa a partir de um arquivo local.

🛠️ Tecnologias Utilizadas
Front-End: Angular ^15.2.0

Estilização: Bootstrap ^5.3.8

Mock API / Back-End: JSON Server

Linguagem: TypeScript ~4.9.4

📦 Pré-requisitos
Antes de começar, você precisará ter instalado:

Node.js (Versão recomendada para Angular 15: Node 18.x ou 16.x)

Angular CLI instalado globalmente (opcional):
```bash
npm install -g @angular/cli@15.2.11
```

⚙️ 1. Instalação e Configuração do JSON Server
O projeto utiliza o json-server para ler o arquivo db.json localizado na raiz do projeto e transformá-lo em uma API REST.

Como instalar:
Para garantir que o comando funcione globalmente em seu terminal:
```bash
npm install -g json-server
```

🚀 2. Como Executar o Projeto Localmente
É necessário rodar a API Mockada e o Front-End simultaneamente em dois terminais diferentes.

Passo Inicial: Instalar Dependências
```bash
git clone https://github.com/denisbenjamim/api-front-angular-15.git
cd api-front-angular-15
npm install
```

Terminal 1: Iniciar o JSON Server (Back-End)
Na raiz do projeto (onde está o arquivo db.json), execute:
```bash
json-server --watch db.json --port 3000
```
Nota: Se não instalou globalmente, use npx json-server --watch db.json --port 3000

Terminal 2: Iniciar o Angular (Front-End)
Em uma nova aba do terminal, dentro da pasta do projeto, suba a aplicação:
```bash
ng serve
```
Ou use o atalho rápido:
```bash
ng s
```

🔗 3. Acessar os Links Locais
Aplicação (Angular): http://localhost:4200/

API Mockada (Endpoints): http://localhost:3000/

👤 Autor
Desenvolvido por Denis Benjamim.

GitHub: @denisbenjamim