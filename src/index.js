import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Home';
import AltoGuiso from './components/recipes/AltoGuiso';
import GuisoMoñito from './components/recipes/GuisoMoñito';
import Cheesecake from './components/recipes/Cheesecake';
import RecipeDetail from './components/RecipeDetail';

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
    element: <GuisoMoñito />
  },
  {
    path: "/cheesecake",
    element: <Cheesecake />
  },
  {
    path: "/budin-de-pan",
    element: <RecipeDetail
		api='/api/alto-guiso'
		image='img/new-york-cheesecake.jpg'
	/>
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
