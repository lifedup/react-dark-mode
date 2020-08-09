# NEXT.JS TypeScript starter

This is a default **[NEXT.JS](https://nextjs.org/)** install with **[TypeScript](https://www.typescriptlang.org/)**, **[SCSS](https://sass-lang.com/)** (& [CSS Modules](https://github.com/css-modules/css-modules)), **[Prettier](https://prettier.io/)**, and **[ESLint](https://eslint.org)** ([follows Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)).

The only deviation from the style guide is that prop spreading is allowed. i.e. <Example {...props}>

## Base NEXT.JS directory

For cleanliness the base NEXT.JS directory is **src**. This is where **pages** folder now lives.

[See NEXT.JS docs](https://nextjs.org/docs/advanced-features/src-directory)

## Module path resolution

The base import path has been configured to the **src** directory. This is to provide more consistent and readable import paths.

Traditionally when importing code the path is relative to the file that is importing the code.

`import Example from '../../../components/example';`

However, this is now relative to the **src** file.

`import Example from 'components/example';`

> Set via tsconfig.json **baseUrl** & **moduleResolution** properties

[See TypeScript Docs](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

## SCSS import base path

Note SCSS file import paths are always relative to the root directory.

`@import 'src/themes/styles/example.module.scss';`

this note is here for clarity and is default behavior.

## SCSS Module support

Any SCSS file that uses *.module.scss naming convention is implied to be a css module.

> Default behavior in NEXT.JS 9.3 or higher.

## VS Code

Included basic configuration to assists with AirBnB compliant linting.  These setting will automatically fix most issues on save.

These settings can be added inside of VS Code's settings.json file.

> See .vscode > settings.json

## tsconfig.eslint.json

Eslint will throw an error because we include our typescript config inside .eslintrc.json > parserOptions > project;

> error: Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.

Adding this file allows for the linter to quickly parse the correct files while not changing the ts configurations

[See Github issue](https://github.com/typescript-eslint/typescript-eslint/issues/967#issuecomment-531817014)

## tsconfig

To allow SCSS modules and static paths to work correctly NEXT.JS types must be included inside the tsconfig.json file.

`{
    "compilerOptions": {
        "include": [
            "next-env.d.ts"
        ]
    }
}`

## Meta tags

title and viewport meta tags are set as an example.

> See src > pages > _app.tsx
