import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Accordion from './components/Accordion/Accordion.jsx'
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="/"
        element={<Home />}
      ></Route>
      <Route
        path="/accordion"
        element={<Accordion />}
      ></Route>
    </Route>,
  ),
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
