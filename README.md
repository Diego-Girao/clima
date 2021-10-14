## **Desafio - React - MESHA Technology**

## Objetivo 🔍
-----
- Consumo de API externas, à partir de documentação
- Salvar as informações somente no storage do navegador (Não utilizar backend e/ou banco de dados)
- Estrutura de projeto (Componentes, etc)
- O projeto deve ser feito em REACT

## Descrição do projeto 📝
-----
Dada uma localização (Cidade, latitude, longitude, etc) a aplicação deverá buscar na API de tempo (Weather API ou afins) a temperatura relativa da localização e assim que retornada a resposta deverá ser solicitada para à API de músicas (Shazam API ou afins) a lista de músicas recomendadas para o clima atual.

- Caso a temperatura seja maior que 32 graus, deverá retornar Rock;
- Caso a temperatura seja menor que 32 e maior 24, deverá retornar Pop;
- Caso a temperatura seja menor que 24 e maior que 16, devera retornar Classica;
- E caso a temperatura seja menor que 16, deverá retornar Lofi.

Assim que retornado à lista de música, caso seja do agrado da pessoa, poderá ser salva no storage do navegador com a data de busca, a lista de músicas, à temperatura, à cidade e a categoria das músicas.

Deverá haver uma página mostrando a listagem das músicas por data salva no storage.

As listas podem ser deletadas.

## APIS Utilizadas 📂
-----
- [https://openweathermap.org/current](https://openweathermap.org/current) - ✅ Clima ⛅
- [https://rapidapi.com/apidojo/api/shazam](https://rapidapi.com/apidojo/api/shazam) -  ✅ Músicas 🎶

## Techs Utilizadas 💻
-----
- React ✅
- Axios ✅




==================================================

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
