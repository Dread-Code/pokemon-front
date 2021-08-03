<img src="https://user-images.githubusercontent.com/60331479/128096552-694306be-5aa1-4c23-b23a-3236ee023062.png"/>

# Getting Started with Pokemon 57

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3009](http://localhost:3009) to view it in the browser.

## Tecnologies
* React
* Sass
* GrpahQL
* Apollo Client
* Semantic UI
* Formik and Yup
* React router DOM
* Webpack

## Best practices helpers
* Eslint
* Prettier

## Login Form
<img src="https://user-images.githubusercontent.com/60331479/128098158-95ebfb90-7725-4bf7-800c-c99872a61bd0.png"/>

## Register
<img src="https://user-images.githubusercontent.com/60331479/128098221-06801cf7-b889-48c1-b465-3ed54afad061.png" />

## Project Structure

```
.
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── png
│   │       ├── avatar.png
│   │       └── pokemon-57-logo.png
│   ├── components
│   │   ├── Auth
│   │   │   ├── LoginForm
│   │   │   │   ├── index.js
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── LoginForm.scss
│   │   │   └── RegisterForm
│   │   │       ├── index.js
│   │   │       ├── RegisterForm.jsx
│   │   │       └── RegisterForm.scss
│   │   ├── Header
│   │   │   ├── Header.jsx
│   │   │   ├── Header.scss
│   │   │   ├── index.js
│   │   │   ├── RightHeader
│   │   │   │   ├── index.js
│   │   │   │   ├── RightHeader.jsx
│   │   │   │   └── RightHeader.scss
│   │   │   └── Search
│   │   │       ├── index.js
│   │   │       ├── ResultSearch
│   │   │       │   ├── index.js
│   │   │       │   └── ResultSearch.jsx
│   │   │       ├── Search.jsx
│   │   │       └── Search.scss
│   │   └── Modal
│   │       ├── ModalBasic
│   │       │   ├── index.js
│   │       │   ├── ModalBasic.jsx
│   │       │   └── ModalBasic.scss
│   │       └── ModalUpload
│   │           ├── index.js
│   │           ├── ModalUpload.jsx
│   │           └── ModalUpload.scss
│   ├── config
│   │   └── apollo.js
│   ├── constants
│   │   └── token
│   │       └── token.js
│   ├── context
│   │   ├── AuthContext.jsx
│   │   └── index.js
│   ├── gql
│   │   ├── pokemon
│   │   │   ├── pokemonRegister
│   │   │   │   ├── index.js
│   │   │   │   └── pokemonRegister.js
│   │   │   └── searchPokemon
│   │   │       ├── index.js
│   │   │       └── searchPokemon.js
│   │   └── User
│   │       ├── getUser
│   │       │   ├── getUser.jsx
│   │       │   └── index.js
│   │       ├── login
│   │       │   ├── index.js
│   │       │   └── login.js
│   │       └── userRegister
│   │           ├── index.js
│   │           └── userRegister.js
│   ├── hooks
│   │   └── useAuth
│   │       ├── index.js
│   │       └── useAuth.jsx
│   ├── index.js
│   ├── index.scss
│   ├── layouts
│   │   └── LayoutBasic
│   │       ├── index.js
│   │       └── LayoutBasic.jsx
│   ├── pages
│   │   ├── Auth
│   │   │   ├── Auth.jsx
│   │   │   ├── Auth.scss
│   │   │   └── index.js
│   │   └── Home
│   │       ├── Home.jsx
│   │       ├── Home.scss
│   │       └── index.js
│   ├── routes
│   │   ├── RouterNavigation
│   │   │   ├── index.js
│   │   │   └── RouterNavigation.jsx
│   │   └── routes.js
│   ├── scss
│   │   ├── colors.scss
│   │   └── index.scss
│   └── utils
│       └── token
│           └── token.js
├── webpack.config.dev.js
└── webpack.config.js

```
