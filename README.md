# CRUD with Node, Restify, Mongo, and Docker

This is an restful API with CRUD operations to control beneficiary data.

# How to run?

Clone this repository and run the follow command:

## Standalone mode (You must have Docker installed and a MongoDB container running on localhost)

``` docker run -d -p 27017:27017 mongo ```
``` npm run dev ```

## Containers mode (You must have Docker installed)

``` npm run deploy ```
