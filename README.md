# Feather Takehome

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

---

### Timeline

Please send the completed project within 3 days. Let us know if you require more time.

### Version Control

Use git

### Language

JavaScript or TypeScript

### Objective

Build an interactive directory of github users, as well as an editable profile that demonstrates your ability to build a usable UI.

Note: We're not concerned with pixel-perfect, or design best practices – but it should be intuitive enough to use without instructions.

### Instructions

Using any version of [Github's API](https://developer.github.com/) make authenticated requests to fetch users and display them in a directory. The list of users could be the authenticated user's followers or following or something else entirely. The important part is that the authenticated user is included in the list of users.
Clicking on any user displays a modal with further user information.
When viewing the user that is logged in, the bio should be editable, and should update upon save.

##### Directory Requirements

- Display a list of usernames and their avatars
- A way to open a view for each user in the directory

##### User View Requirements

- Ability to view the selected user's username
- Ability to view the selected user's Avatar
- Ability to view the selected user's Bio
- Ability to edit Bio for the currently authenticated user
- Ability to save any changes
- Ability to close the user view

##### Constraints and Considerations

- Do not use Github API assistance such as [github-api](https://github.com/github-tools/github).
- Use libraries and modules you are familiar with freely, except for the above constraint.
- Leverage CSS and show off what you are capable of, animations and transitions are appreciated.
- Consider performance and scalability when interacting with GitHub and storing data.
- Create git commits as you proceed in development and reach stable checkpoints.
- Only add bonus' after you've met the requirements.

##### Bonus (Optional)

- Routing for pagination and modal
- Testing
- Profile
  - Repository count
  - Stars count
  - Following count
  - Gist count
  - Location
  - Email
  - Blog
  - Company
- GitHub's GraphQL API v4

### Submission

Feel free to let us know if you have any questions.
Include instructions in your readme or email that explain how to use and setup the project.

Zip the project folder including all assets used and the git repository or send us a link of the repository.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
