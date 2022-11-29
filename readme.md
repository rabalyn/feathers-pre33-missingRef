# feathers-pre33-missingRef

> Minimal reproduction example for issues on referenced props in feathers-schema

## Issue with referenced properties in service query params

### standard feathers.pre33 setup:

```sh
feathers g app
? Do you want to use JavaScript or TypeScript? TypeScript
? What is the name of your application? feathers-pre33-missingRef
? Write a short description Minimal reproduction example for issues on referenced props in feathers-schema
? Which HTTP framework do you want to use? KoaJS (recommended)
? What APIs do you want to offer? HTTP (REST), Real-time
? Which package manager are you using? npm
? What is your preferred schema (model) definition format? TypeBox (recommended)
? Which database are you connecting to? Other databases can be added at any time SQLite
? Enter your database connection string feathers-pre33-missingRef.sqlite
? Which authentication methods do you want to use? Other methods and providers can be added at any time. Email + Password
```

### Generate service that will be referenced

```sh
feathers g service
? What is the name of your service? address
? Which path should the service be registered on? address
? Does this service require authentication? Yes
? What kind of service is it? SQL
? Which schema definition format do you want to use? TypeBox
```

### Edit user-migration and user-service

- add `addressId` to users-table
- alter useres-schema
  - add `addressId`
  - add `address`
- add resolver property `address`
- add `address` to `userQueryProperties`
- starting the app via `npm run dev` is failing with

```sh
npm run dev

> feathers-pre33-missingRef@0.0.0 dev
> nodemon -x ts-node src/index.ts

[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`

/feathers-pre33-missingRef/node_modules/ajv/lib/vocabularies/core/ref.ts:19
    if (schOrEnv === undefined) throw new MissingRefError(it.opts.uriResolver, baseId, $ref)
                                      ^
MissingRefError: can't resolve reference Address from id #
    at Object.code (/feathers-pre33-missingRef/node_modules/ajv/lib/vocabularies/core/ref.ts:19:39)
    at keywordCode (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:523:9)
    at /feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:228:21
    at CodeGen.code (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/codegen/index.ts:525:33)
    at CodeGen.block (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/codegen/index.ts:680:20)
    at schemaKeywords (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:228:9)
    at typeAndKeywords (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:161:3)
    at subSchemaObjCode (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:147:3)
    at subschemaCode (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:124:7)
    at KeywordCxt.subschema (/feathers-pre33-missingRef/node_modules/ajv/lib/compile/validate/index.ts:491:5) {
  missingRef: 'Address',
  missingSchema: 'Address'
}
[nodemon] app crashed - waiting for file changes before starting...
```

## About

This project uses [Feathers](http://feathersjs.com). An open source framework for building APIs and real-time applications.

## Getting Started

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-pre33-missingRef
    npm install
    ```

3. Start your app

    ```
    npm run compile # Compile TypeScript source
    npm run migrate # Run migrations to set up the database
    npm start
    ```

## Testing

Run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

This app comes with a powerful command line interface for Feathers. Here are a few things it can do:

```
$ npx feathers help                           # Show all commands
$ npx feathers generate service               # Generate a new Service
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
