import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app"
import "./styles/global.css"

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
