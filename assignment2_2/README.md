# Solution to Assignment 2.2

## Prerequisites

In order for the app to be usable, `db.json` needs to be exposed as a REST API.
To do so, `json-server` should be installed:

    yarn global add json-server

OR

    npm install -g json-server

## Development

Serve `db.json` on a port `3000` by running the following command:

    json-server --watch db.json

List users in a browser:

    open http://localhost:3000/users
