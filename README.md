
# React Router

In this Project i made the simple website which show the use of React Router, in this i explain the `Outlet` feature `createBrowserRouter` and many more

# Description

The Outlet component helps in composing and rendering nested routes in a more declarative and organized way.

Using the Outlet component allows you to create a nested route structure in a clean and organized manner, making it easier to manage complex route hierarchies in your React application.

```javascript
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Layout;
```
![Screenshot (42)](https://github.com/Aadiii01/ReactRouter/assets/134622355/44915038-b8b8-4de1-93f1-0967da601e0a)

## Fetching Github API

## API Reference

#### Get all items

```http
  GET https://api.github.com/users/Aadiii01
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `followers` `avatar_url` | `string` | **Required**. Your API key |


In this Screenshot the followers and image are shown in this image are directly come from github API

![Screenshot (44)](https://github.com/Aadiii01/ReactRouter/assets/134622355/80b0cfde-d146-4018-8369-91e0cb84f30d)

## Loader 

If you want to fetch data from API or Database so you can so you directly call the API from loaders 

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='User/:userid' element={<User />} />
      <Route loader={githubinfoloader} path='github' element={<Github />} />
    </Route>
  )
)
```

#### In this Screenshot **User** are not show in the header because in this we capture the parameters from URL

![Screenshot (45)](https://github.com/Aadiii01/ReactRouter/assets/134622355/5a03b693-f9ea-46fa-a42c-29819c3840a0)
## To Run this Code

Install these command on terminal

```bash
  npm create vite@latest
```
```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
```
For Install the React Router

```bash
  npm install react-router-dom
```
To run Project

```bash
  npm run dev
```



