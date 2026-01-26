import React from "react"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"

import store from "./store"
import App from "./App"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
