# Use template office with nodejs

I descovery this package `docx-templates`, and I would test it, because I need create a project where node read datas and create a several documents with this dinamics datas.

let's go.

### add dependencies for use TS

> **Note**: add .gitignore for dont upload sharing file of node_modules

>   some dependencies for work with express
>```bash
>yarn add express@4.17.1
># ex. for create project with hbs view
>express node_make_pdf --vew=hbs
># add types for express
>yarn add @types/express@4.17.1 --dev
>```
>

```bash
# TS dependencies
yarn add typescript --dev
```
Create file `tsconfig.json`

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

```bash
# and eslint for code clean
yarn add eslint --dev
npx eslint --init
yarn add @typescript-eslint/eslint-plugin --dev
yarn add @typescript-eslint/parser --dev
```
```bash
# Example fo ruse
npx eslint . --ext .ts

npx tsc
node dist/app.js

```

## Prepare for use docx-template

```bash
yarn add docx-templates
```