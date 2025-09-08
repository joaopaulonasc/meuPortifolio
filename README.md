# Meu Portfólio React

## 🚀 Sobre o Projeto

Este é um portfólio pessoal feito em React, criado para apresentar meus projetos, vídeos, apresentações e informações profissionais.
Aqui você pode encontrar minhas principais realizações como desenvolvedor, assistir palestras/gravações, visualizar documentos de projetos e entrar em contato comigo.

Acesse o site publicado:
🔗 [joaopaulonasc.github.io/meuPortifolio](https://joaopaulonasc.github.io/meuPortifolio/)

***

## 🌟 Funcionalidades

- Home com foto e descrição pessoal
- Navegação entre seções (Projetos, Vídeos, Apresentações)
- Cards para cada categoria, com links para projetos, vídeos embutidos e arquivos de apresentações/PDFs
- Layout moderno e responsivo para desktop e mobile
- Rodapé estilizado com copyright
- Links de redes sociais e botão para download de CV
- Navegação client-side usando **React Router (HashRouter)**
- Hospedagem fácil via GitHub Pages

***

## 🛠 Tecnologias Utilizadas

- [ReactJS](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [CSS Flexbox/Grid]
- Hospedado via [GitHub Pages](https://pages.github.com/)
- Edição no [VS Code](https://code.visualstudio.com/)

***

## 📷 Demonstração

[Screenshot principal do site aqui — você pode adicionar uma imagem/print relevante]

***

## 📦 Instalação e Execução Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [npm](https://www.npmjs.com/) ou [yarn]
- Git (opcional, mas recomendado)


### Passo a Passo

1. Clone este repositório:

```bash
git clone https://github.com/joaopaulonasc/meuPortifolio.git
cd meuPortifolio
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Rode o projeto em modo desenvolvimento:

```bash
npm start
# ou
yarn start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

***

## 🚀 Como Publicar no GitHub Pages

1. Instale o pacote de deploy:

```bash
npm install --save-dev gh-pages
```

2. Adicione à sua `package.json`:

```json
"homepage": "https://joaopaulonasc.github.io/meuPortifolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  // ...outros scripts
}
```

3. Publique:

```bash
npm run deploy
```


***

## 📝 Estrutura do Projeto

```
meuPortifolio/
│
├── public/
│    └── perfil.jpg
│    └── docs/
│         ├── apresentacao1.pdf
│         └── redescomputadores.pdf
│
├── src/
│    ├── components/
│    │    ├── Navbar.js/.css
│    │    ├── Footer.js/.css
│    │    ├── ProjetoCard.js/.css
│    │    ├── VideoCard.js/.css
│    │    └── DocumentoCard.js/.css
│    ├── pages/
│    │    ├── Home.js/.css
│    │    ├── Projetos.js/.css
│    │    ├── Videos.js/.css
│    │    └── Apresentacoes.js/.css
│    └── App.js
│    └── App.css
│
├── package.json
└── README.md
```


***

## 🤝 Contribuindo

Contribuições são muito bem-vindas!
Abra uma issue para sugerir melhorias ou reportar bugs, ou envie um pull request para adicionar novos recursos.

***

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

***

## 📬 Contato

- [LinkedIn](https://linkedin.com/in/joao-paulo-nascimento-sec)
- [Instagram](https://instagram.com/joaop_aulonasc)
- Email: [jpnascimento1997@hotmail.com]

***

> Obrigado por visitar meu portfólio! Se você gostou, deixe uma estrela ⭐ no repositório.

***

### Extras

- Consulte arquivos PDF ou apresentações em `/docs` via link absoluto como `/meuPortifolio/docs/nome-do-arquivo.pdf`.
- Atualize suas imagens e documentos na pasta `public` antes de novo deploy.
- Para dúvidas, consulte a [Documentação Oficial do React](https://react.dev/) ou [Github Pages Guide](https://pages.github.com/).

***

Se quiser, faço um README em inglês ou insiro mais exemplos e imagens do funcionamento do portfólio!
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div style="text-align: center">⁂</div>

[^1]: https://github.com/joaopaulonasc/meuPortifolio

[^2]: https://github.com/othneildrew/Best-README-Template

[^3]: https://gist.github.com/6b4c3f51a1cc7ec2fa6c3309205be0f7

[^4]: https://github.com/iuricode/readme-template

[^5]: https://dev.to/sumonta056/github-readme-template-for-personal-projects-3lka

[^6]: https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/

[^7]: https://github.com/alexandrerosseto/readme-portfolio-template

[^8]: https://www.youtube.com/watch?v=rCt9DatF63I

[^9]: https://github.com/abhisheknaiidu/awesome-github-profile-readme

[^10]: https://github.com/topics/portfolio-template


This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
