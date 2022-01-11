

> ### CongoWork API.

----------

# Getting started

## Installation
    
Install dependencies
    
    yarn

----------

## Database

This projct use #nestJs Framwork by using [MikroORM](https://mikro-orm.io/) with a MySQL database.

Create database schema:

    npx mikro-orm schema:create --run

Now you can start the application witt `yarn start`

----------

## NPM scripts

- `yarn start` - Start application
- `yarn start:watch` - Start application in watch mode
- `yarn test` - run Jest test runner 
- `yarn start:prod` - Build application

----------

## Start application

- `yarn start`
- View automatically generated swagger api docs by browsing to `http://localhost:3000/api`

----------

# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token.
