# Product Manager App

Basic React App with CRUD functionality for a Product Manager App.

## Principal Technologies
* [React](https://reactjs.org/)
* [Vite](https://vite.net/)
* [TypeScript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [SCSS](https://sass-lang.com/)

## Configuring TailwindCSS with Vite and Yarn

* Install and init dependencies

```bash
yarn add -D tailwindcs postcss autoprefixer
```

```bash
yarn tailwindcss init
```

* Add the following to your `.tailwind.config.js` file:

```js
content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
],
```

* Create a `.postcss.config.js` file in the root directory of your project and add the following to it:

```js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};
```

* Finally, add the following to your `./src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

* And you ready to do this!

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
