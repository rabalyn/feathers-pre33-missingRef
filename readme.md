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
