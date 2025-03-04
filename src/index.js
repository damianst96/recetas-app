import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Home';
import AltoGuiso from './components/recipes/AltoGuiso';
import RecipeDetail from './components/RecipeDetail';
import AllRecipes from './components/AllRecipes';
// import RecipeSearch from './components/RecipeSearch';
// import SearchResult from './components/SearchResult';
import MenuDetail from './components/MenuDetail';
import CountryDetail from './components/CountryDetail';
import TypeDetail from './components/TypeDetail';
import StyleDetail from './components/StyleDetail';
import SearchComponent from './components/SearchComponent';
import DifficultyDetail from './components/DifficultyDetail';
import Error404 from './components/404Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/alto-guiso",
    element: <AltoGuiso />
  },
  {
    path: "/guiso-moñito",
    element: <RecipeDetail id={0} />
  },
  {
    path: "/cheesecake",
    element: <RecipeDetail id={2} />
  },
  {
    path: "/budin-de-pan",
    element: <RecipeDetail id={3} />
  },
  {
    path: "/todas-las-recetas",
    element: <AllRecipes />
  },
  {
    path: "/dulces",
    element: <TypeDetail typeTitle="Recetas dulces" type="Dulce" />
  },
  {
    path: "/saladas",
    element: <TypeDetail typeTitle="Recetas saladas" type="Salado" />
  },
  {
    path: "/search",
    element: <SearchComponent />
  },
  {
    path: "/guisos",
    element: <StyleDetail styleTitle="Guisos" />
  },
  {
    path: "/argentina",
    element: <CountryDetail country="Argentina" />
  },
  {
    path: "/eeuu",
    element: <CountryDetail country="Estados Unidos" />
  },
  {
    path: "/uruguay",
    element: <CountryDetail country="Uruguay" />
  },
  {
    path: "/menues",
    element: <TypeDetail typeTitle="Menúes" type="Menú" />
  },
  {
    path: "/chicken-kitchen",
    element: <MenuDetail id={4} />
  },
  {
    path: "/china",
    element: <CountryDetail country="China" />
  },
  {
    path: "/españa",
    element: <CountryDetail country="España" />
  },
  {
    path: "/facil",
    element: <DifficultyDetail difTitle="Recetas fáciles" difficulty="Fácil" />
  },
  {
    path: "/medio",
    element: <DifficultyDetail difTitle="Recetas intermedias" difficulty="Media" />
  },
  {
    path: "/dificil",
    element: <DifficultyDetail difTitle="Recetas difíciles" difficulty="Difícil" />
  },
  {
    path: "/india",
    element: <CountryDetail country="India" />
  },
  {
    path: "/italia",
    element: <CountryDetail country="Italia" />
  },
  {
    path: "/japon",
    element: <CountryDetail country="Japón" />
  },
  {
    path: "/medio-oriente",
    element: <CountryDetail country="Medio Oriente" />
  },
  {
    path: "/mexico",
    element: <CountryDetail country="México" />
  },
  {
    path: "/venezuela",
    element: <CountryDetail country="Venezuela" />
  },
  {
    path: "/arroz",
    element: <StyleDetail styleTitle="Arroz" />
  },
  {
    path: "/carne",
    element: <StyleDetail styleTitle="Carne" />
  },
  {
    path: "/cocktails",
    element: <StyleDetail styleTitle="Cocktails" />
  },
  {
    path: "/pan-pizza",
    element: <StyleDetail styleTitle="Panes y Pizzas" />
  },
  {
    path: "/pasta",
    element: <StyleDetail styleTitle="Pasta" />
  },
  {
    path: "/pollo",
    element: <StyleDetail styleTitle="Pollo" />
  },
  {
    path: "/postres",
    element: <StyleDetail styleTitle="Postres" />
  },
  {
    path: "/sandwiches",
    element: <StyleDetail styleTitle="Sandwiches" />
  },
  {
    path: "/sopas",
    element: <StyleDetail styleTitle="Sopas" />
  },
  {
    path: "/tartas",
    element: <StyleDetail styleTitle="Tartas" />
  },
  {
    path: "/tortas",
    element: <StyleDetail styleTitle="Tortas" />
  },
  {
    path: "/veggie",
    element: <StyleDetail styleTitle="Veggie" />
  },
  {
    path: "/chivito",
    element: <RecipeDetail id={5} />
  },
  {
    path: "/asado",
    element: <RecipeDetail id={6} />
  },
  {
    path: "/pizza",
    element: <RecipeDetail id={7} />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();