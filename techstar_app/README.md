# Survey Filling App

![This is a alt text.](./src/img/Survey.jpg "This is a sample image.")

## Description

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/survey](http://localhost:3000/survey) to view it in the browser.
to display the surveys for mentors or companies, you must put the mentor id or the
company id after "survey/" in the URL.

The page will reload if you update the components.\
You will also see any lint errors in the console.

The mentors and the companies will access through an URL that was sent to their e-mail.

### Installing Packets
`npm install axios`
`npm install react-card-flip`
`npm install antd`
`npm install react-custom-scrollbars`
`npm install react-router-dom`

These are all the packets needed to run and build the app.

### Functional Components

Most of this aplication was built as a SPA(single page application) made of functional components
with useState and useEffect hooks.

![This is a alt text.](./src/img/Parenthood.JPG "This is a sample image.")

### Name.jsx

This component will use Survey.jsx, HeaderMent.jsx, HeaderComp.jsx and Data.jsx to display the survey cards in a grid fashion using the <Row> and <Col> from the 'antd' package.
from Data.jsx will be fetched the number of elements to be displayed according to who the client is(company or mentor) and it will display only the meetings
that already happened.
HeaderMent.jsx or HeaderComp.jsx are the headers that contain the progress bar and the '?' button

![This is a alt text.](./src/img/ProgressBar.JPG "This is a sample image.")

There is a function that determines which of these headers are going to be displayed.
The '?' button will display the "survey instructions"

![This is a alt text.](./src/img/Survey_Tutorial.JPG "This is a sample image.")

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
