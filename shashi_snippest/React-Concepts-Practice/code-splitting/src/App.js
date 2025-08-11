import React, { lazy, Suspense } from "react";
import './App.css';
import {Routes, Route, Link, Outlet} from "react-router-dom";
// import Home from './components/Home';
// import Store from './components/Store';
// import {About} from './components/About';

const Home = lazy(() => import("./components/Home"));
const Store = lazy(() => import("./components/Store"));
const About = lazy(() => import("./components/About").then(module => {
  return {default: module.About}                                          // for named export
}));

function App() {
  return (
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav style={{display: "flex", gap: "1rem"}}>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}
/*

An <Outlet /> should be used in parent route elements to render their child elements. 
This allows nested UI to show up when child routes are rendered.
If the parent route matched exactly, it will render a child index route
or nothing if there is no index route.

*/

export default App;
