

import React from "react"
import Reactdom from "react-dom/client"
import App from "./App";

import {BrowserRouter} from "react-router-dom"


Reactdom.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
       <BrowserRouter>
       <App/>
       </BrowserRouter>
       
   </React.StrictMode>
    
  
)