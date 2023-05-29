import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "../Components/Navbar/Menu";
import ContextProvider from "../Context";
import "./App.css"

const AppRoutes = ()=>{
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    }
  ])
  return routes
}


function App() {


  return (
    <ContextProvider>
    <BrowserRouter>
      <Navbar />
      <AppRoutes/>
    </BrowserRouter>
    </ContextProvider>
  )
}

export default App
