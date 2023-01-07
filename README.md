# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To install dependencies

In the project directory, you can run:

### `npm install`

## To start the applicated

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Login

**Note: this is a temporary login, you can log in with any username/password. Later on you can integrate with api auth-service!**

After login you will be directed to home page (top myPage). This persists the login session in the brower by the value isAuthenticated stored in localStorage.

The second button on the login page will direct you to the Column page which does not require authentication.

### UI library

Material UI helps to build the website quicker and supports responsive design

You can learn more in the [Material UI documentation](https://mui.com/).

### Components

ProcessCircle component gives you the solution for archievement rate based on the completion percentage.You can also change the colour. Example: <ProcessCicle percentage={50} colour='red"/>

For graphs and charts, react-chartjs-2 is used.
You can learn more in the [react-chartjs-2 documentation](https://react-chartjs-2.js.org/).

The second button on the login page will direct you to the Column page which does not require authentication.

## CI/CD

The source code includes Jenkinsfile to support CI if you choose Jenkins as a CI tool. It also includes Dockerfile to help you build docker image of the app

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
