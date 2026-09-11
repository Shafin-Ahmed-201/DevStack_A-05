# Dev Stack
## Description
Dev Stack is a technology discovery and stack management platform that allows users to explore different development technologies and create their own technology stack.
## Technologies Used
React.js,TypeScript,Tailwind CSS,JavaScript,HTNL5,CSS3
## Features
1.Explore various development technologies.
2.Add and remove technologies fron a personal stack.
3.View technology details including category,level,description,badge and rating.
# React Answer
1.JSX is a syntex that lets us write HTML-like code inside JavaScript/TypeScript.It makes react components easier to write and understand.

2.Props are data passed from a parent component to child component.State is data managed inside a component that can change over time and cause the component to re-render.

3.useState is used to create and manage changing data in a react component.In this project,I used it to manage the selected technologies in the user's stack.

4.useEffect lets us run code after a component render.I used it to load data from the JSON file when the application starts.

5.A unique key helps react identify each item in a list.It allows react to efficiently update,add,or remove items when the list changes.

6.Conditional rendering means showing diffrent UI depending on a condition.I used it to show an empty-stack message when no technology is selected.

7.A parent sends data to a child using props.The child can send information back by calling a function passed through props from the parent.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
