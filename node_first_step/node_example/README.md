# My first test with Nodejs

It' a simple code, where I do a simple code with node.

### about of kind of project

Is a simple project, this steps I do for crate it:

```bash
#  from bash WSL
mkdir node_first_step
cd node_first_step

# create package, I use yarn
yarn init
```

package.json
```json
{
  "name": "node_example",
  "version": "1.0.0",
  "description": "this project is for learn node, a simple project",
  "main": "index.js",
  "author": "ale.fuentes.ar",
  "license": "MIT",
  "dependencies": {
    "express": "4.17.1"
  }
}

```

Next step, I do install the modules to project
```bash

# install dependencies
yarn install

# for test, execute project
yarn start

```

Next, dependencies for use TS in this code

```bash
# dependencies TS how dev dependency
yarn add typescript --dev

# add express for work with routing or path
yarn add express@4.17.1

# add types express for codding ts with express
yarn add @types/express@4.17.1 --dev

```

I will create `tsconfig.json` configurate file too, for where TS can know how compiler, where get files and where save after finish compile

```json
{
        "compilerOptions": {
            "module": "CommonJS",
            "esModuleInterop": true,
            "target": "ES6",
            "moduleResolution": "node",
            "sourceMap": true,
            "outDir": "dist"
        },
        "lib": ["ES2015"]
}
```

Now, write a simple code in TS, for next compile ie

```js

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('has a ping...');
});

app.listen(port, () => {
    return console.log('Express is listening');
});

```

```bash
# compile all TS
npx tsc

# execute
node dist/app.js
```

### Verify is my code has good practice

For verify my code, I will install `eslint`

```bash
yar add eslint --dev

#testing
npx eslint --init
```

This command do create file `.eslintrc.js` where I set configuration for how eslint know work in our code.

```js
module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}

```

```bash
# testing my code
npx eslint . --est .ts
```
### Add script in package.json

Add section `script` for set differents form execute my code

```json

{
  "name": "node_example",
  "version": "1.0.0",
  "description": "this project is for learn node, a simple project",
  "main": "index.js",
  "author": "ale.fuentes.ar",
  "license": "MIT",
  "scripts": {
    "start": "tsc && node dist/app.js",
    "lint": "eslint . --ext .ts"
  },
  "devDependencies": {
    "@types/express": "4.17.1",
    "@typescript-eslint/eslint-plugin": "^5.55.0",
    "@typescript-eslint/parser": "^5.55.0",
    "eslint": "^8.36.0",
    "typescript": "^5.0.2"
  },
  "dependencies": {
    "express": "4.17.1"
  }
}


```

Now, I do use my scripts

```bash
# excuting project
yarn start

# execute eslint for verify my code
yarn lint

```