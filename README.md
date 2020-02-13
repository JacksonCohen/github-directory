# GitHub Directory

This is an interactive and responsive GitHub directory built with the GitHub API that allows users to login via GitHub and populate the directory via authenticated requests for criteria such as followers and users the authenticated user is following. The user can also make updates to their own profile fields.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [styled components](https://www.styled-components.com/)

## Usage

In the project directory:

## `npm install`

Installs necessary libraries for app functionality.

## `npm start`

Runs the app in development mode, can be viewed at http://localhost:3000 in the browser. The page will automatically reload and update if changes to the code are made.

## `npm run build`

Utilizes Webpack to build the app for production in the `build` folder. The bundle will be minified and optimized for best performance.

In the `server` directory:

## `npm install`

Installs necessary libraries for server functionality.

## `npm run start-dev`

Runs the server needed to communicate with the GitHub API in order to correctly set headers and deal with CORS.
