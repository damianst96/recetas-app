import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Home';
import AltoGuiso from './components/recipes/AltoGuiso';
// import GuisoMoñito from './components/recipes/GuisoMoñito';
import RecipeDetail from './components/RecipeDetail';
// import Cheesecake from './components/recipes/Cheesecake';
import AllRecipes from './components/AllRecipes';
import SweetRecipes from './components/SweetRecipes';
import SaltyRecipes from './components/SaltyRecipes';
import RecipeSearch from './components/RecipeSearch';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/alto-guiso",
    element: <AltoGuiso />
  },
  {
    path: "/guiso-moñito",
    element: <RecipeDetail
      id={0} 
    />
  },
  {
    path: "/cheesecake",
    element: <RecipeDetail
      id={2}
    />
  },
  {
    path: "/budin-de-pan",
    element: <RecipeDetail
      id={3}
    />
  },
  {
    path: "/todas-las-recetas",
    element: <AllRecipes />
  },
  {
    path: "/dulces",
    element: <SweetRecipes />
  },
  {
    path: "/saladas",
    element: <SaltyRecipes />
  },
  {
    path: "/search",
    element: <RecipeSearch />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
